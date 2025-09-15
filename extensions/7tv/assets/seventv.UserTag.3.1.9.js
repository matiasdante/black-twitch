import{u as ue,a as Ve}from"./seventv.useChatEmotes.3.1.9.js";import{f as ce,e as z,x as l,l as m,m as y,G as B,_ as O,r as I,aF as Ge,aG as be,u as M,O as $e,i as Lt,S as It,a as le,a9 as Xe,W as mt,q as P,D as k,h as te,J as ht,F as Y,B as V,I as Z,aA as St,w as ve,n as De,C as fe,t as gt,E as re,d as vt,s as Ke,an as ft,P as Ae,a1 as pe,N as G,H as He,Y as Re,ad as pt,au as Ot,az as yt,a2 as We,M as Et,as as Pt,Q as xt,R as At,a3 as Rt,aH as Bt}from"./seventv.index.3.1.9.js";import{d as ze,S as Nt}from"./seventv.useCosmetics.3.1.9.js";import{t as Ft,u as X,D as Vt,l as ie,j as Ht,F as Ce,L as Wt,h as _t,r as zt,n as Yt,k as qt,H as jt,m as Qt}from"./seventv.GearsIcon.3.1.9.js";import{f as Be,g as Gt}from"./seventv.Transform.3.1.9.js";import{C as Je}from"./seventv.ChatMessage.3.1.9.js";import{d as Xt,h as Kt,f as Jt}from"./seventv.index.3.1.92.js";import{d as Zt}from"./seventv.Async.3.1.9.js";import{U as ea,u as ta}from"./seventv.UiConfirmPrompt.3.1.9.js";import{t as aa,a as bt,b as wt,u as Le,E as Ct,c as na}from"./seventv.Emote.3.1.9.js";import{a as Ye}from"./seventv.useModule.3.1.9.js";import{w as ee,x as ra,y as sa,G as Oe}from"./seventv.index.3.1.93.js";import{S as Ze}from"./seventv.StoreSubscribeButton.3.1.9.js";import{a as oa,u as ia}from"./seventv.Settings.3.1.9.js";import{O as la}from"./seventv.OpenLinkIcon.3.1.9.js";import{v as ua}from"./seventv.v4.3.1.9.js";import{a as et}from"./seventv.useFloatContext.3.1.9.js";import{R as Ne}from"./seventv.ReactHooks.3.1.9.js";import{T as da,U as ca}from"./seventv.UiDraggable.3.1.9.js";import{U as Mt}from"./seventv.UiScrollable.3.1.9.js";const tt=new WeakMap;function $t(a){let t=tt.get(a);return t||(t=ce({isDarkTheme:1,primaryColorHex:null,useHighContrastColors:!0,showTimestamps:!1,showModerationIcons:!1,hovering:!1,pauseReason:new Set(["SCROLL"]),currentChannel:{},imageFormat:"WEBP",twitchBadgeSets:{},blockedUsers:new Set,fontAprilFools:"unset"}),tt.set(a,t)),t}const ma={ref:"tooltip",class:"seventv-tooltip","tooltip-type":"badge"},ha=z({__name:"BadgeTooltip",props:{alt:{}},setup(a){return(t,e)=>(l(),m("div",ma,[y("p",null,B(t.alt),1)],512))}}),ga=O(ha,[["__scopeId","data-v-bfbc76a7"]]),va={class:"seventv-chat-badge"},fa=["srcset","alt"],pa=z({__name:"Badge",props:{alt:{},type:{},badge:{}},setup(a){const t=a,e=I(""),r=I(""),n={twitch:u=>`${u.image1x} 1x, ${u.image2x} 2x, ${u.image4x} 4x`,picture:u=>`${u.profileImageURL.replace(Ge,"28x28")} 1.6x,
		${u.profileImageURL.replace(Ge,"70x70")} 3.8x`,app:u=>u.data.host.files.map((_,w)=>`https:${u.data.host.url}/${_.name} ${w+1}x`).join(", ")}[t.type](t.badge),s=I(),{show:i,hide:v}=be(ga,{alt:t.alt});function h(u){return u.kind==="BADGE"&&t.type==="app"}return h(t.badge)&&(e.value=t.badge.data.backgroundColor??""),typeof t.badge=="string"&&(r.value="25%"),(u,_)=>(l(),m("div",va,[y("img",{ref_key:"imgRef",ref:s,srcset:M(n),alt:u.alt,style:$e({backgroundColor:e.value,borderRadius:r.value}),onMouseenter:_[0]||(_[0]=w=>M(i)(s.value)),onMouseleave:_[1]||(_[1]=w=>M(v)())},null,44,fa)]))}}),Me=O(pa,[["__scopeId","data-v-ca2d1abd"]]),at=new Map;function nt(a,t=!0){const e=at.get(a),r=t&&e?e:new Audio,n=(i=1)=>{if(t&&e){e.volume=i,e.play();return}ya(a).then(v=>{r.src=v,r.volume=i,r.play(),at.set(a,r)})},s=()=>r.pause();return Ft(()=>{r.remove()}),{play:n,stop:s,audio:r}}async function ya(a){const t=await fetch(a);if(!t.ok)throw new Error(`HTTP error: ${t.status} - ${t.statusText}`);return URL.createObjectURL(await t.blob())}const rt=new WeakMap,Ee=X("highlights.custom"),_a=X("highlights.sound_volume");function ba(a){const t=Xt(),e=Lt(It,""),r=ce({ping:nt(e+"/sound/ping.ogg")});let n=rt.get(a);n||(n=ce({highlights:{}}),le(Ee,b=>{if(n){for(const[C,p]of Object.entries(n.highlights))p.persist&&delete n.highlights[C];for(const[,C]of b)n.highlights[C.id]=C,v(C),h(C)}},{immediate:!0}),rt.set(a,n));const s=Zt(function(){if(!n)return;const b=Array.from(Object.values(n.highlights)).filter(C=>C.persist).map(C=>[C.id,Xe({...C,soundFile:Xe(C.soundFile),soundDef:void 0,flashTitleFn:void 0})]);Ee.value=new Map(b)},250);function i(b,C,p){if(!n)return{};const L=n.highlights[b]={...C,id:b,persist:p};return v(L),p&&(Ee.value.set(b,mt(L)),s()),L}function v(b){var L;if(!b.soundFile){(L=b.soundPath)!=null&&L.startsWith("#")&&r[b.soundPath.slice(1)]&&(b.soundDef=r[b.soundPath.slice(1)]);return}const C=new Blob([b.soundFile.data],{type:b.soundFile.type}),p=URL.createObjectURL(C);return b.soundPath=p,b.soundDef=nt(p),p}function h(b){b.flashTitleFn=b.flashTitle?()=>` 💬 Highlight: ${b.label||b.pattern}`:void 0}function u(b){n&&(delete n.highlights[b],s())}function _(b,C){var A,F,j,U;if(!n)return!1;const p=n==null?void 0:n.highlights[b];if(!p)return!1;let L=!1;if(p.phrase||!p.phrase&&!p.username&&!p.badge)if(p.regexp){let d=p.cachedRegExp;if(!d)try{d=new RegExp(p.pattern,"i"),Object.defineProperty(p,"cachedRegExp",{value:d})}catch(T){return ie.warn("<ChatHighlights>","Invalid regexp:",p.pattern??""),C.setHighlight("#878787","Error "+T.message),!1}L=d.test(C.body)}else p.pattern?L=p.caseSensitive?C.body.includes(p.pattern):C.body.toLowerCase().includes(p.pattern.toLowerCase()):typeof p.test=="function"&&(L=p.test(C));else p.username?L=((A=C.author)==null?void 0:A.displayName.toLowerCase())===((F=p.pattern)==null?void 0:F.toLowerCase()):p.badge&&(L=Object.keys(C.badges).indexOf(((j=p.pattern)==null?void 0:j.toLowerCase())??"")>-1&&Object.values(C.badges).indexOf(((U=p.version)==null?void 0:U.toLowerCase())??"")>-1);return L&&(C.setHighlight(p.color,p.label),p.soundDef&&!C.historical&&p.soundDef.play(_a.value/100),p.flashTitleFn&&!C.historical&&o(p,C)),L}const w=I(""),c=I(document.title);let f=0;const g=Vt(()=>{Kt(f++%2===0?w.value:c.value)},1e3,{immediate:!1,immediateCallback:!0});function o(b,C){!b.flashTitleFn||g.isActive.value||(c.value=document.title,w.value=b.flashTitleFn(C),g.resume(),Ht(t).toBe("visible").then(()=>{g.pause(),w.value="",document.title=c.value}))}function $(){return n?Ce(n.highlights):{}}function E(){if(!n)return{};const b=Object.fromEntries(Object.entries(n.highlights).filter(([,C])=>C.phrase===!0||!C.phrase&&!C.username&&!C.badge));return Ce(b)}function x(){if(!n)return{};const b=Object.fromEntries(Object.entries(n.highlights).filter(([,C])=>C.username===!0));return Ce(b)}function q(){if(!n)return{};const b=Object.fromEntries(Object.entries(n.highlights).filter(([,C])=>C.badge===!0));return Ce(b)}function N(b,C){if(!n)return;const p=n.highlights[b];p&&(n.highlights[C]=p,delete n.highlights[b],p.id=C,s())}return{define:i,remove:u,getAll:$,getAllPhraseHighlights:E,getAllUsernameHighlights:x,getAllBadgeHighlights:q,save:s,updateId:N,checkMatch:_,updateSoundData:v,updateFlashTitle:h}}const st=new WeakMap;function Ie(a){let t=st.get(a);t||(t=ce({TWITCH:{onShowViewerCard:()=>{},onShowViewerWarnPopover:()=>{}},YOUTUBE:{},KICK:{},UNKNOWN:{}}),st.set(a,t));function e(s,i,v){t&&(t[s][i]=v)}function r(s,i,v){if(!t||!s||!s.currentTarget||!i)return!1;const h=s.currentTarget.getBoundingClientRect();return t[a.platform].onShowViewerCard(i,0,v,h.bottom),!0}function n(s,i,v){return!t||!s||!i?!1:(t[a.platform].onShowViewerWarnPopover(s,i,v),!0)}return{update:e,openViewerCard:r,openViewerWarnPopover:n}}const wa=ee`
	query ViewerCard(
		$channelID: ID!
		$channelIDStr: String!
		$channelLogin: String!
		$targetLogin: String!
		$isViewerBadgeCollectionEnabled: Boolean!
	) {
		activeTargetUser: user(login: $targetLogin) {
			id
		}
		targetUser: user(login: $targetLogin, lookupType: ALL) {
			id
			login
			bannerImageURL
			displayName
			displayBadges(channelID: $channelID) {
				...badge
				description
			}
			chatColor
			profileImageURL(width: 70)
			createdAt
			relationship(targetUserID: $channelID) {
				cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
					months
					daysRemaining
				}
				followedAt
				subscriptionBenefit {
					id
					tier
					purchasedWithPrime
					gift {
						isGift
					}
				}
			}
			isModerator(channelID: $channelIDStr)
			stream {
				id
				game {
					id
					displayName
				}
				viewersCount
			}
		}
		channelUser: user(login: $channelLogin) {
			id
			login
			displayName
			subscriptionProducts {
				...subProduct
			}
			self {
				banStatus {
					isPermanent
				}
				isModerator
			}
		}
		currentUser {
			login
			id
		}
		channelViewer(userLogin: $targetLogin, channelLogin: $channelLogin) {
			id
			earnedBadges @include(if: $isViewerBadgeCollectionEnabled) {
				...badge
				description
			}
		}
		channel(id: $channelID) {
			id
			moderationSettings {
				canAccessViewerCardModLogs
			}
		}
	}

	${aa}
	${bt}
`,Ca=ee`
	query ViewerCardModLogs($channelLogin: String!, $channelID: ID!, $targetID: ID!) {
		targetUser: user(id: $targetID) {
			id
			login
		}
		channelUser: user(login: $channelLogin) {
			id
			login
		}
		currentUser {
			login
			id
		}
		banStatus: chatRoomBanStatus(channelID: $channelID, userID: $targetID) {
			bannedUser {
				id
				login
				displayName
			}
			createdAt
			expiresAt
			isPermanent
			moderator {
				id
				login
				displayName
			}
			reason
		}

		viewerCardModLogs(channelID: $channelID, targetID: $targetID) {
			messages: messages(first: 1000) {
				... on ViewerCardModLogsMessagesError {
					code
				}
				... on ViewerCardModLogsMessagesConnection {
					pageInfo {
						hasNextPage
					}
					count
				}
			}
			bans: targetedActions(first: 99, type: BAN) {
				...modLogsTargetedActionsResultFragment
			}
			timeouts: targetedActions(first: 99, type: TIMEOUT) {
				...modLogsTargetedActionsResultFragment
			}
			unbans: targetedActions(first: 99, type: UNBAN) {
				...modLogsTargetedActionsResultFragment
			}
			untimeouts: targetedActions(first: 99, type: UNTIMEOUT) {
				...modLogsTargetedActionsResultFragment
			}
			warnings: targetedActions(first: 99, type: WARN) {
				...modLogsTargetedActionsResultFragment
			}
			comments(first: 100) {
				... on ModLogsCommentConnection {
					edges {
						cursor
						node {
							id
							timestamp
							text
							channel {
								id
							}
							author {
								id
								login
								displayName
								chatColor
							}
						}
					}
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
				}
				... on ModLogsCommentsError {
					code
				}
				__typename
			}
		}
	}

	fragment modLogsTargetedActionsResultFragment on ModLogsTargetedActionsResult {
		__typename
		... on ModLogsTargetedActionsError {
			code
		}
		... on ModLogsTargetedActionsConnection {
			count
			pageInfo {
				hasNextPage
			}
			edges {
				cursor
				node {
					...modLogsTargetedActionFragment
				}
			}
		}
	}

	fragment modLogsTargetedActionFragment on ModLogsTargetedAction {
		id
		localizedLabel {
			fallbackString
			...modActionTokens
		}
		timestamp
		type
	}

	fragment modActionTokens on ModActionsLocalizedText {
		localizedStringFragments {
			...modActionText
		}
	}

	fragment modActionText on ModActionsLocalizedTextFragment {
		token {
			... on ModActionsLocalizedTextToken {
				text
			}
			... on User {
				displayName
				login
				id
			}
		}
	}
`,Ma=ee`
	#import "twilight/features/message/fragments/message-sender/sender-fragment.gql"
	#import "twilight/features/moderation/moderation-actions/hooks/use-get-mod-actions/mod-action-tokens-fragment.gql"
	query ViewerCardModLogsMessagesBySender($channelID: ID!, $senderID: ID!, $cursor: Cursor) {
		logs: viewerCardModLogs(channelID: $channelID, targetID: $senderID) {
			messages(first: 50, after: $cursor) {
				... on ViewerCardModLogsMessagesError {
					code
				}
				... on ViewerCardModLogsMessagesConnection {
					edges {
						...viewerCardModLogsMessagesEdgeFragment
					}
					pageInfo {
						hasNextPage
					}
				}
			}
		}
	}
	fragment viewerCardModLogsMessagesEdgeFragment on ViewerCardModLogsMessagesEdge {
		__typename
		node {
			...viewerCardModLogsCaughtMessageFragment
			...viewerCardModLogsChatMessageFragment
			...viewerCardModLogsModActionsMessageFragment
		}
		cursor
	}
	fragment viewerCardModLogsChatMessageFragment on ViewerCardModLogsChatMessage {
		id
		sender {
			id
			login
			chatColor
			displayName
			displayBadges(channelID: $channelID) {
				id
				setID
				version
				__typename
			}
			__typename
		}
		sentAt
		content {
			text
			fragments {
				text
				content {
					... on Emote {
						emoteID: id
						setID
						token
					}
					#mention
					... on User {
						id
					}
					__typename
				}
			}
			__typename
		}
	}
	fragment viewerCardModLogsCaughtMessageFragment on ViewerCardModLogsCaughtMessage {
		id
		status
		category
		sentAt
		resolvedAt
		content {
			text
			fragments {
				text
				content {
					... on Emote {
						emoteID: id
						setID
						token
					}
					... on User {
						id
					}
					__typename
				}
			}
			__typename
		}
		sender {
			id
			login
			chatColor
			displayName
			displayBadges(channelID: $channelID) {
				id
				setID
				version
			}
			__typename
		}
		resolver {
			...sender
		}
		__typename
	}

	fragment viewerCardModLogsModActionsMessageFragment on ViewerCardModLogsModActionsMessage {
		timestamp
		content {
			fallbackString
			...modActionTokens
		}
	}

	fragment modActionTokens on ModActionsLocalizedText {
		localizedStringFragments {
			...modActionText
		}
	}

	fragment modActionText on ModActionsLocalizedTextFragment {
		token {
			... on ModActionsLocalizedTextToken {
				text
			}
			... on User {
				displayName
				login
				id
			}
		}
	}

	fragment sender on User {
		id
		login
		displayName
		chatColor
		displayBadges {
			...badge
		}
	}

	${bt}
`,$a=ee`
	mutation createModComment($input: CreateModeratorCommentInput!) {
		createModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${wt}
`;ee`
	mutation deleteModeratorComment($input: DeleteModeratorCommentInput!) {
		deleteModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${wt}
`;const Ta={},ka={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor"},Ua=y("path",{d:"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"},null,-1),Da=[Ua];function La(a,t){return l(),m("svg",ka,Da)}const Ia=O(Ta,[["render",La]]),Sa={},Oa={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",fill:"currentColor"},Ea=y("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-90.2-70.7c.2-.4 .4-.9 .6-1.3c5.2-11.5 3.1-25-5.3-34.4l-7.4-8.3C497.3 319.2 480 273.9 480 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V51.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM406.2 416L160 222.1v4.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S115.4 416 128 416H406.2zm-40.9 77.3c12-12 18.7-28.3 18.7-45.3H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"},null,-1),Pa=[Ea];function xa(a,t){return l(),m("svg",Oa,Pa)}const Aa=O(Sa,[["render",xa]]),Ra={},Ba={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em",fill:"currentColor"},Na=y("path",{d:"M96 0L63.9 44.9C58.8 52.1 56 60.8 56 69.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L96 0zM224 0L191.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L224 0zm95.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L352 0 319.9 44.9zM128 176V144H64v32 48H0V350.8l29.2 15.3 60-28.6 7.1-3.4 7 3.5L160 366.1l56.8-28.4 7.2-3.6 7.2 3.6L288 366.1l56.8-28.4 7-3.5 7 3.4 60 28.6L448 350.8V224H384V176 144H320v32 48H256V176 144H192v32 48H128V176zM448 386.9l-21.3 11.2-7.1 3.7-7.2-3.4-60.2-28.6-57 28.5-7.2 3.6-7.2-3.6L224 369.9l-56.8 28.4-7.2 3.6-7.2-3.6-57-28.5L35.7 398.4l-7.2 3.4-7.1-3.7L0 386.9V512H448V386.9z"},null,-1),Fa=[Na];function Va(a,t){return l(),m("svg",Ba,Fa)}const Ha=O(Ra,[["render",Va]]),Wa={},za={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},Ya=y("path",{d:"M39.8 263.8L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z"},null,-1),qa=[Ya];function ja(a,t){return l(),m("svg",za,qa)}const Qa=O(Wa,[["render",ja]]),Ga={},Xa={class:"seventv-user-card-actions"};function Ka(a,t){return l(),m("div",Xa)}const Ja=O(Ga,[["render",Ka],["__scopeId","data-v-ac215262"]]);function wl(a){return a.kind==="TEXT"}function Za(a){return a.kind==="LINK"}function en(a){return a.kind==="EMOTE"}function tn(a){return a.kind==="MENTION"}const an=ee`
	mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {
		banUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
				reason
			}
			error {
				code
				minTimeoutDurationSeconds
				maxTimeoutDurationSeconds
			}
		}
	}
`,nn=ee`
	mutation Chat_UnbanUserFromChatRoom($input: UnbanUserFromChatRoomInput!) {
		unbanUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
			}
			error {
				code
			}
		}
	}
`,rn=ee`
	mutation Chat_DeleteChatMessage($input: DeleteChatMessageInput!) {
		deleteChatMessage(input: $input) {
			responseCode
			message {
				id
				sender {
					id
					login
					displayName
				}
				content {
					text
				}
			}
		}
	}
`,sn=ee`
	mutation PinChatMessage($input: PinChatMessageInput!) {
		pinChatMessage(input: $input) {
			pinnedChatMessage {
				id
				pinnedMessage {
					id
				}
			}
			error {
				code
			}
		}
	}
`,on=ee`
	mutation ModUser($input: ModUserInput!) {
		result: modUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`,ln=ee`
	mutation UnmodUser($input: UnmodUserInput!) {
		result: unmodUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`;function qe(a,t){const e=Le();function r(h,u){return e.value?e.value.mutate({mutation:an,variables:{input:{channelID:a.id,bannedUserLogin:t,expiresIn:h,reason:u}}}):Promise.reject("Missing Apollo")}function n(){return e.value?e.value.mutate({mutation:nn,variables:{input:{channelID:a.id,bannedUserLogin:t}}}):Promise.reject("Missing Apollo")}function s(h,u){return e.value?e.value.mutate({mutation:sn,variables:{input:{channelID:a.id,messageID:h,durationSeconds:u,type:"MOD"}}}):Promise.reject("Missing Apollo")}function i(h,u){return e.value?e.value.mutate({mutation:u?ln:on,variables:{input:{channelID:a.id,targetID:h}}}):Promise.reject("Missing Apollo")}function v(h){return e.value?e.value.mutate({mutation:rn,variables:{input:{channelID:a.id,messageID:h}}}):Promise.reject("Missing Apollo")}return{banUserFromChat:r,unbanUserFromChat:n,pinChatMessage:s,deleteChatMessage:v,setUserModerator:i}}const un={},dn={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},cn=y("g",null,[y("path",{"fill-rule":"evenodd",d:"M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 01-4.904-9.458l8.362 8.362A5.972 5.972 0 0110 16zm4.878-2.505a6 6 0 00-8.372-8.372l8.372 8.372z","clip-rule":"evenodd"})],-1),mn=[cn];function hn(a,t){return l(),m("svg",dn,mn)}const gn=O(un,[["render",hn]]),vn={},fn={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},pn=y("g",null,[y("path",{d:"M12 2H8v1H3v2h14V3h-5V2zM4 7v9a2 2 0 002 2h8a2 2 0 002-2V7h-2v9H6V7H4z"}),y("path",{d:"M11 7H9v7h2V7z"})],-1),yn=[pn];function _n(a,t){return l(),m("svg",fn,yn)}const bn=O(vn,[["render",_n]]),wn={},Cn={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},Mn=y("g",null,[y("path",{d:"M11 9.586V6H9v4.414l2.293 2.293 1.414-1.414L11 9.586z"}),y("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z","clip-rule":"evenodd"})],-1),$n=[Mn];function Tn(a,t){return l(),m("svg",Cn,$n)}const kn=O(wn,[["render",Tn]]),Un={},Dn={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},Ln=y("g",null,[y("path",{"fill-rule":"evenodd",d:"M10.954 3.543c-.422-.724-1.486-.724-1.908 0l-6.9 11.844c-.418.719.11 1.613.955 1.613h13.798c.844 0 1.373-.894.955-1.613l-6.9-11.844zM11 15H9v-2h2v2zm0-3H9V7h2v5z","clip-rule":"evenodd"})],-1),In=[Ln];function Sn(a,t){return l(),m("svg",Dn,In)}const On=O(Un,[["render",Sn]]),En={class:"seventv-chat-mod-buttons"},Pn=z({__name:"ModIcons",props:{msg:{}},setup(a){var o,$,E,x,q;const t=a,e=ue(),r=Ie(e),{banUserFromChat:n,deleteChatMessage:s}=qe(e,((o=t.msg.author)==null?void 0:o.username)??"");function i(){t.msg.author&&r.openViewerWarnPopover(t.msg.author.id,t.msg.author.username,0)}const v=I(),h=be(`Ban ${(($=t.msg.author)==null?void 0:$.username)??"???"}`),u=I(),_=be(`Timeout ${((E=t.msg.author)==null?void 0:E.username)??"???"}`),w=I(),c=be(`Warn ${((x=t.msg.author)==null?void 0:x.username)??"???"}`),f=I(),g=be(`Delete message by ${((q=t.msg.author)==null?void 0:q.username)??"???"}`);return(N,b)=>(l(),m("span",En,[N.msg.author&&!N.msg.author.isActor?(l(),m("span",{key:0,ref_key:"banRef",ref:v,onClick:b[0]||(b[0]=C=>M(n)(null)),onMouseenter:b[1]||(b[1]=C=>M(h).show(v.value)),onMouseleave:b[2]||(b[2]=C=>M(h).hide())},[P(gn)],544)):k("",!0),N.msg.author&&!N.msg.author.isActor?(l(),m("span",{key:1,ref_key:"timeoutRef",ref:u,onClick:b[3]||(b[3]=C=>M(n)("10m")),onMouseenter:b[4]||(b[4]=C=>M(_).show(u.value)),onMouseleave:b[5]||(b[5]=C=>M(_).hide())},[P(kn)],544)):k("",!0),N.msg.author&&!N.msg.author.isActor?(l(),m("span",{key:2,ref_key:"warnRef",ref:w,onClick:b[6]||(b[6]=C=>i()),onMouseenter:b[7]||(b[7]=C=>M(c).show(w.value)),onMouseleave:b[8]||(b[8]=C=>M(c).hide())},[P(On)],544)):k("",!0),y("span",{ref_key:"deleteRef",ref:f,onClick:b[9]||(b[9]=C=>M(s)(N.msg.id)),onMouseenter:b[10]||(b[10]=C=>M(g).show(f.value)),onMouseleave:b[11]||(b[11]=C=>M(g).hide())},[P(bn)],544)]))}}),xn=O(Pn,[["__scopeId","data-v-743de9d0"]]),Pe=Wt.Get();function An(a){const t=ra(sa,{errorPolicy:"all"}),e=ue(),r=Ve(e),n=oa();a||le(()=>e.user,c=>{var f,g;c&&(a=(g=(f=c.connections)==null?void 0:f.find(o=>o.platform===e.platform))==null?void 0:g.emote_set_id)},{immediate:!0});const s=te(()=>{if(a&&r.sets[a])return r.sets[a]}),i=te(()=>{var c;return n.user?e.id==n.platformUserID||(((c=e.user)==null?void 0:c.editors)??[]).some(f=>{var g;return f.id==((g=n.user)==null?void 0:g.id)})?!0:n.editAnySet:!1}),v=te(()=>n.token?i.value:!1),h=te(()=>i.value&&!n.token);async function u(c,f){var o;if(!a){Pe.error("No set ID found");return}const g=await t.mutate({action:"ADD",emote_id:c,id:a,name:f});if((o=g==null?void 0:g.errors)!=null&&o.length){const $=g.errors[0];throw new Oe($.message,$)}return g}async function _(c){var g;if(!a){Pe.error("No set ID found");return}const f=await t.mutate({action:"REMOVE",emote_id:c,id:a});if((g=f==null?void 0:f.errors)!=null&&g.length){const o=f.errors[0];throw new Oe(o.message,o)}return f}async function w(c,f){var o;if(!a){Pe.error("No set ID found");return}const g=await t.mutate({action:"UPDATE",emote_id:c,id:a,name:f});if((o=g==null?void 0:g.errors)!=null&&o.length){const $=g.errors[0];throw new Oe($.message,$)}return g}return ce({add:u,remove:_,rename:w,set:s,setID:a,canEditSet:v,needsLogin:h})}const Rn=["shrink"],Bn=["value","active","placeholder"],Nn=z({__name:"EmoteAliasButton",props:{alias:{}},emits:["update:alias"],setup(a,{emit:t}){const e=t,r=I(!1),n=I();return(s,i)=>(l(),m("div",{class:"alias-button",shrink:!r.value},[y("input",{ref_key:"aliasRef",ref:n,value:s.alias,active:r.value,placeholder:r.value?"Alias":"...",onInput:i[0]||(i[0]=v=>e("update:alias",n.value.value)),onFocus:i[1]||(i[1]=v=>r.value=!0),onBlur:i[2]||(i[2]=v=>{s.alias===""&&(r.value=!1)})},null,40,Bn)],8,Rn))}}),Fn=O(Nn,[["__scopeId","data-v-1cf40ae2"]]),Vn={class:"emote-link-embed"},Hn=["blurred"],Wn={class:"emote-preview"},zn={class:"description"},Yn=["title"],qn={key:0,class:"emote-owner"},jn=["type"],Qn={key:0,class:"login-required"},Gn=z({__name:"EmoteLinkEmbed",props:{emoteId:{}},setup(a){const t=a,e=`https://7tv.app/emotes/${t.emoteId}`,r=I(),n=I(""),s=I(!0),i=An(),v=ia(),h=te(()=>{var g;return!!((g=i.set)!=null&&g.emotes.find(o=>o.id===t.emoteId))}),u={ADD:"add",REMOVE:"remove",CONFLICT:"conflict",LINK:"link"};async function _(){switch(c.value){case u.ADD:await i.add(t.emoteId,n.value!==""?n.value:void 0),n.value="";break;case u.REMOVE:await i.remove(t.emoteId);break;case u.CONFLICT:break;case u.LINK:window.open(e,"_blank");break}}const w=g=>(g.preventDefault(),v.open=!0,v.switchView("profile"),!1),c=te(()=>{var o;return!i.canEditSet||!r.value?u.LINK:h.value?u.REMOVE:((o=i.set)==null?void 0:o.emotes.find($=>{var E;return $.name===(n.value!==""?n.value:(E=r.value)==null?void 0:E.name)}))||n.value!==""&&!St.test(n.value)?u.CONFLICT:u.ADD});async function f(){const g=await fetch(`https://7tv.io/v3/emotes/${t.emoteId}`);if(!g.ok)return;const o=await g.json();o.lifecycle!==2&&(r.value={id:o.id,name:o.name,data:o},o.listed!==!1&&(s.value=!1))}return ht(f),(g,o)=>{var $,E;return l(),m(Y,null,[y("div",Vn,[y("div",{class:"emote-link-container",blurred:s.value},[($=r.value)!=null&&$.data?(l(),m(Y,{key:0},[y("a",{href:e,target:"_blank",class:"link"},[y("div",Wn,[r.value?(l(),V(Ct,{key:0,emote:r.value},null,8,["emote"])):k("",!0)])]),y("div",zn,[y("p",{class:"emote-name",title:r.value.name},B(r.value.name),9,Yn),r.value.data.owner?(l(),m("p",qn,B(r.value.data.owner.display_name),1)):k("",!0)]),c.value===u.ADD||c.value===u.CONFLICT?(l(),V(Fn,{key:0,class:"alias-button",type:c.value,alias:n.value,"onUpdate:alias":o[0]||(o[0]=x=>n.value=x)},null,8,["type","alias"])):k("",!0),y("div",{class:"action-button",type:c.value,onClick:_},[c.value===u.LINK?(l(),V(la,{key:0})):c.value===u.REMOVE?(l(),m(Y,{key:1},[Z(" - ")],64)):(l(),m(Y,{key:2},[Z(" + ")],64))],8,jn)],64)):k("",!0)],8,Hn),(E=r.value)!=null&&E.data&&s.value?(l(),m("div",{key:0,class:"emote-unlisted-warning",onClick:o[1]||(o[1]=x=>s.value=!1)}," Emote is unlisted! Click to view. ")):k("",!0)]),M(i).needsLogin?(l(),m("div",Qn,[y("a",{href:"#",onClick:w}," Authenticate extension to manage emotes ")])):k("",!0)],64)}}}),Xn=O(Gn,[["__scopeId","data-v-3c067032"]]),Kn=["href"],Jn=z({__name:"MessageTokenLink",props:{token:{}},setup(a){return(t,e)=>(l(),m("a",{href:t.token.content.url,target:"_blank",class:"link-part"},B(t.token.content.displayText),9,Kn))}}),Zn={class:"mention-token"},er=z({__name:"MessageTokenMention",props:{token:{},msg:{}},setup(a){const t=a,e=t.token.content.displayText.charAt(0)==="@",r=e?t.token.content.displayText.slice(1):t.token.content.displayText;return(n,s)=>(l(),m("span",Zn,[P(we,{user:n.token.content.user??{id:M(ua)(),username:M(r).toLowerCase(),displayName:M(r),color:""},"is-mention":"","hide-at":!e,"hide-badges":""},null,8,["user","hide-at"])]))}}),tr=O(er,[["__scopeId","data-v-20ced684"]]),ar={class:"seventv-chat-message-rich-embed"},nr=["href"],rr={class:"seventv-chat-message-rich-embed-layout"},sr={class:"seventv-chat-message-rich-embed-layout-thumbnail"},or=["src"],ir={class:"seventv-chat-message-rich-embed-layout-description"},lr={class:"seventv-chat-message-rich-embed-layout-description-title"},ur={key:0},dr={class:"seventv-chat-message-rich-embed-layout-description-author"},cr=z({__name:"RichEmbed",props:{richEmbed:{}},setup(a){return(t,e)=>(l(),m("div",ar,[y("a",{href:t.richEmbed.request_url,target:"_blank",class:"seventv-chat-message-rich-embed-link"},[y("div",rr,[y("div",sr,[y("img",{src:t.richEmbed.thumbnail_url,alt:"thumbnail"},null,8,or)]),y("div",ir,[y("div",null,[y("p",lr,B(t.richEmbed.title),1)]),t.richEmbed.twitch_metadata.clip_metadata.id?(l(),m("div",ur,[y("p",dr," Clipped by "+B(t.richEmbed.author_name),1)])):k("",!0)])])],8,nr)]))}}),mr=O(cr,[["__scopeId","data-v-250b0388"]]),hr=ee`
	query ChatReplies($messageID: ID!, $channelID: ID!) {
		message(id: $messageID) {
			...messageFields
			replies {
				nodes {
					...messageFields
				}
				totalCount
			}
		}
	}

	${na}
`,gr={},vr={fill:"currenColor",width:"1em",height:"1em",version:"1.1",viewBox:"0 0 16 16",x:"0px",y:"0px"},fr=y("g",null,[y("path",{d:"M5 6H7V8H5V6Z"}),y("path",{d:"M9 6H11V8H9V6Z"}),y("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 14L10 12H13C13.5523 12 14 11.5523 14 11V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12H6L8 14ZM6.82843 10H4V4H12V10H9.17157L8 11.1716L6.82843 10Z"})],-1),pr=[fr];function yr(a,t){return l(),m("svg",vr,pr)}const je=O(gr,[["render",yr]]),_r={},br={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},wr=y("path",{d:"M8.5 5.5L7 4L2 9L7 14L8.5 12.5L6 10H10C12.2091 10 14 11.7909 14 14V16H16V14C16 10.6863 13.3137 8 10 8H6L8.5 5.5Z"},null,-1),Cr=[wr];function Mr(a,t){return l(),m("svg",br,Cr)}const $r=O(_r,[["render",Mr]]),Tr={class:"seventv-tray-header"},kr={class:"seventv-tray-icon seventv-reply"},Ur={class:"seventv-tray-header-text"},Dr={key:0},Lr={key:1},Ir={class:"seventv-tray-user-message-container"},Sr=z({__name:"ReplyTray",props:{close:{type:Function},id:{},authorID:{},username:{},displayName:{},body:{},deleted:{type:Boolean},thread:{}},setup(a){const t=a,e=I(null),r=I([]),n=I([]),s=ue(),i=Ve(s),v=Le();return ve(async()=>{var _;if(!v.value)return;const h=await v.value.query({query:hr,fetchPolicy:"no-cache",variables:{messageID:((_=t.thread)==null?void 0:_.id)??t.id,channelID:s.id}}).catch(w=>{ie.error("failed to fetch chat replies",w.message)});if(!h||!h.data||!h.data.message)return;e.value=Be(h.data.message);const u=[e.value,...h.data.message.replies.nodes.map(w=>Be(w))];u.forEach(w=>{w.parent={author:{displayName:t.displayName??"",username:t.username??""},body:t.body,deleted:t.deleted,id:t.id,uid:t.authorID??"",thread:t.thread??null}}),n.value=u}),ve(()=>{const h=n.value.findIndex(_=>_.id===t.id),u=r.value.at(h);u&&De(()=>u.scrollIntoView())}),(h,u)=>(l(),m(Y,null,[y("div",Tr,[y("div",kr,[n.value.length<=1?(l(),V($r,{key:0})):(l(),V(je,{key:1}))]),y("div",Ur,[n.value.length<=1&&h.authorID?(l(),m("span",Dr,B(`Replying to @${h.displayName??h.username}:`),1)):(l(),m("span",Lr," Thread "))]),y("div",{class:"seventv-tray-icon seventv-close",onClick:u[0]||(u[0]=_=>h.close())},[P(da)])]),P(Mt,null,{default:fe(()=>[y("div",Ir,[(l(!0),m(Y,null,re(n.value,_=>{var w;return l(),m("div",{key:_.id,ref_for:!0,ref_key:"msgElems",ref:r,class:"seventv-tray-user-message"},[P(Fe,{msg:_,emotes:M(i).active,"force-timestamp":!0,as:"Reply",class:gt(["thread-msg",{"is-root-msg":((w=e.value)==null?void 0:w.id)===_.id,"is-selected-msg":t.id===_.id&&n.value.length>1}])},null,8,["msg","emotes","class"])])}),128))])]),_:1})],64))}}),Or=O(Sr,[["__scopeId","data-v-10eb02d7"]]),ot=vt(new Set);function it(a,t){const e=vt({current:null}),r={parent:e,component:mt(a),props:t},n=le(e,s=>{s.current?ot.add(r):(ot.delete(r),n())});return{$$typeof:Ne,key:null,ref:e,type:"seventv-tray-container",props:{}}}function Er(a){const t=a;return!!(t.id&&t.body)&&typeof t.deleted=="boolean"}function Pr(a){var t;return{body:Or,inputValueOverride:"",sendButtonOverride:"reply",disableBits:!0,disablePaidPinnedChat:!0,disableChat:a.deleted||((t=a.thread)==null?void 0:t.deleted),sendMessageHandler:{type:"reply",additionalMetadata:{reply:{parentMsgId:a.id,parentMessageBody:a.body,...a.authorID?{parentUid:a.authorID,parentUserLogin:a.username,parentDisplayName:a.displayName}:{},...a.thread?{threadParentMsgId:a.thread.id,threadParentDeleted:a.thread.deleted,threadParentUserLogin:a.thread.login}:{}}}},type:"reply"}}function xr(a,t){let e=null;switch(a){case"Reply":if(!Er(t))break;e=Pr(t)}return e}function Ar(a,t,e,r=!1){const n=Ye("chat-input"),s=r?"setModifierTray":"setTray";function i(){var h;!n.value||typeof((h=n.value.instance)==null?void 0:h[s])!="function"||n.value.instance[s](null)}function v(){var w;if(!n.value||typeof((w=n.value.instance)==null?void 0:w[s])!="function")return;const h=I(!0),u={...t==null?void 0:t(),close:()=>{h.value=!1,i()}};if(!u)return h.value=!1,h;const _=e??xr(a,u);return _?(n.value.instance[s]({..._,header:_.header?it(_.header,u):void 0,body:_.body?it(_.body,u):void 0}),h):(h.value=!1,h)}return{open:v,clear:i,props:t,options:e}}function Cl(a,t=!1){const e=Ke(null),r=Ke(null),i={type:"seventv-custom-tray",header:{$$typeof:Ne,key:"header",ref:c=>e.value=c,type:"seventv-tray-container-header",props:{}},body:{$$typeof:Ne,key:"body",ref:c=>r.value=c,type:"seventv-tray-container-body",props:{}},sendMessageHandler:a.messageHandler?{type:"custom-message-handler",handleMessage:a.messageHandler}:a.sendMessageHandler??void 0},v=t?"setModifierTray":"setTray",h=Ye("chat-input");function u(c){var f;!((f=h.value)!=null&&f.instance)||typeof h.value.instance[v]!="function"||h.value.instance[v](c)}return ce({open:()=>u({...a,...i}),close:()=>u(),bodyRef:r,headerRef:e})}const Rr={},Br={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},Nr=y("path",{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},null,-1),Fr=[Nr];function Vr(a,t){return l(),m("svg",Br,Fr)}const Hr=O(Rr,[["render",Vr]]),Wr={},zr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},Yr=y("path",{d:"M64 0H32V64H64 93.5L82.1 212.1C23.7 240.7 0 293 0 320v32H384V320c0-22.5-23.7-76.5-82.1-106.7L290.5 64H320h32V0H320 64zm96 480v32h64V480 384H160v96z"},null,-1),qr=[Yr];function jr(a,t){return l(),m("svg",zr,qr)}const Qr=O(Wr,[["render",jr]]),Gr={},Xr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},Kr=y("path",{d:"M0 208L192 384h32V288h80c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176H224V32H192L0 208z"},null,-1),Jr=[Kr];function Zr(a,t){return l(),m("svg",Xr,Jr)}const es=O(Gr,[["render",Zr]]),ts={class:"seventv-copied-message-toast-body"},as={key:0},ns=z({__name:"UiCopiedMessageToast",props:{message:{}},emits:["close"],setup(a,{emit:t}){const e=I(),r=t;return Jt(e,()=>{r("close")}),(n,s)=>(l(),m("main",{ref_key:"copiedMessageToastRef",ref:e,class:"seventv-copied-message-toast"},[y("div",ts,[n.message?(l(),m("p",as,B(n.message),1)):ft(n.$slots,"default",{key:1},void 0,!0)])],512))}}),rs=O(ns,[["__scopeId","data-v-fbb0ba18"]]),ss={class:"seventv-chat-message-buttons"},os=z({__name:"UserMessageButtons",props:{msg:{}},emits:["pin"],setup(a,{emit:t}){const e=a,r=t,n=Ar("Reply",()=>{var o,$,E,x,q,N,b;return{id:e.msg.id,body:e.msg.body,deleted:e.msg.moderation.deleted,...e.msg.author?{authorID:(o=e.msg.author)==null?void 0:o.id,username:($=e.msg.author)==null?void 0:$.username,displayName:(E=e.msg.author)==null?void 0:E.displayName}:{},...e.msg.parent?{thread:{deleted:((x=e.msg.parent.thread)==null?void 0:x.deleted)??e.msg.parent.deleted,id:((q=e.msg.parent.thread)==null?void 0:q.id)??e.msg.parent.id,login:((N=e.msg.parent.thread)==null?void 0:N.login)??((b=e.msg.parent.author)==null?void 0:b.username)??""}}:{}}}),s=X("chat.copy_icon_toggle"),i=I(!1),v=I(),h=et(v,{enabled:()=>i.value,middleware:[Ae({padding:8})]});function u(){i.value||(navigator.clipboard.writeText(e.msg.body),i.value=!0,_t(()=>{i.value=!1},1e3))}const _=I(!1),w=I(),c=et(w,{enabled:()=>_.value,middleware:[Ae({padding:8})]});function f(){n.open()}function g(o){o==="yes"&&r("pin")}return(o,$)=>{const E=pe("tooltip");return l(),m(Y,null,[y("div",ss,[M(s)&&!o.msg.moderation.deleted?G((l(),m("div",{key:0,ref_key:"copyButtonRef",ref:v,class:"seventv-button",onClick:$[0]||($[0]=x=>u())},[P(Hr)])),[[E,"Copy"]]):k("",!0),o.msg.pinnable&&!o.msg.moderation.deleted?G((l(),m("div",{key:1,ref_key:"pinButtonRef",ref:w,class:"seventv-button",onClick:$[1]||($[1]=x=>_.value=!0)},[P(Qr)])),[[E,"Pin"]]):k("",!0),G((l(),m("div",{class:"seventv-button",onClick:f},[(l(),V(He(o.msg.parent?je:es)))])),[[E,"Reply"]])]),i.value&&M(h)?(l(),V(Re,{key:0,to:M(h)},[P(rs,{title:"Message Copied",onClose:$[2]||($[2]=x=>i.value=!1)},{default:fe(()=>[Z(" Message from "),o.msg.author?(l(),V(we,{key:0,user:o.msg.author},null,8,["user"])):k("",!0),Z(" has been copied ")]),_:1})],8,["to"])):k("",!0),_.value&&M(c)?(l(),V(Re,{key:1,to:M(c)},[P(ea,{title:"Pin Message?",choices:["yes","no"],onClose:$[3]||($[3]=x=>_.value=!1),onAnswer:$[4]||($[4]=x=>g(x))},{default:fe(()=>[Z(" Are you sure you want to pin this message by "),o.msg.author?(l(),V(we,{key:0,user:o.msg.author},null,8,["user"])):k("",!0),Z("? ")]),_:1})],8,["to"])):k("",!0)],64)}}}),is=O(os,[["__scopeId","data-v-b7afb063"]]);function Q(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function ls(a,t,e){var r;Q(1,arguments);var n;return us(t)?n=t:e=t,new Intl.DateTimeFormat((r=e)===null||r===void 0?void 0:r.locale,n).format(a)}function us(a){return a!==void 0&&!("locale"in a)}function Qe(a,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e.length>=t?a.apply(null,e.slice(0,t).reverse()):function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return Qe(a,t,e.concat(n))}}const ds=Qe(ls,3),cs=["msg-id","state","data-highlight-style"],ms=["data-highlight-label"],hs={key:1,class:"seventv-chat-message-timestamp"},gs={key:4},vs={class:"seventv-chat-message-body"},fs={key:0,class:"text-token"},ps={key:1},ys={key:0,class:"seventv-chat-message-moderated"},_s={key:1,class:"seventv-chat-message-moderated"},bs=z({__name:"UserMessage",props:{msg:{},as:{default:"Chat"},highlight:{},emotes:{},chatters:{},isModerator:{type:Boolean},hideAuthor:{type:Boolean},hideModeration:{type:Boolean},hideModIcons:{type:Boolean},hideDeletionState:{type:Boolean},showButtons:{type:Boolean},forceTimestamp:{type:Boolean}},setup(a){var L;const t=a,e=pt(t,"msg"),r=I(),n=ue(),s=$t(n),{openViewerCard:i}=Ie(n),{pinChatMessage:v}=qe(n,((L=e.value.author)==null?void 0:L.username)??""),h=X("chat.emote_scale"),u=X("chat.slash_me_style"),_=X("highlights.display_style"),w=X("highlights.opacity"),c=X("chat.timestamp_with_seconds"),f=X("chat.show_emote_modifiers"),g=X("chat.timestamp_format"),o=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language??"en",$=t.msg.author?ze(t.msg.author.id):{emotes:{}},E=I(""),x=t.msg.getTokenizer(),q=I([]);function N(){if(!x)return;const A=x.tokenize({chatterMap:t.chatters??{},emoteMap:t.emotes??{},localEmoteMap:{...$.emotes,...t.msg.nativeEmotes},showModifiers:f.value}),F=[],j=t.msg.body;let U=0;for(const T of A){const D=T.range[0],S=T.range[1],H=j.substring(U,D);H&&F.push(H),F.push(T),U=S+1}const d=j.substring(U);d&&F.push(d),q.value=F}function b(){var A;(A=v(e.value.id,1200))==null||A.catch(F=>ie.error("failed to pin chat message",F))}le(()=>[$.emotes,t.msg.nativeEmotes],()=>N(),{immediate:!0}),t.msg.refresh=N,t.msg.historical&&_t(ve(()=>{N()}),1e4);function C(A){if(tn(A))return tr;if(Za(A))return Jn}const p=()=>{switch(g.value){case"infer":return;case"12":return"h12";case"24":return"h23"}};return ve(()=>{!e.value||!r.value||(e.value.highlight&&(r.value.style.setProperty("--seventv-highlight-color",e.value.highlight.color),r.value.style.setProperty("--seventv-highlight-dim-color",e.value.highlight.color.concat(Nt(w.value/100)))),(s.showTimestamps||e.value.historical||t.forceTimestamp)&&(E.value=ds({locale:o},{localeMatcher:"lookup",hour:"2-digit",minute:"2-digit",second:c.value?"numeric":void 0,hourCycle:p()},t.msg.timestamp)))}),(A,F)=>{var j;return l(),m("span",{ref_key:"msgEl",ref:r,class:gt(["seventv-user-message",{deleted:!A.hideDeletionState&&(e.value.moderation.banned||e.value.moderation.deleted),"has-mention":A.as=="Chat"&&e.value.mentions.has("#actor"),"has-highlight":A.as=="Chat"&&e.value.highlight}]),"msg-id":e.value.id,state:e.value.deliveryState,style:$e({"font-style":e.value.slashMe&&M(u)&1?"italic":"",color:e.value.slashMe&&M(u)&2?(j=e.value.author)==null?void 0:j.color:""}),"data-highlight-style":M(_)},[e.value.highlight?(l(),m("div",{key:0,class:"seventv-chat-message-highlight-label","data-highlight-label":e.value.highlight.label},null,8,ms)):k("",!0),M(s).showTimestamps||e.value.historical||A.forceTimestamp?(l(),m("span",hs,B(E.value),1)):k("",!0),M(n).actor.roles.has("MODERATOR")&&M(s).showModerationIcons&&!A.hideModIcons?(l(),V(xn,{key:2,msg:e.value},null,8,["msg"])):k("",!0),e.value.author&&!A.hideAuthor?(l(),V(we,{key:3,user:e.value.author,"source-data":e.value.sourceData,badges:e.value.badges,"msg-id":e.value.sym,onOpenNativeCard:F[0]||(F[0]=U=>M(i)(U,e.value.author.username,e.value.id))},null,8,["user","source-data","badges","msg-id"])):k("",!0),A.hideAuthor?k("",!0):(l(),m("span",gs,B(e.value.slashMe?" ":": "),1)),y("span",vs,[(l(!0),m(Y,null,re(q.value,(U,d)=>(l(),m(Y,{key:d},[typeof U=="string"?(l(),m("span",fs,B(U),1)):M(en)(U)?(l(),m("span",ps,[P(Ct,{class:"emote-token",emote:U.content.emote,format:M(s).imageFormat,overlaid:U.content.overlaid,clickable:!0,scale:Number(M(h))},null,8,["emote","format","overlaid","scale"]),U.content?(l(),m("span",{key:0,style:$e({color:U.content.cheerColor})},B(U.content.cheerAmount),5)):k("",!0)])):(l(),V(He(C(U)),Ot(yt({key:2},{token:U,msg:e.value})),null,16))],64))),128))]),e.value.richEmbed.request_url?(l(),V(mr,{key:5,"rich-embed":e.value.richEmbed},null,8,["rich-embed"])):k("",!0),e.value.emoteLinkEmbed?(l(),V(Xn,{key:6,"emote-id":e.value.emoteLinkEmbed},null,8,["emote-id"])):k("",!0),!A.hideModeration&&(e.value.moderation.banned||e.value.moderation.deleted)?(l(),m(Y,{key:7},[e.value.moderation.banned?(l(),m("span",ys,B(e.value.moderation.banDuration?`Timed out (${e.value.moderation.banDuration}s)`:"Permanently Banned"),1)):(l(),m("span",_s,"Deleted"))],64)):k("",!0),P(is,{msg:e.value,onPin:F[1]||(F[1]=U=>b())},null,8,["msg"])],14,cs)}}}),Fe=O(bs,[["__scopeId","data-v-43cb0e29"]]),ws={class:"seventv-chat-message-container"},Cs={class:"seventv-chat-message-background",tabindex:"0"},Ms={key:0,class:"seventv-reply-part"},$s={class:"seventv-chat-reply-icon"},Ts={class:"seventv-reply-message-part"},ks=z({__name:"0.NormalMessage",props:{msg:{},msgData:{}},setup(a){return(t,e)=>{const r=pe("tooltip");return l(),m("div",ws,[y("div",Cs,[t.msgData.reply?(l(),m("div",Ms,[y("div",$s,[P(je)]),G((l(),m("div",Ts,[Z(B(`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`),1)])),[[r,`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`]])])):k("",!0),ft(t.$slots,"default",{},void 0,!0)])])}}}),Us=O(ks,[["__scopeId","data-v-7a7ddc21"]]),Tt=a=>(xt("data-v-21ba2f53"),a=a(),At(),a),Ds={key:0,class:"seventv-user-card-message-timeline"},Ls=["timeline-id"],Is=Tt(()=>y("div",{selector:"date-boundary"},null,-1)),Ss=Tt(()=>y("div",{selector:"date-boundary"},null,-1)),Os={class:"seventv-user-card-message-timeline-list"},Es={key:1,class:"seventv-user-card-message-timeline-empty"},Ps={key:2,class:"seventv-user-card-mod-comment-input-container"},xs=["placeholder","onKeydown"],As=z({__name:"UserCardMessageList",props:{activeTab:{},target:{},timeline:{},scroller:{}},emits:["add-mod-comment"],setup(a,{emit:t}){const e=a,r=t,{t:n}=We(),s=ue(),i=Ve(s),v=zt(!0,10),h=Le(),u=I("");function _(){var c;(c=e.scroller)!=null&&c.container&&e.scroller.container.scrollTo({top:e.scroller.container.scrollHeight})}async function w(){var g;if(!u.value||!h.value)return;const c=u.value;u.value="";const f=await h.value.mutate({mutation:$a,variables:{input:{channelID:s.id,targetID:e.target.id,text:c}}}).catch(o=>ie.error("failed to add mod comment",o));!f||!f.data||!f.data.createModeratorComment||(r("add-mod-comment",(g=f.data)==null?void 0:g.createModeratorComment.comment),De(_))}return le(()=>e.activeTab,()=>{v.value=!1,setTimeout(()=>{_()},10)}),le(e.timeline,()=>{var c;!((c=e.scroller)!=null&&c.container)||e.scroller.container.scrollTop!==0||_()}),(c,f)=>M(v)?(l(),m("div",Ds,[Object.keys(e.timeline).length?(l(!0),m(Y,{key:0},re(Object.entries(e.timeline).reverse(),([g,o])=>(l(),m("section",{key:g,"timeline-id":g},[Is,y("label",null,B(g),1),Ss,y("div",Os,[(l(!0),m(Y,null,re(o,$=>(l(),m(Y,{key:$.sym},[$.instance&&$.instance!==Us?(l(),V(He($.instance),yt({key:0},$.componentProps,{msg:$}),{default:fe(()=>[P(Fe,{msg:$,emotes:M(i).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"])]),_:2},1040,["msg"])):(l(),V(Fe,{key:1,msg:$,emotes:M(i).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"]))],64))),128))])],8,Ls))),128)):(l(),m("div",Es,[y("p",null,B(M(n)(`user_card.no_${c.activeTab}`,{user:c.target.displayName})),1)])),c.activeTab==="comments"?(l(),m("div",Ps,[G(y("input",{id:"seventv-user-card-mod-comment-input","onUpdate:modelValue":f[0]||(f[0]=g=>u.value=g),placeholder:M(n)("user_card.add_comment_input_placeholder"),onKeydown:Pt(w,["enter"])},null,40,xs),[[Et,u.value]])])):k("",!0)])):k("",!0)}}),Rs=O(As,[["__scopeId","data-v-21ba2f53"]]),Bs={mlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Ns={key:0,d:"M408 56L384 80c37.3 37.3 74.7 74.7 112 112c8-8 16-16 24-24l56 56c-37.5 37.5-74.9 74.9-112.4 112.4c59.1 45.9 118.2 91.7 177.3 137.6c-9.8 12.6-19.6 25.3-29.4 37.9C407.9 353.9 204.5 195.9 1 38C10.8 25.3 20.6 12.7 30.4 .1c60.3 46.8 120.7 93.7 181 140.5C258.3 93.7 305.1 46.9 352 0c18.7 18.7 37.3 37.3 56 56zM288 176l-13.5 13.5c40.3 31.3 80.7 62.7 121 94C359.7 247.7 323.8 211.8 288 176zm-9.4 166.7c5.8 5.7 11.6 11.5 17.4 17.3c-50.7 50.7-101.3 101.3-152 152c-26.7-26.7-53.3-53.3-80-80c50.7-50.7 101.3-101.3 152-152c5.8 5.8 11.6 11.6 17.4 17.4c3.3-3.3 6.5-6.5 9.8-9.8c16.9 13.3 33.8 26.6 50.6 39.9c-5.1 5.1-10.1 10.1-15.2 15.2z"},Fs={key:1,d:"M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56zM214.6 342.6L232 360 80 512 0 432 152 280l17.4 17.4L234.7 232 280 277.3l-65.4 65.4z"},Vs=z({__name:"GavelIcon",props:{slashed:{type:Boolean}},setup(a){return(t,e)=>(l(),m("svg",Bs,[t.slashed?(l(),m("path",Ns)):(l(),m("path",Fs))]))}}),Hs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Ws={key:0,d:"M496.8 363l124.1 96.3 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 77.8 60.4L308.4 4.5 320 0l11.6 4.5L539.1 85l19.2 7.4 1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-7.2 16.5-15.6 32.9-25.3 49zM170.4 109.5L458.6 333.3c7.4-12.6 13.9-25.5 19.5-38.5C505 232.9 512.9 169.5 512 126L320 51.5l-149.6 58zm-8.5 185.2c28.2 64.9 77 127.7 158.1 164.8c30-13.7 55.6-31 77.3-50.5l38.2 30.1c-28.1 26.5-62 49.7-102.8 67.3L320 512l-12.7-5.5c-98.4-42.6-156.7-117.3-189.4-192.6c-23.5-54.1-34.1-109-37-154.2l53.3 42c5.2 29.5 13.9 61.5 27.7 93z"},zs={key:1,d:"M267.6 4.5L256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5zM256 68.7l0 0L432 137c-.5 40.9-8.8 96.8-32.6 151.5c-26.2 60.3-70.6 118-143.5 153.5V68.7z"},Ys=z({__name:"ShieldIcon",props:{slashed:{type:Boolean}},setup(a){return(t,e)=>(l(),m("svg",Hs,[t.slashed?(l(),m("path",Ws)):(l(),m("path",zs))]))}}),qs={},js={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",width:"1em",height:"1em"},Qs=y("path",{d:"M448 32H0V480H448V32zM248 128v24V264v24H200V264 152 128h48zM200 320h48v48H200V320z"},null,-1),Gs=[Qs];function Xs(a,t){return l(),m("svg",js,Gs)}const Ks=O(qs,[["render",Xs]]),Js={class:"seventv-user-card-mod"},Zs=["is-banned"],eo={class:"seventv-user-card-mod-side seventv-user-card-mod-warn"},to={class:"seventv-user-card-mod-timeout-options"},ao=["onClick"],no=["is-mod"],ro=z({__name:"UserCardMod",props:{target:{},ban:{},isModerator:{type:Boolean}},emits:["victim-banned","victim-unbanned","victim-modded","victim-unmodded"],setup(a,{emit:t}){const e=a,r=t,{t:n}=We(),s=ue(),i=qe(s,e.target.username),v=Ie(s);async function h(c){var g,o,$;const f=await i.banUserFromChat(c).catch(()=>{});!f||(g=f.errors)!=null&&g.length||!((o=f.data)!=null&&o.banUserFromChatRoom.ban)||r("victim-banned",($=f.data)==null?void 0:$.banUserFromChatRoom.ban)}async function u(){var f;const c=await i.unbanUserFromChat().catch(()=>{});!c||(f=c.errors)!=null&&f.length||r("victim-unbanned")}async function _(c){var g;const f=await i.setUserModerator(e.target.id,c).catch(()=>{});!f||(g=f.errors)!=null&&g.length||r(c?"victim-unmodded":"victim-modded")}const w=["1s","30s","1m","10m","30m","1h","4h","12h","1d","7d","14d"];return(c,f)=>{const g=pe("tooltip");return l(),m("div",Js,[y("div",{class:"seventv-user-card-mod-side seventv-user-card-mod-ban","is-banned":c.ban?"1":"0"},[G(P(Vs,{slashed:!!c.ban,onClick:f[0]||(f[0]=o=>c.ban?u():h(""))},null,8,["slashed"]),[[g,c.ban?M(n)("user_card.unban_button"):M(n)("user_card.ban_button")]])],8,Zs),y("div",eo,[G(P(Ks,{onClick:f[1]||(f[1]=o=>M(v).openViewerWarnPopover(c.target.id,c.target.username,0))},null,512),[[g,M(n)("user_card.warn_button")]])]),G(y("div",to,[(l(),m(Y,null,re(w,o=>G(y("button",{key:o,onClick:$=>h(o)},[Z(B(o),1)],8,ao),[[g,M(n)("user_card.timeout_button",{duration:o})]])),64))],512),[[Rt,!c.ban]]),M(s).actor.roles.has("BROADCASTER")?(l(),m("div",{key:0,class:"seventv-user-card-mod-side seventv-user-card-mod-moderator","is-mod":c.isModerator?"1":"0"},[G(P(Ys,{slashed:c.isModerator,onClick:f[2]||(f[2]=o=>_(!!c.isModerator))},null,8,["slashed"]),[[g,c.isModerator?M(n)("user_card.unmod_button"):M(n)("user_card.mod_button")]])],8,no)):k("",!0)])}}}),so=O(ro,[["__scopeId","data-v-bb759d6b"]]),oo={class:"seventv-user-card-tabs"},io=["selected","onClick"],lo=z({__name:"UserCardTabs",props:{activeTab:{},messageCount:{},warningCount:{},timeoutCount:{},banCount:{},commentCount:{}},emits:["switch"],setup(a,{emit:t}){const e=a,r=t,n=te(()=>[{id:"messages",label:"Messages",count:e.messageCount,maxCount:1e3},{id:"warnings",label:"Warnings",count:e.warningCount,maxCount:99},{id:"timeouts",label:"Timeouts",count:e.timeoutCount,maxCount:99},{id:"bans",label:"Bans",count:e.banCount,maxCount:99},{id:"comments",label:"Comments",count:e.commentCount,maxCount:10}]);function s(i,v){return i>=v?v.toString()+"+":i.toString()}return(i,v)=>(l(),m("div",oo,[(l(!0),m(Y,null,re(n.value,h=>(l(),m("button",{key:h.label,selected:i.activeTab===h.id,onClick:u=>r("switch",h.id)},[Z(B(s(h.count,h.maxCount))+" ",1),y("p",null,B(h.label),1)],8,io))),128))]))}}),uo=O(lo,[["__scopeId","data-v-52560988"]]),co={class:"seventv-basic-system-message"},mo=z({__name:"BasicSystemMessage",props:{text:{}},setup(a){return(t,e)=>(l(),m("span",co,B(t.text),1))}}),ho=O(mo,[["__scopeId","data-v-0218c5a7"]]);function Te(a){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(a)}function go(a){return Q(1,arguments),a instanceof Date||Te(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function ae(a){Q(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||Te(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function vo(a){if(Q(1,arguments),!go(a)&&typeof a!="number")return!1;var t=ae(a);return!isNaN(Number(t))}function me(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function fo(a,t){Q(2,arguments);var e=ae(a).getTime(),r=me(t);return new Date(e+r)}function po(a,t){Q(2,arguments);var e=me(t);return fo(a,-e)}var yo=864e5;function _o(a){Q(1,arguments);var t=ae(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/yo)+1}function ke(a){Q(1,arguments);var t=1,e=ae(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function kt(a){Q(1,arguments);var t=ae(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=ke(r),s=new Date(0);s.setUTCFullYear(e,0,4),s.setUTCHours(0,0,0,0);var i=ke(s);return t.getTime()>=n.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function bo(a){Q(1,arguments);var t=kt(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=ke(e);return r}var wo=6048e5;function Co(a){Q(1,arguments);var t=ae(a),e=ke(t).getTime()-bo(t).getTime();return Math.round(e/wo)+1}var Mo={};function Se(){return Mo}function Ue(a,t){var e,r,n,s,i,v,h,u;Q(1,arguments);var _=Se(),w=me((e=(r=(n=(s=t==null?void 0:t.weekStartsOn)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(v=i.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&n!==void 0?n:_.weekStartsOn)!==null&&r!==void 0?r:(h=_.locale)===null||h===void 0||(u=h.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&e!==void 0?e:0);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=ae(a),f=c.getUTCDay(),g=(f<w?7:0)+f-w;return c.setUTCDate(c.getUTCDate()-g),c.setUTCHours(0,0,0,0),c}function Ut(a,t){var e,r,n,s,i,v,h,u;Q(1,arguments);var _=ae(a),w=_.getUTCFullYear(),c=Se(),f=me((e=(r=(n=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(v=i.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&n!==void 0?n:c.firstWeekContainsDate)!==null&&r!==void 0?r:(h=c.locale)===null||h===void 0||(u=h.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(w+1,0,f),g.setUTCHours(0,0,0,0);var o=Ue(g,t),$=new Date(0);$.setUTCFullYear(w,0,f),$.setUTCHours(0,0,0,0);var E=Ue($,t);return _.getTime()>=o.getTime()?w+1:_.getTime()>=E.getTime()?w:w-1}function $o(a,t){var e,r,n,s,i,v,h,u;Q(1,arguments);var _=Se(),w=me((e=(r=(n=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(v=i.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&n!==void 0?n:_.firstWeekContainsDate)!==null&&r!==void 0?r:(h=_.locale)===null||h===void 0||(u=h.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&e!==void 0?e:1),c=Ut(a,t),f=new Date(0);f.setUTCFullYear(c,0,w),f.setUTCHours(0,0,0,0);var g=Ue(f,t);return g}var To=6048e5;function ko(a,t){Q(1,arguments);var e=ae(a),r=Ue(e,t).getTime()-$o(e,t).getTime();return Math.round(r/To)+1}function R(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var Uo={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return R(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):R(r+1,2)},d:function(t,e){return R(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return R(t.getUTCHours()%12||12,e.length)},H:function(t,e){return R(t.getUTCHours(),e.length)},m:function(t,e){return R(t.getUTCMinutes(),e.length)},s:function(t,e){return R(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),s=Math.floor(n*Math.pow(10,r-3));return R(s,e.length)}};const oe=Uo;var ge={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Do={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),s=n>0?n:1-n;return r.ordinalNumber(s,{unit:"year"})}return oe.y(t,e)},Y:function(t,e,r,n){var s=Ut(t,n),i=s>0?s:1-s;if(e==="YY"){var v=i%100;return R(v,2)}return e==="Yo"?r.ordinalNumber(i,{unit:"year"}):R(i,e.length)},R:function(t,e){var r=kt(t);return R(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return R(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return R(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return R(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return oe.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return R(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var s=ko(t,n);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):R(s,e.length)},I:function(t,e,r){var n=Co(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):R(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):oe.d(t,e)},D:function(t,e,r){var n=_o(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):R(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var s=t.getUTCDay(),i=(s-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return R(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var s=t.getUTCDay(),i=(s-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return R(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),s=n===0?7:n;switch(e){case"i":return String(s);case"ii":return R(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),s=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),s;switch(n===12?s=ge.noon:n===0?s=ge.midnight:s=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),s;switch(n>=17?s=ge.evening:n>=12?s=ge.afternoon:n>=4?s=ge.morning:s=ge.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return oe.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):oe.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):R(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):R(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):oe.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):oe.s(t,e)},S:function(t,e){return oe.S(t,e)},X:function(t,e,r,n){var s=n._originalDate||t,i=s.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return ut(i);case"XXXX":case"XX":return de(i);case"XXXXX":case"XXX":default:return de(i,":")}},x:function(t,e,r,n){var s=n._originalDate||t,i=s.getTimezoneOffset();switch(e){case"x":return ut(i);case"xxxx":case"xx":return de(i);case"xxxxx":case"xxx":default:return de(i,":")}},O:function(t,e,r,n){var s=n._originalDate||t,i=s.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+lt(i,":");case"OOOO":default:return"GMT"+de(i,":")}},z:function(t,e,r,n){var s=n._originalDate||t,i=s.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+lt(i,":");case"zzzz":default:return"GMT"+de(i,":")}},t:function(t,e,r,n){var s=n._originalDate||t,i=Math.floor(s.getTime()/1e3);return R(i,e.length)},T:function(t,e,r,n){var s=n._originalDate||t,i=s.getTime();return R(i,e.length)}};function lt(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),s=r%60;if(s===0)return e+String(n);var i=t||"";return e+String(n)+i+R(s,2)}function ut(a,t){if(a%60===0){var e=a>0?"-":"+";return e+R(Math.abs(a)/60,2)}return de(a,t)}function de(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),s=R(Math.floor(n/60),2),i=R(n%60,2);return r+s+e+i}const Lo=Do;var dt=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Dt=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Io=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],s=r[2];if(!s)return dt(t,e);var i;switch(n){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",dt(n,e)).replace("{{time}}",Dt(s,e))},So={p:Dt,P:Io};const Oo=So;function Eo(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}var Po=["D","DD"],xo=["YY","YYYY"];function Ao(a){return Po.indexOf(a)!==-1}function Ro(a){return xo.indexOf(a)!==-1}function ct(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Bo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},No=function(t,e,r){var n,s=Bo[t];return typeof s=="string"?n=s:e===1?n=s.one:n=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const Fo=No;function xe(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}var Vo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ho={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Wo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},zo={date:xe({formats:Vo,defaultWidth:"full"}),time:xe({formats:Ho,defaultWidth:"full"}),dateTime:xe({formats:Wo,defaultWidth:"full"})};const Yo=zo;var qo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},jo=function(t,e,r,n){return qo[t]};const Qo=jo;function ye(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var s=a.defaultFormattingWidth||a.defaultWidth,i=e!=null&&e.width?String(e.width):s;n=a.formattingValues[i]||a.formattingValues[s]}else{var v=a.defaultWidth,h=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[h]||a.values[v]}var u=a.argumentCallback?a.argumentCallback(t):t;return n[u]}}var Go={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Xo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ko={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Jo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Zo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ei={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ti=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ai={ordinalNumber:ti,era:ye({values:Go,defaultWidth:"wide"}),quarter:ye({values:Xo,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ye({values:Ko,defaultWidth:"wide"}),day:ye({values:Jo,defaultWidth:"wide"}),dayPeriod:ye({values:Zo,defaultWidth:"wide",formattingValues:ei,defaultFormattingWidth:"wide"})};const ni=ai;function _e(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],s=t.match(n);if(!s)return null;var i=s[0],v=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],h=Array.isArray(v)?si(v,function(w){return w.test(i)}):ri(v,function(w){return w.test(i)}),u;u=a.valueCallback?a.valueCallback(h):h,u=e.valueCallback?e.valueCallback(u):u;var _=t.slice(i.length);return{value:u,rest:_}}}function ri(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function si(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function oi(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],s=t.match(a.parsePattern);if(!s)return null;var i=a.valueCallback?a.valueCallback(s[0]):s[0];i=e.valueCallback?e.valueCallback(i):i;var v=t.slice(n.length);return{value:i,rest:v}}}var ii=/^(\d+)(th|st|nd|rd)?/i,li=/\d+/i,ui={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},di={any:[/^b/i,/^(a|c)/i]},ci={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mi={any:[/1/i,/2/i,/3/i,/4/i]},hi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},gi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},fi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},pi={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yi={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_i={ordinalNumber:oi({matchPattern:ii,parsePattern:li,valueCallback:function(t){return parseInt(t,10)}}),era:_e({matchPatterns:ui,defaultMatchWidth:"wide",parsePatterns:di,defaultParseWidth:"any"}),quarter:_e({matchPatterns:ci,defaultMatchWidth:"wide",parsePatterns:mi,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:_e({matchPatterns:hi,defaultMatchWidth:"wide",parsePatterns:gi,defaultParseWidth:"any"}),day:_e({matchPatterns:vi,defaultMatchWidth:"wide",parsePatterns:fi,defaultParseWidth:"any"}),dayPeriod:_e({matchPatterns:pi,defaultMatchWidth:"any",parsePatterns:yi,defaultParseWidth:"any"})};const bi=_i;var wi={code:"en-US",formatDistance:Fo,formatLong:Yo,formatRelative:Qo,localize:ni,match:bi,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ci=wi;var Mi=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$i=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ti=/^'([^]*?)'?$/,ki=/''/g,Ui=/[a-zA-Z]/;function Di(a,t,e){var r,n,s,i,v,h,u,_,w,c,f,g,o,$,E,x,q,N;Q(2,arguments);var b=String(t),C=Se(),p=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:C.locale)!==null&&r!==void 0?r:Ci,L=me((s=(i=(v=(h=e==null?void 0:e.firstWeekContainsDate)!==null&&h!==void 0?h:e==null||(u=e.locale)===null||u===void 0||(_=u.options)===null||_===void 0?void 0:_.firstWeekContainsDate)!==null&&v!==void 0?v:C.firstWeekContainsDate)!==null&&i!==void 0?i:(w=C.locale)===null||w===void 0||(c=w.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var A=me((f=(g=(o=($=e==null?void 0:e.weekStartsOn)!==null&&$!==void 0?$:e==null||(E=e.locale)===null||E===void 0||(x=E.options)===null||x===void 0?void 0:x.weekStartsOn)!==null&&o!==void 0?o:C.weekStartsOn)!==null&&g!==void 0?g:(q=C.locale)===null||q===void 0||(N=q.options)===null||N===void 0?void 0:N.weekStartsOn)!==null&&f!==void 0?f:0);if(!(A>=0&&A<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!p.localize)throw new RangeError("locale must contain localize property");if(!p.formatLong)throw new RangeError("locale must contain formatLong property");var F=ae(a);if(!vo(F))throw new RangeError("Invalid time value");var j=Eo(F),U=po(F,j),d={firstWeekContainsDate:L,weekStartsOn:A,locale:p,_originalDate:F},T=b.match($i).map(function(D){var S=D[0];if(S==="p"||S==="P"){var H=Oo[S];return H(D,p.formatLong)}return D}).join("").match(Mi).map(function(D){if(D==="''")return"'";var S=D[0];if(S==="'")return Li(D);var H=Lo[S];if(H)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Ro(D)&&ct(D,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Ao(D)&&ct(D,t,String(a)),H(U,D,p.localize,d);if(S.match(Ui))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return D}).join("");return T}function Li(a){var t=a.match(Ti);return t?t[1].replace(ki,"'"):a}const Ii=Qe(Di,2),Si={class:"seventv-user-card-container"},Oi={class:"seventv-user-card-header"},Ei={class:"seventv-user-card-menuactions"},Pi={class:"seventv-user-card-avatar"},xi=["src"],Ai=["src"],Ri={class:"seventv-user-card-usertag-container"},Bi=["href"],Ni=["data-seventv-paint-id"],Fi={class:"seventv-user-card-badges"},Vi={class:"seventv-user-card-interactive"},Hi={class:"seventv-user-card-metrics"},Wi={key:0},zi={key:1},Yi={key:2},qi={key:3},ji=["show-tabs"],Qi="https://twitch.tv",Gi=z({__name:"UserCard",props:{target:{}},emits:["close","mount-handle"],setup(a,{emit:t}){const e=a,r=t,n=ue(),s=ta(n),{identity:i}=Yt(qt()),v=ze(e.target.id),h=Ie(n),u=ba(n),_=Le(),{t:w}=We(),c=I(),f=I(),g=I(null),o=ce({activeTab:"messages",canActorAccessLogs:!1,ban:null,paint:null,targetUser:{id:e.target.id,username:e.target.username,displayName:e.target.displayName,intl:e.target.intl,color:e.target.color,bannerURL:"",avatarURL:"",createdAt:"",isModerator:!1,badges:[],relationship:{followedAt:"",subscription:{isSubscribed:!1,tier:"",months:0}}},stream:{live:!1,game:"",viewCount:0},messageCursors:new WeakMap,timelines:{messages:{},warnings:{},bans:{},timeouts:{},comments:{}},count:{messages:0,warnings:0,bans:0,timeouts:0,comments:0}}),$=te(()=>{var D;if(!o.targetUser.username)return;const d=Ye("avatars").value;if(!((D=d==null?void 0:d.instance)!=null&&D.avatars))return;const T=d.instance.avatars[o.targetUser.username];return T==null?void 0:T.data.user.avatar_url});function E(){return o.timelines[o.activeTab]}async function x(d){var H;if(!o.targetUser||!_.value||o.activeTab!=="messages")return[];const T=d?o.messageCursors.get(d):void 0,D=await _.value.query({query:Ma,variables:{channelID:n.id,senderID:o.targetUser.id,cursor:T}}).catch(W=>Promise.reject(W));if(!D||(H=D.errors)!=null&&H.length||!Array.isArray(D.data.logs.messages.edges))return[];const S=[];for(const W of D.data.logs.messages.edges){if(!W.node)continue;const K=Be(W.node);S.push(K),o.messageCursors.set(K,W.cursor)}return S}async function q(){var H;if(!o.targetUser||!_.value)return;const d=await _.value.query({query:Ca,variables:{channelLogin:n.username,channelID:n.id,targetID:o.targetUser.id}}).catch(W=>Promise.reject(W));if(!d||(H=d.errors)!=null&&H.length||!d.data.channelUser)return;o.count.messages=d.data.viewerCardModLogs.messages.count??0,o.count.warnings=d.data.viewerCardModLogs.warnings.count??0,o.count.bans=d.data.viewerCardModLogs.bans.count??0,o.count.timeouts=d.data.viewerCardModLogs.timeouts.count??0,o.count.comments=d.data.viewerCardModLogs.comments.edges.length??0,o.ban=d.data.banStatus;const T=d.data.viewerCardModLogs.timeouts.edges,D=d.data.viewerCardModLogs.bans.edges,S=d.data.viewerCardModLogs.warnings.edges;for(const[W,K]of[["timeouts",T],["bans",D],["warnings",S]]){const ne=[];for(const se of K){const J=new Je(se.node.id).setComponent(ho,{text:se.node.localizedLabel.localizedStringFragments.map(he=>"text"in he.token?he.token.text:he.token.login).join("")});J.setTimestamp(Date.parse(se.node.timestamp)),ne.push(J)}p(ne,W)}for(const W of d.data.viewerCardModLogs.comments.edges)N(W.node)}function N(d){const T=new Je(d.id);T.setAuthor({id:d.author.id,username:d.author.login,displayName:d.author.displayName,color:d.author.chatColor,intl:d.author.login!==d.author.displayName.toLowerCase()}),T.setTimestamp(Date.parse(d.timestamp)),T.body=d.text,p([T],"comments")}function b(){if(!c.value||!c.value.container||c.value.container.scrollTop>0)return;const T=C(new Date(Math.min(...Object.keys(o.timelines.messages).map(H=>Date.parse(H)||1/0))));if(!T)return;const D=o.timelines.messages[T];if(!D)return;const S=D[0];S&&(L(1),x(S).then(H=>{H.length&&p(H)}).catch(H=>{ie.error("Failed to fetch more messages",H)}))}function C(d){return`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}function p(d,T="messages"){const D=o.timelines[T],S=s.find(W=>!!W.author&&W.author.id===e.target.id,!0),H=new Set(S.map(W=>W.id));for(const W of d){if(!W.timestamp)continue;const K=H.has(W.id)?"LIVE":C(new Date(W.timestamp));if(!D[K])D[K]=[];else if(D[K].find(ne=>ne.id===W.id))continue;D[K].unshift(W),D[K].sort((ne,se)=>ne.timestamp-se.timestamp)}}function L(d){!c.value||!c.value.container||c.value.container.scrollTo({top:d})}function A(d){!o.targetUser.username||!h.openViewerCard(d,o.targetUser.username,"")||r("close")}function F(){if(!o.targetUser.username)return;let d=!1;o.targetUser.username in u.getAllUsernameHighlights()?(u.remove(o.targetUser.username),d=!0):(u.define(o.targetUser.username,{pattern:o.targetUser.username,label:"Messages by "+o.targetUser.username,color:"#8803fc",flashTitle:!1,username:!0},!0),d=!0),d&&u.save()}function j(){return`${Qi}/${e.target.username}`}function U(d){return d?Ii("PPP")(new Date(d)):""}return ve(async()=>{if(_.value){_.value.query({query:wa,variables:{channelID:n.id,channelIDStr:n.id,channelLogin:n.username,targetLogin:e.target.username,withStandardGifting:!1,isViewerBadgeCollectionEnabled:!0}}).then(async d=>{var T,D,S,H,W,K,ne,se;if(d.data.channel&&(o.canActorAccessLogs=((T=d.data.channel.moderationSettings)==null?void 0:T.canAccessViewerCardModLogs)??!1),d.data.targetUser){if(o.targetUser.id=d.data.targetUser.id,o.targetUser.username=d.data.targetUser.login,o.targetUser.displayName=d.data.targetUser.displayName,o.targetUser.intl=d.data.targetUser.login!==d.data.targetUser.displayName.toLowerCase(),o.targetUser.avatarURL=d.data.targetUser.profileImageURL,o.targetUser.bannerURL=d.data.targetUser.bannerImageURL??"",o.targetUser.color=d.data.targetUser.chatColor??e.target.color,o.targetUser.relationship.followedAt=U((D=d.data.targetUser.relationship)==null?void 0:D.followedAt),o.targetUser.createdAt=U(d.data.targetUser.createdAt),o.targetUser.relationship.subscription.months=((H=(S=d.data.targetUser.relationship)==null?void 0:S.cumulativeTenure)==null?void 0:H.months)??0,(W=d.data.targetUser.relationship)!=null&&W.subscriptionBenefit&&(o.targetUser.relationship.subscription.isSubscribed=!0,o.targetUser.relationship.subscription.tier=(K=d.data.targetUser.relationship)==null?void 0:K.subscriptionBenefit.tier),d.data.targetUser.stream&&(o.stream.live=!0,o.stream.game=((ne=d.data.targetUser.stream.game)==null?void 0:ne.displayName)??"",o.stream.viewCount=d.data.targetUser.stream.viewersCount),o.targetUser.badges.length=0,o.targetUser.isModerator=d.data.targetUser.isModerator||d.data.targetUser.id===n.id,d.data.channelViewer&&((se=d.data.channelViewer.earnedBadges)!=null&&se.length))for(let J=0;J<d.data.channelViewer.earnedBadges.length;J++){const he=Gt(d.data.channelViewer.earnedBadges[J]);he&&(o.targetUser.badges[J]=he)}for(const J of v.badges.values())o.targetUser.badges.push(J)}o.targetUser&&(o.canActorAccessLogs||i.value&&o.targetUser.id===i.value.id)&&(p(await x().catch(J=>ie.error("failed to fetch message logs",J))??[]),q().catch(J=>ie.error("failed to fetch moderator data",J)))}).catch(d=>ie.error("failed to query user card",d));for(const d of v.paints.values()){o.paint=d;break}}}),le(()=>[o.targetUser.bannerURL,o.targetUser.color],([d,T])=>{g.value&&(g.value.style.setProperty("--seventv-user-card-banner-url",`url(${d})`),g.value.style.setProperty("--seventv-user-card-color",T))}),ht(async()=>{f.value&&r("mount-handle",f.value),p(s.find(d=>!!d.author&&d.author.id===e.target.id,!0)),De(()=>{!c.value||!c.value.container||L(c.value.container.scrollHeight)})}),(d,T)=>{const D=pe("tooltip");return l(),m("main",Si,[y("div",{ref_key:"cardRef",ref:g,class:"seventv-user-card"},[y("div",Oi,[y("div",{ref_key:"dragHandle",ref:f,class:"seventv-user-card-identity"},[y("div",Ei,[o.targetUser.username in M(u).getAllUsernameHighlights()?G((l(),V(Aa,{key:0,onClick:F},null,512)),[[D,M(w)("user_card.stop_highlight")]]):G((l(),V(Ia,{key:1,onClick:F},null,512)),[[D,M(w)("user_card.highlight")]]),G(P(jt,{onClick:A},null,512),[[D,M(w)("user_card.native")]]),P(Qt,{class:"close-button",onClick:T[0]||(T[0]=S=>r("close"))})]),y("div",Pi,[$.value?(l(),m("img",{key:0,src:$.value},null,8,xi)):o.targetUser.avatarURL?(l(),m("img",{key:1,src:o.targetUser.avatarURL},null,8,Ai)):k("",!0)]),y("div",Ri,[y("a",{href:j(),target:"_blank",class:"seventv-user-card-usertag"},[P(we,{user:o.targetUser,"hide-badges":!0,clickable:!1},null,8,["user"])],8,Bi)]),o.paint?(l(),m("span",{key:0,class:"seventv-user-card-paint seventv-painted-content seventv-paint","data-seventv-paint-id":o.paint.id},[y("p",null,B(o.paint.data.name),1)],8,Ni)):k("",!0),y("div",Fi,[(l(!0),m(Y,null,re(o.targetUser.badges,S=>(l(),V(Me,{key:S.id,badge:S,alt:S.data.tooltip,type:"app"},null,8,["badge","alt"]))),128))])],512),y("div",Vi,[y("div",Hi,[o.targetUser.createdAt?(l(),m("p",Wi,[P(Ha),Z(" "+B(M(w)("user_card.account_created_date",{date:o.targetUser.createdAt})),1)])):k("",!0),o.targetUser.relationship.followedAt?(l(),m("p",zi,[P(Qa),Z(" "+B(M(w)("user_card.following_since_date",{date:o.targetUser.relationship.followedAt})),1)])):k("",!0),o.targetUser.relationship.subscription.isSubscribed?(l(),m("p",Yi,[P(Ze),Z(" "+B(o.targetUser.relationship.subscription.months?`${M(w)("user_card.subscription_tier",{tier:o.targetUser.relationship.subscription.tier[0]})} -
									  ${M(w)("user_card.subscription_length",{length:o.targetUser.relationship.subscription.months})}`:`${M(w)("user_card.hidden_subscription_status")}`),1)])):o.targetUser.relationship.subscription.months?(l(),m("p",qi,[P(Ze),Z(" "+B(M(w)("user_card.previously_subscription_length",{length:o.targetUser.relationship.subscription.months})),1)])):k("",!0)]),P(Ja),M(n).actor.roles.has("MODERATOR")&&!o.targetUser.isModerator||M(n).actor.roles.has("BROADCASTER")?(l(),V(so,{key:0,target:o.targetUser,ban:o.ban,"is-moderator":o.targetUser.isModerator,onVictimBanned:T[1]||(T[1]=S=>o.ban=S),onVictimUnbanned:T[2]||(T[2]=S=>o.ban=null),onVictimModded:T[3]||(T[3]=S=>o.targetUser.isModerator=!0),onVictimUnmodded:T[4]||(T[4]=S=>o.targetUser.isModerator=!1)},null,8,["target","ban","is-moderator"])):k("",!0)])]),y("div",{class:"seventv-user-card-data","show-tabs":M(n).actor.roles.has("MODERATOR")},[M(n).actor.roles.has("MODERATOR")?(l(),V(uo,{key:0,"active-tab":o.activeTab,"message-count":o.count.messages,"warning-count":o.count.warnings,"ban-count":o.count.bans,"timeout-count":o.count.timeouts,"comment-count":o.count.comments,onSwitch:T[5]||(T[5]=S=>o.activeTab=S)},null,8,["active-tab","message-count","warning-count","ban-count","timeout-count","comment-count"])):k("",!0),P(Mt,{ref_key:"scroller",ref:c,onContainerScroll:b},{default:fe(()=>[P(Rs,{"active-tab":o.activeTab,target:o.targetUser,timeline:E(),scroller:c.value,onAddModComment:N},null,8,["active-tab","target","timeline","scroller"])]),_:1},512)],8,ji)],512)])}}}),Xi=O(Gi,[["__scopeId","data-v-a2835ed1"]]),Ki={key:0,class:"seventv-chat-user-badge-list"},Ji={key:0},Zi={key:1},el=z({__name:"UserTag",props:{user:{},sourceData:{},msgId:{},isMention:{type:Boolean},hideAt:{type:Boolean},hideBadges:{type:Boolean},clickable:{type:Boolean,default:!0},badges:{}},emits:["open-native-card"],setup(a,{emit:t}){const e=a,r=t,n=ue(),s=$t(n),i=ze(e.user.id),v=X("vanity.nametag_paints"),h=X("vanity.7tv_Badges"),u=X("chat.user_card"),_=I([]),w=pt(s,"twitchBadgeSets"),c=X("chat.colored_mentions"),f=I(),g=I(!1),o=I(),$=I(null),E=I([]),x=te(()=>!v.value||!$.value?!1:e.isMention?c.value===2:!0),q=te(()=>!e.isMention||c.value===1);function N(p){if(e.clickable){if(!u.value){r("open-native-card",p);return}g.value=!g.value}}ve(()=>{var p;if(e.badges&&w.value&&!_.value.length)for(const[L,A]of Object.entries(e.badges)){const F=L,j=A;for(const U of[((p=e.sourceData)==null?void 0:p.badges.channelsBySet)??w.value.channelsBySet,w.value.globalsBySet]){if(!U)continue;const d=U.get(F);if(!d)continue;const T=d.get(j);if(T){_.value.push(T);break}}}});const b=Date.now(),C=le([()=>i.paints,()=>i.badges],([p,L])=>{if(e.msgId&&e.user.lastMsgId&&e.msgId!==e.user.lastMsgId&&Date.now()-b>5e3){De(()=>C());return}$.value=p&&p.size?p.values().next().value:null,E.value=L&&L.size?[...L.values()]:[]},{immediate:!0});return(p,L)=>{var j;const A=pe("cosmetic-paint"),F=pe("tooltip");return l(),m(Y,null,[p.user&&p.user.displayName?(l(),m("div",{key:0,ref_key:"tagRef",ref:f,class:"seventv-chat-user",style:$e(q.value?{color:p.user.color}:{})},[!p.hideBadges&&(_.value.length&&((j=w.value)!=null&&j.count)||M(i).badges.size||p.sourceData)?(l(),m("span",Ki,[p.sourceData?(l(),V(Me,{key:p.sourceData.login,badge:p.sourceData,alt:p.sourceData.displayName,type:"picture"},null,8,["badge","alt"])):k("",!0),(l(!0),m(Y,null,re(_.value,U=>(l(),V(Me,{key:U.id,badge:U,alt:U.title,type:"twitch",onClick:L[0]||(L[0]=d=>N(d))},null,8,["badge","alt"]))),128)),M(h)?(l(!0),m(Y,{key:1},re(E.value,U=>(l(),V(Me,{key:U.id,badge:U,alt:U.data.tooltip,type:"app"},null,8,["badge","alt"]))),128)):k("",!0)])):k("",!0),G((l(),m("span",{class:"seventv-chat-user-username",onClick:L[1]||(L[1]=U=>N(U))},[G((l(),m("span",null,[p.isMention&&!p.hideAt?(l(),m("span",Ji,"@")):k("",!0),y("span",null,B(p.user.displayName),1),p.user.intl?(l(),m("span",Zi," ("+B(p.user.username)+")",1)):k("",!0)])),[[A,x.value?$.value.id:null]])])),[[F,x.value?`Paint: ${$.value.data.name}`:""]])],4)):k("",!0),g.value&&f.value?(l(),V(Re,{key:1,to:"#seventv-float-context"},[P(ca,{class:"seventv-user-card-float",handle:o.value,"initial-anchor":f.value,"initial-middleware":[M(Ae)({mainAxis:!0,crossAxis:!0}),M(Bt)()],once:!0},{default:fe(()=>[P(Xi,{target:e.user,onClose:L[2]||(L[2]=U=>g.value=!1),onMountHandle:L[3]||(L[3]=U=>o.value=U)},null,8,["target"])]),_:1},8,["handle","initial-anchor","initial-middleware"])])):k("",!0)],64)}}}),we=O(el,[["__scopeId","data-v-c9ed9f71"]]);export{Fn as A,Me as B,wl as I,Fe as U,Ks as W,Us as _,Za as a,en as b,qe as c,ba as d,ho as e,Ie as f,ae as g,me as h,Te as i,Eo as j,Qe as k,we as l,Cl as m,An as n,Ci as o,Se as p,Q as r,ot as t,$t as u};
