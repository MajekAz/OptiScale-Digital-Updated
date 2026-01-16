<?php
/**
 * OptiScale Digital - Unified Form Processor
 * Handles: Project Briefs, Strategy Call Bookings, and General Inquiries.
 */

// Allow cross-origin requests from the frontend domain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Only POST requests are allowed"]);
    exit();
}

// Get the raw POST data
$content = file_get_contents("php://input");
$decoded = json_decode($content, true);

if (!is_array($decoded)) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
    exit();
}

// Configuration
$to = "info@optiscaledigital.co.uk";
$from = "noreply@optiscaledigital.co.uk";
$formType = isset($decoded['formType']) ? $decoded['formType'] : 'general_inquiry';
$subject = "New Lead: " . ucfirst($formType) . " Form Submission";

// Basic Sanity Check
if (empty($decoded['email']) || empty($decoded['name'])) {
    echo json_encode(["status" => "error", "message" => "Name and Email are required fields."]);
    exit();
}

// Build the HTML email body based on form type
$body = "<html><body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>";
$body .= "<div style='max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;'>";
$body .= "<h2 style='color: #0047AB; border-bottom: 2px solid #0047AB; padding-bottom: 10px;'>OptiScale Lead Captured</h2>";
$body .= "<p>A new form has been submitted via the website.</p>";
$body .= "<table style='width: 100%; border-collapse: collapse;'>";

foreach ($decoded as $key => $value) {
    if ($key === 'formType') continue; // Handled in subject
    
    $label = ucwords(str_replace(['_', 'Type', 'Slot'], [' ', '', ''], $key));
    $displayValue = is_array($value) ? implode(", ", $value) : $value;
    
    $body .= "<tr>";
    $body .= "<td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;'>$label:</td>";
    $body .= "<td style='padding: 10px; border-bottom: 1px solid #eee;'>$displayValue</td>";
    $body .= "</tr>";
}

$body .= "</table>";
$body .= "<p style='font-size: 12px; color: #999; margin-top: 20px;'>Submitted from IP: " . $_SERVER['REMOTE_ADDR'] . " at " . date('Y-m-d H:i:s') . "</p>";
$body .= "</div></body></html>";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: OptiScale Digital <$from>" . "\r\n";
$headers .= "Reply-To: " . $decoded['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(["status" => "success", "message" => "Form submitted successfully."]);
} else {
    // If mail fails, provide a fallback or error
    echo json_encode(["status" => "error", "message" => "Mail server error. Please try again or contact us directly."]);
}
?>
