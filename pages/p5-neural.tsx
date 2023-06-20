import React, { useEffect, useRef } from "react";

export default function P5Neural() {
    useEffect(() => {
        class Rectangle {
            constructor(x, y, width, height, color) {
                this.canvas = document.getElementById("root");
                this.ctx = this.canvas.getContext("2d");
                this.color = color;
                this.width = width;
                this.height = height;
                this.startX = x; // 初期X座標
                this.startY = y; // 初期Y座標
                this.currentX = x; // 現在のX座標
                this.currentY = y; // 現在のY座標
            }

            draw() {
                this.ctx.fillStyle = this.color;
                this.ctx.fillRect(
                    this.currentX,
                    this.currentY,
                    this.width,
                    this.height
                );
            }

            move(frames, distance, easing) {
                return new Promise((resolve) => {
                    const moveLoop = () => {
                        this.ctx.clearRect(
                            0,
                            0,
                            this.canvas.width,
                            this.canvas.height
                        );

                        const progress = 1 - frames / distance; // 進行度（0〜1）
                        const easedProgress = easing(progress); // イージングを適用

                        this.currentX = this.startX + easedProgress * distance;
                        this.currentY = this.startY;
                        this.draw();
                        if (frames > 0) {
                            frames--;
                            
                            requestAnimationFrame(moveLoop);
                        } else {
                            this.draw();
                            resolve(); // 移動完了時に解決
                        }
                    };

                    moveLoop();
                });
            }
        }

        const rect = new Rectangle(0, 0, 10, 10, "green");
        const rect1 = new Rectangle(0, 100, 100, 150, "blue");

        const animate = async () => {
            await rect.draw();
            await rect1.draw();
            await rect.move(100, 100, easeOutQuad);
            await rect1.move(100, 100, easeInOutQuad);
        };
        animate();

    }, []);

    return <canvas id="root" />;
}







function wait(frames) {
    return new Promise((resolve) => {
        const moveLoop = () => {
            if (frames > 0) {
                frames--;
                requestAnimationFrame(moveLoop);
            } else {
                resolve(); // 移動完了時に解決
            }
        };
        moveLoop();
    });
}

// イージング関数: easeOutQuad
function easeOutQuad(t) {
    return t * (2 - t);
}

// イージング関数: easeInOutQuad
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
