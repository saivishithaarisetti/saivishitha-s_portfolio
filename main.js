document.addEventListener("DOMContentLoaded", function () {
    
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.opacity = "0";
      sidebar.style.transform = "translateX(-100%)"; 
      setTimeout(() => {
        sidebar.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        sidebar.style.opacity = "1";
        sidebar.style.transform = "translateX(0)"; 
      }, 100);
    }
  
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.style.opacity = "0";
      mainContent.style.transform = "translateX(-50px)";
      setTimeout(() => {
        mainContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        mainContent.style.opacity = "1";
        mainContent.style.transform = "translateX(0)"; 
      }, 300); 
    }
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.style.opacity = "0";
      section.style.transform = "translateX(-50px)"; 
      setTimeout(() => {
        section.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        section.style.opacity = "1";
        section.style.transform = "translateX(0)"; 
      }, 500 + index * 100);
    });
  });
  
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.addEventListener("mouseenter", () => {
      sidebar.style.width = "200px";
      sidebar.querySelectorAll("ul li a").forEach((link) => {
        link.style.padding = "15px 20px"; 
      });
    });
  
    sidebar.addEventListener("mouseleave", () => {
      sidebar.style.width = "60px";
      sidebar.querySelectorAll("ul li a").forEach((link) => {
        link.style.padding = "15px"; 
      });
    });
  }
  

  const currentPageUrl = window.location.href;
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
  
  sidebarLinks.forEach((link) => {
    if (link.href === currentPageUrl) {
      link.parentElement.classList.add("active");
    }
  });
  
  
  const projectItems = document.querySelectorAll(".project-item");
  if (projectItems) {
    projectItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.05)";
        item.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
        item.querySelector(".tools-used").style.display = "block"; 
        item.querySelector(".project-buttons").style.display = "flex";
      });
  
      item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
        item.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        item.querySelector(".tools-used").style.display = "none"; 
        item.querySelector(".project-buttons").style.display = "none"; 
      });
    });
  }