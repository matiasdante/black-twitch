var K=Object.defineProperty;var H=(s,e,t)=>e in s?K(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var p=(s,e,t)=>(H(s,typeof e!="symbol"?e+"":e,t),t);import{_ as N}from"./seventv.preload-helper.3.1.9.js";import{i as L,f as I,a9 as q,p as G,a as T,n as W,e as A,r as k,x as r,l as d,m as u,q as b,C as S,I as _,D as F,u as h,F as V,E as C,G as v,Q as P,R as M,_ as y,a0 as Z,B as J,a1 as Q,N as Y,J as X,ag as ee,af as R,W as te,$ as z}from"./seventv.index.3.1.9.js";import{I as se,u as O,k as oe,J as ne,K as ie,l as x,M as ae,N as re,i as de,S as ce,C as le,D as ue}from"./seventv.GearsIcon.3.1.9.js";import{U as $}from"./seventv.UiButton.3.1.9.js";import{U as B}from"./seventv.UiScrollable.3.1.9.js";import{C as he,D as pe}from"./seventv.index.3.1.93.js";import{i as me}from"./seventv.index.3.1.92.js";const D={api:"https://7tv.io/egvault/v1"},ge=se("egvault",{state:()=>({subscription:null,products:[],currentProduct:null,currentPlan:null}),getters:{subscribed:s=>{var e;return((e=s.subscription)==null?void 0:e.active)??!1},subEndDate:s=>{var e;return(e=s.subscription)!=null&&e.end_at?new Date(s.subscription.end_at):new Date(0)},subProduct:s=>s.products.find(e=>e.name==="subscription")},actions:{async fetchSub(s){const t=await(await fetch(`${D.api}/subscriptions/${s}`,{})).json();return this.subscription=t,t},async fetchProducts(){const e=await(await fetch(D.api+"/products")).json();return this.products=e,e}}}),U=Symbol("ActorContext");class we{constructor(){p(this,"user",null);p(this,"sub",null);p(this,"token",O("app.7tv.token"));p(this,"editAnySet",!1);p(this,"platform",null);p(this,"platformUserID",null);p(this,"query",null)}setPlatformUserID(e,t){this.platform=e,this.platformUserID=t}logout(){W(()=>{this.token=""})}}function fe(){const s=ge();let e=L(U,null);return e||(e=I(new we),e.query=he(pe,{},{}),e.query.onResult(t=>{var n;(n=t==null?void 0:t.data)!=null&&n.user&&(e.user=structuredClone(q(t.data.user)))}),G(U,e),T(()=>e.platformUserID,t=>{!t||!e.query||e.query.load(e.query.document.value,{id:e.platformUserID,platform:e.platform})},{immediate:!0}),T(()=>{var t;return(t=e.user)==null?void 0:t.id},t=>{t&&s.fetchSub(t).then(n=>{!n||!n.active||(e.sub=n)}).catch(()=>{})})),e}const E=s=>(P("data-v-616c201b"),s=s(),M(),s),ve={class:"seventv-settings-backup"},_e=E(()=>u("h3",null,"Backup",-1)),be=E(()=>u("p",null,"Export your current settings or import from a settings file",-1)),ye={class:"seventv-settings-backup-buttons"},xe={key:0},ke=E(()=>u("p",{class:"seventv-settings-backup-error"},"There was an error exporting/importing your settings!",-1)),Ae=[ke],Fe={key:1,class:"seventv-settings-backup-warning-container"},Ve=E(()=>u("h5",{class:"seventv-settings-backup-warning"},"Settings unable to export/import:",-1)),Se=A({__name:"SettingsViewBackup",setup(s){const{platform:e}=oe(),t=k(!1),n=ne().map(a=>a.label).filter(a=>a!=="");async function g(){t.value=!1;try{const a=await ie(),o=document.createElement("a");o.href=a,o.download=`7tv_settings_${e}-${new Date().toLocaleDateString()}.json`,o.click(),URL.revokeObjectURL(a)}catch(a){t.value=!0,x.error("failed to export settings",a.message)}}async function m(){t.value=!1;const a=await i();if(!a)return;const o=await w(a[0]);let c;try{c=JSON.parse(o)}catch(f){x.error("failed to parse settings file",f.message),t.value=!0;return}let l=[];try{l=ae(c)}catch(f){x.error("failed to deserialize settings file",f.message),t.value=!0;return}x.debugWithObjects(["<Settings>","Deserialized settings file"],[l]);try{await re(l),x.info("<Settings>","Loaded settings from file")}catch(f){x.error("failed to save settings from file",f.message),t.value=!0}}async function i(){return new Promise(a=>{const o=document.createElement("input");o.type="file",o.accept="application/json",o.onchange=()=>a(o.files),o.oncancel=()=>a(null),o.click()})}async function w(a){return new Promise((o,c)=>{const l=new FileReader;l.readAsText(a,"utf-8"),l.onload=()=>{o(l.result)},l.onerror=f=>c(f)})}return(a,o)=>(r(),d("main",ve,[_e,be,u("div",ye,[b($,{class:"seventv-settings-backup-button",onClick:g},{default:S(()=>[_("Export")]),_:1}),b($,{class:"seventv-settings-backup-button",onClick:m},{default:S(()=>[_("Import")]),_:1})]),t.value?(r(),d("div",xe,Ae)):F("",!0),h(n).length>0?(r(),d("div",Fe,[Ve,(r(!0),d(V,null,C(h(n),c=>(r(),d("p",{key:c,class:"seventv-settings-backup-info"},v(c),1))),128))])):F("",!0)]))}}),Ee=y(Se,[["__scopeId","data-v-616c201b"]]),Te=s=>(P("data-v-a02322cc"),s=s(),M(),s),Ie={class:"seventv-settings-compat"},Ce=Te(()=>u("h3",null,[_(" Compatibility "),u("p",null,"Scan your extensions for compatibility issues")],-1)),Pe=["src"],Me=A({__name:"SettingsViewCompat",setup(s){const{browser:e}=de(),t=L(Z,""),n=e.name!=="Firefox";return n||window.open(t+"#/compat","_blank"),(g,m)=>(r(),d("main",Ie,[Ce,n?(r(),d("iframe",{key:0,src:h(t)+"#/compat?noheader=1"},null,8,Pe)):F("",!0)]))}}),Re=y(Me,[["__scopeId","data-v-a02322cc"]]),$e=["sticky"],De=["id"],Ue=A({__name:"SettingsViewConfigCat",props:{name:{},nodes:{}},setup(s,{expose:e}){const t=s,n=j(),g=k(new Set(t.nodes.map(o=>o.key).filter(o=>!n.seen.includes(o)))),m=k(!1),i=k();me(i,([o])=>{if(m.value=o.isIntersecting,!m.value)return;n.intersectingSubcategory=t.name;const c=o.target.getElementsByClassName("seventv-settings-node");for(const l of Array.from(c)){const f=l.getAttribute("data-key");f&&n.markSettingAsSeen(f)}},{threshold:.75,rootMargin:"0px 0px -50% 0px"});function w(o){g.value.delete(o),n.markSettingAsSeen(o)}function a(){var o;(o=i.value)==null||o.scrollIntoView({block:"start"})}return e({name:t.name,scrollIntoView:a}),(o,c)=>(r(),d("div",{ref_key:"catRef",ref:i,sticky:m.value,class:"seventv-settings-view-subcategory"},[o.name?(r(),d("h3",{key:0,id:o.name,ref:"subcategoryRefs",class:"seventv-settings-subcategory-header"},v(o.name),9,De)):F("",!0),(r(!0),d(V,null,C(o.nodes,l=>(r(),J(ce,{key:l.key,node:l,unseen:g.value.has(l.key),onSeen:f=>w(l.key)},null,8,["node","unseen","onSeen"]))),128))],8,$e))}}),Ne=y(Ue,[["__scopeId","data-v-e44d57d0"]]),Le={key:0,class:"seventv-settings-view-container"},ze=A({__name:"SettingsViewConfig",setup(s){const e=j(),t=k([]);return T(()=>e.scrollpoint,()=>{var n;(n=t.value.find(g=>g.name==e.scrollpoint))==null||n.scrollIntoView()}),(n,g)=>h(e).mappedNodes[h(e).category]?(r(),d("div",Le,[b(B,null,{default:S(()=>[(r(!0),d(V,null,C(Object.entries(h(e).mappedNodes[h(e).category]),([m,i])=>(r(),d("div",{key:m,class:"seventv-settings-subcategory"},[b(Ne,{ref_for:!0,ref_key:"subCats",ref:t,name:m,nodes:i},null,8,["name","nodes"])]))),128))]),_:1})])):F("",!0)}}),Oe=y(ze,[["__scopeId","data-v-c77af354"]]),Be={},je={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Ke=u("path",{d:"M0 480H144 512 640V352c0-59.6-40.8-109.8-96-124V192c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192v8.2C40.1 220 0 273.3 0 336V480z"},null,-1),He=[Ke];function qe(s,e){return r(),d("svg",je,He)}const Ge=y(Be,[["render",qe]]);var We={VITE_APP_SITE:"https://7tv.app",VITE_APP_API:"https://7tv.io/v3",VITE_APP_API_GQL:"https://7tv.io/v3/gql",VITE_APP_API_EVENTS:"wss://events.7tv.io/v3",VITE_APP_API_EGVAULT:"https://7tv.io/egvault/v1",VITE_APP_HOST:"https://extension.7tv.gg",VITE_USER_NODE_ENV:"production",VITE_APP_NAME:"7TV",VITE_APP_VERSION:"3.1.9",VITE_APP_VERSION_BRANCH:"",VITE_APP_CHANGELOG:`### 3.1.9

- Remove hosted-site functionality
- Use new pubsub source

### 3.1.8

- Tomfoolery (april fools)

### 3.1.7

- Fixed the profile redirection when clicking on a user on the Twitch dashboard
- Fixed some keyboard shortcuts not working
- Added an Always On autocompletion option for emotes
- Fixed an issue where the default highlight sound would not play on Firefox

### 3.1.6

- Fixed an issue causing Twitch chat / moderation tools to not work properly
- Removed old kick auth
- Fixed an issue with the Twitch chat not showing a cooldown timer

### 3.1.5

- Entitlements like paints and badges should now better reflect what the user has equipped
- Fixed an issue with entitlements on accounts with multiple connections
- Fixed an issue with causing animated avatars to not work
- Added animated avatars to 7TV user card

### 3.1.4

- Fixed an issue with avatars not loading

### 3.1.3

- Added option hide shared chat
- Fixed an issue with profile picture in shared chat
- Fixed extension login
- Fixed an issue when users had multiple personal emote sets

### 3.1.2

- **Implement support for the new Kick site:**
  - Chat emotes
  - Emote menu
  - Emote auto-completion
  - Cosmetics
  - Settings
- Added option to settings to hide Stories from the sidebar
- Fixed settings to hide recommended channels and viewers also watch channels
- Fixed an issue where history navigation is accidentally triggered during IME composition
- Added option to highlight messages of specific usernames
- Added option to highlight messages based on badges
- Added button to user card to toggle highlighting for a users messages
- Added mod icon for warning users to chat mod icons and user card
- Added an option to limit the drop shadows on paints
- Added more drop shadow settings
- Added link to creators 7TV profile to emote cards of 7TV emotes
- Fixed a bug that could cause issues when clicking an emoji in chat
- Fixed an issue with emote sets not switching on channel switch
- Fixed an issue with making users unable to chat
- Added an option to expand sidebar on twitch when hovering

### 3.1.1

- Fixed video player stats not showing
- Pass rendering of animated messages to twitch
- Add option to hide on screen celebrations
- Fixed badge width on kick
- Fixed an issue where settings would be hidden due to auto-filling the searchbox

### 3.1.0

- Added rich embeds for 7TV emotes.
- Added custom commands /search, /add, /remove and /rename to manage 7TV emotes.
- Added /song that uses the AudD api to recognize songs. (Requires an api token from [AudD](https://audd.io/))
- Added /refresh to reload emotes.
- Added /nuke to moderate multiple messages at once. Can be enabled in the settings.
- Fixed native chat width.
- Make all setting pages searchable.

### 3.0.17

- Reinstated animated avatars
- Fixed an issue where links would include a period at the end
- Added an option to hide the channel point balance button under the chat input box
- Updated background of the current emote tab selection
- Fixed an issue where suspicious users were not highlighted and clips not being displayed in chat
- Fixed an issue which caused timestamps to count beyond 24 hours
- Fixed an issue which caused scrolling to not work while scrolling through a category
- Fixed an issue where lowercase cheers were displayed as text
- Added an option to hide the community challenge contributions in the chat
- Fixed extension not working on twitch for some users (React 18 support)
- Fixed an issue where chat messages (like announcements) did not use the channel accent color
- Fixed an issue where an emote with a long alias would cause the alias to go outside of the tooltip
- Added an option to hide timestamps in vods
- Fixed an issue which sometimes caused chat badges to not appear
- Fixed an issue that caused replies in threads to not appear
- Fixed an issue where replies in threads could not be selected
- Fixed an issue where switching the selected emote-set would not be detected
- Fixed an issue where the emote menu button did not appear on Kick
- Fixed an issue which sometimes caused old messages to not appear
- Sort emotes alphabetically with tab auto-completion on Kick
- Removed option to hide the React button on Twitch
- Added emote support for introduction & watch streak messages.
- Fixed an issue that caused suspicious user highlights to not persist
- Fixed an issue that caused returning users to not be highlighted
- Added an option to show raider highlights
- Added an option to show returning user highlights
- Fixed an issue that caused international names to not always display logins
- Fixed an issue that caused Twitch VODs to not load emotes
- Fixed an issue that caused emote names in emote cards to overflow
- Fixed an issue that caused certain words to not display in chat

### 3.0.16

- Added an option to select alternating background color for chat messages
- Added a tip to the favorite menu to help users favorite emotes if none are found
- Fixed an issue where personal emote sets remained in cache forever
- Fixed an issue which prevented users from using two different personal emote sets at once
- Fixed an issue where seasonal global emotes stayed in cache permanently
- Fixed an issue with tab auto-completion on Kick
- Fixed emote tile width in emote menu
- Fixed "hidden subscription status" message in the User Card
- Fixed extraneous emote menu blank space when "Live Input Search" was enabled
- Fixed an issue with deleting messages using mod icons
- Fixed an issue where the extension menu displayed incorrectly in Chromium-based browsers

### 3.0.15

- Added a backup tab to the settings menu for importing & exporting settings
- Added an option to select the default Emote Menu tab
- Added artist attribution to the emote card
- Added ability to reset settings to their defaults
- Fixed an issue where emotes would take a long time to load if external emote providers gave slow response times
- Fixed an issue where mentioning yourself would highlight the message
- Fixed an issue where replying to a thread starting from your own message would highlight the message
- Fixed a regression in previous nightly build causing channel emote sets to not receive EventAPI subscriptions
- Removed old deprecated fallback cosmetics fetching using the v2 API

### 3.0.14

- Added a shortcut (Ctrl+E) to open the Emote Menu
- Added shortcuts (Up/Down Arrows) to switch between providers in the Emote Menu
- Search in the Emote Menu will now automatically open the nearest tab where matches are found
- The input box in the Emote Menu is now focused automatically upon opening
- Added an option to show stream stats such as latency, resolution, bitrate, etc.
- Added an option to set click actions on the video player (pause/unpause and mute/unmute)
- Added an option to hide player extensions
- Added iterable tab-completion on Kick
- Fixed a user card crash
- Fixed an issue with the EventAPI connection closing on the first initialization
- Fixed an issue that prevented new chatters from appearing in autocompletion
- Fixed an issue which squished tooltips when hovering an emote on the far right side of chat
- Fixed an issue which hid historical messages on Kick
- Increased the default value for Message Batching from 150 to 250

### Version 3.0.13

- Added an option to hide the new mature content dialogs on Twitch
- Added formatting support for Hype Chat
- Added options to hide Hype Chats and the Hype Chat button
- Fixed an issue which prevented moderator data from loading in User Cards
- Fixed an issue where nametags with blending paints did not correctly use the base color and appeared invisible instead
- Kick:
  - Added a settings menu
  - Added an option to set a delay betweet rendering new messages (Message Batching)
  - Added an option to set alternating backgrounds between chat messages
  - The chat input box on Kick no longers loses focus during slow mode
  - Zero-Width Emotes should now appear properly in Kick chat

### Version 3.0.12

- Added colon-completion (partial emote matches with ":") on Kick
- Added history navigation (up/down arrow) on Kick
- Updated the auth mechanism on Kick to avoid using third-party cookies

### Version 3.0.11

- Fixed an issue which caused chat to randomly pause on Kick

### Version 3.0.10

- Tweaked some styling issues in the Emote Menu
- Kick:
  - Fixed an issue where historical messages did not consistently render
  - Fixed an issue which caused text to become misplaced when mixed with Kick native emotes
  - Fixed an issue with the Emote Menu & Tooltips not appearing while in theater mode
  - Fixed some issues where the connection flow failed
  - Long text sequences should no longer overflow outside of the chat box
  - Adjusted emoji scale to be in line with other platforms
  - Clicking an emoji in the Emote Menu should now correctly input the unicode instead of the name

### Version 3.0.9

- Added support for [Kick](https://kick.com)
- Added new feature: Paint Tool ([subscribers only](https://7tv.app/store))
- Fixed an issue where the emote menu button was broken due to a recent Twitch change
- Fixed an issue which sometimes caused channel emote sets to disappear
- Fixed an issue which caused stylesheets to be duplicated when running in hosted mode

### Version 3.0.8

- Enabled AVIF images on Firefox >= 113 by default
- Added sub duration & account creation date in the User Card
- Added a button to open an emote's full page from the emote card
- Fixed an issue where clicking the upper drag region in the User Card opened the user's channel
- Fixed user card content overflowing due to long messages
- Fixed chat scroller being visible in the viewer list
- Tentatively fixed an issue which caused the sidebar to crash occasionally

### Version 3.0.7

- Added a new User Card
- Added a tooltip to show the full message when hovering over replies in chat
- Added a "Site Layout" menu where certain features of the Twitch website can be hidden
- Added icons for emoji sets in the Emote Menu
- Added an option to choose chat timestamp format
- Fixed tooltips of nametag paints appearing even if they are disabled
- Reinstated functionality on youtube.com

### Version 3.0.6

- Links in chat messages now respect known TLDs instead of matching any url-like pattern
- Added an option to show timeouts/bans directly in the chat without being a moderator
- Added options to change what emotes are displayed in the colon list and tab-completion carousel
- Added an option to show the text bit for BTTV and FFZ emote modifiers
- Added an option to hide monitored suspicious user highlights
- Added an option to hide restricted suspicious user highlights
- Added an option to highlight your own chat messages
- Fixed an issue in the emote menu where the previously selected provider would close if a set was empty
- Fixed emote cards sometimes not showing who added the emote
- Fixed an issue where the detailed emote card would clip under existing chat messages

### Version 3.0.5

- Reply Threads should now appear properly and show all messages
- Fixed an issue which caused tab-completion to abruptly halt when a chatter's name is selected

### Version 3.0.4

- Added hot-patching functionality to the extension
- Added chat rich embeds which allows twitch clips to preview in chat
- Added a "Copy Message" button
- Added an option to show thumbnail previews of streams when hovering over channels on the sidebar
- Temporarily disabled the "Most Used Emotes" feature, pending a refactor. This fixes severe input lag experienced by some users
- Made some internal changes which may decrease memory usage for some users
- Fixed bad performance on colon-completion by limiting the amount of items shown
- Fixed an issue which caused flickering when hovering on a deleted message
- Fixed a compatibility issue with another extension, causing distorted scrolling behavior in the settings menu

### Version 3.0.3

- Disabled YouTube support temporarily due an issue with request pattern

### Version 3.0.2

- Fixed an issue which caused the chat input to increasingly slow down the page
- Improved the look of Channel Point Redeem & Highlight messages
- Reply threads should now function properly
- Added an option to change how deleted messages appear
- Fixed tab complete breaking when an emote was added both as a sub emote and 3rd party emote
- Fixed a clash with FFZ that led to some messages not appearing correctly
- Fixed an issue which caused sub emotes and emojis to not display in the Favorites tab
- Fixed the Most Used Emotes tab ignoring visibility setting
- Fixed sub emotes not showing in colon-complete while FFZ is enabled
- Fixed an issue which caused VOD chat to crash for some users

### Version 3.0.1

- Added an emote menu shortcut to define favorite emotes (alt+click)
- Added a tab in the emote menu to display favorite and most used emotes
- Added a button to open the native Twitch Emote Menu
- Added an option to change where the 7TV Emote Menu Button appears
- Added an option to modify the scale of emotes in chat
- Added visual settings for highlighted messages, allows changing opacity and over-all style
- Added an option to modify the font size in chat
- Unpausing chat should no longer cause old messages to rapidly scroll through
- Sidebar sub-categories in the settings menu will now highlight what's in view
- Chat History should now load more consistently
- Pressing escape while the emote menu is open now closes it
- Fixed an issue where Twitch badges sometimes failed to load
- Fixed an issue where Twitch emotes sometimes failed to load
- Fixed an issue which caused duplicate colon-complete matches with FFZ
- Fixed an issue that caused tab-completion to break with FFZ
- Fixed an issue where emotes in colon-complete wouldn't load on Mozilla Firefox
- Fixed a conflict causing emotes to sometimes display as broken images while other extensions were installed
- Fixed an issue which prevented highlights from being saved if the "Flash Title" option was turned on
- Fixed an issue where custom highlight sounds did not work if "Play sound on Mention" was turned off
- Fixed an issue where custom highlight flash title did not work if "Flash Title on Mention" was turned off

### Version 3.0.0

<span style="font-size:1.5rem;">7TV has received a total overhaul. Check out what's new:</span>

#### High-Performance Chat

<span style="font-size:larger;">
We've made chat run faster, by rebuilding it from the ground up. Let your processor and memory relax, with 7TV your chat experience will be much more efficient.
</span>

<video autoplay muted loop>
 <source x-src="~/picture/cgl_display_chat.webm" />
</video>

#### New Emote Menu

<span style="font-size:larger;">The emote menu was completely redesigned, it's now divided into providers, emote sets, and even shows emojis! It also got smarter, only loading the images currently in view for much better performance.</span>

![Emote Menu](~/picture/cgl_display_emote_menu.avif)

#### New Settings Menu

<span style="font-size:larger;">7TV has just gotten much more customizable, check out the new menu and tune all the various settings to your liking!</span>

![Settings Menu](~/picture/cgl_display_settings_menu.avif)

#### Personal Emotes

<span style="font-size:larger;">7TV Subscribers can now use Personal Emotes in chat! These are emotes that can be used globally, but only by you. Get your own by <a href="https://7tv.app/store" target="_blank">subscribing</a>.</span>

![Personal Emotes](~/picture/cgl_display_personal_emotes.avif)

#### Dynamic Cosmetics

<span style="font-size:larger;">Badges, Paints & Animated Avatars will now update instantly. That's right, no more wait times!</span>

![Dynamic Cosmetics](~/picture/cgl_display_dynamic_cosmetics.avif)

#### Custom Chat Highlights

<span style="font-size:larger;">Set up custom highlights for specific phrases in chat messages, with a color, label, title flash and custom sounds. Use Regular Expressions for even greater control.</span>

![Chat Highlights](~/picture/cgl_display_highlights.avif)

#### Tab-Completion Carousel

<span style="font-size:larger;">View matches as you go when using TAB to find emotes!</span>

![Emote Carousel](~/picture/cgl_display_emote_carousel.avif)

#### AVIF Support

<span style="font-size:larger;">
We are the first emote provider to support WEBP, and as we've inspired others to do the same, we're taking the initiative of supporting AVIF (AV1 Image File Format)!
AVIF is the image variant of the AV1 Video Codec, capable of shrinking image sizes from 20% to 90% over a GIF.
</span>

AVIF will now be automatically served to users of Google Chrome 100+ (or chromium-based browsers).

![AVIF](~/picture/cgl_display_avif.svg)

#### Mod Logs

<span style="font-size:larger;">View recent mod actions with the Mod Logs menu.</span>

#### Much more to come

<span style="font-size:larger;">This is just the beginning! We've rewritten the entire extension with a modular, scalable codebase just waiting to be expanded upon. Expect many new additions to come!</span>

And of course, this is an open-source project. Anyone is welcome to submit a pull request via <a href="https://github.com/seventv/extension" target="_blank">GitHub</a>.
`,BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ze={class:"seventv-settings-home"},Je={class:"seventv-settings-home-body"},Qe={class:"seventv-settings-home-changelog"},Ye={class:"seventv-settings-home-footer"},Xe={class:"seventv-settings-app-info"},et={class:"seventv-settings-compact"},tt={class:"seventv-version"},st={class:"seventv-version-remote"},ot={key:1},nt={class:"seventv-settings-compact"},it=A({__name:"SettingsViewHome",setup(s){var w;const e="7TV",t=We.VITE_APP_CONTAINER??"Extension",n="https://7tv.io/v3",g="3.1.9",m=seventv.hosted||!1,i=(w=seventv.host_manifest)==null?void 0:w.version;return(a,o)=>{const c=Q("tooltip");return r(),d("div",Ze,[u("div",Je,[b(B,null,{default:S(()=>[u("div",Qe,[b(le)])]),_:1}),u("div",Ye,[u("div",Xe,[u("span",et,v(h(e))+" ("+v(h(t))+")",1),u("span",tt,[h(m)?(r(),d(V,{key:0},[u("span",null,"v"+v(h(i)),1),Y((r(),d("span",st,[b(Ge)])),[[c,"Running in Hosted Mode"]])],64)):(r(),d("span",ot,"v"+v(h(g)),1))]),u("span",nt,"API: "+v(h(n)),1)])])])])}}}),at=y(it,[["__scopeId","data-v-3cf98acc"]]);function rt(s){try{return JSON.parse(atob(s.split(".")[1]))}catch{return}}const dt=s=>(P("data-v-802a40c5"),s=s(),M(),s),ct={class:"profile"},lt={key:0},ut=["href"],ht=dt(()=>u("br",null,null,-1)),pt=A({__name:"SettingsViewProfile",setup(s){const e="https://7tv.app",t=e+"/extension/auth",n=fe(),g=O("app.7tv.token"),m=k(!1);let i=null,w=null;const a=c=>{var l;if(c.data)switch(c.data.type){case"7tv-token":if(!c.data.token)return;if(w==null||w.pause(),i==null||i.close(),window.removeEventListener("message",a),(((l=rt(c.data.token))==null?void 0:l.exp)??0)*1e3<Date.now()){m.value=!0;return}g.value=c.data.token;break}};function o(){if(g.value===""){if(i&&!i.closed){i.focus();return}i=window.open(t,"7tv-auth","width=400,height=600"),i&&(window.addEventListener("message",a),w=ue(()=>{i==null||i.postMessage("7tv-token-request","*")},100))}}return X(o),ee(()=>{i==null||i.close(),window.removeEventListener("message",a)}),(c,l)=>(r(),d("div",ct,[m.value?(r(),d("div",lt,[_(" The 7TV session has expired, please sign out of the "),u("a",{href:h(e),target:"_blank"},"7TV website",8,ut),_(" and then back in. ")])):h(n).user&&h(n).token?(r(),d(V,{key:1},[_(" You are authenticated with 7TV "),ht,_(" Try using the the custom 7TV commands if a channel where you have editor rights ")],64)):(r(),d("button",{key:2,class:"login-button",onClick:o},"Sign in"))]))}}),mt=y(pt,[["__scopeId","data-v-802a40c5"]]),gt=z(()=>N(()=>import("./seventv.PaintTool.3.1.9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),wt=z(()=>N(()=>import("./seventv.Store.3.1.9.js"),__vite__mapDeps([11,1]),import.meta.url));class ft{constructor(){p(this,"open",!1);p(this,"view",null);p(this,"category","");p(this,"scrollpoint","");p(this,"intersectingSubcategory","");p(this,"seen",[]);p(this,"mappedNodes",I({Home:{}}));this.switchView("home");const e=localStorage.getItem(R.SEEN_SETTINGS);if(e)for(const t of e.split(","))this.seen.push(t)}toggle(){this.open=!this.open}switchView(e){this.view=te(vt[e])}markSettingAsSeen(...e){for(const t of e)this.seen.indexOf(t)===-1&&this.seen.push(t);localStorage.setItem(R.SEEN_SETTINGS,this.seen.join(","))}}const vt={home:at,config:Oe,profile:mt,compat:Re,backup:Ee,store:wt,paint:gt},_t=I(new ft);function j(){return _t}export{fe as a,rt as d,j as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./seventv.PaintTool.3.1.9.js","./seventv.index.3.1.9.js","./seventv.GearsIcon.3.1.9.js","./seventv.useCosmetics.3.1.9.js","./seventv.ChevronIcon.3.1.9.js","./seventv.v4.3.1.9.js","./seventv.ChatMessage.3.1.9.js","./seventv.UiButton.3.1.9.js","./seventv.UiScrollable.3.1.9.js","./seventv.UiFloating.3.1.9.js","./seventv.index.3.1.92.js","./seventv.Store.3.1.9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}