// Entry Animations for Main Content and Sidebar
document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Swipe-In Animation
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.opacity = "0";
      sidebar.style.transform = "translateX(-100%)"; // Start off-screen to the left
      setTimeout(() => {
        sidebar.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        sidebar.style.opacity = "1";
        sidebar.style.transform = "translateX(0)"; // Swipe in to the original position
      }, 100);
    }
  
    // Main Content Swipe-In Animation
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.transform = "translateX(-50px)"; // Start slightly off-screen to the left
      setTimeout(() => {
        mainContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        mainContent.style.opacity = "1";
        mainContent.style.transform = "translateX(0)"; // Swipe in to the original position
      }, 300); // Delay the main content animation slightly for a staggered effect
    }
  
    // Individual Content Swipe-In Animation (e.g., for sections like About, Skills, etc.)
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.style.opacity = "0";
      section.style.transform = "translateX(-50px)"; // Start slightly off-screen to the left
      setTimeout(() => {
        section.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        section.style.opacity = "1";
        section.style.transform = "translateX(0)"; // Swipe in to the original position
      }, 500 + index * 100); // Stagger the animations for each section
    });
  });
  
  // Sidebar Hover Animation
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.addEventListener("mouseenter", () => {
      sidebar.style.width = "200px"; // Expand sidebar on hover
      sidebar.querySelectorAll("ul li a").forEach((link) => {
        link.style.padding = "15px 20px"; // Adjust padding for expanded state
      });
    });
  
    sidebar.addEventListener("mouseleave", () => {
      sidebar.style.width = "60px"; // Collapse sidebar on mouse leave
      sidebar.querySelectorAll("ul li a").forEach((link) => {
        link.style.padding = "15px"; // Reset padding for collapsed state
      });
    });
  }
  
  // Highlight Active Page in Sidebar
  const currentPageUrl = window.location.href;
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
  
  sidebarLinks.forEach((link) => {
    if (link.href === currentPageUrl) {
      link.parentElement.classList.add("active"); // Add 'active' class to the current page link
    }
  });
  
  // Additional Animations for Project Items in Portfolio
  const projectItems = document.querySelectorAll(".project-item");
  if (projectItems) {
    projectItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.05)";
        item.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
        item.querySelector(".tools-used").style.display = "block"; // Show tools on hover
        item.querySelector(".project-buttons").style.display = "flex"; // Show buttons on hover
      });
  
      item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
        item.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        item.querySelector(".tools-used").style.display = "none"; // Hide tools on mouse leave
        item.querySelector(".project-buttons").style.display = "none"; // Hide buttons on mouse leave
      });
    });
  }