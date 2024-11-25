/// <reference types="@workadventure/iframe-api-typings" />

import { EmbeddedWebsite } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    let webAnimationOutside: EmbeddedWebsite;

    let webFloor01NameplateMentor1: EmbeddedWebsite;
    let webFloor01NameplateMentor1a: EmbeddedWebsite;
    let webFloor01NameplateMentor2: EmbeddedWebsite;
    let webFloor01NameplateMentor3: EmbeddedWebsite;
    let webFloor01NameplateMentor3a: EmbeddedWebsite;
    let webFloor01NameplateMentor4: EmbeddedWebsite;
    let webFloor01NameplateMentor5: EmbeddedWebsite;
    let webFloor01NameplateMentor5a: EmbeddedWebsite;
    let webFloor01NameplateMentor6: EmbeddedWebsite;
    let webFloor01NameplateMentor7: EmbeddedWebsite;
    let webFloor01NameplateMentor7a: EmbeddedWebsite;
    let webFloor01NameplateMentor8: EmbeddedWebsite;

    let webFloor01NameplateMentor9: EmbeddedWebsite;
    let webFloor01NameplateMentor9a: EmbeddedWebsite;
    let webFloor01NameplateMentor10: EmbeddedWebsite;
    let webFloor01NameplateMentor11: EmbeddedWebsite;
    let webFloor01NameplateMentor11a: EmbeddedWebsite;
    let webFloor01NameplateMentor12: EmbeddedWebsite;
    let webFloor01NameplateMentor13: EmbeddedWebsite;
    let webFloor01NameplateMentor13a: EmbeddedWebsite;
    let webFloor01NameplateMentor14: EmbeddedWebsite;
    let webFloor01NameplateMentor15: EmbeddedWebsite;
    let webFloor01NameplateMentor15a: EmbeddedWebsite;
    let webFloor01NameplateMentor16: EmbeddedWebsite;
    
    try {
      webAnimationOutside = await WA.room.website.get('daily-announcements-screen-outside');
    } catch(err: any) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    try {
      webFloor01NameplateMentor1 = await WA.room.website.get('nameplate-mentor-1');
      webFloor01NameplateMentor1a = await WA.room.website.get('nameplate-mentor-1-a');
      webFloor01NameplateMentor2 = await WA.room.website.get('nameplate-mentor-2');
      webFloor01NameplateMentor3 = await WA.room.website.get('nameplate-mentor-3');
      webFloor01NameplateMentor3a = await WA.room.website.get('nameplate-mentor-3-a');
      webFloor01NameplateMentor4 = await WA.room.website.get('nameplate-mentor-4');
      webFloor01NameplateMentor5 = await WA.room.website.get('nameplate-mentor-5');
      webFloor01NameplateMentor5a = await WA.room.website.get('nameplate-mentor-5-a');
      webFloor01NameplateMentor6 = await WA.room.website.get('nameplate-mentor-6');
      webFloor01NameplateMentor7 = await WA.room.website.get('nameplate-mentor-7');
      webFloor01NameplateMentor7a = await WA.room.website.get('nameplate-mentor-7-a');
      webFloor01NameplateMentor8 = await WA.room.website.get('nameplate-mentor-8');
    } catch(err: any) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    try {
      webFloor01NameplateMentor9 = await WA.room.website.get('nameplate-mentor-9');
      webFloor01NameplateMentor9a = await WA.room.website.get('nameplate-mentor-9-a');
      webFloor01NameplateMentor10 = await WA.room.website.get('nameplate-mentor-10');
      webFloor01NameplateMentor11 = await WA.room.website.get('nameplate-mentor-11');
      webFloor01NameplateMentor11a = await WA.room.website.get('nameplate-mentor-11-a');
      webFloor01NameplateMentor12 = await WA.room.website.get('nameplate-mentor-12');
      webFloor01NameplateMentor13 = await WA.room.website.get('nameplate-mentor-13');
      webFloor01NameplateMentor13a = await WA.room.website.get('nameplate-mentor-13-a');
      webFloor01NameplateMentor14 = await WA.room.website.get('nameplate-mentor-14');
      webFloor01NameplateMentor15 = await WA.room.website.get('nameplate-mentor-15');
      webFloor01NameplateMentor15a = await WA.room.website.get('nameplate-mentor-15-a');
      webFloor01NameplateMentor16 = await WA.room.website.get('nameplate-mentor-16');
    } catch(err: any) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
    

    // Julia custom TS CC
    WA.room.onEnterLayer("roof-appear-zone").subscribe(() => {
        WA.room.showLayer("roof-appear");
        console.log("HHHHHIIIIIIIII")
      });
      
    WA.room.onEnterLayer("floor").subscribe(() => {
        if(webAnimationOutside) {
          webAnimationOutside.visible = false;
        }
        WA.room.hideLayer("roof");
        WA.room.hideLayer("roof-appear");
        WA.room.hideLayer("walls-bg-front");
        WA.room.hideLayer("sign");
      });
      
    WA.room.onLeaveLayer("floor").subscribe(() => {
        if(webAnimationOutside) {
          webAnimationOutside.visible = true;
        }
        WA.room.showLayer("roof");
        WA.room.showLayer("walls-bg-front");
        WA.room.showLayer("facade-furniture-bg");
        WA.room.showLayer("sign");
      });
  
      WA.room.onEnterLayer("rooms_floor").subscribe(() => {
        if(webFloor01NameplateMentor1) {
          webFloor01NameplateMentor1.visible = false;
        }
        if(webFloor01NameplateMentor1a) {
          webFloor01NameplateMentor1a.visible = false;
        }
        if(webFloor01NameplateMentor2) {
          webFloor01NameplateMentor2.visible = false;
        }
        if(webFloor01NameplateMentor3) {
          webFloor01NameplateMentor3.visible = false;
        }
        if(webFloor01NameplateMentor3a) {
          webFloor01NameplateMentor3a.visible = false;
        }
        if(webFloor01NameplateMentor4) {
          webFloor01NameplateMentor4.visible = false;
        }
        if(webFloor01NameplateMentor5) {
          webFloor01NameplateMentor5.visible = false;
        }
        if(webFloor01NameplateMentor5a) {
          webFloor01NameplateMentor5a.visible = false;
        }
        if(webFloor01NameplateMentor6) {
          webFloor01NameplateMentor6.visible = false;
        }
        if(webFloor01NameplateMentor7) {
          webFloor01NameplateMentor7.visible = false;
        }
        if(webFloor01NameplateMentor7a) {
          webFloor01NameplateMentor7a.visible = false;
        }
        if(webFloor01NameplateMentor8) {
          webFloor01NameplateMentor8.visible = false;
        }

        if(webFloor01NameplateMentor9) {
          webFloor01NameplateMentor9.visible = false;
        }
        if(webFloor01NameplateMentor9a) {
          webFloor01NameplateMentor9a.visible = false;
        }
        if(webFloor01NameplateMentor10) {
          webFloor01NameplateMentor10.visible = false;
        }
        if(webFloor01NameplateMentor11) {
          webFloor01NameplateMentor11.visible = false;
        }
        if(webFloor01NameplateMentor11a) {
          webFloor01NameplateMentor11a.visible = false;
        }
        if(webFloor01NameplateMentor12) {
          webFloor01NameplateMentor12.visible = false;
        }
        if(webFloor01NameplateMentor13) {
          webFloor01NameplateMentor13.visible = false;
        }
        if(webFloor01NameplateMentor13a) {
          webFloor01NameplateMentor13a.visible = false;
        }
        if(webFloor01NameplateMentor14) {
          webFloor01NameplateMentor14.visible = false;
        }
        if(webFloor01NameplateMentor15) {
          webFloor01NameplateMentor15.visible = false;
        }
        if(webFloor01NameplateMentor15a) {
          webFloor01NameplateMentor15a.visible = false;
        }
        if(webFloor01NameplateMentor16) {
          webFloor01NameplateMentor16.visible = false;
        }

        WA.room.hideLayer("facade-furniture-fg");
        WA.room.hideLayer("facade");
        WA.room.hideLayer("facade-furniture-bg");
      });
      
    WA.room.onLeaveLayer("rooms_floor").subscribe(() => {
      if(webFloor01NameplateMentor1) {
        webFloor01NameplateMentor1.visible = true;
      }
      if(webFloor01NameplateMentor1a) {
        webFloor01NameplateMentor1a.visible = true;
      }
      if(webFloor01NameplateMentor2) {
        webFloor01NameplateMentor2.visible = true;
      }
      if(webFloor01NameplateMentor3) {
        webFloor01NameplateMentor3.visible = true;
      }
      if(webFloor01NameplateMentor3a) {
        webFloor01NameplateMentor3a.visible = true;
      }
      if(webFloor01NameplateMentor4) {
        webFloor01NameplateMentor4.visible = true;
      }
      if(webFloor01NameplateMentor5) {
        webFloor01NameplateMentor5.visible = true;
      }
      if(webFloor01NameplateMentor5a) {
        webFloor01NameplateMentor5a.visible = true;
      }
      if(webFloor01NameplateMentor6) {
        webFloor01NameplateMentor6.visible = true;
      }
      if(webFloor01NameplateMentor7) {
        webFloor01NameplateMentor7.visible = true;
      }
      if(webFloor01NameplateMentor7a) {
        webFloor01NameplateMentor7a.visible = true;
      }
      if(webFloor01NameplateMentor8) {
        webFloor01NameplateMentor8.visible = true;
      }

      if(webFloor01NameplateMentor9) {
        webFloor01NameplateMentor9.visible = true;
      }
      if(webFloor01NameplateMentor9a) {
        webFloor01NameplateMentor9a.visible = true;
      }
      if(webFloor01NameplateMentor10) {
        webFloor01NameplateMentor10.visible = true;
      }
      if(webFloor01NameplateMentor11) {
        webFloor01NameplateMentor11.visible = true;
      }
      if(webFloor01NameplateMentor11a) {
        webFloor01NameplateMentor11a.visible = true;
      }
      if(webFloor01NameplateMentor12) {
        webFloor01NameplateMentor12.visible = true;
      }
      if(webFloor01NameplateMentor13) {
        webFloor01NameplateMentor13.visible = true;
      }
      if(webFloor01NameplateMentor13a) {
        webFloor01NameplateMentor13a.visible = true;
      }
      if(webFloor01NameplateMentor14) {
        webFloor01NameplateMentor14.visible = true;
      }
      if(webFloor01NameplateMentor15) {
        webFloor01NameplateMentor15.visible = true;
      }
      if(webFloor01NameplateMentor15a) {
        webFloor01NameplateMentor15a.visible = true;
      }
      if(webFloor01NameplateMentor16) {
        webFloor01NameplateMentor16.visible = true;
      }

        WA.room.showLayer("facade-furniture-fg");
        WA.room.showLayer("facade");
        WA.room.showLayer("facade-furniture-bg");
      });

    WA.room.area.onLeave('clock').subscribe(closePopup);

    //Popup Memorial tree
    WA.room.onEnterLayer('memorial_tree_sign').subscribe(() => {
        currentPopup = WA.ui.openPopup("memorial-tree-popup","Honoring Gary Morris",[]);
    })
    WA.room.onLeaveLayer('memorial_tree_sign').subscribe(closePopup)
       

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
