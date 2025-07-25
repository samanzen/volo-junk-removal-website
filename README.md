# VOLO JUNK REMOVAL - Website

This is the source code for the official website of VOLO JUNK REMOVAL, a local service business operating in Metro Vancouver. The site is built with Next.js and Tailwind CSS, focusing on performance, local SEO, and lead generation.

## Project Structure

-   `/src/app/` - Contains all the main pages of the website (e.g., `page.tsx` for the homepage, `/about/page.tsx` for the About page).
-   `/src/components/` - Contains reusable components like the Header, Footer, and Buttons.
-   `/src/data/` - Contains the `siteData.ts` file for easy updates to business information.
-   `/public/` - This folder is for static assets like images and favicons (currently empty).
-   `tailwind.config.ts` - Configuration file for the site's design system and color palette.

## How to Preview the Website (Beginner's Guide)

To see a live, working preview of this website, we will use a free service called **Vercel**. This is the easiest method and does not require any complex setup on your computer.

### Step 1: Get a GitHub Account

GitHub is a free service that acts like a cloud drive for code.

1.  Go to [github.com](https://github.com) and sign up for a free account if you don't have one.

### Step 2: Create a New Repository

A "repository" is like a project folder on GitHub.

1.  On your GitHub dashboard, click the **"+"** icon in the top right corner and select **"New repository"**.
2.  Give it a name (e.g., `volo-junk-removal-website`).
3.  Keep it **Public**.
4.  Click **"Create repository"**.

### Step 3: Add the Code to GitHub

You will need to upload all the files I've provided into this new GitHub repository.

1.  On your new repository page, click the **"Add file"** button and then **"Upload files"**.
2.  Drag and drop all the files and folders (`package.json`, `tailwind.config.ts`, the `src` folder, etc.) into the upload area.
3.  Once all files are uploaded, click the **"Commit changes"** button.

### Step 4: Deploy with Vercel

Vercel will take your code from GitHub and turn it into a live website.

1.  Go to [vercel.com](https://vercel.com) and sign up for a free "Hobby" account. Choose the option to **"Continue with GitHub"**.
2.  Authorize Vercel to access your GitHub account.
3.  You will be taken to your Vercel dashboard. Click the **"Add New..."** button and select **"Project"**.
4.  Vercel will show a list of your GitHub repositories. Find the `volo-junk-removal-website` repository you just created and click the **"Import"** button next to it.
5.  Vercel will automatically detect that this is a Next.js project. You don't need to change any settings. Just click the **"Deploy"** button.
6.  Wait a minute or two for Vercel to build your website.

### Step 5: View Your Live Website!

Once the deployment is complete, Vercel will show you a big congratulations message with a screenshot of your new homepage.

Click the **"Visit"** button to see your live, working website on a public URL (like `volo-junk-removal.vercel.app`). You can share this link with anyone!

---

## Updating Your Site

To make changes in the future (like adding a new service or blog post), you simply update the files in your GitHub repository, and Vercel will automatically redeploy the new version of your site.
