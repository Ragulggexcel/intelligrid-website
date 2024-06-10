import React, { useEffect } from "react";
import gsap from "gsap";
import "./style.scss";
const CanvasAnimation = () => {
  // useEffect(() => {
  //   let width,
  //     height,
  //     canvas,
  //     ctx,
  //     points,
  //     target,
  //     animateHeader = true;

  //   const Circle = class {
  //     constructor(pos, rad, color) {
  //       this.pos = pos || null;
  //       this.radius = rad || null;
  //       this.color = color || null;
  //     }

  //     draw(ctx) {
  //       if (!this.active) return;
  //       ctx.beginPath();
  //       ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
  //       ctx.fillStyle = "rgba(156,217,249," + this.active + ")";
  //       ctx.fill();
  //     }
  //   };

  //   const initHeader = () => {
  //     width = window.innerWidth;
  //     height = window.innerHeight;
  //     target = { x: width / 2, y: height / 2 };

  //     canvas = document.getElementById("demo-canvas");
  //     canvas.width = width;
  //     canvas.height = height;
  //     ctx = canvas.getContext("2d");
  //     points = [];
  //     for (let x = 0; x < width; x = x + width / 20) {
  //       for (let y = 0; y < height; y = y + height / 20) {
  //         const px = x + (Math.random() * width) / 20;
  //         const py = y + (Math.random() * height) / 20;
  //         const p = { x: px, originX: px, y: py, originY: py };
  //         points.push(p);
  //       }
  //     }
  //     for (let i = 0; i < points.length; i++) {
  //       let closest = [];
  //       const p1 = points[i];
  //       for (let j = 0; j < points.length; j++) {
  //         const p2 = points[j];
  //         if (!(p1 == p2)) {
  //           let placed = false;
  //           for (let k = 0; k < 5; k++) {
  //             if (!placed) {
  //               if (closest[k] == undefined) {
  //                 closest[k] = p2;
  //                 placed = true;
  //               }
  //             }
  //           }

  //           for (let k = 0; k < 5; k++) {
  //             if (!placed) {
  //               if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
  //                 closest[k] = p2;
  //                 placed = true;
  //               }
  //             }
  //           }
  //         }
  //       }
  //       p1.closest = closest;
  //     }
  //     for (let i in points) {
  //       const c = new Circle(
  //         points[i],
  //         2 + Math.random() * 2,
  //         "rgba(255,255,255,0.3)"
  //       );
  //       points[i].circle = c;
  //     }
  //   };

  //   const mouseMove = (e) => {
  //     let posy = 0; 
  //     let posx = (posy = 0);

  //     if (e.pageX || e.pageY) {
  //       posx = e.pageX;
  //       posy = e.pageY;
  //     } else if (e.clientX || e.clientY) {
  //       posx =
  //         e.clientX +
  //         document.body.scrollLeft +
  //         document.documentElement.scrollLeft;
  //       posy =
  //         e.clientY +
  //         document.body.scrollTop +
  //         document.documentElement.scrollTop;
  //     }
  //     target.x = posx;
  //     target.y = posy;
  //   };

  //   const scrollCheck = () => {
  //     if (document.body.scrollTop > height) animateHeader = false;
  //     else animateHeader = true;
  //   };

  //   const resize = () => {
  //     width = window.innerWidth;
  //     height = window.innerHeight;
  //     canvas.width = width;
  //     canvas.height = height;
  //   };

  //   const animate = () => {
  //     if (animateHeader) {
  //       ctx.clearRect(0, 0, width, height);
  //       for (let i in points) {
  //         if (Math.abs(getDistance(target, points[i])) < 4000) {
  //           points[i].active = 0.3;
  //           points[i].circle.active = 0.6;
  //         } else if (Math.abs(getDistance(target, points[i])) < 20000) {
  //           points[i].active = 0.1;
  //           points[i].circle.active = 0.3;
  //         } else if (Math.abs(getDistance(target, points[i])) < 40000) {
  //           points[i].active = 0.02;
  //           points[i].circle.active = 0.1;
  //         } else {
  //           points[i].active = 0;
  //           points[i].circle.active = 0;
  //         }

  //         drawLines(points[i]);
  //         points[i].circle.draw(ctx);
  //       }
  //     }
  //     requestAnimationFrame(animate);
  //   };

  //   const shiftPoint = (p) => {
  //     gsap.to(p, 1 + 1 * Math.random(), {
  //       x: p.originX - 50 + Math.random() * 100,
  //       y: p.originY - 50 + Math.random() * 100,
  //       ease: gsap.expo.easeInOut,
  //       onComplete: () => {
  //         shiftPoint(p);
  //       },
  //     });
  //   };

  //   const drawLines = (p) => {
  //     if (!p.active) return;
  //     for (let i in p.closest) {
  //       ctx.beginPath();
  //       ctx.moveTo(p.x, p.y);
  //       ctx.lineTo(p.closest[i].x, p.closest[i].y);
  //       ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
  //       ctx.stroke();
  //     }
  //   };

  //   const getDistance = (p1, p2) => {
  //     return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  //   };

  //   initHeader();
  //   animate();
  //   window.addEventListener("mousemove", mouseMove);
  //   window.addEventListener("scroll", scrollCheck);
  //   window.addEventListener("resize", resize);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //     window.removeEventListener("scroll", scrollCheck);
  //     window.removeEventListener("resize", resize);
  //   };
  // }, []); 
  return (
    <div id="large-header" className="large-header">
      {/* <canvas id="demo-canvas"></canvas> */}
      <div className="overlay"></div>
      <div id="company-name">
        <h1 style={{color:'#c4fac4'}}>Shaping the Future of the Digital Energy Economy</h1>
        <div>
          
        </div>
        <ul className="headerlist">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
              color="#449c18"
            >
              
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            Green Energy Certification and Trading
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
              color="#449c18"
              
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>{" "}
            Green Energy Trading and Distribution
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
              color="#449c18"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>{" "}
            ESG/CSR Reporting
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
              color="#449c18"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>{" "}
            Asset Management
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
              color="#449c18"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>{" "}
            Real-time Energy and Carbon Auctions
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
              color="#449c18"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>{" "}
            Customer Privacy
          </li>
        </ul>
      </div>
    </div>
  );
};


export default CanvasAnimation;
