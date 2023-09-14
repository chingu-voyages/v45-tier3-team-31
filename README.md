<div style="width: 100%;">
  <img src="projectintro.svg" style="width: 100%;" alt="Landing Page">
      <a href="https://educatorstar.netlify.app/landing"
      >Frontend Educator Start</a
    >
    <a href="v44-tier3-team-31-production.up.railway.app"
      >Backend Educator API</a
    >
</div>

<svg fill="none" viewBox="0 0 1000 500" width="500" height="500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 
    <style>
        :root {
  
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

/_ grey _/
--grey-50: #f0f4f8;
--grey-100: #d9e2ec;
--grey-200: #bcccdc;
--grey-300: #9fb3c8;
--grey-400: #829ab1;
--grey-500: #627d98;
--grey-600: #486581;
--grey-700: #334e68;
--grey-800: #243b53;
--grey-900: #102a43;
/_ rest of the colors _/
--black: #222;
--white: #fff;
--red-light: #f8d7da;
--red-dark: #842029;
--green-light: #d1e7dd;
--green-dark: #0f5132;

/_ fonts _/
--headingFont: "Roboto Condensed", Sans-Serif;
--bodyFont: "Cabin", Sans-Serif;
--small-text: 0.875rem;
--extra-small-text: 0.7em;
/_ rest of the vars _/
--backgroundColor: var(--grey-50);
--textColor: var(--grey-900);
--borderRadius: 0.25rem;
--letterSpacing: 1px;
--transition: 0.3s ease-in-out all;
--max-width: 1120px;
--fixed-width: 500px;
--fluid-width: 90vw;
--breakpoint-lg: 992px;
--nav-height: rem;
/_ box shadow_/
--shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
nav {
width: var(--fluid-width);
max-width: var(--max-width);
margin: 2rem auto;
height: var(--nav-height);
display: flex;
align-items: center;
}
.page {
/_ min-height: calc(100vh - var(--nav-height)); _/
display: grid;
align-items: center;
margin-top: -3rem;

}
.container {
width: var(--fluid-width);
max-width: var(--max-width);
margin: 0 auto;
}
.full-page {
min-height: 100vh;
padding: 1rem;
background-color: var(--grey-50);
}
h1 {
font-weight: 700;
color: var(--grey-700);

} span {
color: var(--primary-500);
}
p {
color: var(--grey-600);
}

.img {
width: 100%;
display: block;
object-fit: cover;

}
@media (min-width: 992px) {
.page {
grid-template-columns: 1fr 1fr;
column-gap: 3rem;
}
.img {
display: block;
}
}  
 </style>

<div class="full-page"> 
      <nav>
       <div style="display:flex; align-items:center;justify-content: center;">
      <img style=" height:100px" src='./frontend/src/assets/images/logo.svg' alt="educator logo" />
      <p style="color: #3b82f6;font-size: 1.4rem;font-weight: 700;" class="logo-text"> Educator</p>
    </div>
      </nav>
      <div class="container page">
        <div class="info">
          <h1>
            Student <span>management</span> app
          </h1>
          <p>
            Helps educators manage data, maximize student success. 
          </p>
             <p>
        This easy-to-use system handles attendance 
          </p>
          <p>and learning performance</P>
        </div>
        <img src='./frontend/src/assets/images/main.svg' alt="classroom"  class="img main-img" />
      </div>
    </div>
  
</svg>
