

# Mailing Service with Nodemailer

## Project Overview
This project demonstrates how to send emails using **Nodemailer** in a Node.js environment. The application uses Gmail as the email service provider and securely handles authentication using environment variables.

## Features
- Send emails using Gmail.
- Easily configurable for other email services.
- Supports both plain text and HTML email bodies.

## Technologies Used
- **Node.js**
- **Nodemailer**
- **Dotenv** (for environment variables)

## Prerequisites
Before running this project, make sure you have:
- **Node.js** installed (version 12.x or higher).
- A Gmail account (or another email service) for sending emails.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubechavan/mailing.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mailing
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Set up your environment variables:
   - Create a `.env` file in the project root and add the following (replace with your actual credentials):
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-password-or-app-password
     ```

## Usage

1. To send an email, open a terminal and run the following command:
   ```bash
   node index.js
   ```

2. The default code sends a test email using the credentials stored in the `.env` file. You can modify the recipient, subject, and body in the `mailOptions` object inside `index.js`.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please create a pull request with any changes you think would improve the project.

## Contact
If you have any questions or issues, please reach out to:
**Email**: [shubhamchavancool332@gmail.com](mailto:shubhamchavancool332@gmail.com)

