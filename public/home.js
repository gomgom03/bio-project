//pages

const freeSpace = document.getElementById("freeSpace");
const transitionDur = 0.6;


let curPage = null;
const pages = {
    home: divElem("bg-t rounded d-flex f-wrap transition hidden", 8, 8, null, [
        divElem("rounded quadrant d-flex center-vert center-horz", null, null, null, [buttonElem("Proteins", "proteinsHome", "btn bg-7 border-4 color-1 rounded text-4 hoverable-4", 8, 8)]),
        divElem("rounded quadrant d-flex center-vert center-horz", null, null, null, [buttonElem("Carbohydrates", "carbsHome", "btn bg-7 border-4 color-1 rounded text-4 hoverable-4", 8, 8)]),
        divElem("rounded quadrant d-flex center-vert center-horz", null, null, null, [buttonElem("Lipids", "lipidsHome", "btn bg-7 border-4 color-1 rounded text-4 hoverable-4", 8, 8)]),
        divElem("rounded quadrant d-flex center-vert center-horz", null, null, null, [buttonElem("Nucleic Acids", "nuclsHome", "btn bg-7 border-4 color-1 rounded text-4 hoverable-4", 8, 8)]),
    ]),
    lipidsHome: divElem("bg-t rounded d-flex f-wrap transition hidden center-horz", 8, 8, null, [
        divElem("d-flex center-vert center-horz transparent text-7 bold", 10, 3, "Lipids", []),
        divElem("d-flex center-vert center-horz transparent", 10, 7, null, []),
    ]),
    carbsHome: divElem("bg-t rounded d-flex f-wrap transition hidden center-horz", 8, 8, null, [
        divElem("d-flex center-vert center-horz transparent text-7 bold", 10, 3, "Carbohydrates", []),
        divElem("d-flex center-vert center-horz transparent", 10, 7, null, []),
    ]),
    proteinsHome: divElem("bg-t rounded d-flex f-wrap transition hidden center-horz", 8, 9.5, null, [
        divElem("d-flex center-vert center-horz transparent text-7 bold", 10, 3, "Proteins", []),
        divElem("d-flex center-vert center-horz transparent", 10, 7, null, []),
    ]),
    nuclsHome: divElem("bg-t rounded d-flex f-wrap transition hidden center-horz", 8, 8, null, [
        divElem("d-flex center-vert center-horz transparent text-7 bold", 10, 3, "Nucleic Acids", []),
        divElem("d-flex center-vert center-horz transparent", 10, 7, null, []),
    ]),
}

const imgPaths = {
    lipidsHome: [
        "lipids",
        "elements",
        "carbon",
        "oxygen",
        "hydrogen",
        "structure",
        "structure-lipids",
        "typeofcovalentbond",
        "covalentbond-lipids",
        "fat",
        "examples",
        "fat-ex1",
        "fat-ex2",
        "functions",
        "fat-func1",
        "fat-func2",
        "fat-func3",
        "phospholipid",
        "examples",
        "phospholipid-ex1",
        "functions",
        "phospholipid-func1",
        "steroid",
        "examples",
        "steroid-ex1",
        "steroid-ex2",
        "functions",
        "steroid-func1"
    ],
    carbsHome: [
        "carbohydrates",
        "elements",
        "carbon",
        "oxygen",
        "hydrogen",
        "structure",
        "structure-carbs",
        "typeofcovalentbond",
        "covalentbond-carbs",
        "monosaccharide",
        "examples",
        "mono-ex1",
        "mono-ex2",
        "mono-ex3",
        "functions",
        "mono-func1",
        "disaccharide",
        "examples",
        "di-ex1",
        "di-ex2",
        "di-ex3",
        "functions",
        "mono-func1",
        "polysaccharide",
        "examples",
        "poly-ex1",
        "poly-ex2",
        "poly-ex3",
        "poly-ex4",
        "functions",
        "poly-func1",
        "poly-func2",
        "poly-func3"
    ],
    nuclsHome: [
        "nucls",
        "elements",
        "carbon",
        "oxygen",
        "hydrogen",
        "phosphorus",
        "nitrogen",
        "structure",
        "structure-nucls",
        "typeofcovalentbond",
        "covalentbond-nucls",
        "examples",
        "nucls-ex1",
        "nucls-ex2",
        "functions",
        "nucls-func1",
        "nucls-func2"
    ],
    proteinsHome: [
        "proteins",
        "elements",
        "carbon",
        "oxygen",
        "hydrogen",
        "nitrogen",
        "structure",
        "structure-proteins",
        "typeofcovalentbond",
        "covalentbond-proteins",
        "examples",
        "proteins-ex1",
        "proteins-ex2",
        "proteins-ex3",
        "proteins-ex4",
        "proteins-ex5",
        "proteins-ex6",
        "proteins-ex7",
        "proteins-ex8",
        "functions",
        "proteins-func1",
        "proteins-func2",
        "proteins-func3",
        "proteins-func4",
        "proteins-func5",
        "proteins-func6",
        "proteins-func7",
        "proteins-func8",
    ]
}


function divElem(cls, w, h, txt, elemArr) {
    let tde = document.createElement("div");
    tde.classList = cls;
    w != null ? tde.style.width = `${w * 10}%` : null;
    h != null ? tde.style.height = `${h * 10}%` : null;
    elemArr != null ? elemArr.forEach((x) => {
        tde.appendChild(x);
    }) : null;
    txt != null ? tde.textContent = txt : null;
    return tde;
}

function imgElm(cls, w, h, src) {
    let tie = document.createElement("img");
    tie.src = src;
    tie.classList = cls;
    tie.style.width = `${w * 10}%`;
    tie.style.height = `${h * 10}%`;
    return tie;
}

function buttonElem(txt, action, cls, w, h) {
    let tbe = document.createElement("button");
    tbe.classList = cls;
    tbe.onclick = () => {
        renderPage(pages[action]);
    }
    tbe.textContent = txt;
    tbe.style.width = `${w * 10}%`;
    tbe.style.height = `${h * 10}%`;
    return tbe;
}

let userActionAllow = true;

function renderPage(page) {
    if (!userActionAllow) { return };
    if (curPage === null) {
        freeSpace.appendChild(page)
        curPage = Object.keys(pages).find(key => pages[key] === page);
        page.style.opacity = 1;
    } else {
        pages[curPage].style.opacity = 0;
        curPage = Object.keys(pages).find(key => pages[key] === page);
        setTimeout(() => {
            freeSpace.removeChild(freeSpace.firstChild);
            freeSpace.appendChild(page)
            page.style.opacity = 1;
            curPage !== "home" ? create2d(imgPaths[curPage], page) : null;
        }, transitionDur * 1000);
    }

}

renderPage(pages.home);




function create2d(paths, pg) {
    let len = paths.length;
    let cur = 0;

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Events = Matter.Events;
    rectElems = [];
    setInterval(() => {
        let temp = Bodies.rectangle(-200, -100, 150, 50, {
            render: {
                sprite: {
                    texture: `img/matter/${paths[cur]}.png`,
                    xScale: 1,
                    yScale: 1
                }
            }
        });
        temp.friction = 0.000001;
        rectElems.push(temp);
        World.add(world, temp);
        cur++;
        cur === len ? cur = 0 : null;
    }, 1750)
    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    const canvasElemWidth = window.innerWidth * 0.6 > innerHeight * 0.7 ? window.innerHeight * 0.7 : window.innerWidth * 0.6
    var render = Render.create({
        element: pg.childNodes[1],
        engine: engine,
        options: {
            width: canvasElemWidth * 2,
            height: canvasElemWidth / 8 * 6
        }
    });
    render.options.wireframes = false;

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
        // walls
        //Bodies.rectangle(400, 0, 1600, 50, { isStatic: true }),
        //Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(1200, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(-400, 300, 50, 600, { isStatic: true })
    ]);

    World.add(world, [
        Bodies.rectangle(-200, 120, 2000, 20, { isStatic: true, angle: Math.PI * 0.026 }),
        Bodies.rectangle(1000, 400, 2200, 20, { isStatic: true, angle: -Math.PI * 0.026 }),
        //Bodies.rectangle(300, 560, 600, 20, { isStatic: true, angle: Math.PI * 0.04 })
    ]);
    Events.on(render, "beforeRender", () => {
        rectElems.forEach(x => {
            x.position.y > 1000 ? (Matter.Composite.remove(world, x), rectElems.splice(rectElems.indexOf(x), 1)) : null;
        });
    })


    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });
}

const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", () => {
    pages[curPage].children[1].removeChild(pages[curPage].children[1].lastChild);
    renderPage(pages.home)
})