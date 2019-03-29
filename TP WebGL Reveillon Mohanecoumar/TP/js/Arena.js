Arena = function(game) //on créée notre objet Arena qui prend l'objet game en argument
{
    // VARIABLES UTILES
    this.game = game;
    var scene = game.scene;


    //EXEMPLE 

    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
	materialGround.diffuseTexture = new BABYLON.Texture("assets/Texture/Cloud.jpg", scene);
	materialGround.diffuseTexture.uScale = 1.0;
	materialGround.diffuseTexture.vScale = 1.0;
    var materialBox1 = new BABYLON.StandardMaterial("groundTexture", scene);
	materialBox1.diffuseTexture = new BABYLON.Texture("assets/Texture/Grass.jpg", scene);
	materialBox1.diffuseTexture.uScale = 4.0;
	materialBox1.diffuseTexture.vScale = 4.0;
    var materialBox2 = new BABYLON.StandardMaterial("groundTexture", scene);
	materialBox2.diffuseTexture = new BABYLON.Texture("assets/Texture/Wood.jpg", scene);
	//materialBox2.diffuseTexture.uScale = 4.0;
	//materialBox2.diffuseTexture.vScale = 4.0;
    var materialBox3 = new BABYLON.StandardMaterial("groundTexture", scene);
	materialBox3.diffuseTexture = new BABYLON.Texture("assets/Texture/Sand.jpg", scene);
	//materialBox3.diffuseTexture.uScale = 4.0;
	//materialBox3.diffuseTexture.vScale = 4.0;
    var materialBox4 = new BABYLON.StandardMaterial("groundTexture", scene);
	materialBox4.diffuseTexture = new BABYLON.Texture("assets/Texture/Rock.jpg", scene);
	//materialBox4.diffuseTexture.uScale = 4.0;
	//materialBox4.diffuseTexture.vScale = 4.0;

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    var ground = BABYLON.MeshBuilder.CreateBox("ground", {height: 0.5, width: 100, depth: 100}, scene);
	ground.position = new BABYLON.Vector3(0,0,0);
    ground.material = materialGround;

    
	
	var myBox = BABYLON.MeshBuilder.CreateBox("myBox", {height: 0.5, width: 30, depth: 30}, scene);
    myBox.position = new BABYLON.Vector3(70,0,0);
    myBox.material = materialBox1;

    var myBox2 = BABYLON.MeshBuilder.CreateBox("myBox2", {height: 0.5, width: 30, depth: 30}, scene);
    myBox2.position = new BABYLON.Vector3(115,0,0);
    myBox2.material = materialBox2;

    var myBox3 = BABYLON.MeshBuilder.CreateBox("myBox3", {height: 0.5, width: 30, depth: 30}, scene);
    myBox3.position = new BABYLON.Vector3(160,0,0);
    myBox3.material = materialBox3;

    var myBox4 = BABYLON.MeshBuilder.CreateBox("myBox4", {height: 0.5, width: 30, depth: 30}, scene);
    myBox4.position = new BABYLON.Vector3(205,0,0);
    myBox4.material = materialBox4;

  

    //this.game.scene.cube = cube;// va nous permettre d'accéder à notre mesh pour réaliser des animations au sein du prototype 
    //(à faire à chaque fois que vous comptez animer un mesh)


    //LIRE LA DOC

    // LUMIERES 

    /*TODO :  -3 lumières différentes
              -couleurs et intensités
    */

    // MATERIAUX ET TEXTURES

    /*TODO :    -materiau standard
                -multi-materiaux
                -video-texture
                -normal map
                -texture procedurale (feu, nuage...)
    */

    //MESHS ET COLLISIONS

    /*TODO :    -box
                -sphere
                -cylindre
                -tore
                -appliquer les collisions
    */
ground.checkCollisions = true;
myBox.checkCollisions = true;
myBox2.checkCollisions = true;
myBox3.checkCollisions = true;
myBox4.checkCollisions = true;
  

    //AUDIO

    /*TODO : -sons d'ambiance
              -sons liés à des objets --> le son doit être localisé spatialement
    */
    
    //SKYBOX

    /*TODO : -Créer une (grande) box
             -Un materiau avec une CubeTexture, attention à bien faire correspodre les faces.
    */
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/Skybox/violentdays", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
};

Arena.prototype={

    //ANIMATION
    _animateWorld : function(ratioFps)
    {
      // Animation des plateformes (translation, rotation, redimensionnement ...)
      /*TODO*/
    },
}