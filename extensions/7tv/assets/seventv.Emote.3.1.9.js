import{d as Y,h as V,i as G,e as X}from"./seventv.Transform.3.1.9.js";import{l as K,u as Q,h as x,_ as ee}from"./seventv.GearsIcon.3.1.9.js";import{r as m,e as R,f as B,w as te,a as N,x as s,l as i,m as a,G as h,q as I,D as n,Q as oe,R as se,_ as O,u as w,O as P,B as D,I as A,F as z,E as W,aG as ae,o as ie,t as F,C as re,P as ne,aH as me,Y as de}from"./seventv.index.3.1.9.js";import{w as L,z as le,u as q,B as H}from"./seventv.index.3.1.93.js";import{O as ce}from"./seventv.OpenLinkIcon.3.1.9.js";import{a as ue}from"./seventv.useCosmetics.3.1.9.js";import{b as pe}from"./seventv.useChatEmotes.3.1.9.js";import{U as he}from"./seventv.UiFloating.3.1.9.js";const fe=m(null);function ge(){return fe}const Z=L`
	fragment badge on Badge {
		id
		setID
		version
		title
		image1x: imageURL(size: NORMAL)
		image2x: imageURL(size: DOUBLE)
		image4x: imageURL(size: QUADRUPLE)
		clickAction
		clickURL
	}
`,_e=L`
	fragment messageSender on User {
		id
		login
		chatColor
		displayName
		displayBadges(channelID: $channelID) {
			...badge
		}
		__typename
	}

	${Z}
`,$t=L`
	fragment messageFields on Message {
		id
		deletedAt
		sentAt
		content {
			...messageContent
		}
		sender {
			...messageSender
		}
		__typename
	}

	fragment messageContent on MessageContent {
		text
		fragments {
			...messageParticle
		}
		__typename
	}
	fragment messageParticle on MessageFragment {
		text
		content {
			... on CheermoteToken {
				...cheermoteFragment
			}
			... on Emote {
				...emoteFragment
			}
			... on User {
				...mentionFragment
			}
			... on AutoMod {
				...automodFragment
			}
			__typename
		}
		__typename
	}
	fragment cheermoteFragment on CheermoteToken {
		bitsAmount
		prefix
		tier
		__typename
	}
	fragment emoteFragment on Emote {
		emoteID: id
		setID
		token
		__typename
	}
	fragment mentionFragment on User {
		id
		login
		displayName
		__typename
	}
	fragment automodFragment on AutoMod {
		topics {
			type
			weight
			__typename
		}
		__typename
	}

	${_e}
	${Z}
`,ve=L`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;L`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;const ye=L`
	fragment subProduct on SubscriptionProduct {
		id
		url
		price
		name
		tier
		interval {
			unit
		}
		state
		emotes {
			id
			setID
			token
		}
		offers {
			id
			tplr
			platform
			eligibility {
				benefitsStartAt
				isEligible
			}
			giftType
			listing {
				chargeModel {
					internal {
						previewPrice {
							id
							currency
							exponent
							price
							total
							discount {
								price
								total
							}
						}
						plan {
							interval {
								duration
								unit
							}
						}
					}
				}
			}
			promotion {
				id
				name
				promoDisplay {
					discountPercent
					discountType
				}
				priority
			}
			quantity {
				min
				max
			}
		}
		emoteModifiers {
			...subscriptionProductEmoteModifier
		}
		self {
			cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
				months
			}
			benefit {
				id
				tier
			}
		}
		owner {
			id
			displayName
			login
			subscriptionProducts {
				id
				tier
				url
				price
				emotes {
					id
					token
				}
				emoteModifiers {
					...subscriptionProductEmoteModifier
				}
			}
			stream {
				id
				type
			}
		}
	}

	fragment subscriptionProductEmoteModifier on EmoteModifier {
		code
		name
	}
`,Et=L`
	fragment modComment on ModLogsComment {
		id
		timestamp
		text
		author {
			...modCommentUser
		}
		channel {
			...modCommentUser
		}
		target {
			...modCommentUser
		}
	}

	fragment modCommentUser on User {
		id
		login
		displayName
		chatColor
	}
`,be=le`
	query EmoteCard($emoteID: ID!, $octaneEnabled: Boolean!, $artistEnabled: Boolean!) {
		emote(id: $emoteID) {
			id
			type
			subscriptionTier @include(if: $octaneEnabled)
			token
			setID
			artist @include(if: $artistEnabled) {
				id
				login
				displayName
				profileImageURL(width: 70)
			}
			owner {
				id
				login
				displayName
				profileImageURL(width: 70)
				channel {
					id
					localEmoteSets {
						id
						emotes {
							id
							token
						}
					}
				}
				stream {
					id
					type
				}
				self {
					follower {
						followedAt
					}
					subscriptionBenefit {
						id
						tier
					}
				}
				subscriptionProducts {
					id
					displayName
					tier
					name
					url
					emotes {
						id
						token
					}
					priceInfo {
						id
						currency
						price
					}
				}
			}
			subscriptionProduct @skip(if: $octaneEnabled) {
				...subProduct
			}
			subscriptionSummaries @include(if: $octaneEnabled) {
				...subSummary
			}
			bitsBadgeTierSummary {
				threshold
				self {
					isUnlocked
					numberOfBitsUntilUnlock
				}
			}
			type
		}
	}

	${ye}
	${ve}
`,j=_=>(oe("data-v-ef7a872c"),_=_(),se(),_),ke={class:"seventv-emote-card-container"},we={class:"seventv-emote-card"},$e={class:"seventv-emote-card-image"},Ee=["srcset"],Se={class:"seventv-emote-card-display"},Ue={class:"seventv-emote-card-title"},Te={key:0,class:"seventv-emote-card-title-link"},Ce=["href"],Le={class:"seventv-emote-card-subtitle"},Me=["href"],Ie=["src"],Re={key:1,class:"seventv-emote-card-data seventv-emote-card-artist"},Be=j(()=>a("p",null,"Made by",-1)),Ne=["href"],Ae=["src"],Fe={key:2,class:"seventv-emote-card-data seventv-emote-card-actor"},Pe=j(()=>a("p",null,"Added by",-1)),De={class:"seventv-emote-card-user"},ze=["src"],Oe={key:3,class:"seventv-emote-card-data"},je=j(()=>a("p",null,"Added on",-1)),qe=R({__name:"EmoteCard",props:{emote:{},size:{}},setup(_){var $;const o=_,u=m((($=o.emote.data)==null?void 0:$.host)??null),S=m(""),l=B(b()),c=B(b()),r=B(b()),M=m(""),U=m(""),f=m(null);function b(){return{id:"",username:"",displayName:"",avatarURL:"",url:""}}return te(async()=>{var p,v,T,E,C;if(o.emote.provider==="PLATFORM"){const g=ge();if(!g.value)return;const t=await g.value.query({query:be,variables:{emoteID:o.emote.id,artistEnabled:!0,octaneEnabled:!0}}).catch(d=>K.error("failed to fetch emote card",d));if(!t)return;const{emote:e}=t.data;if(!e)return;const y=Y(e);u.value=y.host,e.owner&&(l.id=e.owner.id,l.username=e.owner.login,l.displayName=e.owner.displayName,l.avatarURL=e.owner.profileImageURL,l.url=`https://twitch.tv/${(p=e.owner)==null?void 0:p.login}`),e.artist&&(r.id=e.artist.id,r.username=e.artist.login,r.displayName=e.artist.displayName,r.avatarURL=e.artist.profileImageURL,r.url=`https://twitch.tv/${(v=e.artist)==null?void 0:v.login}`),M.value=((T=e.subscriptionTier)==null?void 0:T.split("_").join(" "))??e.type}else if(o.emote.provider==="7TV"){const{result:g}=q(H,{id:o.emote.actor_id??""},()=>({enabled:!!o.emote.actor_id})),{result:t}=q(H,{id:((C=(E=o.emote.data)==null?void 0:E.owner)==null?void 0:C.id)??""},()=>{var e,y;return{enabled:!!((y=(e=o.emote.data)==null?void 0:e.owner)!=null&&y.id)}});N(g,e=>{e!=null&&e.user&&(c.id=e==null?void 0:e.user.id,c.username=e==null?void 0:e.user.username,c.displayName=e==null?void 0:e.user.display_name,c.avatarURL=e==null?void 0:e.user.avatar_url)},{immediate:!0}),N(t,e=>{e!=null&&e.user&&(r.id=e==null?void 0:e.user.id,r.username=e==null?void 0:e.user.username,r.displayName=e==null?void 0:e.user.display_name,r.avatarURL=e==null?void 0:e.user.avatar_url,r.url=`https://7tv.app/users/${e==null?void 0:e.user.id}`)},{immediate:!0}),U.value=new Date(o.emote.timestamp??0).toLocaleDateString(),f.value=`//7tv.app/emotes/${o.emote.id}`}else o.emote.provider==="BTTV"?f.value=`//betterttv.com/emotes/${o.emote.id}`:o.emote.provider==="FFZ"?f.value=`//frankerfacez.com/emoticon/${o.emote.id}`:o.emote.provider==="EMOJI"&&(f.value="")}),N(u,p=>{!p||!p.files.length||(S.value=V(o.size[0],o.size[1],p,o.emote.provider))},{immediate:!0}),(p,v)=>(s(),i("main",ke,[a("div",we,[a("div",$e,[a("img",{srcset:S.value,style:{}},null,8,Ee)]),a("div",Se,[a("div",null,[a("h3",Ue,[a("span",null,h(p.emote.name),1),f.value?(s(),i("span",Te,[a("a",{href:f.value,target:"_blank"},[I(ce)],8,Ce)])):n("",!0)]),a("p",Le,h(M.value),1),l.id?(s(),i("a",{key:0,class:"seventv-emote-card-user",href:l.url,target:"_blank"},[a("img",{src:l.avatarURL},null,8,Ie),a("span",null,h(l.displayName),1)],8,Me)):n("",!0),r.id?(s(),i("div",Re,[Be,r.id?(s(),i("a",{key:0,class:"seventv-emote-card-user",href:r.url,target:"_blank"},[a("img",{src:r.avatarURL},null,8,Ae),a("span",null,h(r.displayName),1)],8,Ne)):n("",!0)])):n("",!0),c.id?(s(),i("div",Fe,[Pe,a("p",De,[a("img",{src:c.avatarURL},null,8,ze),a("span",null,h(c.displayName),1)])])):n("",!0),U.value?(s(),i("div",Oe,[je,a("span",null,h(U.value),1)])):n("",!0)])])])]))}}),He=O(qe,[["__scopeId","data-v-ef7a872c"]]),Ve={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},Ge=["xlink:href"],J=R({__name:"SingleEmoji",props:{id:{}},setup(_){return(o,u)=>(s(),i("svg",Ve,[a("use",{"xlink:href":"#"+o.id},null,8,Ge)]))}}),Qe={key:0,ref:"tooltip",class:"seventv-tooltip-compact","tooltip-type":"emote"},We={key:1,ref:"tooltip",class:"seventv-tooltip","tooltip-type":"emote"},Ze=["src","srcset","alt"],Je={class:"details"},Ye={class:"emote-name"},Xe={key:2,class:"alias-label"},Ke={key:3,class:"creator-label"},xe={class:"scope-labels"},et={key:0,class:"label-global"},tt={key:1,class:"label-subscriber"},ot={key:2,class:"label-channel"},st={key:3,class:"label-sub-feature"},at={key:4,class:"label-sub-feature"},it={key:4},rt={key:5,class:"divider"},nt={key:6,class:"zero-width-label"},mt=["srcset"],dt=R({__name:"EmoteTooltip",props:{emote:{},initSrc:{},overlaid:{},height:{},width:{}},setup(_){var E,C,g;const o=_,u=Q("ui.compact_tooltips"),S=m("");o.emote&&o.emote.data&&x(()=>{S.value=V(o.height,o.width,o.emote.data.host,o.emote.provider)},90);const l=m(o.overlaid??{}),c=m(Object.keys(l.value).length>0),r=`${o.width*3}px`,M=`${o.height*3}px`,U=o.emote.scope==="GLOBAL",f=o.emote.scope==="SUB",b=o.emote.scope==="CHANNEL",$=o.emote.scope==="PERSONAL",p=(o.emote.flags||0)!==0,v=m(null);if(o.emote.unicode){const{emojiByCode:t}=pe();v.value=t.get(o.emote.unicode)??null}const T=m("inherit");return(g=(C=(E=o.emote.data)==null?void 0:E.owner)==null?void 0:C.style)!=null&&g.color&&(T.value=ue(o.emote.data.owner.style.color)),(t,e)=>{var y,d;return w(u)?(s(),i("div",Qe,[a("p",null,h(t.emote.name),1)],512)):(s(),i("div",We,[t.emote.provider!=="EMOJI"?(s(),i("img",{key:0,ref:"imgRef",class:"tooltip-emote",src:t.initSrc,srcset:S.value,alt:t.emote.name,sizes:"auto",style:P({width:r,height:M})},null,12,Ze)):(s(),D(J,{key:1,id:t.emote.id,class:"tooltip-emoji"},null,8,["id"])),a("div",Je,[a("h3",Ye,h(t.emote.name),1),I(ee,{class:"logo",provider:t.emote.provider},null,8,["provider"])]),t.emote.data&&t.emote.data.name!==t.emote.name?(s(),i("div",Xe,[A(" aka "),a("span",null,h((y=t.emote.data)==null?void 0:y.name),1)])):n("",!0),(d=t.emote.data)!=null&&d.owner?(s(),i("div",Ke,[A(" by "),a("span",{class:"creator-name",style:P({color:T.value})},h(t.emote.data.owner.display_name),5)])):n("",!0),a("div",xe,[U?(s(),i("div",et,"Global Emote")):n("",!0),f?(s(),i("div",tt,"Subscriber Emote")):n("",!0),b?(s(),i("div",ot,"Channel Emote")):n("",!0),$?(s(),i("div",st,"Personal Emote")):n("",!0),p?(s(),i("div",at,"Zero-Width")):n("",!0)]),v.value?(s(),i("div",it,[a("div",null,"Emoji - "+h(v.value.group),1)])):n("",!0),c.value?(s(),i("div",rt)):n("",!0),c.value?(s(),i("div",nt,[(s(!0),i(z,null,W(l.value,k=>(s(),i("div",{key:k.id,class:"zero-width-emote"},[k.data?(s(),i("img",{key:0,class:"overlaid-emote-icon",srcset:k.data.host.srcset??w(G)(k.data.host,k.provider)},null,8,mt)):n("",!0),A(" — "),a("span",null,h(k.name),1)]))),128))])):n("",!0)],512))}}}),lt=O(dt,[["__scopeId","data-v-03d06597"]]),ct=["ratio"],ut=["srcset","alt"],pt=["srcset","alt"],ht=R({__name:"Emote",props:{emote:{},clickable:{type:Boolean},format:{},overlaid:{},unload:{type:Boolean,default:!1},scale:{default:1},withBorder:{type:Boolean,default:!1}},emits:["emote-click"],setup(_,{emit:o}){const u=_,S=o,l=Q("general.blur_unlisted_emotes"),c=m(),r=m(!1),M=m([0,0]),U=m(),f=m(""),b=m(0),$=m(0),p=t=>{if(!(t.target instanceof HTMLImageElement))return;const e=t.target;b.value=Math.round(e.naturalWidth/u.scale),$.value=Math.round(e.naturalHeight/u.scale),f.value=e.currentSrc,U.value=e};function v(t){var e;return(e=t.data)!=null&&e.host?u.scale!=1||!t.data.host.srcset?G(t.data.host,t.provider,void 0,2,u.scale):t.data.host.srcset:""}function T(t){u.clickable&&(r.value=!0,M.value=[t.clientX,t.clientY])}function E(){C(c.value)}const{show:C,hide:g}=ae(lt,{emote:u.emote,initSrc:f,overlaid:u.overlaid,width:b,height:$});return ie(g),(t,e)=>{var y;return s(),i("div",{ref_key:"boxRef",ref:c,class:F(["seventv-emote-box",{"with-border":t.withBorder}]),ratio:w(X)(t.emote),onMouseenter:E,onMouseleave:e[2]||(e[2]=d=>w(g)()),onClick:e[3]||(e[3]=d=>[T(d),S("emote-click",d,t.emote)])},[!t.emote.unicode&&t.emote.data&&t.emote.data.host?(s(),i("img",{key:0,class:F(["seventv-chat-emote",{blur:w(l)&&((y=t.emote.data)==null?void 0:y.listed)===!1}]),srcset:t.unload?"":v(t.emote),alt:t.emote.name,loading:"lazy",decoding:"async",onLoad:p},null,42,ut)):!t.unload&&t.emote.id?(s(),D(J,{key:1,id:t.emote.id,alt:t.emote.name,class:"seventv-chat-emote seventv-emoji",style:P({width:`${t.scale*2}rem`,height:`${t.scale*2}rem`}),onMouseenter:E,onMouseleave:e[0]||(e[0]=d=>w(g)())},null,8,["id","alt","style"])):n("",!0),(s(!0),i(z,null,W(t.overlaid,d=>{var k;return s(),i(z,{key:d.id},[d.data&&d.data.host?(s(),i("img",{key:0,class:F(["seventv-chat-emote zero-width-emote",{blur:w(l)&&((k=d.data)==null?void 0:k.listed)===!1}]),srcset:v(d),alt:" "+d.name},null,10,pt)):n("",!0)],64)}),128)),r.value?(s(),D(de,{key:2,to:"#seventv-message-container"},[I(he,{class:"seventv-emote-card-float",anchor:c.value,placement:"right-end",middleware:[w(ne)({mainAxis:!0,crossAxis:!0}),w(me)()],once:!0,"emit-clickout":!0,onClickout:e[1]||(e[1]=d=>r.value=!1)},{default:re(()=>[I(He,{emote:t.emote,size:[b.value,$.value]},null,8,["emote","size"])]),_:1},8,["anchor","middleware"])])):n("",!0)],42,ct)}}}),St=O(ht,[["__scopeId","data-v-2c6ca88a"]]);export{St as E,J as _,Z as a,Et as b,$t as c,ye as t,ge as u};
