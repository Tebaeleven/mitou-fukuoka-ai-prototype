import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
    loading: () =>null,
    ssr: false,
});

export const SketchComponent = () => {
    console.log("dada")
    const preload = (p5: p5Types) => {
        // ここは今回使わない
    };
    let img;
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(500, 500, p5.WEBGL).parent(canvasParentRef);
        img = p5.loadImage(
            "p5/teba.jpg"
        );
    };

    const draw = (p5: p5Types) => {
        p5.background(0);

        let locX = p5.mouseX - p5.height / 2;
        let locY = p5.mouseY - p5.width / 2;

        p5.ambientLight(60, 60, 60);
        p5.pointLight(255, 255, 255, locX, locY, 100);

        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.texture(img);
        p5.box(100);
        p5.pop();

        p5.push();
        p5.translate(-p5.width / 4, -p5.height / 4, 0);
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.fill(250, 0, 0);
        p5.torus(80, 20, 64, 64);
        p5.pop();

        p5.push();
        p5.translate(p5.width / 4, -p5.height / 4, 0);
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.normalMaterial();
        p5.torus(80, 20, 64, 64);
        p5.pop();

        p5.push();
        p5.translate(-p5.width / 4, p5.height / 4, 0);
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.ambientMaterial(250);
        p5.torus(80, 20, 64, 64);
        p5.pop();

        p5.push();
        p5.translate(p5.width / 4, p5.height / 4, 0);
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.specularMaterial(250);
        p5.torus(80, 20, 64, 64);
        p5.pop();
    };

    const windowResized = (p5: p5Types) => {
        
        p5.resizeCanvas(500, 500);
        console.log("リサイズ");

    };

    return (
        <>
            <Sketch
                preload={preload}
                setup={setup}
                draw={draw}
                windowResized={windowResized}
            />
        </>
    );
};

export default SketchComponent;
