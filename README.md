# Web-Development-Introduction-WEDE5020-PART-2



































 

1. Introduction


Part 2 of this project focuses on CSS styling and responsive design for the Green Future Foundation website. The goal was to enhance the desktop layout, create a visually appealing and consistent design across all pages, and ensure the website is responsive on tablets and mobile devices.
All HTML files from Part 1 (index.html, about.html, get-involved.html, contact.html, resources.html) were updated to use semantic containers and an external CSS stylesheet (style.css). Inline styles and align="center" attributes were removed to ensure clean separation of content and design.

2. Implementation Overview


2.1 External CSS File
•	Created style.css and linked it to all HTML pages.
•	Used a consistent naming convention and applied styles globally.
•	Included a CSS reset to maintain consistent rendering across browsers.


2.2 Base Styles
•	Set a default font-family, font sizes, line heights, and colors.
•	Applied margins and padding consistently using relative units (em, rem, %).
•	Ensured headings, paragraphs, and lists have harmonious spacing.


2.3 Layout and Structure
•	Replaced <div align="center"> and inline styles with semantic containers (header, nav, main, section, footer).
•	Used Flexbox and CSS Grid for layout:
o	Flexbox for navigation, hero sections, and form alignment.
o	Grid for multi-column layouts in desktop version.
•	Ensured layout is clean, clear, and visually appealing.


2.4 Typography and Visual Design
•	Applied typographic styles: font-weight, letter-spacing, line-height.
•	Used complementary colors for headings, text, buttons, and links.
•	Applied visual styles: background-color, border-radius, box-shadow for interactive elements.
•	Added pseudo-classes :hover and :focus for buttons and links to enhance interactivity.


2.5 Responsive Design
•	Implemented media queries for breakpoints:
o	Desktop: ≥ 1024px
o	Tablet: 768px – 1023px
o	Mobile: ≤ 767px
•	Used relative units (em, rem, %) for font sizes, widths, and spacing.
•	Images resized proportionally using max-width: 100% and height: auto.
•	Enlarged the map on contact.html for better mobile visibility.
•	Navigation adapts to smaller screens for improved usability.


3. Pages Updated

Page	Key Updates
index.html	Applied hero section styling, responsive layout, and typography improvements.
about.html	Updated image sizes, section spacing, and container styles.
get-involved.html	Enhanced volunteer, donation, and partnership sections with responsive Flexbox layout.
contact.html	Enlarged map, updated form layout, applied responsive container styling.
resources.html	Improved layout for guides, articles, and video sections with responsive adjustments.


4. Testing and Iteration

•	Used browser developer tools to test responsiveness on different devices.
•	Screenshots captured for desktop, tablet, and mobile for each page.
•	Adjusted font sizes, spacing, and image widths to optimize readability and usability.
•	Iterative improvements made based on feedback and visual inspection.

5. Changelog


Date	        File         	Description of Change
24/09/2025	style.css	        Created external CSS stylesheet with base styles, typography, layout, and responsive design.
24/09/2025	index.html	      Removed inline styles, added container classes, linked CSS.
24/09/2025	about.html	      Updated layout, image sizes, and responsive styles.
24/09/2025	get-involved.html	Enhanced layout for volunteer/donation/partnership sections, added responsive design.
24/09/2025	contact.html	    Enlarged map, updated form layout, linked CSS.
24/09/2025	resources.html   	Applied responsive layout to guides, articles, videos, and linked CSS.

6. Screenshots

Note: Screenshots are included in the screenshots folder of the repository.
•	Desktop: Full-width layout for all pages.
•	Tablet: Adjusted layout with flexible columns.
•	Mobile: Single-column layout with responsive images and navigation.



<img width="1818" height="911" alt="Cap" src="https://github.com/user-attachments/assets/3aa91baf-cc5e-47e1-9dcf-8eb1f58638e8" />
<img width="1600" height="907" alt="Capture 1" src="https://github.com/user-attachments/assets/42530da2-e618-4d25-a6be-f790a3018144" />
<img width="1721" height="855" alt="Capture 2" src="https://github.com/user-attachments/assets/56829467-7e40-48b7-ae35-1728faead469" />
<img width="1646" height="893" alt="Capture 3" src="https://github.com/user-attachments/assets/e0246370-5b22-4fd4-a02a-c578732de7ba" />





































Reference
Canva, 2025. Wireframes. [Online] 
Available at: https://www.canva.com/
[Accessed 1 september 2025].
Figma, 2025. Design. [Online] 
Available at: https://www.figma.com/community/wireframes?editor_type=figma
[Accessed 27 August 2025].
Programiz, 2011. Learn to code for free. [Online] 
Available at: https://www.prograniz.com
W3Schools Team, 2025. learn to code. [Online] 
Available at: https://www.w3schools.com



