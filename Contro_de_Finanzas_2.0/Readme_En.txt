# Installation Instructions: Finance Control

This is a quick guide to deploying and installing the "Finance Control" Progressive Web App (PWA) on your mobile and desktop devices.

---

## ⚠️ Crucial Requirement: Secure Server (HTTPS)

For the installation and offline functionality to work, the application **MUST** be hosted on a secure server. The final URL must begin with `https://`.

#### Why is this necessary?
For security reasons. Browsers only allow *Service Workers* (the technology that enables offline functionality) to register on secure connections to protect your data.

#### How to Upload the App to a Secure Server (Easy & Free Method)
The easiest way is to use a deployment service like **Netlify**.

1.  **Prepare the files**: Make sure the three files (`index.html`, `manifest.json`, `sw.js`) are together in the same folder.
2.  **Compress the folder**: Create a single `.zip` file from that folder.
3.  **Deploy to Netlify**:
    * Create a free account at [Netlify.com](https://www.netlify.com/).
    * On your main dashboard, find the site deployment section and simply **drag and drop your `.zip` file**.
4.  **Get your URL**: In less than a minute, Netlify will provide you with a unique, secure URL (e.g., `https://random-name.netlify.app`). This is the URL you will use to install your app!

---

## ⚙️ How to Install the Application

Once you have your `https://` URL, open it in your device's browser and follow the corresponding steps.

### 📱 On Mobile Devices

#### On Android (with Google Chrome)
1.  Open Google Chrome and navigate to your URL.
2.  Wait a few seconds. A prompt may appear at the bottom of the screen to **"Install app"**.
3.  If it doesn't appear, tap the **three-dot menu (⋮)** in the top-right corner.
4.  Select the **"Install app"** or **"Add to Home screen"** option.
5.  Confirm the action. The app icon will now appear on your home screen.

#### On iPhone/iPad (with Safari)
1.  Open Safari and navigate to your URL.
2.  Tap the **"Share"** button (the icon of a square with an arrow pointing up).
3.  In the menu that appears, scroll down and look for the **"Add to Home Screen"** option.
4.  Confirm the name for the icon and tap **"Add"**. The app will now appear on your home screen.

### 🖥️ On Desktop (PC or Mac)

This works on modern browsers like Google Chrome, Microsoft Edge, and Brave.

1.  Open the browser and navigate to your URL.
2.  In the address bar, on the right side, look for a **small icon of a screen with a down arrow**.
3.  Click on that icon.
4.  A confirmation window will pop up. Click the **"Install"** button.
5.  The application will open in its own window and will be added to your list of programs/applications.

Done! 🎉 You now have the application installed on your device, accessible directly from an icon just like any other native app.