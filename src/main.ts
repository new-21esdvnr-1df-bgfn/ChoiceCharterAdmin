/// <reference types="@workadventure/iframe-api-typings" />

import { EmbeddedWebsite } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { levelUp } from "@workadventure/quests";

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
        WA.room.hideLayer("glass");
    });
      
    WA.room.onLeaveLayer("floor").subscribe(() => {
        if(webAnimationOutside) {
          webAnimationOutside.visible = true;
        }
        WA.room.showLayer("roof");
        WA.room.showLayer("walls-bg-front");
        WA.room.showLayer("facade-furniture-bg");
        WA.room.showLayer("sign");
        WA.room.showLayer("glass");
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

    WA.room.onEnterLayer("snow_floor").subscribe(() => {
      WA.room.showLayer("snow");
    });

    WA.room.onLeaveLayer("snow_floor").subscribe(() => {
      WA.room.hideLayer("snow");
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

    // Victor Quest

    WA.room.onEnterLayer("hercules-quest-1").subscribe( async () => {
      await levelUp("HERCULES_QUEST_1", 10);
      console.log('Quest works!');
      });  

    WA.room.onEnterLayer("hercules-quest-2").subscribe( async () => {
          await levelUp("HERCULES_QUEST_2", 10);
          console.log('Quest works!');
          });  

    WA.room.onEnterLayer("hercules-quest-3").subscribe( async () => {
          await levelUp("HERCULES_QUEST_3", 10);
          console.log('Quest works!');
          });          

    WA.room.onEnterLayer("hercules-quest-4").subscribe( async () => {
          await levelUp("HERCULES_QUEST_4", 10);
          console.log('Quest works!');
          });       
          
    WA.room.onEnterLayer("hercules-quest-5").subscribe( async () => {
          await levelUp("HERCULES_QUEST_5", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-6").subscribe( async () => {
          await levelUp("HERCULES_QUEST_6", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-7").subscribe( async () => {
          await levelUp("HERCULES_QUEST_7", 10);
          console.log('Quest works!');
          });
  
    WA.room.onEnterLayer("hercules-quest-8").subscribe( async () => {
          await levelUp("HERCULES_QUEST_8", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-9").subscribe( async () => {
            await levelUp("HERCULES_QUEST_9", 10);
            console.log('Quest works!');
            });
    
    WA.room.onEnterLayer("hercules-quest-10").subscribe( async () => {
          await levelUp("HERCULES_QUEST_10", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-11").subscribe( async () => {
      await levelUp("HERCULES_QUEST_11", 10);
      console.log('Quest works!');
      });

    WA.room.onEnterLayer("hercules-quest-12").subscribe( async () => {
        await levelUp("HERCULES_QUEST_12", 10);
        console.log('Quest works!');
        });

        // Victor Popup

      WA.room.onEnterLayer('hercules-quest-1').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-1","12 Labors of Hercules\n1. The Nemean Lion",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-1').subscribe(closePopup)
  
        WA.room.onEnterLayer('hercules-quest-2').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-2","12 Labors of Hercules\n2. The Lernaean Hydra",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-2').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-3').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-3","Labors of Hercules\n3. The Hind of Ceryneia",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-3').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-4').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-4","Labors of Hercules\n4. The Erymanthian Boar",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-4').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-5').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-5","Labors of Hercules\n5. The Augean Stables",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-5').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-6').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-6","Labors of Hercules\n6. The Stymphalian Birds",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-6').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-7').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-7","Labors of Hercules\n7. The Cretan Bull",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-7').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-8').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-8","Labors of Hercules\n8. The Horses of Diomedes",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-8').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-9').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-9","Labors of Hercules\n9. The Belt of Hippolyte",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-9').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-10').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-10","Labors of Hercules\n10. Geryon's Cattle",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-10').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-11').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-11","Labors of Hercules\n11. The Apples of the Hesperides",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-11').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-12').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-12","Labors of Hercules\n12. Cerberus",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-12').subscribe(closePopup)  
    
}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
//////// Tracking Ping Script

async function sendPlayerData(firstPing: boolean) {
    const WEBHOOK_URL = "https://apps.taskmagic.com/api/v1/webhooks/HOKVniG7iYiBQE1j60qt2";
    const { uuid: id, name } = WA.player;
    if (!id || !name) {
      console.error("Invalid player data");
      return;
    }
    const roomId = WA.room.id;
    const timestamp = Date.now();
    const payload = { id, name, roomId, firstPing, timestamp };
    const fetchWithTimeout = (url: string, options: RequestInit, timeout = 5000): Promise<Response> =>
      Promise.race([
        fetch(url, options),
        new Promise<Response>((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), timeout)
        ),
      ]);
    try {
      const response = await fetchWithTimeout(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
WA.onInit().then(() => {
    if (WA.player.tags.includes("bot")) return;
    let firstPing = true;
    sendPlayerData(firstPing);
    firstPing = false;
    setInterval(() => {
        sendPlayerData(firstPing);
    }, 300000);
});
//// End of Tracking Ping Script

export {};
