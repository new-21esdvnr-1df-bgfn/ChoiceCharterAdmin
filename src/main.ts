/// <reference types="@workadventure/iframe-api-typings" />

import { EmbeddedWebsite } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    let webAnimationOutside: EmbeddedWebsite = await WA.room.website.get('daily-announcements-screen-outside');

    // Julia custom TS CC
    WA.room.onEnterLayer("roof-appear-zone").subscribe(async() => {
        WA.room.showLayer("roof-appear");
        console.log("HHHHHIIIIIIIII")
      });
      
    WA.room.onEnterLayer("floor").subscribe(async() => {
        webAnimationOutside.visible = false;
        WA.room.hideLayer("roof");
        WA.room.hideLayer("roof-appear");
        WA.room.hideLayer("walls-bg-front");
        WA.room.hideLayer("sign");
      });
      
    WA.room.onLeaveLayer("floor").subscribe(async() => {
        webAnimationOutside.visible = true;
        WA.room.showLayer("roof");
        WA.room.showLayer("walls-bg-front");
        WA.room.showLayer("facade-furniture-bg");
        WA.room.showLayer("sign");
      });
  
      WA.room.onEnterLayer("rooms_floor").subscribe(async() => {
        WA.room.hideLayer("facade-furniture-fg");
        WA.room.hideLayer("facade");
        WA.room.hideLayer("facade-furniture-bg");
      });
      
    WA.room.onLeaveLayer("rooms_floor").subscribe(async() => {
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
