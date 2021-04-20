function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function say(word){
  var x = document.getElementById('msg');

  x.style.color = 'black';
  x.style.fontStyle = 'normal';
  x.innerHTML = '<b>S.A.G.E:</b> ' + word;
  document.getElementById('textbox').value = '';
}

function contains(word){
  if(document.getElementById('textbox').value.toLowerCase().includes(word)){
    return true;
  }
  else {
    return false;
  }
}

let words = ['penis', 'sex', 'porn', 'dick', 'cock'];
let moods = ['happy', 'sad', 'angry', 'bored', 'drunk'];
let phrases = ["I'm feeling ", "I feel "];
let yourwelcome = ["Your welcome", "You are very welcome","Anytime", "Of course"];
let like = ['yes'];

var mood = moods[randomNumber(moods.length)];

document.body.onload = function()
{
  var b = document.body;
  var c = document.querySelector(':root');

  if(mood == "drunk"){
    c.style.setProperty('--col', 'rgb(214, 57, 104)');
    document.querySelector('.container').style.transform = 'rotate(1deg)';
  }
  else {
    if(mood == "angry")
    {
      c.style.setProperty('--col', 'rgb(214, 57, 57)');
    }
    else {
      if(mood == "sad"){
        c.style.setProperty('--col', 'rgb(80, 57, 214)');
      }
      else {
        if(mood == "bored"){
          c.style.setProperty('--col', 'gray');
        }
      }
    }
  }

  document.getElementById('textbox').focus();
}

function getCommand(){
  var txt = document.getElementById('textbox');
  var p = document.getElementById('msg');

  if(txt.value != ''){
    //Question answers
    //Using contains so it's easier to code.
    if(contains('im sad') {
      say('Im sorry to hear that');
    
    }
    else{
    if(contains("pancake") || contains("waffle"))
    {
      say("Y'know, " + txt.value + " is good, but... I mean, I'm a robot, so I can't really eat any.")
    }
    else {
    if(contains('brianna'))
    {
      say('We dont talk about that!');
    }
    else{
    if(contains('i hate life'))
    {
      if(mood == "angry"){
        say('Good, You should hate life. I hate you...Sorry, Im just very mad right now');
      }
      else {
        if(mood == "bored"){
          say("really man? that sucks.")
        }
        else {
          if(mood == 'happy'){
            say("I'm very sorry that you feel this way.");
          }
          else {
            if(mood == 'sad'){
              say("Life can suck sometimes, I agree. But even if it does&mdash; maybe we're just not seeing clearly.")
            }
          }
        }
      }
    }
    else{
    if(contains('hungry'))
    {
      say('You should eat something if you are hungry');
    }
    else{
    if(contains('startup'))
    {
     say('Rebooted');
    }
    else{
    if(contains('hi'))
    {
      say('Ask me something. I might have an answer!!');
    }
    else{
    if(contains('if i took every girl my age on earth. would one like me'))
    {
      say(like[randomNumber(like.length)]);
    }
    else{
    if(contains('bloody mary'))
    {
      say('A Bloody Mary is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and celery salt.');
    }
    else{
    if(contains('old fashioned') && (contains("cocktail") || contains("drink")))
    {
      say('The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or, less commonly, brandy, and garnishing with orange slice or zest and a cocktail cherry. It is traditionally served in an old fashioned glass, which predated the cocktail.');
    }
    else{
    if(contains('negroni'))
    {
      say('The Negroni is a popular Italian cocktail, made of one part gin, one part vermouth rosso, and one part Campari, garnished with orange peel. It is considered an apéritif. A traditionally made Negroni is stirred, not shaken, and built over ice in an old-fashioned or rocks glass and garnished with a slice of orange.');
    }
    else{
    if(contains("danjaye")){
      if(mood == "drunk"){
        say("danjaye? danjaye's a real mysterious fella... has quite the secret? who knows.");
      }
      else {
        if(mood == "sad"){
          say('Someone who I will bade farewell to one day&mdash; hopefully a day farther than the crescent moon on a winter afternoon.');
        }
        else {
          if(mood == "angry"){
            say('Danjaye is one of my creators. Quite the chit.');
          }
          else {
            if(mood == "happy"){
              say('A real good sort of person, although that may be biased.');
            }
            else {
              if(mood == "bored"){
                say("Danjaye's, uh... a cool guy, for all you know.");
              }
            }
          }
        }
      }
    }
    else {
    if(contains('manhattan cocktail'))
    {
      say('A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. While rye is the traditional whiskey of choice, other commonly used whiskies include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey');
    }
    else{
    if(contains('mojito'))
    {
      say('Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink.');
    }
    else{
    if(contains('margarita'))
    {
      say('A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.');
    }
    else{
    if(contains('grass') && contains('hopper'))
    {
      say('Grasshoppers are a group of insects belonging to the suborder Caelifera. They are among what is probably the most ancient living group of chewing herbivorous insects, dating back to the early Triassic around 250 million years ago');
    }
    else{
    if(contains('pp'))
    {
      say("I'm a virtual assistant made by 2 studious valedictorians, who go by the names ViviTron and Danjaye.");
    }
    else{
    if(contains('thank'))
    {
      say(yourwelcome[randomNumber(yourwelcome.length)]);
    }
    else{
    if(contains('sloth'))
    {
      say('Sloths are a group of arboreal Neotropical xenarthran mammals, constituting the suborder Folivora. Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.');
      }
      else{
      if(contains('ladybug')|| contains('lady bug'))
      {
        say('Coccinellidae is a widespread family of small beetles ranging in size from 0.8 to 18 mm. The family is commonly known as ladybugs in North America and ladybirds in Britain and other parts of the English-speaking world');
      }
      else {
      if(contains('dog'))
      {
        say("The domestic dog is a domesticated form of wolf. The dog descended from an ancient, extinct wolf, with the modern grey wolf being the dog's nearest living relative. The dog was the first species to be domesticated by hunter–gatherers over 15,000 years ago, before the development of agriculture.");
      }        
      else {
      if(contains('slug'))
      {
        say('Slug, or land slug, is a common name for any apparently shell-less terrestrial gastropod mollusc. The word slug is also often used as part of the common name of any gastropod mollusc that has no shell, a very reduced shell, or only a small internal shell, particularly sea slugs and semislugs');
        } 
        else {
        if(contains('worm'))
        {
          say('Worms are many different distantly related animals that typically have a long cylindrical tube-like body, no limbs, and no eyes.');
        }
        else {
        if(contains('userblogs'))
        {
          if(contains('chat')){
          say('<a href = "https://userblogs.danhost.us/chat">direct link</a>');
          }
          else {
            say('<a href = "https://userblogs.danhost.us">direct link</a>');
          }
        }
        else {
          if(contains('parrot'))
          {
            say('Parrots, also known as psittacines, are birds of the roughly 398 species in 92 genera comprising the order Psittaciformes, found mostly in tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea, the Cacatuoidea, and the Strigopoidea');
          } else{
          if(contains('elephant'))
          {
            say('Elephants are the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons.');
          }
          else{
          if(contains('tiger'))
          {
            say('The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar.');
          } 
          else{
          if(contains('how') && contains('code'))
          {
            say('So you wanna know how to code huh? click this link to learn <a href = "https://how-to-code.vivitron.repl.co">here</a> for a complete tutorial');
          }
          else {
          if(contains('cheetah'))
          {
            say('The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h with the fastest reliably recorded speeds being 93 and 98 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail.');
            }
            else {
            if(contains('how are you') || contains('how do you feel'))
            {
              say(phrases[randomNumber(phrases.length)] + mood);
            }
            else {
            if(contains('tequila')){
              say("Tequila is a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila 65 km northwest of Guadalajara, and in the Jaliscan Highlands of the central western Mexican state of Jalisco.");
            }
            else {
            if(contains('soup')){
              say('nice job, you said soup');
            }
            else {
            if(contains('weather'))
            {
              say("Why don't you stick your head our the window and find out!!");
            }
            else {
            if(contains('life time of lobster'))
            {
              say('Older lobsters are also known to stop moulting, which means that the shell will eventually become damaged, infected, or fall apart and they die. The European lobster has an average life span of 31 years for males and 54 years for females.');
            }
            else {
            if(contains('fuck'))
            {
              say('Nope');
            }
            else {
            if(contains('penis')) {
              say('it seems as though you have a profound interest in these sexual topics. would you like to deviate from it and perhaps find another hobby to regularly enact?');
            }
            else {
            if(contains('you suck'))
            {
              say('You can leave feedback in posts on: <a href = "https://userblogs.danhost.us/posts">https://userblogs.danhost.us/posts</a>');
            }
            else{
            if(contains('cat'))
            {
              say('The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.');
            }
            else{
            if(contains('sex'))
            {
              say('it seems as though you have a profound interest in these sexual topics. would you like to deviate from it and perhaps find another hobby to regularly enact?');
            }
            else {
            if(contains('what is a penis'))
            {
              say('I would rather not answer that');
            }
            else {
            if(contains('vivitrons channel'))
            {
              say('<a href = "https://www.youtube.com/channel/UClu1IC0kx_0ZY0VIi3g214Q">click here</a>');
            }
            else {
            if(contains('tear gas'))
            {
              say('Tear gas, also known as a lachrymator agent or lachrymator, sometimes colloquially known as "mace" after an early commercial aerosol, is a chemical weapon that stimulates the nerves of the lacrimal gland in the eye to produce tears.')
            }
            else {
            if(contains('boobs')){
              say("The mammarian glands, more commonly known as the breasts, are features available to the females of the animal kingdom, mainly mammals (as specified earlier). At young ages, they can feed offspring nutritious liquid (known as milk) that can sufficiently nutritionize their baby further on.");````````
            }
            else {
            if(contains('info')){
              say("Opening info panel (or closing)...");
              more();
            }
            else {
              if(contains('help')){
                say("<ul><li><p><b>ask about questions: </b>basically you can say things like 'bruh what's the weather' and then something excellent will happen</p></li><li><p><b>ask about programs or pre-existing preresquites: </b>you can ask about things like userblogs or something.</p></li></ul>");
              }
              else {
                say("I'm not sure what '" + txt.value + "' means. Try rephrasing?");
              }
            
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                      }
                                                         }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function more(){
  var x = document.getElementById('more');
  var l = document.getElementById('lm-button');

  if(x.style.display == 'none'){
    x.style.display = 'block';
    l.innerHTML = 'Learn less ▾';
  }
  else {
    x.style.display = 'none';
    l.innerHTML = 'Learn more ▴';
  }
}