/* LOGOTIPO */
var logotipo = function(l) {
  const word = "conversas";
  const num_options = 10;
  const glyph_height = 234;
  
  var configuration = [];
  var glyphs_paths = {};
  var glyphs_images = {};
  
  var font;
  var glyph_y, pos_first_line, pos_second_line;
  var time_last_glyphs_change = 0;
  
  l.preload = function() {
    // create dictionary with all image paths for each needed character
    for (let l = 0; l < word.length; l++) {
      let curr_letter = word[l];
      if (glyphs_paths[curr_letter] === undefined) {
        let paths = [];
        let images = [];
        for (let k = 0; k < num_options; k++) {
          paths[k] = `data/${curr_letter}/${curr_letter}${k}.png`;
          images[k] = undefined;
        }
        glyphs_paths[curr_letter] = paths;
        glyphs_images[curr_letter] = images;
      }
    }
  
    // create the initial glyphs' configuration (list of indexes)
    l.create_first_config();
  
    // load the font for "ciclo de" e "design + multimedia"
    font = l.loadFont('data/AveriaSansLibre_Bold.ttf');
  }
  
  l.setup = function() {
    var canvas = l.createCanvas(l.windowWidth - 200, l.windowHeight);
    canvas.parent('logo');
    l.frameRate(2);
  }
  
  l.draw = function() {
    l.background(255);
    l.windowResized();
  
    for (let i = 0; i < word.length; i++) {
      let curr_letter = word[i];
      let index_option = configuration[i];
      if (glyphs_images[curr_letter][index_option] === undefined) {
        glyphs_images[curr_letter][index_option] = l.loadImage(glyphs_paths[curr_letter][index_option]);
      }
      let glyph_image = glyphs_images[curr_letter][index_option];
  
      /* calculate glyphs metrics */
      let glyph_x = i * (l.width / 9);
      glyph_y = l.height/2 - glyph_height/2;
      pos_first_line = glyph_y - glyph_height/3;
      pos_second_line = l.height/2 + glyph_height/2 + 2 * (glyph_height/3); 
      
      l.image(glyph_image, glyph_x, glyph_y);
  
      l.textFont(font, 88);
      l.textAlign(l.LEFT);
      l.text('ciclo de', 10, pos_first_line);
      l.textAlign(l.RIGHT);
      l.text('design + multimédia', l.width - 30, pos_second_line);
    }
  
    if(l.mouseY < 530 && l.mouseY > l.height/2 - glyph_height/2) {
      let curr_time = Date.now();
      if (curr_time - time_last_glyphs_change > 2000) {
        l.create_random_config();
        time_last_glyphs_change = curr_time;
      }
    } else {
      l.create_first_config();
    }
  }
  
  l.create_first_config = function() {
    configuration = [4, 4, 2, 9, 3, 2, 8, 1, 2];
  }
  
  l.create_random_config = function() {
    for (let l = 0; l < word.length; l++) {
      let curr_letter = word[l];
      let index_option_selected = Math.floor(Math.random() * glyphs_paths[curr_letter].length);
      configuration[l] = index_option_selected;
    }
  }
  
  l.windowResized = function() {
    l.resizeCanvas(l.windowWidth - 200, l.windowHeight);
  }
}

/* SPEAKERS */
/* braulio */
var braulio = function(s1) {
  var retrato = [];
  var n = 1;
  var t = 0;
  var w, h;

  s1.preload = function() {
    for (let i = 0; i < 3; i++) {
      retrato[i] = s1.loadImage(`data/speakers/braulio${i}.png`);
    }
  }

  s1.setup = function() {
    let canvas = s1.createCanvas(450, 600);
    canvas.parent('braulio');
    s1.frameRate(10);
    s1.imageMode(s1.CENTER);
  }

  s1.draw = function() {
    s1.background(255);
    t += 0.5;
    w = retrato[0].width;
    h = retrato[0].height;

    if(t%2 === 0) {
      n =  Math.floor(Math.random() * 3);
    }

    if(s1.mouseX > s1.width/2 - w/2 && s1.mouseX < s1.width/2 + w/2 
    && s1.mouseY > s1.height/2 - h/2 && s1.mouseY < s1.height/2 + h/2) {
      s1.image(retrato[n], s1.width/2, s1.height/2);
    } else {
      s1.image(retrato[0], s1.width/2, s1.height/2);
    }
  }
}

/* camila */
var camila = function(s2) {
  var retrato = [];
  var n = 1;
  var t = 0;
  var w, h;

  s2.preload = function() {
    for (let i = 0; i < 3; i++) {
      retrato[i] = s2.loadImage(`data/speakers/camila${i}.png`);
    }
  }

  s2.setup = function() {
    let canvas = s2.createCanvas(450, 600);
    canvas.parent('camila');
    s2.frameRate(10);
    s2.imageMode(s2.CENTER);
  }

  s2.draw = function() {
    s2.background(255);
    t += 0.5;
    w = retrato[0].width;
    h = retrato[0].height;

    if(t%2 === 0) {
      n =  Math.floor(Math.random() * 3);
    }

    if(s2.mouseX > s2.width/2 - w/2 && s2.mouseX < s2.width/2 + w/2 
    && s2.mouseY > s2.height/2 - h/2 && s2.mouseY < s2.height/2 + h/2) {
      s2.image(retrato[n], s2.width/2, s2.height/2);
    } else {
      s2.image(retrato[0], s2.width/2, s2.height/2);
    }
  }
}

/* susana */
var susana = function(s3) {
  var retrato = [];
  var n = 1;
  var t = 0;
  var w, h;

  s3.preload = function() {
    for (let i = 0; i < 3; i++) {
      retrato[i] = s3.loadImage(`data/speakers/susana${i}.png`);
    }
  }

  s3.setup = function() {
    let canvas = s3.createCanvas(450, 600);
    canvas.parent('susana');
    s3.frameRate(10);
    s3.imageMode(s3.CENTER);
  }

  s3.draw = function() {
    s3.background(255);
    t += 0.5;
    w = retrato[0].width;
    h = retrato[0].height;

    if(t%2 === 0) {
      n =  Math.floor(Math.random() * 3);
    }

    if(s3.mouseX > s3.width/2 - w/2 && s3.mouseX < s3.width/2 + w/2 
    && s3.mouseY > s3.height/2 - h/2 && s3.mouseY < s3.height/2 + h/2) {
      s3.image(retrato[n], s3.width/2, s3.height/2);
    } else {
      s3.image(retrato[0], s3.width/2, s3.height/2);
    }
  }
}

/* rejaine */
var rejaine = function(s4) {
  var retrato = [];
  var n = 1;
  var t = 0;
  var w, h;

  s4.preload = function() {
    for (let i = 0; i < 3; i++) {
      retrato[i] = s4.loadImage(`data/speakers/rejaine${i}.png`);
    }
  }

  s4.setup = function() {
    let canvas = s4.createCanvas(450, 600);
    canvas.parent('rejaine');
    s4.frameRate(10);
    s4.imageMode(s4.CENTER);
  }

  s4.draw = function() {
    s4.background(255);
    t += 0.5;
    w = retrato[0].width;
    h = retrato[0].height;

    if(t%2 === 0) {
      n =  Math.floor(Math.random() * 3);
    }

    if(s4.mouseX > s4.width/2 - w/2 && s4.mouseX < s4.width/2 + w/2 
    && s4.mouseY > s4.height/2 - h/2 && s4.mouseY < s4.height/2 + h/2) {
      s4.image(retrato[n], s4.width/2, s4.height/2);
    } else {
      s4.image(retrato[0], s4.width/2, s4.height/2);
    }
  }
}

var p5logo = new p5(logotipo);
var p5speaker1 = new p5(braulio);
var p5speaker2 = new p5(camila);
var p5speaker3 = new p5(susana);
var p5speaker4 = new p5(rejaine);
