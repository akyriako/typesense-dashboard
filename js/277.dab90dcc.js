"use strict";(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[277],{49277:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var a=s(61758),l=s(58790);const o={class:"row"},r={class:"col col-12 col-md-8"},d={class:"row"},n={class:"text-overline"},i={class:"absolute-full flex flex-center"},c={class:"absolute-full flex justify-end"},u={class:"absolute-full flex flex-center"},m={class:"absolute-full flex justify-end"},p={key:0},b={key:1},v={key:0};function y(e,t,s,y,k,h){const _=(0,a.g2)("q-circular-progress"),f=(0,a.g2)("q-badge"),g=(0,a.g2)("q-linear-progress"),L=(0,a.g2)("q-card-section"),x=(0,a.g2)("q-card"),C=(0,a.g2)("q-btn"),w=(0,a.g2)("q-input"),q=(0,a.g2)("q-page");return(0,a.uX)(),(0,a.Wv)(q,{padding:""},{default:(0,a.k6)((()=>[(0,a.Lk)("div",o,[(0,a.Lk)("div",r,[(0,a.bF)(x,{flat:"",bordered:"",class:"q-mb-md"},{default:(0,a.k6)((()=>[(0,a.bF)(L,null,{default:(0,a.k6)((()=>[t[4]||(t[4]=(0,a.Lk)("div",{class:"text-h5"},"System",-1)),t[5]||(t[5]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"CPU",-1)),(0,a.Lk)("div",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.sortedCPU,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"column flex-center flex-wrap q-ma-md",key:e.node},[(0,a.Lk)("span",n,"CPU "+(0,l.v_)(e.node),1),(0,a.bF)(_,{"show-value":"",value:e.value,size:"50px",color:"accent","track-color":"grey-3"},null,8,["value"])])))),128))]),t[6]||(t[6]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Memory",-1)),(0,a.bF)(g,{size:"25px",value:parseInt(e.$store.state.node.data.metrics.system_memory_used_bytes,10)/parseInt(e.$store.state.node.data.metrics.system_memory_total_bytes,10),color:"accent"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",i,[(0,a.bF)(f,{color:"white","text-color":"accent",label:e.prettyBytes(parseInt(e.$store.state.node.data.metrics.system_memory_used_bytes,10))},null,8,["label"])]),(0,a.Lk)("div",c,[(0,a.bF)(f,{color:"white","text-color":"accent",label:e.prettyBytes(parseInt(e.$store.state.node.data.metrics.system_memory_total_bytes,10))},null,8,["label"])])])),_:1},8,["value"]),t[7]||(t[7]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Disk",-1)),(0,a.bF)(g,{size:"25px",value:parseInt(e.$store.state.node.data.metrics.system_disk_used_bytes,10)/parseInt(e.$store.state.node.data.metrics.system_disk_total_bytes,10),color:"accent"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",u,[(0,a.bF)(f,{color:"white","text-color":"accent",label:e.prettyBytes(parseInt(e.$store.state.node.data.metrics.system_disk_used_bytes,10))},null,8,["label"])]),(0,a.Lk)("div",m,[(0,a.bF)(f,{color:"white","text-color":"accent",label:e.prettyBytes(parseInt(e.$store.state.node.data.metrics.system_disk_total_bytes,10))},null,8,["label"])])])),_:1},8,["value"]),t[8]||(t[8]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"System Network",-1)),(0,a.Lk)("div",null," Received: "+(0,l.v_)(e.prettyBytes(parseInt(e.$store.state.node.data.metrics.system_network_received_bytes,10)))+" Sent: "+(0,l.v_)(e.prettyBytes(parseInt(e.$store.state.node.data.metrics.system_network_sent_bytes,10))),1)])),_:1})])),_:1}),(0,a.bF)(x,{flat:"",bordered:"",class:"q-mb-md"},{default:(0,a.k6)((()=>[(0,a.bF)(L,null,{default:(0,a.k6)((()=>[t[9]||(t[9]=(0,a.Lk)("div",{class:"text-h5 q-mb-md"},"Operations",-1)),t[10]||(t[10]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Cache",-1)),t[11]||(t[11]=(0,a.Lk)("p",null," Responses of search requests that are sent with use_cache parameter are cached in a LRU cache. ",-1)),(0,a.bF)(C,{label:"Clear Search Cache",color:"accent",unelevated:"",size:"md",padding:"sm lg",onClick:t[0]||(t[0]=t=>e.$store.dispatch("node/clearCache"))}),t[12]||(t[12]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Slow Request Log",-1)),t[13]||(t[13]=(0,a.Lk)("p",null," Slow requests are logged to the primary log file, with the prefix SLOW REQUEST ",-1)),(0,a.bF)(w,{outlined:"",label:"Threshold (ms)",type:"number",modelValue:e.slowQueryThreshold,"onUpdate:modelValue":t[2]||(t[2]=t=>e.slowQueryThreshold=t),modelModifiers:{number:!0},hint:"Enable logging of requests that take over a defined threshold of time. (-1 to disable)"},{after:(0,a.k6)((()=>[(0,a.bF)(C,{unelevated:"",label:"set",color:"accent",size:"md",padding:"sm lg",onClick:t[1]||(t[1]=t=>e.$store.dispatch("node/slowQueryThreshold",e.slowQueryThreshold))})])),_:1},8,["modelValue"]),t[14]||(t[14]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Compacting the on-disk database",-1)),t[15]||(t[15]=(0,a.Lk)("p",null,"Recommended to run it during off-peak hours.",-1)),(0,a.bF)(C,{label:"Compact Database",color:"accent",unelevated:"",size:"md",padding:"sm lg",onClick:t[3]||(t[3]=t=>e.$store.dispatch("node/operationCompactDB"))})])),_:1})])),_:1})]),(0,a.bF)(x,{flat:"",bordered:"",class:"col-12 col-md-3 offset-md-1 q-mb-md"},{default:(0,a.k6)((()=>[(0,a.bF)(L,null,{default:(0,a.k6)((()=>{var s,o,r;return[t[16]||(t[16]=(0,a.Lk)("div",{class:"text-h5"},"Typesense",-1)),t[17]||(t[17]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Node",-1)),(0,a.Lk)("div",null,"Protocol: "+(0,l.v_)(null===(s=e.$store.state.node.loginData)||void 0===s?void 0:s.node.protocol),1),(0,a.Lk)("div",null,"Host: "+(0,l.v_)(null===(o=e.$store.state.node.loginData)||void 0===o?void 0:o.node.host),1),(0,a.Lk)("div",null,"Port: "+(0,l.v_)(null===(r=e.$store.state.node.loginData)||void 0===r?void 0:r.node.port),1),(0,a.Lk)("div",null,"Version: "+(0,l.v_)(e.$store.state.node.data.debug.version),1),Object.hasOwnProperty.call(e.$store.state.node.data.debug,"state")?((0,a.uX)(),(0,a.CE)("div",p," Role: "+(0,l.v_)(1===e.$store.state.node.data.debug.state?"Leader":"Follower"),1)):(0,a.Q3)("",!0),t[18]||(t[18]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Memory",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(Object.keys(e.$store.state.node.data.metrics).filter((e=>e.includes("typesense"))),(t=>((0,a.uX)(),(0,a.CE)("div",{key:t},(0,l.v_)(t.split("_")[2])+" : "+(0,l.v_)(t.includes("bytes")?e.prettyBytes(parseInt(e.$store.state.node.data.metrics[t],10)):e.$store.state.node.data.metrics[t]),1)))),128)),t[19]||(t[19]=(0,a.Lk)("div",{class:"text-subtitle1 q-pt-md"},"Stats",-1)),e.$store.state.node.data.features.stats?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",b," Stats are not enabled on this node. ")),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.$store.state.node.data.stats,((t,s)=>((0,a.uX)(),(0,a.CE)("div",{key:s},[e.isObject(t)?((0,a.uX)(),(0,a.CE)("div",v,[(0,a.eW)((0,l.v_)(s)+" ",1),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t},(0,l.v_)(t)+" : "+(0,l.v_)(e),1)))),128))])):(0,a.Q3)("",!0)])))),128))]})),_:1})])),_:1})])])),_:1})}var k=s(92561);const h=(0,a.pM)({name:"serverStatus",data(){return{refreshInterval:void 0,slowQueryThreshold:-1}},mounted(){this.refreshInterval=window.setInterval((()=>{this.$store.dispatch("node/refreshServerStatus")}),2e3)},computed:{sortedCPU(){return Object.entries(this.$store.state.node.data.metrics).filter((([e])=>e.includes("cpu"))).map((([e,t])=>({node:parseInt(e.split("_")[1].replace("cpu",""))||0,value:parseFloat(t)}))).sort(((e,t)=>e.node-t.node))}},methods:{prettyBytes:k.A,isObject(e){return"object"===typeof e}},beforeUnmount(){window.clearInterval(this.refreshInterval)}});var _=s(12807),f=s(77716),g=s(23316),L=s(44189),x=s(34222),C=s(35859),w=s(23954),q=s(1693),$=s(39270),F=s(98582),I=s.n(F);const Q=(0,_.A)(h,[["render",y]]),E=Q;I()(h,"components",{QPage:f.A,QCard:g.A,QCardSection:L.A,QCircularProgress:x.A,QLinearProgress:C.A,QBadge:w.A,QBtn:q.A,QInput:$.A})}}]);