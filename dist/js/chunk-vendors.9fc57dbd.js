(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"04f8":function(t,e,n){var r=n("2d00"),s=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"06cf":function(t,e,n){var r=n("83ab"),s=n("c65b"),i=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!s(i.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Wi})),n.d(e,"b",(function(){return Xo})),n.d(e,"c",(function(){return Qi})),n.d(e,"d",(function(){return zo})),n.d(e,"e",(function(){return ao})),n.d(e,"f",(function(){return Wo})),n.d(e,"g",(function(){return Qo}));var r=n("589b"),s=n("22e5"),i=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new i["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=i["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=i["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=i["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new _;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new O(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class I{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(v(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class A{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new I(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.A;return this.A=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.A=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function N(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new R(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new R(0,0))}static max(){return new M(new R(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===P.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof P?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends P{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends P{construct(t,e,n){return new U(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new U(e)}static emptyPath(){return new U([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(F.fromString(t))}static fromName(t){return new B(F.fromString(t).popFirst(5))}static empty(){return new B(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new F(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}q.UNKNOWN_ID=-1;function $(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=M.fromTimestamp(1e9===r?new R(n+1,0):new R(n,r));return new K(s,B.empty(),e)}function G(t){return new K(t.readTime,t.key,-1)}class K{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new K(M.min(),B.empty(),-1)}static max(){return new K(M.max(),B.empty(),-1)}}function H(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=B.comparator(t.documentKey,e.documentKey),0!==n?n:N(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==z)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new X((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof X?e:X.resolve(e)}catch(t){return X.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):X.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):X.reject(e)}static resolve(t){return new X((e,n)=>{e(t)})}static reject(t){return new X((e,n)=>{n(t)})}static waitFor(t){return new X((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=X.resolve(!1);for(const n of t)e=e.next(t=>t?X.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new X((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===s&&n(i)},t=>r(t))}})}static doWhile(t,e){return new X((n,r)=>{const s=()=>{!0===t()?e().next(()=>{s()},r):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}J.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class tt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return null==t}function it(t){return 0===t&&1/t==-1/0}function ot(t){return"number"==typeof t&&Number.isInteger(t)&&!it(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new at(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new at(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const ct=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(t){if(v(!!t),"string"==typeof t){let e=0;const n=ct.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ht(t){return"string"==typeof t?at.fromBase64String(t):at.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function dt(t){const e=t.mapValue.fields.__previous_value__;return ft(e)?dt(e):e}function pt(t){const e=ut(t.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ft(t)?4:kt(t)?9007199254740991:10:y()}function yt(t,e){if(t===e)return!0;const n=mt(t);if(n!==mt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pt(t).isEqual(pt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ut(t.timestampValue),r=ut(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ht(t.bytesValue).isEqual(ht(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return lt(t.geoPointValue.latitude)===lt(e.geoPointValue.latitude)&&lt(t.geoPointValue.longitude)===lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return lt(t.integerValue)===lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=lt(t.doubleValue),r=lt(e.doubleValue);return n===r?it(n)===it(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(et(n)!==et(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!yt(n[s],r[s])))return!1;return!0}(t,e);default:return y()}}function vt(t,e){return void 0!==(t.values||[]).find(t=>yt(t,e))}function bt(t,e){if(t===e)return 0;const n=mt(t),r=mt(e);if(n!==r)return N(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=lt(t.integerValue||t.doubleValue),r=lt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return wt(t.timestampValue,e.timestampValue);case 4:return wt(pt(t),pt(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ht(t),r=ht(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=N(n[s],r[s]);if(0!==t)return t}return N(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=N(lt(t.latitude),lt(e.latitude));return 0!==n?n:N(lt(t.longitude),lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=bt(n[s],r[s]);if(t)return t}return N(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===gt.mapValue&&e===gt.mapValue)return 0;if(t===gt.mapValue)return 1;if(e===gt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=N(r[o],i[o]);if(0!==t)return t;const e=bt(n[r[o]],s[i[o]]);if(0!==e)return e}return N(r.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function wt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return N(t,e);const n=ut(t),r=ut(e),s=N(n.seconds,r.seconds);return 0!==s?s:N(n.nanos,r.nanos)}function Et(t){return _t(t)}function _t(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ut(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ht(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=_t(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${_t(t.fields[s])}`;return n+"}"}(t.mapValue):y();var e,n}function Ot(t){return!!t&&"integerValue"in t}function Tt(t){return!!t&&"arrayValue"in t}function St(t){return!!t&&"nullValue"in t}function Ct(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function It(t){return!!t&&"mapValue"in t}function At(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=At(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=At(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t,e){this.position=t,this.inclusive=e}}function jt(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?B.comparator(B.fromName(o.referenceValue),n.key):bt(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Dt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{}class Lt extends Nt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new qt(t,e,n):"array-contains"===e?new Ht(t,n):"in"===e?new zt(t,n):"not-in"===e?new Wt(t,n):"array-contains-any"===e?new Qt(t,n):new Lt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new $t(t,n):new Gt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(bt(e,this.value)):null!==e&&mt(this.value)===mt(e)&&this.matchesComparison(bt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends Nt{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new Rt(t,e)}matches(t){return Mt(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(t=>t.isInequality());return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Mt(t){return"and"===t.op}function Pt(t){return Ft(t)&&Mt(t)}function Ft(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function Vt(t){if(t instanceof Lt)return t.field.canonicalString()+t.op.toString()+Et(t.value);{const e=t.filters.map(t=>Vt(t)).join(",");return`${t.op}(${e})`}}function Ut(t,e){return t instanceof Lt?function(t,e){return e instanceof Lt&&t.op===e.op&&t.field.isEqual(e.field)&&yt(t.value,e.value)}(t,e):t instanceof Rt?function(t,e){return e instanceof Rt&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&Ut(n,e.filters[r]),!0)}(t,e):void y()}function Bt(t){return t instanceof Lt?function(t){return`${t.field.canonicalString()} ${t.op} ${Et(t.value)}`}(t):t instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(Bt).join(" ,")+"}"}(t):"Filter"}class qt extends Lt{constructor(t,e,n){super(t,e,n),this.key=B.fromName(n.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class $t extends Lt{constructor(t,e){super(t,"in",e),this.keys=Kt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Gt extends Lt{constructor(t,e){super(t,"not-in",e),this.keys=Kt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Kt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>B.fromName(t.referenceValue))}class Ht extends Lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Tt(e)&&vt(e.arrayValue,this.value)}}class zt extends Lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&vt(this.value.arrayValue,e)}}class Wt extends Lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(vt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!vt(this.value.arrayValue,e)}}class Qt extends Lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Tt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>vt(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){this.comparator=t,this.root=e||te.EMPTY}insert(t,e){return new Jt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,te.BLACK,null,null))}remove(t){return new Jt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,te.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zt(this.root,t,this.comparator,!0)}}class Zt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class te{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:te.RED,this.left=null!=r?r:te.EMPTY,this.right=null!=s?s:te.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new te(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return te.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1,te.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{constructor(t){this.comparator=t,this.data=new Jt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ne(this.data.getIterator())}getIteratorFrom(t){return new ne(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof ee))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ee(this.comparator);return e.data=t,e}}class ne{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{constructor(t){this.fields=t,t.sort(U.comparator)}static empty(){return new re([])}unionWith(t){let e=new ee(U.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new re(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.value=t}static empty(){return new se({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!It(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=At(e)}setAll(t){let e=U.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=At(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());It(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];It(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){nt(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new se(At(this.value))}}function ie(t){const e=[];return nt(t.fields,(t,n)=>{const r=new U([t]);if(It(n)){const t=ie(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new re(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class oe{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new oe(t,0,M.min(),M.min(),M.min(),se.empty(),0)}static newFoundDocument(t,e,n,r){return new oe(t,1,e,M.min(),n,r,0)}static newNoDocument(t,e){return new oe(t,2,e,M.min(),M.min(),se.empty(),0)}static newUnknownDocument(t,e){return new oe(t,3,e,M.min(),M.min(),se.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=se.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ft=null}}function ce(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ae(t,e,n,r,s,i,o)}function ue(t){const e=b(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Vt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),st(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Et(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Et(t)).join(",")),e.ft=t}return e.ft}function le(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ut(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dt(t.startAt,e.startAt)&&Dt(t.endAt,e.endAt)}function he(t){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function de(t,e,n,r,s,i,o,a){return new fe(t,e,n,r,s,i,o,a)}function pe(t){return new fe(t)}function ge(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function me(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ye(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ve(t){return null!==t.collectionGroup}function be(t){const e=b(t);if(null===e.dt){e.dt=[];const t=ye(e),n=me(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Xt(t)),e.dt.push(new Xt(U.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xt(U.keyField(),t))}}}return e.dt}function we(t){const e=b(t);if(!e._t)if("F"===e.limitType)e._t=ce(e.path,e.collectionGroup,be(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of be(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Xt(s.field,e))}const n=e.endAt?new xt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xt(e.startAt.position,e.startAt.inclusive):null;e._t=ce(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function Ee(t,e,n){return new fe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _e(t,e){return le(we(t),we(e))&&t.limitType===e.limitType}function Oe(t){return`${ue(we(t))}|lt:${t.limitType}`}function Te(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>Bt(t)).join(", ")}]`),st(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Et(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Et(t)).join(",")),`Target(${e})`}(we(t))}; limitType=${t.limitType})`}function Se(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):B.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of be(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=jt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,be(t),e))&&!(t.endAt&&!function(t,e,n){const r=jt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,be(t),e))}(t,e)}function Ce(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ie(t){return(e,n)=>{let r=!1;for(const s of be(t)){const t=Ae(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Ae(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?bt(r,s):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:it(e)?"-0":e}}function xe(t){return{integerValue:""+t}}function je(t,e){return ot(e)?xe(e):ke(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this._=void 0}}function Ne(t,e,n){return t instanceof Me?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Pe?Fe(t,e):t instanceof Ve?Ue(t,e):function(t,e){const n=Re(t,e),r=qe(n)+qe(t.gt);return Ot(n)&&Ot(t.gt)?xe(r):ke(t.yt,r)}(t,e)}function Le(t,e,n){return t instanceof Pe?Fe(t,e):t instanceof Ve?Ue(t,e):n}function Re(t,e){return t instanceof Be?Ot(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Me extends De{}class Pe extends De{constructor(t){super(),this.elements=t}}function Fe(t,e){const n=$e(e);for(const r of t.elements)n.some(t=>yt(t,r))||n.push(r);return{arrayValue:{values:n}}}class Ve extends De{constructor(t){super(),this.elements=t}}function Ue(t,e){let n=$e(e);for(const r of t.elements)n=n.filter(t=>!yt(t,r));return{arrayValue:{values:n}}}class Be extends De{constructor(t,e){super(),this.yt=t,this.gt=e}}function qe(t){return lt(t.integerValue||t.doubleValue)}function $e(t){return Tt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Pe&&e instanceof Pe||t instanceof Ve&&e instanceof Ve?L(t.elements,e.elements,yt):t instanceof Be&&e instanceof Be?yt(t.gt,e.gt):t instanceof Me&&e instanceof Me}(t.transform,e.transform)}class Ke{constructor(t,e){this.version=t,this.transformResults=e}}class He{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new He}static exists(t){return new He(void 0,t)}static updateTime(t){return new He(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ze(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class We{}function Qe(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new on(t.key,He.none()):new tn(t.key,t.data,He.none());{const n=t.data,r=se.empty();let s=new ee(U.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new en(t.key,r,new re(s.toArray()),He.none())}}function Xe(t,e,n){t instanceof tn?function(t,e,n){const r=t.value.clone(),s=rn(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof en?function(t,e,n){if(!ze(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=rn(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(nn(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ye(t,e,n,r){return t instanceof tn?function(t,e,n,r){if(!ze(t.precondition,e))return n;const s=t.value.clone(),i=sn(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof en?function(t,e,n,r){if(!ze(t.precondition,e))return n;const s=sn(t.fieldTransforms,r,e),i=e.data;return i.setAll(nn(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return ze(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Je(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Re(r.transform,t||null);null!=s&&(null===n&&(n=se.empty()),n.set(r.field,s))}return n||null}function Ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Ge(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tn extends We{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class en extends We{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nn(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rn(t,e,n){const r=new Map;v(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Le(o,a,n[s]))}return r}function sn(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Ne(t,i,e))}return r}class on extends We{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class an extends We{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un,ln;function hn(t){switch(t){default:return y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function fn(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case un.OK:return w.OK;case un.CANCELLED:return w.CANCELLED;case un.UNKNOWN:return w.UNKNOWN;case un.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case un.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case un.INTERNAL:return w.INTERNAL;case un.UNAVAILABLE:return w.UNAVAILABLE;case un.UNAUTHENTICATED:return w.UNAUTHENTICATED;case un.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case un.NOT_FOUND:return w.NOT_FOUND;case un.ALREADY_EXISTS:return w.ALREADY_EXISTS;case un.PERMISSION_DENIED:return w.PERMISSION_DENIED;case un.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case un.ABORTED:return w.ABORTED;case un.OUT_OF_RANGE:return w.OUT_OF_RANGE;case un.UNIMPLEMENTED:return w.UNIMPLEMENTED;case un.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(ln=un||(un={}))[ln.OK=0]="OK",ln[ln.CANCELLED=1]="CANCELLED",ln[ln.UNKNOWN=2]="UNKNOWN",ln[ln.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ln[ln.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ln[ln.NOT_FOUND=5]="NOT_FOUND",ln[ln.ALREADY_EXISTS=6]="ALREADY_EXISTS",ln[ln.PERMISSION_DENIED=7]="PERMISSION_DENIED",ln[ln.UNAUTHENTICATED=16]="UNAUTHENTICATED",ln[ln.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ln[ln.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ln[ln.ABORTED=10]="ABORTED",ln[ln.OUT_OF_RANGE=11]="OUT_OF_RANGE",ln[ln.UNIMPLEMENTED=12]="UNIMPLEMENTED",ln[ln.INTERNAL=13]="INTERNAL",ln[ln.UNAVAILABLE=14]="UNAVAILABLE",ln[ln.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){nt(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return rt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Jt(B.comparator);function gn(){return pn}const mn=new Jt(B.comparator);function yn(...t){let e=mn;for(const n of t)e=e.insert(n.key,n);return e}function vn(t){let e=mn;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function bn(){return En()}function wn(){return En()}function En(){return new dn(t=>t.toString(),(t,e)=>t.isEqual(e))}const _n=new Jt(B.comparator),On=new ee(B.comparator);function Tn(...t){let e=On;for(const n of t)e=e.add(n);return e}const Sn=new ee(N);function Cn(){return Sn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new In(M.min(),r,Cn(),gn(),Tn())}}class An{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new An(n,e,Tn(),Tn(),Tn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e,n,r){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=r}}class xn{constructor(t,e){this.targetId=t,this.Et=e}}class jn{constructor(t,e,n=at.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Dn{constructor(){this.At=0,this.Rt=Rn(),this.bt=at.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=Tn(),e=Tn(),n=Tn();return this.Rt.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new An(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Rn()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Nn{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=gn(),this.qt=Ln(),this.Ut=new ee(N)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach((t,n)=>{this.zt(n)&&e(n)})}Jt(t){const e=t.targetId,n=t.Et.count,r=this.Yt(e);if(r){const t=r.target;if(he(t))if(0===n){const n=new B(t.path);this.Qt(e,n,oe.newNoDocument(n,M.min()))}else v(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach((n,r)=>{const s=this.Yt(r);if(s){if(n.current&&he(s.target)){const e=new B(s.target.path);null!==this.Lt.get(e)||this.te(r,e)||this.Qt(r,e,oe.newNoDocument(e,t))}n.St&&(e.set(r,n.Ct()),n.xt())}});let n=Tn();this.qt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Yt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.Lt.forEach((e,n)=>n.setReadTime(t));const r=new In(t,e,this.Ut,this.Lt,n);return this.Lt=gn(),this.qt=Ln(),this.Ut=new ee(N),r}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,e)?r.Nt(e,1):r.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Dn,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new ee(N),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Dn),this.$t.getRemoteKeysForTarget(t).forEach(e=>{this.Qt(t,e,null)})}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function Ln(){return new Jt(B.comparator)}function Rn(){return new Jt(B.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Pn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Fn=(()=>{const t={and:"AND",or:"OR"};return t})();class Vn{constructor(t,e){this.databaseId=t,this.wt=e}}function Un(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bn(t,e){return t.wt?e.toBase64():e.toUint8Array()}function qn(t,e){return Un(t,e.toTimestamp())}function $n(t){return v(!!t),M.fromTimestamp(function(t){const e=ut(t);return new R(e.seconds,e.nanos)}(t))}function Gn(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Kn(t){const e=F.fromString(t);return v(pr(e)),e}function Hn(t,e){return Gn(t.databaseId,e.path)}function zn(t,e){const n=Kn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Yn(n))}function Wn(t,e){return Gn(t.databaseId,e)}function Qn(t){const e=Kn(t);return 4===e.length?F.emptyPath():Yn(e)}function Xn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Jn(t,e,n){return{name:Hn(t,e),fields:n.value.mapValue.fields}}function Zn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.wt?(v(void 0===e||"string"==typeof e),at.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),at.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:fn(t.code);return new E(e,t.message||"")}(o);n=new jn(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zn(t,r.document.name),i=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):M.min(),a=new se({mapValue:{fields:r.document.fields}}),c=oe.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new kn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zn(t,r.document),i=r.readTime?$n(r.readTime):M.min(),o=oe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new kn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zn(t,r.document),i=r.removedTargetIds||[];n=new kn([],i,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new cn(r),i=t.targetId;n=new xn(i,s)}}return n}function tr(t,e){let n;if(e instanceof tn)n={update:Jn(t,e.key,e.value)};else if(e instanceof on)n={delete:Hn(t,e.key)};else if(e instanceof en)n={update:Jn(t,e.key,e.data),updateMask:dr(e.fieldMask)};else{if(!(e instanceof an))return y();n={verify:Hn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Me)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Pe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ve)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Be)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:qn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function er(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?$n(t.updateTime):$n(e);return n.isEqual(M.min())&&(n=$n(e)),new Ke(n,t.transformResults||[])}(t,e))):[]}function nr(t,e){return{documents:[Wn(t,e.path)]}}function rr(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Wn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0!==t.length)return fr(Rt.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:lr(t.field),direction:ar(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.wt||st(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function sr(t){let e=Qn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=or(t);return e instanceof Rt&&Pt(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Xt(hr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,st(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new xt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new xt(n,e)}(n.endAt)),de(e,s,o,i,a,"F",c,u)}function ir(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function or(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hr(t.unaryFilter.field);return Lt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hr(t.unaryFilter.field);return Lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hr(t.unaryFilter.field);return Lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hr(t.unaryFilter.field);return Lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(t):void 0!==t.fieldFilter?function(t){return Lt.create(hr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Rt.create(t.compositeFilter.filters.map(t=>or(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return y()}}(t.compositeFilter.op))}(t):y()}function ar(t){return Mn[t]}function cr(t){return Pn[t]}function ur(t){return Fn[t]}function lr(t){return{fieldPath:t.canonicalString()}}function hr(t){return U.fromServerFormat(t.fieldPath)}function fr(t){return t instanceof Lt?function(t){if("=="===t.op){if(Ct(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NAN"}};if(St(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ct(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NAN"}};if(St(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lr(t.field),op:cr(t.op),value:t.value}}}(t):t instanceof Rt?function(t){const e=t.getFilters().map(t=>fr(t));return 1===e.length?e[0]:{compositeFilter:{op:ur(t.op),filters:e}}}(t):y()}function dr(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yr=mr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Xe(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wn();return this.mutations.forEach(r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Qe(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Tn())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Ze(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Ze(t,e))}}class br{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=_n;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new br(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,n,r,s=M.min(),i=M.min(),o=at.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Er(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t){this.ie=t}}function Or(t){const e=sr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ee(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),it(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(""+(n.seconds||"")),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(ht(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?kt(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):y()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const r of Object.keys(n))this.de(r,e),this.ce(n[r],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const r of n)this.ce(r,e)}me(t,e){this.he(e,37),B.fromName(t).path.forEach(t=>{this.he(e,60),this.pe(t,e)})}he(t,e){t.le(e)}_e(t){t.le(2)}}Tr.Ie=new Tr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr{constructor(){this.Je=new Cr}addToCollectionParentIndex(t,e){return this.Je.add(e),X.resolve()}getCollectionParents(t,e){return X.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return X.resolve()}deleteFieldIndex(t,e){return X.resolve()}getDocumentsMatchingTarget(t,e){return X.resolve(null)}getIndexType(t,e){return X.resolve(0)}getFieldIndexes(t,e){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,e){return X.resolve(K.min())}getMinOffsetFromCollectionGroup(t,e){return X.resolve(K.min())}updateCollectionGroup(t,e,n){return X.resolve()}updateIndexEntries(t,e){return X.resolve()}}class Cr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ee(F.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ee(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ir{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ir(t,Ir.DEFAULT_COLLECTION_PERCENTILE,Ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir.DEFAULT_COLLECTION_PERCENTILE=10,Ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ir.DEFAULT=new Ir(41943040,Ir.DEFAULT_COLLECTION_PERCENTILE,Ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ir.DISABLED=new Ir(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ar(0)}static vn(){return new Ar(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(){this.changes=new dn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?X.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Ye(n.mutation,t,re.empty(),R.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,Tn()).next(()=>e))}getLocalViewOfDocuments(t,e,n=Tn()){const r=bn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=yn();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=bn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Tn()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let s=gn();const i=En(),o=En();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof en)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Ye(o.mutation,e,o.mutation.getFieldMask(),R.now()))}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new xr(e,null!==(n=i.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=En();let r=new Jt((t,e)=>t-e),s=Tn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||re.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Tn()).add(t);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=wn();c.forEach(t=>{if(!s.has(t)){const r=Qe(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return X.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ve(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):X.resolve(bn());let o=-1,a=s;return i.next(e=>X.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?X.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,Tn())).next(t=>({batchId:o,changes:vn(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(t=>{let e=yn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=yn();return this.indexManager.getCollectionParents(t,r).next(i=>X.forEach(i,i=>{const o=function(t,e){return new fe(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,oe.newInvalidDocument(n)))});let n=yn();return r.forEach((r,s)=>{const i=t.get(r);void 0!==i&&Ye(i.mutation,s,re.empty(),R.now()),Se(e,s)&&(n=n.insert(r,s))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return X.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:$n(n.createTime)}),X.resolve()}getNamedQuery(t,e){return X.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Or(t.bundledQuery),readTime:$n(t.readTime)}}(e)),X.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.overlays=new Jt(B.comparator),this.es=new Map}getOverlay(t,e){return X.resolve(this.overlays.get(e))}getOverlays(t,e){const n=bn();return X.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.oe(t,e,r)}),X.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),X.resolve()}getOverlaysForCollection(t,e,n){const r=bn(),s=e.length+1,i=new B(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return X.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Jt((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=bn(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=bn(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return X.resolve(o)}oe(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new wr(e,n));let s=this.es.get(e);void 0===s&&(s=Tn(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.ns=new ee(Rr.ss),this.rs=new ee(Rr.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Rr(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new Rr(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){const e=new B(new F([])),n=new Rr(e,t),r=new Rr(e,t+1),s=[];return this.rs.forEachInRange([n,r],t=>{this.cs(t),s.push(t.key)}),s}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new B(new F([])),n=new Rr(e,t),r=new Rr(e,t+1);let s=Tn();return this.rs.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new Rr(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Rr{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return B.comparator(t.key,e.key)||N(t._s,e._s)}static os(t,e){return N(t._s,e._s)||B.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new ee(Rr.ss)}checkEmpty(t){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new vr(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new Rr(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return X.resolve(i)}lookupMutationBatch(t,e){return X.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),s=r<0?0:r;return X.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Rr(e,0),r=new Rr(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],t=>{const e=this.ys(t._s);s.push(e)}),X.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ee(N);return e.forEach(t=>{const e=new Rr(t,0),r=new Rr(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],t=>{n=n.add(t._s)})}),X.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;B.isDocumentKey(s)||(s=s.child(""));const i=new Rr(new B(s),0);let o=new ee(N);return this.gs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)},i),X.resolve(this.Is(o))}Is(t){const e=[];return t.forEach(t=>{const n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return X.forEach(e.mutations,r=>{const s=new Rr(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){const n=new Rr(e,0),r=this.gs.firstAfterOrEqual(n);return X.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.Es=t,this.docs=new Jt(B.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return X.resolve(n?n.document.mutableCopy():oe.newInvalidDocument(e))}getEntries(t,e){let n=gn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():oe.newInvalidDocument(t))}),X.resolve(n)}getAllFromCollection(t,e,n){let r=gn();const s=new B(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||H(G(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return X.resolve(r)}getAllFromCollectionGroup(t,e,n,r){y()}As(t,e){return X.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Fr(this)}getSize(t){return X.resolve(this.size)}}class Fr extends kr{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)}),X.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.persistence=t,this.Rs=new dn(t=>ue(t),le),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Lr,this.targetCount=0,this.vs=Ar.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),X.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ar(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,X.resolve()}updateTargetData(t,e){return this.Dn(e),X.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Rs.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),X.waitFor(s).next(()=>r)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return X.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),X.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),X.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),X.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return X.resolve(n)}containsKey(t,e){return X.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new J(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Vr(this),this.indexManager=new Sr,this.remoteDocumentCache=function(t){return new Pr(t)}(t=>this.referenceDelegate.xs(t)),this.yt=new _r(e),this.Ns=new Dr(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Mr(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new Br(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(t=>this.referenceDelegate.Os(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ms(t,e){return X.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class Br extends W{constructor(t){super(),this.currentSequenceNumber=t}}class qr{constructor(t){this.persistence=t,this.Fs=new Lr,this.$s=null}static Bs(t){return new qr(t)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),X.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),X.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),X.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Ls,n=>{const r=B.fromPath(n);return this.qs(t,r).next(t=>{t||e.removeEntry(r,M.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.qs(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}qs(t,e){return X.or([()=>X.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=Tn(),r=Tn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new $r(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next(s=>s||this.Oi(t,e,r,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(ge(e))return X.resolve(null);let n=we(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Ee(e,null,"F"),n=we(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const s=Tn(...r);return this.Ni.getDocuments(t,s).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.Fi(e,r);return this.$i(e,i,s,n.readTime)?this.ki(t,Ee(e,null,"F")):this.Bi(t,i,e,n)}))})))}Oi(t,e,n,r){return ge(e)||r.isEqual(M.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(s=>{const o=this.Fi(e,s);return this.$i(e,o,n,r)?this.Mi(t,e):(f()<=i["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Te(e)),this.Bi(t,o,e,$(r,-1)))})}Fi(t,e){let n=new ee(Ie(t));return e.forEach((e,r)=>{Se(t,r)&&(n=n.add(r))}),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(t,e){return f()<=i["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",Te(e)),this.Ni.getDocumentsMatchingQuery(t,e,K.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.yt=r,this.qi=new Jt(N),this.Ui=new dn(t=>ue(t),le),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qi))}}function Hr(t,e,n,r){return new Kr(t,e,n,r)}async function zr(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(s=>(r=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=Tn();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({ji:t,removedBatchIds:s,addedBatchIds:i}))})})}function Wr(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=X.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);v(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Tn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Qr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Xr(t,e){const n=b(t),r=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];e.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(at.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))});let a=gn(),c=Tn();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Yr(t,i,e.documentUpdates).next(t=>{a=t.Wi,c=t.zi})),!r.isEqual(M.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return X.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.qi=s,t))}function Yr(t,e,n){let r=Tn(),s=Tn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=gn();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(M.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Wi:r,zi:s}})}function Jr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Zr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Cs.getTargetData(t,e).next(s=>s?(r=s,X.resolve(r)):n.Cs.allocateTargetId(t).next(s=>(r=new Er(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t})}async function ts(t,e,n){const r=b(t),s=r.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!Y(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function es(t,e,n){const r=b(t);let s=M.min(),i=Tn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),s=r.Ui.get(n);return void 0!==s?X.resolve(r.qi.get(s)):r.Cs.getTargetData(e,n)}(r,t,we(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Li.getDocumentsMatchingQuery(t,e,n?s:M.min(),n?i:Tn())).next(t=>(ns(r,Ce(e),t),{documents:t,Hi:i})))}function ns(t,e,n){let r=t.Ki.get(e)||M.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ki.set(e,r)}class rs{constructor(){this.activeTargetIds=Cn()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ss{constructor(){this.Lr=new rs,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new rs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,s){const i=this.ho(t,e);d("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(t,i,o,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}_o(t,e,n,r,s,i){return this.ao(t,e,n,r,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){const n=as[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise((s,i)=>{const o=new a["g"];o.setWithCredentials(!0),o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),i(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(e.status);i(new E(t,e.message))}else i(new E(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=r.join("");d("Connection","Creating WebChannel: "+c,o);const u=s.createWebChannel(c,o);let l=!1,h=!1;const f=new cs({Hr:t=>{h?d("Connection","Not sending because WebChannel is closed:",t):(l||(d("Connection","Opening WebChannel transport."),u.open(),l=!0),d("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,a["f"].EventType.OPEN,()=>{h||d("Connection","WebChannel transport opened.")}),p(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,d("Connection","WebChannel transport closed"),f.io())}),p(u,a["f"].EventType.ERROR,t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),f.io(new E(w.UNAVAILABLE,"The operation could not be completed")))}),p(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];v(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){d("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=un[t];if(void 0!==e)return fn(e)}(t),n=s.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,f.io(new E(e,n)),u.close()}else d("Connection","WebChannel received:",n),f.ro(n)}}),p(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return new Vn(t,!0)}class fs{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,n,r,s,i,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new fs(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.So===e&&this.Go(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)})})}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.Qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget(()=>this.So===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ps extends ds{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.yt=s}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=Zn(this.yt,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?$n(e.readTime):M.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Xn(this.yt),e.addTarget=function(t,e){let n;const r=e.target;return n=he(r)?{documents:nr(t,r)}:{query:rr(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Bn(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=Un(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=ir(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Xn(this.yt),e.removeTarget=t,this.Bo(e)}}class gs extends ds{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=er(t.writeResults,t.commitTime),n=$n(t.commitTime);return this.listener.Zo(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Xn(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>tr(this.yt,t))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.ao(t,e,n,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection._o(t,e,n,s,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.nu=!0}}class ys{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+t.toString()),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(e),this.ou=!1):d("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(t=>{n.enqueueAndForget(async()=>{Is(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e._u.add(4),await ws(e),e.gu.set("Unknown"),e._u.delete(4),await bs(e)}(this))})}),this.gu=new ys(n,r)}}async function bs(t){if(Is(t))for(const e of t.wu)await e(!0)}async function ws(t){for(const e of t.wu)await e(!1)}function Es(t,e){const n=b(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Cs(n)?Ss(n):Ks(n).ko()&&Os(n,e))}function _s(t,e){const n=b(t),r=Ks(n);n.du.delete(e),r.ko()&&Ts(n,e),0===n.du.size&&(r.ko()?r.Fo():Is(n)&&n.gu.set("Unknown"))}function Os(t,e){t.yu.Ot(e.targetId),Ks(t).zo(e)}function Ts(t,e){t.yu.Ot(e),Ks(t).Ho(e)}function Ss(t){t.yu=new Nn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ks(t).start(),t.gu.uu()}function Cs(t){return Is(t)&&!Ks(t).No()&&t.du.size>0}function Is(t){return 0===b(t)._u.size}function As(t){t.yu=void 0}async function ks(t){t.du.forEach((e,n)=>{Os(t,e)})}async function xs(t,e){As(t),Cs(t)?(t.gu.hu(e),Ss(t)):t.gu.set("Unknown")}async function js(t,e,n){if(t.gu.set("Online"),e instanceof jn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ds(t,n)}else if(e instanceof kn?t.yu.Kt(e):e instanceof xn?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(M.min()))try{const e=await Qr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(r);s&&t.du.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(at.EMPTY_BYTE_STRING,n.snapshotVersion)),Ts(t,e);const r=new Er(n.target,e,1,n.sequenceNumber);Os(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await Ds(t,e)}}async function Ds(t,e,n){if(!Y(e))throw e;t._u.add(1),await ws(t),t.gu.set("Offline"),n||(n=()=>Qr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await bs(t)})}function Ns(t,e){return e().catch(n=>Ds(t,n,e))}async function Ls(t){const e=b(t),n=Hs(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Rs(e);)try{const t=await Jr(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,Ms(e,t)}catch(t){await Ds(e,t)}Ps(e)&&Fs(e)}function Rs(t){return Is(t)&&t.fu.length<10}function Ms(t,e){t.fu.push(e);const n=Hs(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ps(t){return Is(t)&&!Hs(t).No()&&t.fu.length>0}function Fs(t){Hs(t).start()}async function Vs(t){Hs(t).eu()}async function Us(t){const e=Hs(t);for(const n of t.fu)e.Xo(n.mutations)}async function Bs(t,e,n){const r=t.fu.shift(),s=br.from(r,e,n);await Ns(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ls(t)}async function qs(t,e){e&&Hs(t).Yo&&await async function(t,e){if(n=e.code,hn(n)&&n!==w.ABORTED){const n=t.fu.shift();Hs(t).Mo(),await Ns(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ls(t)}var n}(t,e),Ps(t)&&Fs(t)}async function $s(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=Is(n);n._u.add(3),await ws(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await bs(n)}async function Gs(t,e){const n=b(t);e?(n._u.delete(2),await bs(n)):e||(n._u.add(2),await ws(n),n.gu.set("Unknown"))}function Ks(t){return t.pu||(t.pu=function(t,e,n){const r=b(t);return r.su(),new ps(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:ks.bind(null,t),Zr:xs.bind(null,t),Wo:js.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Cs(t)?Ss(t):t.gu.set("Unknown")):(await t.pu.stop(),As(t))})),t.pu}function Hs(t){return t.Iu||(t.Iu=function(t,e,n){const r=b(t);return r.su(),new gs(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:Vs.bind(null,t),Zr:qs.bind(null,t),tu:Us.bind(null,t),Zo:Bs.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ls(t)):(await t.Iu.stop(),t.fu.length>0&&(d("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zs{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new zs(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ws(t,e){if(p("AsyncQueue",`${e}: ${t}`),Y(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this.comparator=t?(e,n)=>t(e,n)||B.comparator(e.key,n.key):(t,e)=>B.comparator(t.key,e.key),this.keyedMap=yn(),this.sortedSet=new Jt(this.comparator)}static emptySet(t){return new Qs(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qs))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Qs;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.Tu=new Jt(B.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):y():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ys{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Ys(t,e,Qs.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_e(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.Au=void 0,this.listeners=[]}}class Zs{constructor(){this.queries=new dn(t=>Oe(t),_e),this.onlineState="Unknown",this.Ru=new Set}}async function ti(t,e){const n=b(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Js),s)try{i.Au=await n.onListen(r)}catch(t){const n=Ws(t,`Initialization of query '${Te(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&si(n)}async function ei(t,e){const n=b(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ni(t,e){const n=b(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(s)&&(r=!0);e.Au=s}}r&&si(n)}function ri(t,e,n){const r=b(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function si(t){t.Ru.forEach(t=>{t.next()})}class ii{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ys(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Ys.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi{constructor(t){this.key=t}}class ai{constructor(t){this.key=t}}class ci{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Tn(),this.mutatedKeys=Tn(),this.Gu=Ie(t),this.Qu=new Qs(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Xs,r=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Se(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Eu();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new Ys(this.query,t.Qu,r,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xs,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Tn(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});const e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new ai(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new oi(n))}),e}tc(t){this.qu=t.Hi,this.Ku=Tn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Ys.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class ui{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class li{constructor(t){this.key=t,this.nc=!1}}class hi{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new dn(t=>Oe(t),_e),this.rc=new Map,this.oc=new Set,this.uc=new Jt(B.comparator),this.cc=new Map,this.ac=new Lr,this.hc={},this.lc=new Map,this.fc=Ar.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function fi(t,e){const n=ji(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const t=await Zr(n.localStore,we(e));n.isPrimaryClient&&Es(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await di(n,e,r,"current"===i,t.resumeToken)}return s}async function di(t,e,n,r,s){t._c=(e,n,r)=>async function(t,e,n,r){let s=e.view.Wu(n);s.$i&&(s=await es(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Si(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const i=await es(t.localStore,e,!0),o=new ci(e,i.Hi),a=o.Wu(i.documents),c=An.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Si(t,n,u.Xu);const l=new ui(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function pi(t,e){const n=b(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(t=>!_e(t,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ts(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_s(n.remoteStore,r.targetId),Oi(n,r.targetId)}).catch(Q)):(Oi(n,r.targetId),await ts(n.localStore,r.targetId,!0))}async function gi(t,e,n){const r=Di(t);try{const t=await function(t,e){const n=b(t),r=R.now(),s=e.reduce((t,e)=>t.add(e.key),Tn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=gn(),c=Tn();return n.Gi.getEntries(t,s).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(s=>{i=s;const o=[];for(const t of e){const e=Je(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new en(t.key,e,ie(e.value.mapValue),He.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:vn(i)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new Jt(N)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ai(r,t.changes),await Ls(r.remoteStore)}catch(t){const e=Ws(t,"Failed to persist write");n.reject(e)}}async function mi(t,e){const n=b(t);try{const t=await Xr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.cc.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?v(r.nc):t.removedDocuments.size>0&&(v(r.nc),r.nc=!1))}),await Ai(n,t,e)}catch(t){await Q(t)}}function yi(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach((n,r)=>{const s=r.view.bu(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.listeners)s.bu(e)&&(r=!0)}),r&&si(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vi(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let t=new Jt(B.comparator);t=t.insert(i,oe.newNoDocument(i,M.min()));const n=Tn().add(i),s=new In(M.min(),new Map,new ee(N),t,n);await mi(r,s),r.uc=r.uc.remove(i),r.cc.delete(e),Ii(r)}else await ts(r.localStore,e,!1).then(()=>Oi(r,e,n)).catch(Q)}async function bi(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Wr(n.localStore,e);_i(n,r,null),Ei(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ai(n,t)}catch(t){await Q(t)}}async function wi(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);_i(r,e,n),Ei(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ai(r,t)}catch(n){await Q(n)}}function Ei(t,e){(t.lc.get(e)||[]).forEach(t=>{t.resolve()}),t.lc.delete(e)}function _i(t,e,n){const r=b(t);let s=r.hc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Oi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||Ti(t,e)})}function Ti(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(_s(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ii(t))}function Si(t,e,n){for(const r of n)r instanceof oi?(t.ac.addReference(r.key,e),Ci(t,r)):r instanceof ai?(d("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Ti(t,r.key)):y()}function Ci(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(d("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ii(t))}function Ii(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(F.fromString(e)),r=t.fc.next();t.cc.set(r,new li(n)),t.uc=t.uc.insert(n,r),Es(t.remoteStore,new Er(we(pe(n.path)),r,2,J.at))}}async function Ai(t,e,n){const r=b(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((t,a)=>{o.push(r._c(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=$r.Ci(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>X.forEach(e,e=>X.forEach(e.Si,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>X.forEach(e.Di,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Y(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qi.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,s)}}}(r.localStore,i))}async function ki(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await zr(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ai(n,t.ji)}}function xi(t,e){const n=b(t),r=n.cc.get(e);if(r&&r.nc)return Tn().add(r.key);{let t=Tn();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function ji(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vi.bind(null,e),e.sc.Wo=ni.bind(null,e.eventManager),e.sc.wc=ri.bind(null,e.eventManager),e}function Di(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bi.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wi.bind(null,e),e}class Ni{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=hs(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Hr(this.persistence,new Gr,t.initialUser,this.yt)}yc(t){return new Ur(qr.Bs,this.yt)}gc(t){return new ss}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Li{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>yi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ki.bind(null,this.syncEngine),await Gs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Zs}createDatastore(t){const e=hs(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new us(r));var r;return function(t,e,n,r){return new ms(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>yi(this.syncEngine,t,0),i=os.C()?new os:new is,new vs(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new hi(t,e,n,r,s,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e._u.add(5),await ws(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mi(t,e,n,r){if(!0===e&&!0===r)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pi(t){if(!B.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fi(t){if(B.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Ui(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vi(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bi=new Map;class qi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Mi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qi(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new T;switch(t.type){case"gapi":const e=t.client;return new A(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Bi.get(t);e&&(d("ComponentProvider","Removing Datastore"),Bi.delete(t),e.terminate())}(this),Promise.resolve()}}function Gi(t,e,n,r={}){var s;const i=(t=Ui(t,$i))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o["e"])(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(i)}t._authCredentials=new S(new O(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ki(this.firestore,t,this._key)}}class Hi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Hi(this.firestore,t,this._query)}}class zi extends Hi{constructor(t,e,n){super(t,e,pe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ki(this.firestore,null,new B(t))}withConverter(t){return new zi(this.firestore,t,this._path)}}function Wi(t,e,...n){if(t=Object(o["i"])(t),Ri("collection","path",e),t instanceof $i){const r=F.fromString(e,...n);return Fi(r),new zi(t,null,r)}{if(!(t instanceof Ki||t instanceof zi))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Fi(r),new zi(t.firestore,null,r)}}function Qi(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=D.R()),Ri("doc","path",e),t instanceof $i){const r=F.fromString(e,...n);return Pi(r),new Ki(t,null,new B(r))}{if(!(t instanceof Ki||t instanceof zi))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Pi(r),new Ki(t.firestore,t instanceof zi?t.converter:null,new B(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):p("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=D.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ws(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ji(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await zr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Zi(t,e){t.asyncQueue.verifyOperationInProgress();const n=await to(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>$s(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>$s(e.remoteStore,n)),t.onlineComponents=e}async function to(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await Ji(t,new Ni)),t.offlineComponents}async function eo(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Zi(t,new Li)),t.onlineComponents}function no(t){return eo(t).then(t=>t.syncEngine)}async function ro(t){const e=await eo(t),n=e.eventManager;return n.onListen=fi.bind(null,e.syncEngine),n.onUnlisten=pi.bind(null,e.syncEngine),n}function so(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Xi({next:n=>{e.enqueueAndForget(()=>ei(t,o)),n.fromCache&&"server"===r.source?s.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ii(n,i,{includeMetadataChanges:!0,Nu:!0});return ti(t,o)}(await ro(t),t.asyncQueue,e,n,r)),r.promise}class io{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new fs(this,"async_queue_retry"),this.Wc=()=>{const t=ls();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=ls();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=ls();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const e=new _;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Y(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=zs.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.Uc.push(r),r}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class oo extends $i{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new io,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uo(this),this._firestoreClient.terminate()}}function ao(t,e){const n="object"==typeof t?t:Object(r["e"])(),s="string"==typeof t?t:e||"(default)",i=Object(r["b"])(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=Object(o["h"])("firestore");t&&Gi(i,...t)}return i}function co(t){return t._firestoreClient||uo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uo(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Z(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Yi(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new lo(at.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new lo(at.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=/^__.*__$/;class mo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}}class yo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new en(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function vo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class bo{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new bo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return No(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(vo(this.sa)&&go.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class wo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||hs(t)}da(t,e,n,r=!1){return new bo({sa:t,methodName:e,fa:n,path:U.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Eo(t){const e=t._freezeSettings(),n=hs(t._databaseId);return new wo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _o(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);ko("Data must be an object, but it was:",o,r);const a=Io(r,o);let c,u;if(i.merge)c=new re(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=xo(e,r,n);if(!o.contains(s))throw new E(w.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Lo(t,s)||t.push(s)}c=new re(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new mo(new se(a),c,u)}class Oo extends fo{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(this._methodName+"() can only appear at the top level of your update data"):t.ha(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Oo}}function To(t,e,n,r){const s=t.da(1,e,n);ko("Data must be an object, but it was:",s,r);const i=[],a=se.empty();nt(r,(t,r)=>{const c=Do(e,t,n);r=Object(o["i"])(r);const u=s.ca(c);if(r instanceof Oo)i.push(c);else{const t=Co(r,u);null!=t&&(i.push(c),a.set(c,t))}});const c=new re(i);return new yo(a,c,s.fieldTransforms)}function So(t,e,n,r,s,i){const a=t.da(1,e,n),c=[xo(e,r,n)],u=[s];if(i.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<i.length;o+=2)c.push(xo(e,i[o])),u.push(i[o+1]);const l=[],h=se.empty();for(let d=c.length-1;d>=0;--d)if(!Lo(l,c[d])){const t=c[d];let e=u[d];e=Object(o["i"])(e);const n=a.ca(t);if(e instanceof Oo)l.push(t);else{const r=Co(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new re(l);return new yo(h,f,a.fieldTransforms)}function Co(t,e){if(Ao(t=Object(o["i"])(t)))return ko("Unsupported field value:",e,t),Io(t,e);if(t instanceof fo)return function(t,e){if(!vo(e.sa))throw e.ha(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.ha(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Co(s,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return je(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=R.fromDate(t);return{timestampValue:Un(e.yt,n)}}if(t instanceof R){const n=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Un(e.yt,n)}}if(t instanceof po)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof lo)return{bytesValue:Bn(e.yt,t._byteString)};if(t instanceof Ki){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha("Unsupported field value: "+Vi(t))}(t,e)}function Io(t,e){const n={};return rt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nt(t,(t,r)=>{const s=Co(r,e.ra(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function Ao(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof R||t instanceof po||t instanceof lo||t instanceof Ki||t instanceof fo)}function ko(t,e,n){if(!Ao(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Vi(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function xo(t,e,n){if((e=Object(o["i"])(e))instanceof ho)return e._internalPath;if("string"==typeof e)return Do(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const jo=new RegExp("[~\\*/\\[\\]]");function Do(t,e,n){if(e.search(jo)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ho(...e.split("."))._internalPath}catch(r){throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}function Lo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ki(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Mo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Mo extends Ro{data(){return super.data()}}function Po(t,e){return"string"==typeof e?Do(t,e):e instanceof ho?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vo{convertValue(t,e="none"){switch(mt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return nt(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new po(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=dt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pt(t));default:return null}}convertTimestamp(t){const e=ut(t);return new R(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);v(pr(n));const r=new tt(n.get(1),n.get(3)),s=new B(n.popFirst(5));return r.isEqual(e)||p(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qo extends Ro{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $o extends qo{data(t={}){return super.data(t)}}class Go{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Bo(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $o(this._firestore,this._userDataWriter,n.key,n,new Bo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new $o(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Bo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new $o(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Bo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Ko(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ko(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}class Ho extends Vo{constructor(t){super(),this.firestore=t}convertBytes(t){return new lo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ki(this.firestore,null,e)}}function zo(t){t=Ui(t,Hi);const e=Ui(t.firestore,oo),n=co(e),r=new Ho(e);return Fo(t._query),so(n,t._query).then(n=>new Go(e,r,t,n))}function Wo(t,e,n){t=Ui(t,Ki);const r=Ui(t.firestore,oo),s=Uo(t.converter,e,n);return Yo(r,[_o(Eo(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,He.none())])}function Qo(t,e,n,...r){t=Ui(t,Ki);const s=Ui(t.firestore,oo),i=Eo(s);let a;return a="string"==typeof(e=Object(o["i"])(e))||e instanceof ho?So(i,"updateDoc",t._key,e,n,r):To(i,"updateDoc",t._key,e),Yo(s,[a.toMutation(t._key,He.exists(!0))])}function Xo(t){return Yo(Ui(t.firestore,oo),[new on(t._key,He.none())])}function Yo(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>gi(await no(t),e,n)),n.promise}(co(t),e)}!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new s["a"]("firestore",(t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new oo(new C(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(c,"3.8.0",t),Object(r["g"])(c,"3.8.0","esm2017")}()}).call(this,n("4362"))},"0cfb":function(t,e,n){var r=n("83ab"),s=n("d039"),i=n("cc12");t.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){var n=String;t.exports=function(t){try{return n(t)}catch(e){return"Object"}}},"13d2":function(t,e,n){var r=n("d039"),s=n("1626"),i=n("1a2d"),o=n("83ab"),a=n("5e77").CONFIGURABLE,c=n("8925"),u=n("69f3"),l=u.enforce,h=u.get,f=Object.defineProperty,d=o&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||a&&t.name!==e)&&(o?f(t,"name",{value:e,configurable:!0}):t.name=e),d&&n&&i(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var r=l(t);return i(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return s(this)&&h(this).source||c(this)}),"toString")},1494:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]}))},"14d9":function(t,e,n){"use strict";var r=n("23e7"),s=n("7b0b"),i=n("07fa"),o=n("3a34"),a=n("3511"),c=n("d039"),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=s(this),n=i(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},1626:function(t,e,n){var r=n("8ea1"),s=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===s}:function(t){return"function"==typeof t}},"1a2d":function(t,e,n){var r=n("e330"),s=n("7b0b"),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(s(t),e)}},"1d80":function(t,e,n){var r=n("7234"),s=TypeError;t.exports=function(t){if(r(t))throw s("Can't call method on "+t);return t}},"1fd5":function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return I})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return T})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return E})),n.d(e,"i",(function(){return D})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return p}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=s(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function f(){return!h()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d(){try{return"object"===typeof indexedDB}catch(t){return!1}}function p(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof r)return;const t=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},v=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},b=()=>{try{return m()||y()||v()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},w=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="FirebaseError";class C extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?A(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new C(r,o,n);return a}}function A(t,e){return t.replace(k,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(j(n)&&j(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("4362"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),s=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?s(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),s=n("06cf").f,i=n("9112"),o=n("cb2d"),a=n("6374"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=s(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),o(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),s=n("7839"),i=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"2d00":function(t,e,n){var r,s,i=n("da84"),o=n("342f"),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),t.exports=s},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},3511:function(t,e){var n=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw n("Maximum allowed index exceeded");return t}},"3a34":function(t,e,n){"use strict";var r=n("83ab"),s=n("e8b5"),i=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(s(t)&&!o(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3f4e":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("abc5");const s="devtools-plugin:setup",i="plugin:settings:set";var o=n("5134");class a{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const i in t.settings){const e=t.settings[i];n[i]=e.defaultValue}const r="__vue-devtools-plugin-settings__"+t.id;let s=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(s,e)}catch(a){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(a){}s=t},now(){return Object(o["a"])()}},e&&e.on(i,(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function c(t,e){const n=t,i=Object(r["b"])(),o=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!o||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const t=c?new a(n,o):null,r=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else o.emit(s,t,e)}},"40d5":function(t,e,n){var r=n("d039");t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("e330"),s=n("d039"),i=n("c6b6"),o=Object,a=r("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):o(t)}:o},"485a":function(t,e,n){var r=n("c65b"),s=n("1626"),i=n("861d"),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!i(a=r(n,t)))return a;if(s(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!i(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},"4d64":function(t,e,n){var r=n("fc6a"),s=n("23cb"),i=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=i(c),l=s(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"50c4":function(t,e,n){var r=n("5926"),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},5134:function(t,e,n){"use strict";(function(t){let r,s;function i(){var e;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,s=window.performance):"undefined"!==typeof t&&(null===(e=t.perf_hooks)||void 0===e?void 0:e.performance)?(r=!0,s=t.perf_hooks.performance):r=!1),r}function o(){return i()?s.now():Date.now()}n.d(e,"a",(function(){return o}))}).call(this,n("c8ba"))},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return Q})),n.d(e,"b",(function(){return tt})),n.d(e,"c",(function(){return Z})),n.d(e,"d",(function(){return J}));var r=n("7a23"),s=n("3f4e"),i="store";function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function l(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},h=Object(r["l"])(!0);h.run((function(){o(a,(function(e,n){c[n]=l(e,t),u[n]=Object(r["c"])((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=Object(r["y"])({data:e}),t._scope=h,t.strict&&w(t),s&&n&&t._withCommit((function(){s.data=null})),i&&i.stop()}function p(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[o]=r),!i&&!s){var a=E(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(t,o,n);r.forEachMutation((function(e,n){var r=o+n;y(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,s=e.handler||e;v(t,r,s,u)})),r.forEachGetter((function(e,n){var r=o+n;b(t,r,e,u)})),r.forEachChild((function(r,i){p(t,e,n.concat(i),r,s)}))}function g(t,e,n){var r=""===e,s={dispatch:r?t.dispatch:function(n,r,s){var i=_(n,r,s),o=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,o);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?t.commit:function(n,r,s){var i=_(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return m(t,e)}},state:{get:function(){return E(t.state,n)}}}),s}function m(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function y(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push((function(e){n.call(t,r.state,e)}))}function v(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push((function(e){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return c(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){Object(r["I"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function E(t,e){return e.reduce((function(t,e){return t[e]}),t)}function _(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var O="vuex bindings",T="vuex:mutations",S="vuex:actions",C="vuex",I=0;function A(t,e){Object(s["a"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O]},(function(n){n.addTimelineLayer({id:T,label:"Vuex Mutations",color:k}),n.addTimelineLayer({id:S,label:"Vuex Actions",color:k}),n.addInspector({id:C,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===C)if(n.filter){var r=[];R(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[L(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===C){var r=n.nodeId;m(e,r),n.state=M(F(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===C){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit((function(){n.set(e._state.data,s,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(C),n.sendInspectorState(C),n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=I++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:S,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},s=Date.now()-t._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:S,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var k=8702998,x=6710886,j=16777215,D={label:"namespaced",textColor:j,backgroundColor:x};function N(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function L(t,e){return{id:e||"root",label:N(e),tags:t.namespaced?[D]:[],children:Object.keys(t._children).map((function(n){return L(t._children[n],e+n+"/")}))}}function R(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[D]:[]}),Object.keys(e._children).forEach((function(s){R(t,e._children[s],n,r+s+"/")}))}function M(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var i=P(e);s.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?N(t):t,editable:!1,value:V((function(){return i[t]}))}}))}return s}function P(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach((function(t){s[t]||(s[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),s=s[t]._custom.value})),s[i]=V((function(){return t[n]}))}else e[n]=V((function(){return t[n]}))})),e}function F(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,s){var i=t[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?i:i._children}),"root"===e?t:t.root._children)}function V(t){try{return t()}catch(e){return e}}var U=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},U.prototype.addChild=function(t,e){this._children[t]=e},U.prototype.removeChild=function(t){delete this._children[t]},U.prototype.getChild=function(t){return this._children[t]},U.prototype.hasChild=function(t){return t in this._children},U.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},U.prototype.forEachChild=function(t){o(this._children,t)},U.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},U.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},U.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(U.prototype,B);var q=function(t){this.register([],t,!1)};function $(t,e,n){if(z(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");$(t.concat(r),e.getChild(r),n.modules[r])}}q.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},q.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},q.prototype.update=function(t){$([],this.root,t)},q.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),z(t,e);var s=new U(e,n);if(0===t.length)this.root=s;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],s)}e.modules&&o(e.modules,(function(e,s){r.register(t.concat(s),e,n)}))},q.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},q.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var G={assert:function(t){return"function"===typeof t},expected:"function"},K={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},H={getters:G,mutations:G,actions:K};function z(t,e){Object.keys(H).forEach((function(n){if(e[n]){var r=H[n];o(e[n],(function(e,s){u(r.assert(e),W(t,n,s,e,r.expected))}))}}))}function W(t,e,n,r,s){var i=e+" should be "+s+' but "'+e+"."+n+'"';return t.length>0&&(i+=' in module "'+t.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function Q(t){return new X(t)}var X=function t(e){var n=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var s=e.strict;void 0===s&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return l.call(o,t,e,n)},this.strict=s;var h=this._modules.root.state;p(this,h,[],this._modules.root),d(this,h),r.forEach((function(t){return t(n)}))},Y={state:{configurable:!0}};X.prototype.install=function(t,e){t.provide(e||i,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&A(t,this)},Y.state.get=function(){return this._state.data},Y.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(t,e,n){var r=this,s=_(t,e,n),i=s.type,o=s.payload,a=s.options,c={type:i,payload:o},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},X.prototype.dispatch=function(t,e){var n=this,r=_(t,e),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+s)},X.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},X.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},X.prototype.watch=function(t,e,n){var s=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(r["I"])((function(){return t(s.state,s.getters)}),e,Object.assign({},n))},X.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},X.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},X.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=E(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),f(this)},X.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},X.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},X.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(X.prototype,Y);var J=rt((function(t,e){var n={};return nt(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=st(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof s?s.call(this,e,n):e[s]},n[r].vuex=!0})),n})),Z=rt((function(t,e){var n={};return nt(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=st(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n})),tt=(rt((function(t,e){var n={};return nt(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var r=e.key,s=e.val;s=t+s,n[r]=function(){if(!t||st(this.$store,"mapGetters",t)){if(s in this.$store.getters)return this.$store.getters[s];console.error("[vuex] unknown getter: "+s)}},n[r].vuex=!0})),n})),rt((function(t,e){var n={};return nt(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),et(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=st(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n})));function et(t){return nt(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function nt(t){return Array.isArray(t)||a(t)}function rt(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function st(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},5692:function(t,e,n){var r=n("c430"),s=n("c6cd");(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.27.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var r=n("d066"),s=n("e330"),i=n("241c"),o=n("7418"),a=n("825a"),c=s([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return mt})),n.d(e,"b",(function(){return ht})),n.d(e,"c",(function(){return lt})),n.d(e,"d",(function(){return ft})),n.d(e,"e",(function(){return vt})),n.d(e,"f",(function(){return yt})),n.d(e,"g",(function(){return bt}));var r=n("22e5"),s=n("e691"),i=n("1fd5");const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(O(this),e),_(h.get(this))}:function(...e){return _(t.apply(O(this),e))}:function(e,...n){const r=t.call(O(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const O=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{i&&t.addEventListener("close",()=>i()),s&&t.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],I=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return I.set(e,i),i}b(t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const j="@firebase/app",D="0.9.0",N=new s["b"]("@firebase/app"),L="@firebase/app-compat",R="@firebase/analytics-compat",M="@firebase/analytics",P="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",U="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",G="@firebase/functions-compat",K="@firebase/installations",H="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.15.0",it="[DEFAULT]",ot={[j]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[R]:"fire-analytics-compat",[F]:"fire-app-check",[P]:"fire-app-check-compat",[V]:"fire-auth",[U]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[G]:"fire-fn-compat",[K]:"fire-iid",[H]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t,e,n=it){ht(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new i["b"]("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=st;function yt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw pt.create("bad-app-name",{appName:String(o)});if(n||(n=Object(i["g"])()),!n)throw pt.create("no-options");const a=at.get(o);if(a){if(Object(i["f"])(n,a.options)&&Object(i["f"])(s,a.config))return a;throw pt.create("duplicate-app",{appName:o})}const c=new r["b"](o);for(const r of ct.values())c.addComponent(r);const u=new gt(n,s,c);return at.set(o,u),u}function vt(t=it){const e=at.get(t);if(!e&&t===it)return yt();if(!e)throw pt.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+="-"+n);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}lt(new r["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",Et=1,_t="firebase-heartbeat-store";let Ot=null;function Tt(){return Ot||(Ot=T(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Ot}async function St(t){try{const e=await Tt();return e.transaction(_t).objectStore(_t).get(It(t))}catch(e){if(e instanceof i["c"])N.warn(e.message);else{const t=pt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});N.warn(t.message)}}}async function Ct(t,e){try{const n=await Tt(),r=n.transaction(_t,"readwrite"),s=r.objectStore(_t);return await s.put(e,It(t)),r.done}catch(n){if(n instanceof i["c"])N.warn(n.message);else{const t=pt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=jt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=jt(),{heartbeatsToSend:e,unsentEntries:n}=Dt(this._heartbeatsCache.heartbeats),r=Object(i["d"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jt(){const t=new Date;return t.toISOString().substring(0,10)}function Dt(t,e=At){const n=[];let r=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["k"])()&&Object(i["m"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return Object(i["d"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){lt(new r["a"]("platform-logger",t=>new k(t),"PRIVATE")),lt(new r["a"]("heartbeat",t=>new xt(t),"PRIVATE")),bt(j,D,t),bt(j,D,"esm2017"),bt("fire-js","")}Rt("")},5926:function(t,e,n){var r=n("b42e");t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},"59ed":function(t,e,n){var r=n("1626"),s=n("0d51"),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),s=n("1a2d"),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6374:function(t,e,n){var r=n("da84"),s=Object.defineProperty;t.exports=function(t,e){try{s(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6605:function(t,e,n){"use strict";n.d(e,"a",(function(){return te})),n.d(e,"b",(function(){return F}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function i(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const o=Object.assign;function a(t,e){const n={};for(const r in e){const s=e[r];n[r]=u(s)?s.map(t):t(s)}return n}const c=()=>{},u=Array.isArray;const l=/\/$/,h=t=>t.replace(l,"");function f(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=w(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function d(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function p(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&m(e.matched[r],n.matched[s])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function m(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!v(t[n],e[n]))return!1;return!0}function v(t,e){return u(t)?b(t,e):u(e)?b(e,t):t===e}function b(t,e){return u(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function w(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,_;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(_||(_={}));function O(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),h(t)}const T=/^[^#]+#/;function S(t,e){return t.replace(T,"#")+e}function C(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const I=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=C(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function k(t,e){const n=history.state?history.state.position-e:-1;return n+t}const x=new Map;function j(t,e){x.set(t,e)}function D(t){const e=x.get(t);return x.delete(t),e}let N=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),p(n,"")}const o=p(n,t);return o+r+s}function R(t,e,n,r){let s=[],i=[],a=null;const c=({state:i})=>{const o=L(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=o,e.value=i,a&&a===c)return void(a=null);l=u?i.position-u.position:0}else r(o);s.forEach(t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?_.forward:_.back:_.unknown})})};function u(){a=n.value}function l(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(o({},t.state,{scroll:I()}),"")}function f(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:f}}function M(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?I():null}}function P(t){const{history:e,location:n}=window,r={value:L(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:N()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function a(t,n){const a=o({},e.state,M(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,a,!0),r.value=t}function c(t,n){const a=o({},s.value,e.state,{forward:t,scroll:I()});i(a.current,a,!0);const c=o({},M(r.value,t,null),{position:a.position+1},n);i(t,c,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:a}}function F(t){t=O(t);const e=P(t),n=R(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=o({location:"",base:t,go:r,createHref:S.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function V(t){return"string"===typeof t||t&&"object"===typeof t}function U(t){return"string"===typeof t||"symbol"===typeof t}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var $;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})($||($={}));function G(t,e){return o(new Error,{type:t,[q]:!0},e)}function K(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const H="[^/]+?",z={sensitive:!1,strict:!1,start:!0,end:!0},W=/[.+*?^${}()[\]/\\]/g;function Q(t,e){const n=o({},z,e),r=[];let s=n.start?"^":"";const i=[];for(const o of t){const t=o.length?[]:[90];n.strict&&!o.length&&(s+="/");for(let e=0;e<o.length;e++){const r=o[e];let a=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(W,"\\$&"),a+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;i.push({name:t,repeatable:n,optional:c});const l=u||H;if(l!==H){a+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&o.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),s+=f,a+=20,c&&(a+=-8),n&&(a+=-20),".*"===l&&(a+=-50)}t.push(a)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(t){const e=t.match(a),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of s)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:a}=t,c=i in e?e[i]:"";if(u(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function X(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Y(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=X(r[n],s[n]);if(t)return t;n++}if(1===Math.abs(s.length-r.length)){if(J(r))return 1;if(J(s))return-1}return s.length-r.length}function J(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Z={type:0,value:""},tt=/[a-zA-Z0-9_]/;function et(t){if(!t)return[[]];if("/"===t)return[[Z]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:tt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function nt(t,e,n){const r=Q(et(t.path),n);const s=o(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function rt(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,u=it(t);u.aliasOf=r&&r.record;const h=ut(e,t),f=[u];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(o({},u,{components:r?r.record.components:u.components,path:t,aliasOf:r?r.record:u}))}let d,p;for(const e of f){const{path:o}=e;if(n&&"/"!==o[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(o&&r+o)}if(d=nt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),s&&t.name&&!at(d)&&a(t.name)),u.children){const t=u.children;for(let e=0;e<t.length;e++)i(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{a(p)}:c}function a(t){if(U(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(a),e.alias.forEach(a))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(a),t.alias.forEach(a))}}function u(){return n}function l(t){let e=0;while(e<n.length&&Y(t,n[e])>=0&&(t.record.path!==n[e].record.path||!lt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!at(t)&&r.set(t.record.name,t)}function h(t,e){let s,i,a,c={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw G(1,{location:t});0,a=s.record.name,c=o(st(e.params,s.keys.filter(t=>!t.optional).map(t=>t.name)),t.params&&st(t.params,s.keys.map(t=>t.name))),i=s.stringify(c)}else if("path"in t)i=t.path,s=n.find(t=>t.re.test(i)),s&&(c=s.parse(i),a=s.record.name);else{if(s=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!s)throw G(1,{location:t,currentLocation:e});a=s.record.name,c=o({},e.params,t.params),i=s.stringify(c)}const u=[];let l=s;while(l)u.unshift(l.record),l=l.parent;return{name:a,path:i,params:c,matched:u,meta:ct(u)}}return e=ut({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>i(t)),{addRoute:i,resolve:h,removeRoute:a,getRoutes:u,getRecordMatcher:s}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function it(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ot(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ot(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function at(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ct(t){return t.reduce((t,e)=>o(t,e.meta),{})}function ut(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function lt(t,e){return e.children.some(e=>e===t||lt(t,e))}const ht=/#/g,ft=/&/g,dt=/\//g,pt=/=/g,gt=/\?/g,mt=/\+/g,yt=/%5B/g,vt=/%5D/g,bt=/%5E/g,wt=/%60/g,Et=/%7B/g,_t=/%7C/g,Ot=/%7D/g,Tt=/%20/g;function St(t){return encodeURI(""+t).replace(_t,"|").replace(yt,"[").replace(vt,"]")}function Ct(t){return St(t).replace(Et,"{").replace(Ot,"}").replace(bt,"^")}function It(t){return St(t).replace(mt,"%2B").replace(Tt,"+").replace(ht,"%23").replace(ft,"%26").replace(wt,"`").replace(Et,"{").replace(Ot,"}").replace(bt,"^")}function At(t){return It(t).replace(pt,"%3D")}function kt(t){return St(t).replace(ht,"%23").replace(gt,"%3F")}function xt(t){return null==t?"":kt(t).replace(dt,"%2F")}function jt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(mt," "),n=t.indexOf("="),i=jt(n<0?t:t.slice(0,n)),o=n<0?null:jt(t.slice(n+1));if(i in e){let t=e[i];u(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Nt(t){let e="";for(let n in t){const r=t[n];if(n=At(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=u(r)?r.map(t=>t&&It(t)):[r&&It(r)];s.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Lt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}const Rt=Symbol(""),Mt=Symbol(""),Pt=Symbol(""),Ft=Symbol(""),Vt=Symbol("");function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(G(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a(G(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function qt(t,e,n,r){const s=[];for(const o of t){0;for(const t in o.components){let a=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if($t(a)){const i=a.__vccOpts||a,c=i[e];c&&s.push(Bt(c,n,r,o,t))}else{let c=a();0,s.push(()=>c.then(s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const a=i(s)?s.default:s;o.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&Bt(u,n,r,o,t)()}))}}}return s}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=Object(r["o"])(Pt),n=Object(r["o"])(Ft),s=Object(r["c"])(()=>e.resolve(Object(r["E"])(t.to))),i=Object(r["c"])(()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(m.bind(null,r));if(o>-1)return o;const a=Qt(t[e-2]);return e>1&&Qt(r)===a&&i[i.length-1].path!==a?i.findIndex(m.bind(null,t[e-2])):o}),o=Object(r["c"])(()=>i.value>-1&&Wt(n.params,s.value.params)),a=Object(r["c"])(()=>i.value>-1&&i.value===n.matched.length-1&&y(n.params,s.value.params));function u(n={}){return zt(n)?e[Object(r["E"])(t.replace)?"replace":"push"](Object(r["E"])(t.to)).catch(c):Promise.resolve()}return{route:s,href:Object(r["c"])(()=>s.value.href),isActive:o,isExactActive:a,navigate:u}}const Kt=Object(r["k"])({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=Object(r["y"])(Gt(t)),{options:s}=Object(r["o"])(Pt),i=Object(r["c"])(()=>({[Xt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Object(r["n"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Ht=Kt;function zt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wt(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!u(s)||s.length!==r.length||r.some((t,e)=>t!==s[e]))return!1}return!0}function Qt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Object(r["o"])(Vt),i=Object(r["c"])(()=>t.route||s.value),a=Object(r["o"])(Mt,0),c=Object(r["c"])(()=>{let t=Object(r["E"])(a);const{matched:e}=i.value;let n;while((n=e[t])&&!n.components)t++;return t}),u=Object(r["c"])(()=>i.value.matched[c.value]);Object(r["w"])(Mt,Object(r["c"])(()=>c.value+1)),Object(r["w"])(Rt,u),Object(r["w"])(Vt,i);const l=Object(r["z"])();return Object(r["I"])(()=>[l.value,u.value,t.name],([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&m(e,s)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const s=i.value,a=t.name,c=u.value,h=c&&c.components[a];if(!h)return Jt(n.default,{Component:h,route:s});const f=c.props[a],d=f?!0===f?s.params:"function"===typeof f?f(s):f:null,p=t=>{t.component.isUnmounted&&(c.instances[a]=null)},g=Object(r["n"])(h,o({},d,e,{onVnodeUnmounted:p,ref:l}));return Jt(n.default,{Component:g,route:s})||g}}});function Jt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Zt=Yt;function te(t){const e=rt(t.routes,t),n=t.parseQuery||Dt,i=t.stringifyQuery||Nt,l=t.history;const h=Ut(),p=Ut(),m=Ut(),y=Object(r["C"])(B);let v=B;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=a.bind(null,t=>""+t),w=a.bind(null,xt),_=a.bind(null,jt);function O(t,n){let r,s;return U(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function T(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function C(t){return!!e.getRecordMatcher(t)}function x(t,r){if(r=o({},r||y.value),"string"===typeof t){const s=f(n,t,r.path),i=e.resolve({path:s.path},r),a=l.createHref(s.fullPath);return o(s,i,{params:_(i.params),hash:jt(s.hash),redirectedFrom:void 0,href:a})}let s;if("path"in t)s=o({},t,{path:f(n,t.path,r.path).path});else{const e=o({},t.params);for(const t in e)null==e[t]&&delete e[t];s=o({},t,{params:w(t.params)}),r.params=w(r.params)}const a=e.resolve(s,r),c=t.hash||"";a.params=b(_(a.params));const u=d(i,o({},t,{hash:Ct(c),path:a.path})),h=l.createHref(u);return o({fullPath:u,hash:c,query:i===Nt?Lt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:h})}function N(t){return"string"===typeof t?f(n,t,y.value.path):o({},t)}function L(t,e){if(v!==t)return G(8,{from:e,to:t})}function R(t){return F(t)}function M(t){return R(o(N(t),{replace:!0}))}function P(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),o({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function F(t,e){const n=v=x(t),r=y.value,s=t.state,a=t.force,c=!0===t.replace,u=P(n);if(u)return F(o(N(u),{state:"object"===typeof u?o({},s,u.state):s,force:a,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!a&&g(i,r,n)&&(h=G(16,{to:l,from:r}),et(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch(t=>K(t)?K(t,2)?t:tt(t):J(t,l,r)).then(t=>{if(t){if(K(t,2))return F(o({replace:c},N(t.to),{state:"object"===typeof t.to?o({},s,t.to.state):s,force:a}),e||l)}else t=H(l,r,!0,c,s);return $(l,r,t),t})}function V(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,s,i]=ne(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach(r=>{n.push(Bt(r,t,e))});const o=V.bind(null,t,e);return n.push(o),ee(n).then(()=>{n=[];for(const r of h.list())n.push(Bt(r,t,e));return n.push(o),ee(n)}).then(()=>{n=qt(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach(r=>{n.push(Bt(r,t,e))});return n.push(o),ee(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(u(r.beforeEnter))for(const s of r.beforeEnter)n.push(Bt(s,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(o),ee(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=qt(i,"beforeRouteEnter",t,e),n.push(o),ee(n))).then(()=>{n=[];for(const r of p.list())n.push(Bt(r,t,e));return n.push(o),ee(n)}).catch(t=>K(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of m.list())r(t,e,n)}function H(t,e,n,r,i){const a=L(t,e);if(a)return a;const c=e===B,u=s?history.state:{};n&&(r||c?l.replace(t.fullPath,o({scroll:c&&u&&u.scroll},i)):l.push(t.fullPath,i)),y.value=t,et(t,e,n,c),tt()}let z;function W(){z||(z=l.listen((t,e,n)=>{if(!ot.listening)return;const r=x(t),i=P(r);if(i)return void F(o(i,{replace:!0}),r).catch(c);v=r;const a=y.value;s&&j(k(a.fullPath,n.delta),I()),q(r,a).catch(t=>K(t,12)?t:K(t,2)?(F(t.to,r).then(t=>{K(t,20)&&!n.delta&&n.type===E.pop&&l.go(-1,!1)}).catch(c),Promise.reject()):(n.delta&&l.go(-n.delta,!1),J(t,r,a))).then(t=>{t=t||H(r,a,!1),t&&(n.delta&&!K(t,8)?l.go(-n.delta,!1):n.type===E.pop&&K(t,20)&&l.go(-1,!1)),$(r,a,t)}).catch(c)}))}let Q,X=Ut(),Y=Ut();function J(t,e,n){tt(t);const r=Y.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function Z(){return Q&&y.value!==B?Promise.resolve():new Promise((t,e)=>{X.add([t,e])})}function tt(t){return Q||(Q=!t,W(),X.list().forEach(([e,n])=>t?n(t):e()),X.reset()),t}function et(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&D(k(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["p"])().then(()=>a(e,n,c)).then(t=>t&&A(t)).catch(t=>J(t,e,n))}const nt=t=>l.go(t);let st;const it=new Set,ot={currentRoute:y,listening:!0,addRoute:O,removeRoute:T,hasRoute:C,getRoutes:S,resolve:x,options:t,push:R,replace:M,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:h.add,beforeResolve:p.add,afterEach:m.add,onError:Y.add,isReady:Z,install(t){const e=this;t.component("RouterLink",Ht),t.component("RouterView",Zt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["E"])(y)}),s&&!st&&y.value===B&&(st=!0,R(l.location).catch(t=>{0}));const n={};for(const s in B)n[s]=Object(r["c"])(()=>y.value[s]);t.provide(Pt,e),t.provide(Ft,Object(r["y"])(n)),t.provide(Vt,y);const i=t.unmount;it.add(t),t.unmount=function(){it.delete(t),it.size<1&&(v=B,z&&z(),z=null,y.value=B,st=!1,Q=!1),i()}}};return ot}function ee(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ne(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find(t=>m(t,i))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find(t=>m(t,a))||s.push(a))}return[n,r,s]}},"69f3":function(t,e,n){var r,s,i,o=n("cdce"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("1a2d"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return i(t)?s(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=s(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw g(p);return e.facade=t,b.set(t,e),e},s=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw g(p);return e.facade=t,u(t,w,e),e},s=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:r,get:s,has:i,enforce:y,getterFor:v}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},7234:function(t,e){t.exports=function(t){return null===t||void 0===t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"y",(function(){return Et})),n.d(e,"z",(function(){return Mt})),n.d(e,"C",(function(){return Pt})),n.d(e,"E",(function(){return Ut})),n.d(e,"q",(function(){return r["J"]})),n.d(e,"D",(function(){return r["M"]})),n.d(e,"a",(function(){return wr})),n.d(e,"c",(function(){return ms})),n.d(e,"e",(function(){return Dr})),n.d(e,"f",(function(){return Gr})),n.d(e,"g",(function(){return jr})),n.d(e,"h",(function(){return Fr})),n.d(e,"i",(function(){return $r})),n.d(e,"j",(function(){return Vr})),n.d(e,"k",(function(){return Ye})),n.d(e,"m",(function(){return ts})),n.d(e,"n",(function(){return ys})),n.d(e,"o",(function(){return Le})),n.d(e,"p",(function(){return ie})),n.d(e,"r",(function(){return en})),n.d(e,"s",(function(){return nn})),n.d(e,"t",(function(){return gn})),n.d(e,"u",(function(){return Cr})),n.d(e,"v",(function(){return Oe})),n.d(e,"w",(function(){return Ne})),n.d(e,"x",(function(){return _e})),n.d(e,"A",(function(){return In})),n.d(e,"B",(function(){return On})),n.d(e,"I",(function(){return Me})),n.d(e,"J",(function(){return Te})),n.d(e,"K",(function(){return wn})),n.d(e,"b",(function(){return Xs})),n.d(e,"d",(function(){return Ii})),n.d(e,"F",(function(){return mi})),n.d(e,"G",(function(){return gi})),n.d(e,"H",(function(){return _i})),n.d(e,"L",(function(){return Ei}));var r=n("9ff4");let s;class i{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function o(t){return new i(t)}function a(t,e=s){e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];u(s)&&!l(s)?s.delete(t):e[n++]=s,s.w&=~g,s.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30;let y;const v=Symbol(""),b=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=_;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,_=!0,g=1<<++p,p<=m?h(this):E(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,y=this.parent,_=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _=!0;const O=[];function T(){O.push(_),_=!1}function S(){const t=O.pop();_=void 0===t||t}function C(t,e,n){if(_&&y){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=c());const s=void 0;I(r,s)}}function I(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function A(t,e,n,s,i,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["o"])(t)){const t=Object(r["O"])(s);a.forEach((e,n)=>{("length"===n||n>=t)&&u.push(e)})}else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["o"])(t)?Object(r["t"])(n)&&u.push(a.get("length")):(u.push(a.get(v)),Object(r["u"])(t)&&u.push(a.get(b)));break;case"delete":Object(r["o"])(t)||(u.push(a.get(v)),Object(r["u"])(t)&&u.push(a.get(b)));break;case"set":Object(r["u"])(t)&&u.push(a.get(v));break}if(1===u.length)u[0]&&k(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);k(c(t))}}function k(t,e){const n=Object(r["o"])(t)?t:[...t];for(const r of n)r.computed&&x(r,e);for(const r of n)r.computed||x(r,e)}function x(t,e){(t!==y||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const j=Object(r["I"])("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r["F"])),N=F(),L=F(!1,!0),R=F(!0),M=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=kt(this);for(let e=0,s=this.length;e<s;e++)C(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(kt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){T();const n=kt(this)[e].apply(this,t);return S(),n}}),t}function F(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?vt:yt:e?mt:gt).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(M,s))return Reflect.get(M,s,i);const a=Reflect.get(n,s,i);return(Object(r["F"])(s)?D.has(s):j(s))?a:(t||C(n,"get",s),e?a:Rt(a)?o&&Object(r["t"])(s)?a:a.value:Object(r["w"])(a)?t?Ot(a):Et(a):a)}}const V=B(),U=B(!0);function B(t=!1){return function(e,n,s,i){let o=e[n];if(Ct(o)&&Rt(o)&&!Rt(s))return!1;if(!t&&(It(s)||Ct(s)||(o=kt(o),s=kt(s)),!Object(r["o"])(e)&&Rt(o)&&!Rt(s)))return o.value=s,!0;const a=Object(r["o"])(e)&&Object(r["t"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,s,i);return e===kt(i)&&(a?Object(r["j"])(s,o)&&A(e,"set",n,s,o):A(e,"add",n,s)),c}}function q(t,e){const n=Object(r["k"])(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&A(t,"delete",e,void 0,s),i}function $(t,e){const n=Reflect.has(t,e);return Object(r["F"])(e)&&D.has(e)||C(t,"has",e),n}function G(t){return C(t,"iterate",Object(r["o"])(t)?"length":v),Reflect.ownKeys(t)}const K={get:N,set:V,deleteProperty:q,has:$,ownKeys:G},H={get:R,set(t,e){return!0},deleteProperty(t,e){return!0}},z=Object(r["h"])({},K,{get:L,set:U}),W=t=>t,Q=t=>Reflect.getPrototypeOf(t);function X(t,e,n=!1,r=!1){t=t["__v_raw"];const s=kt(t),i=kt(e);n||(e!==i&&C(s,"get",e),C(s,"get",i));const{has:o}=Q(s),a=r?W:n?Dt:jt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function Y(t,e=!1){const n=this["__v_raw"],r=kt(n),s=kt(t);return e||(t!==s&&C(r,"has",t),C(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function J(t,e=!1){return t=t["__v_raw"],!e&&C(kt(t),"iterate",v),Reflect.get(t,"size",t)}function Z(t){t=kt(t);const e=kt(this),n=Q(e),r=n.has.call(e,t);return r||(e.add(t),A(e,"add",t,t)),this}function tt(t,e){e=kt(e);const n=kt(this),{has:s,get:i}=Q(n);let o=s.call(n,t);o||(t=kt(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function et(t){const e=kt(this),{has:n,get:r}=Q(e);let s=n.call(e,t);s||(t=kt(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&A(e,"delete",t,void 0,i),o}function nt(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&A(t,"clear",void 0,void 0,n),r}function rt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=kt(i),a=e?W:t?Dt:jt;return!t&&C(o,"iterate",v),i.forEach((t,e)=>n.call(r,a(t),a(e),s))}}function st(t,e,n){return function(...s){const i=this["__v_raw"],o=kt(i),a=Object(r["u"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?W:e?Dt:jt;return!e&&C(o,"iterate",u?b:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function ot(){const t={get(t){return X(this,t)},get size(){return J(this)},has:Y,add:Z,set:tt,delete:et,clear:nt,forEach:rt(!1,!1)},e={get(t){return X(this,t,!1,!0)},get size(){return J(this)},has:Y,add:Z,set:tt,delete:et,clear:nt,forEach:rt(!1,!0)},n={get(t){return X(this,t,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:rt(!0,!1)},r={get(t){return X(this,t,!0,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:rt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach(s=>{t[s]=st(s,!1,!1),n[s]=st(s,!0,!1),e[s]=st(s,!1,!0),r[s]=st(s,!0,!0)}),[t,n,e,r]}const[at,ct,ut,lt]=ot();function ht(t,e){const n=e?t?lt:ut:t?ct:at;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get(Object(r["k"])(n,s)&&s in e?n:e,s,i)}const ft={get:ht(!1,!1)},dt={get:ht(!1,!0)},pt={get:ht(!0,!1)};const gt=new WeakMap,mt=new WeakMap,yt=new WeakMap,vt=new WeakMap;function bt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:bt(Object(r["P"])(t))}function Et(t){return Ct(t)?t:Tt(t,!1,K,ft,gt)}function _t(t){return Tt(t,!1,z,dt,mt)}function Ot(t){return Tt(t,!0,H,pt,yt)}function Tt(t,e,n,s,i){if(!Object(r["w"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function St(t){return Ct(t)?St(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ct(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function At(t){return St(t)||Ct(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function xt(t){return Object(r["g"])(t,"__v_skip",!0),t}const jt=t=>Object(r["w"])(t)?Et(t):t,Dt=t=>Object(r["w"])(t)?Ot(t):t;function Nt(t){_&&y&&(t=kt(t),I(t.dep||(t.dep=c())))}function Lt(t,e){t=kt(t),t.dep&&k(t.dep)}function Rt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Ft(t,!1)}function Pt(t){return Ft(t,!0)}function Ft(t,e){return Rt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:kt(t),this._value=e?t:jt(t)}get value(){return Nt(this),this._value}set value(t){const e=this.__v_isShallow||It(t)||Ct(t);t=e?t:kt(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:jt(t),Lt(this,t))}}function Ut(t){return Rt(t)?t.value:t}const Bt={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qt(t){return St(t)?t:new Proxy(t,Bt)}var $t;class Gt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[$t]=!1,this._dirty=!0,this.effect=new w(t,()=>{this._dirty||(this._dirty=!0,Lt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e,n=!1){let s,i;const o=Object(r["q"])(t);o?(s=t,i=r["d"]):(s=t.get,i=t.set);const a=new Gt(s,i,o||!i,n);return a}$t="__v_isReadonly";function Ht(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Wt(i,e,n)}return s}function zt(t,e,n,s){if(Object(r["q"])(t)){const i=Ht(t,e,n,s);return i&&Object(r["z"])(i)&&i.catch(t=>{Wt(t,e,n)}),i}const i=[];for(let r=0;r<t.length;r++)i.push(zt(t[r],e,n,s));return i}function Wt(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,i))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Ht(o,null,10,[t,s,i])}Qt(t,n,s,r)}function Qt(t,e,n,r=!0){console.error(t)}let Xt=!1,Yt=!1;const Jt=[];let Zt=0;const te=[];let ee=null,ne=0;const re=Promise.resolve();let se=null;function ie(t){const e=se||re;return t?e.then(this?t.bind(this):t):e}function oe(t){let e=Zt+1,n=Jt.length;while(e<n){const r=e+n>>>1,s=de(Jt[r]);s<t?e=r+1:n=r}return e}function ae(t){Jt.length&&Jt.includes(t,Xt&&t.allowRecurse?Zt+1:Zt)||(null==t.id?Jt.push(t):Jt.splice(oe(t.id),0,t),ce())}function ce(){Xt||Yt||(Yt=!0,se=re.then(ge))}function ue(t){const e=Jt.indexOf(t);e>Zt&&Jt.splice(e,1)}function le(t){Object(r["o"])(t)?te.push(...t):ee&&ee.includes(t,t.allowRecurse?ne+1:ne)||te.push(t),ce()}function he(t,e=(Xt?Zt+1:0)){for(0;e<Jt.length;e++){const t=Jt[e];t&&t.pre&&(Jt.splice(e,1),e--,t())}}function fe(t){if(te.length){const t=[...new Set(te)];if(te.length=0,ee)return void ee.push(...t);for(ee=t,ee.sort((t,e)=>de(t)-de(e)),ne=0;ne<ee.length;ne++)ee[ne]();ee=null,ne=0}}const de=t=>null==t.id?1/0:t.id,pe=(t,e)=>{const n=de(t)-de(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ge(t){Yt=!1,Xt=!0,Jt.sort(pe);r["d"];try{for(Zt=0;Zt<Jt.length;Zt++){const t=Jt[Zt];t&&!1!==t.active&&Ht(t,null,14)}}finally{Zt=0,Jt.length=0,fe(t),Xt=!1,se=null,(Jt.length||te.length)&&ge(t)}}new Set;new Map;function me(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||r["b"];let i=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in s){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=s[t]||r["b"];o&&(i=n.map(t=>Object(r["E"])(t)?t.trim():t)),e&&(i=n.map(r["O"]))}let c;let u=s[c=Object(r["N"])(e)]||s[c=Object(r["N"])(Object(r["e"])(e))];!u&&o&&(u=s[c=Object(r["N"])(Object(r["l"])(e))]),u&&zt(u,t,6,i);const l=s[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,zt(l,t,6,i)}}function ye(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!Object(r["q"])(t)){const s=t=>{const n=ye(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),Object(r["w"])(t)&&s.set(t,a),a):(Object(r["w"])(t)&&s.set(t,null),null)}function ve(t,e){return!(!t||!Object(r["x"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let be=null,we=null;function Ee(t){const e=be;return be=t,we=t&&t.type.__scopeId||null,e}function _e(t){we=t}function Oe(){we=null}function Te(t,e=be,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&kr(-1);const s=Ee(e);let i;try{i=t(...n)}finally{Ee(s),r._d&&kr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Se(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,v;const b=Ee(t);try{if(4&n.shapeFlag){const t=i||s;y=Kr(h.call(t,t,f,o,p,d,g)),v=u}else{const t=e;0,y=Kr(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),v=e.props?u:Ce(u)}}catch(E){Tr.length=0,Wt(E,t,1),y=Vr(_r)}let w=y;if(v&&!1!==m){const t=Object.keys(v),{shapeFlag:e}=w;t.length&&7&e&&(a&&t.some(r["v"])&&(v=Ie(v,a)),w=qr(w,v))}return n.dirs&&(w=qr(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,Ee(b),y}const Ce=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["x"])(n))&&((e||(e={}))[n]=t[n]);return e},Ie=(t,e)=>{const n={};for(const s in t)Object(r["v"])(s)&&s.slice(9)in e||(n[s]=t[s]);return n};function Ae(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||ke(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ke(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!ve(u,n))return!0}}return!1}function ke(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ve(n,i))return!0}return!1}function xe({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const je=t=>t.__isSuspense;function De(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):le(t)}function Ne(t,e){if(Zr){let n=Zr.provides;const r=Zr.parent&&Zr.parent.provides;r===n&&(n=Zr.provides=Object.create(r)),n[t]=e}else 0}function Le(t,e,n=!1){const s=Zr||be;if(s){const i=null==s.parent?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Object(r["q"])(e)?e.call(s.proxy):e}else 0}const Re={};function Me(t,e,n){return Pe(t,e,n)}function Pe(t,e,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:a}=r["b"]){const c=Zr;let u,l,h=!1,f=!1;if(Rt(t)?(u=()=>t.value,h=It(t)):St(t)?(u=()=>t,s=!0):Object(r["o"])(t)?(f=!0,h=t.some(t=>St(t)||It(t)),u=()=>t.map(t=>Rt(t)?t.value:St(t)?Ue(t):Object(r["q"])(t)?Ht(t,c,2):void 0)):u=Object(r["q"])(t)?e?()=>Ht(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),zt(t,c,3,[p])}:r["d"],e&&s){const t=u;u=()=>Ue(t())}let d,p=t=>{l=v.onStop=()=>{Ht(t,c,4)}};if(os){if(p=r["d"],e?n&&zt(e,c,3,[u(),f?[]:void 0,p]):u(),"sync"!==i)return r["d"];{const t=bs();d=t.__watcherHandles||(t.__watcherHandles=[])}}let g=f?new Array(t.length).fill(Re):Re;const m=()=>{if(v.active)if(e){const t=v.run();(s||h||(f?t.some((t,e)=>Object(r["j"])(t,g[e])):Object(r["j"])(t,g)))&&(l&&l(),zt(e,c,3,[t,g===Re?void 0:f&&g[0]===Re?[]:g,p]),g=t)}else v.run()};let y;m.allowRecurse=!!e,"sync"===i?y=m:"post"===i?y=()=>dr(m,c&&c.suspense):(m.pre=!0,c&&(m.id=c.uid),y=()=>ae(m));const v=new w(u,y);e?n?m():g=v.run():"post"===i?dr(v.run.bind(v),c&&c.suspense):v.run();const b=()=>{v.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,v)};return d&&d.push(b),b}function Fe(t,e,n){const s=this.proxy,i=Object(r["E"])(t)?t.includes(".")?Ve(s,t):()=>s[t]:t.bind(s,s);let o;Object(r["q"])(e)?o=e:(o=e.handler,n=e);const a=Zr;es(this);const c=Pe(i,o.bind(s),n);return a?es(a):ns(),c}function Ve(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Ue(t,e){if(!Object(r["w"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Rt(t))Ue(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)Ue(t[n],e);else if(Object(r["C"])(t)||Object(r["u"])(t))t.forEach(t=>{Ue(t,e)});else if(Object(r["y"])(t))for(const n in t)Ue(t[n],e);return t}function Be(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hn(()=>{t.isMounted=!0}),pn(()=>{t.isUnmounting=!0}),t}const qe=[Function,Array],$e={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},setup(t,{slots:e}){const n=ts(),r=Be();let s;return()=>{const i=e.default&&Xe(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let t=!1;for(const e of i)if(e.type!==_r){0,o=e,t=!0;break}}const a=kt(t),{mode:c}=a;if(r.isLeaving)return ze(o);const u=We(o);if(!u)return ze(o);const l=He(u,a,r,n);Qe(u,l);const h=n.subTree,f=h&&We(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===s?s=t:t!==s&&(s=t,d=!0)}if(f&&f.type!==_r&&(!Lr(u,f)||d)){const t=He(f,a,r,n);if(Qe(f,t),"out-in"===c)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&n.update()},ze(o);"in-out"===c&&u.type!==_r&&(t.delayLeave=(t,e,n)=>{const s=Ke(r,f);s[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},Ge=$e;function Ke(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function He(t,e,n,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:b}=e,w=String(t.key),E=Ke(n,t),_=(t,e)=>{t&&zt(t,s,9,e)},O=(t,e)=>{const n=e[1];_(t,e),Object(r["o"])(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},T={mode:o,persisted:a,beforeEnter(e){let r=c;if(!n.isMounted){if(!i)return;r=m||c}e._leaveCb&&e._leaveCb(!0);const s=E[w];s&&Lr(t,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[e])},enter(t){let e=u,r=l,s=h;if(!n.isMounted){if(!i)return;e=y||u,r=v||l,s=b||h}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?s:r,[t]),T.delayedLeave&&T.delayedLeave(),t._enterCb=void 0)};e?O(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(f,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),_(n?g:p,[e]),e._leaveCb=void 0,E[s]===t&&delete E[s])};E[s]=t,d?O(d,[e,o]):o()},clone(t){return He(t,e,n,s)}};return T}function ze(t){if(Ze(t))return t=qr(t),t.children=null,t}function We(t){return Ze(t)?t.children?t.children[0]:void 0:t}function Qe(t,e){6&t.shapeFlag&&t.component?Qe(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xe(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===wr?(128&o.patchFlag&&s++,r=r.concat(Xe(o.children,e,a))):(e||o.type!==_r)&&r.push(null!=a?qr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ye(t){return Object(r["q"])(t)?{setup:t,name:t.name}:t}const Je=t=>!!t.type.__asyncLoader;const Ze=t=>t.type.__isKeepAlive;RegExp,RegExp;function tn(t,e){return Object(r["o"])(t)?t.some(t=>tn(t,e)):Object(r["E"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function en(t,e){rn(t,"a",e)}function nn(t,e){rn(t,"da",e)}function rn(t,e,n=Zr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(cn(e,r,n),n){let t=n.parent;while(t&&t.parent)Ze(t.parent.vnode)&&sn(r,e,n,t),t=t.parent}}function sn(t,e,n,s){const i=cn(e,t,s,!0);gn(()=>{Object(r["L"])(s[e],i)},n)}function on(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function an(t){return 128&t.shapeFlag?t.ssContent:t}function cn(t,e,n=Zr,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;T(),es(n);const s=zt(e,n,t,r);return ns(),S(),s});return r?s.unshift(i):s.push(i),i}}const un=t=>(e,n=Zr)=>(!os||"sp"===t)&&cn(t,(...t)=>e(...t),n),ln=un("bm"),hn=un("m"),fn=un("bu"),dn=un("u"),pn=un("bum"),gn=un("um"),mn=un("sp"),yn=un("rtg"),vn=un("rtc");function bn(t,e=Zr){cn("ec",t,e)}function wn(t,e){const n=be;if(null===n)return t;const s=ds(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r["b"]]=e[o];t&&(Object(r["q"])(t)&&(t={mounted:t,updated:t}),t.deep&&Ue(n),i.push({dir:t,instance:s,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function En(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(T(),zt(c,n,8,[t.el,a,t,e]),S())}}const _n="components";function On(t,e){return Sn(_n,t,!0,e)||t}const Tn=Symbol();function Sn(t,e,n=!0,s=!1){const i=be||Zr;if(i){const n=i.type;if(t===_n){const t=ps(n,!1);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=Cn(i[t]||n[t],e)||Cn(i.appContext[t],e);return!o&&s?n:o}}function Cn(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}function In(t,e,n,s){let i;const o=n&&n[s];if(Object(r["o"])(t)||Object(r["E"])(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(r["w"])(t))if(t[Symbol.iterator])i=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[s]=i),i}const An=t=>t?rs(t)?ds(t)||t.proxy:An(t.parent):null,kn=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>An(t.parent),$root:t=>An(t.root),$emit:t=>t.emit,$options:t=>Pn(t),$forceUpdate:t=>t.f||(t.f=()=>ae(t.update)),$nextTick:t=>t.n||(t.n=ie.bind(t.proxy)),$watch:t=>Fe.bind(t)}),xn=(t,e)=>t!==r["b"]&&!t.__isScriptSetup&&Object(r["k"])(t,e),jn={get({_:t},e){const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(xn(s,e))return a[e]=1,s[e];if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=2,i[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=3,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=4,n[e];Dn&&(a[e]=0)}}const h=kn[e];let f,d;return h?("$attrs"===e&&C(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=4,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return xn(i,e)?(i[e]=n,!0):s!==r["b"]&&Object(r["k"])(s,e)?(s[e]=n,!0):!Object(r["k"])(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==r["b"]&&Object(r["k"])(t,a)||xn(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(s,a)||Object(r["k"])(kn,a)||Object(r["k"])(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:Object(r["k"])(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Dn=!0;function Nn(t){const e=Pn(t),n=t.proxy,s=t.ctx;Dn=!1,e.beforeCreate&&Rn(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:E,render:_,renderTracked:O,renderTriggered:T,errorCaptured:S,serverPrefetch:C,expose:I,inheritAttrs:A,components:k,directives:x,filters:j}=e,D=null;if(l&&Ln(l,s,D,t.appContext.config.unwrapInjectedRef),a)for(const L in a){const t=a[L];Object(r["q"])(t)&&(s[L]=t.bind(n))}if(i){0;const e=i.call(n,n);0,Object(r["w"])(e)&&(t.data=Et(e))}if(Dn=!0,o)for(const L in o){const t=o[L],e=Object(r["q"])(t)?t.bind(n,n):Object(r["q"])(t.get)?t.get.bind(n,n):r["d"];0;const i=!Object(r["q"])(t)&&Object(r["q"])(t.set)?t.set.bind(n):r["d"],a=ms({get:e,set:i});Object.defineProperty(s,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Mn(c[r],s,n,r);if(u){const t=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{Ne(e,t[e])})}function N(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&Rn(h,t,"c"),N(ln,f),N(hn,d),N(fn,p),N(dn,g),N(en,m),N(nn,y),N(bn,S),N(vn,O),N(yn,T),N(pn,b),N(gn,E),N(mn,C),Object(r["o"])(I))if(I.length){const e=t.exposed||(t.exposed={});I.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});_&&t.render===r["d"]&&(t.render=_),null!=A&&(t.inheritAttrs=A),k&&(t.components=k),x&&(t.directives=x)}function Ln(t,e,n=r["d"],s=!1){Object(r["o"])(t)&&(t=qn(t));for(const i in t){const n=t[i];let o;o=Object(r["w"])(n)?"default"in n?Le(n.from||i,n.default,!0):Le(n.from||i):Le(n),Rt(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function Rn(t,e,n){zt(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mn(t,e,n,s){const i=s.includes(".")?Ve(n,s):()=>n[s];if(Object(r["E"])(t)){const n=e[t];Object(r["q"])(n)&&Me(i,n)}else if(Object(r["q"])(t))Me(i,t.bind(n));else if(Object(r["w"])(t))if(Object(r["o"])(t))t.forEach(t=>Mn(t,e,n,s));else{const s=Object(r["q"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["q"])(s)&&Me(i,s,t)}else 0}function Pn(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:i.length||n||s?(u={},i.length&&i.forEach(t=>Fn(u,t,a,!0)),Fn(u,e,a)):u=e,Object(r["w"])(e)&&o.set(e,u),u}function Fn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fn(t,i,n,!0),s&&s.forEach(e=>Fn(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Vn[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Vn={data:Un,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:$n,created:$n,beforeMount:$n,mounted:$n,beforeUpdate:$n,updated:$n,beforeDestroy:$n,beforeUnmount:$n,destroyed:$n,unmounted:$n,activated:$n,deactivated:$n,errorCaptured:$n,serverPrefetch:$n,components:Gn,directives:Gn,watch:Kn,provide:Un,inject:Bn};function Un(t,e){return e?t?function(){return Object(r["h"])(Object(r["q"])(t)?t.call(this,this):t,Object(r["q"])(e)?e.call(this,this):e)}:e:t}function Bn(t,e){return Gn(qn(t),qn(e))}function qn(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $n(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function Kn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=$n(t[r],e[r]);return n}function Hn(t,e,n,s=!1){const i={},o={};Object(r["g"])(o,Rr,1),t.propsDefaults=Object.create(null),Wn(t,e,i,o);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);n?t.props=s?i:_t(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function zn(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,c=kt(i),[u]=t.propsOptions;let l=!1;if(!(s||a>0)||16&a){let s;Wn(t,e,i,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(s=Object(r["l"])(o))!==o&&Object(r["k"])(e,s))||(u?!n||void 0===n[o]&&void 0===n[s]||(i[o]=Qn(u,c,o,void 0,t,!0)):delete i[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let s=0;s<n.length;s++){let a=n[s];if(ve(t.emitsOptions,a))continue;const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);i[e]=Qn(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&A(t,"set","$attrs")}function Wn(t,e,n,s){const[i,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["A"])(u))continue;const l=e[u];let h;i&&Object(r["k"])(i,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:ve(t.emitsOptions,u)||u in s&&l===s[u]||(s[u]=l,c=!0)}if(o){const e=kt(n),s=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Qn(i,e,c,s[c],t,!Object(r["k"])(s,c))}}return c}function Qn(t,e,n,s,i,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===s){const t=a.default;if(a.type!==Function&&Object(r["q"])(t)){const{propsDefaults:r}=i;n in r?s=r[n]:(es(i),s=r[n]=t.call(null,e),ns())}else s=t}a[0]&&(o&&!t?s=!1:!a[1]||""!==s&&s!==Object(r["l"])(n)||(s=!0))}return s}function Xn(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!Object(r["q"])(t)){const s=t=>{u=!0;const[n,s]=Xn(t,e,!0);Object(r["h"])(a,n),s&&c.push(...s)};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}if(!o&&!u)return Object(r["w"])(t)&&s.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);Yn(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(Yn(e)){const n=o[t],s=a[e]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:Object.assign({},n);if(s){const t=tr(Boolean,s.type),n=tr(String,s.type);s[0]=t>-1,s[1]=n<0||t<n,(t>-1||Object(r["k"])(s,"default"))&&c.push(e)}}}}const l=[a,c];return Object(r["w"])(t)&&s.set(t,l),l}function Yn(t){return"$"!==t[0]}function Jn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function Zn(t,e){return Jn(t)===Jn(e)}function tr(t,e){return Object(r["o"])(e)?e.findIndex(e=>Zn(e,t)):Object(r["q"])(e)&&Zn(e,t)?0:-1}const er=t=>"_"===t[0]||"$stable"===t,nr=t=>Object(r["o"])(t)?t.map(Kr):[Kr(t)],rr=(t,e,n)=>{if(e._n)return e;const r=Te((...t)=>nr(e(...t)),n);return r._c=!1,r},sr=(t,e,n)=>{const s=t._ctx;for(const i in t){if(er(i))continue;const n=t[i];if(Object(r["q"])(n))e[i]=rr(i,n,s);else if(null!=n){0;const t=nr(n);e[i]=()=>t}}},ir=(t,e)=>{const n=nr(e);t.slots.default=()=>n},or=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=kt(e),Object(r["g"])(e,"_",n)):sr(e,t.slots={})}else t.slots={},e&&ir(t,e);Object(r["g"])(t.slots,Rr,1)},ar=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=r["b"];if(32&s.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(i,e),n||1!==t||delete i._):(o=!e.$stable,sr(e,i)),a=e}else e&&(ir(t,e),a={default:1});if(o)for(const r in i)er(r)||r in a||delete i[r]};function cr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ur=0;function lr(t,e){return function(n,s=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==s||Object(r["w"])(s)||(s=null);const i=cr(),o=new Set;let a=!1;const c=i.app={_uid:ur++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:ws,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["q"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["q"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(r,o,u){if(!a){0;const l=Vr(n,s);return l.appContext=i,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,ds(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function hr(t,e,n,s,i=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>hr(t,e&&(Object(r["o"])(e)?e[o]:e),n,s,i));if(Je(s)&&!i)return;const o=4&s.shapeFlag?ds(s.component)||s.component.proxy:s.el,a=i?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Rt(l)&&(l.value=null)),Object(r["q"])(u))Ht(u,c,12,[a,h]);else{const e=Object(r["E"])(u),s=Rt(u);if(e||s){const c=()=>{if(t.f){const n=e?Object(r["k"])(f,u)?f[u]:h[u]:u.value;i?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):e?(h[u]=[o],Object(r["k"])(f,u)&&(f[u]=h[u])):(u.value=[o],t.k&&(h[t.k]=u.value))}else e?(h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):s&&(u.value=a,t.k&&(h[t.k]=a))};a?(c.id=-1,dr(c,n)):c()}else 0}}function fr(){}const dr=De;function pr(t){return gr(t)}function gr(t,e){fr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],insertStaticContent:g}=t,m=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Lr(t,e)&&(r=z(t),q(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Er:y(t,e,n,r);break;case _r:v(t,e,n,r);break;case Or:null==t&&b(e,n,r,o);break;case wr:D(t,e,n,r,s,i,o,a,c);break;default:1&h?O(t,e,n,r,s,i,o,a,c):6&h?N(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,Q)}null!=l&&s&&hr(l,t&&t.ref,i,e||t,!e)},y=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},v=(t,e,n,r)=>{null==t?s(e.el=u(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=d(t),s(t,n,r),t=i;s(e,n,r)},_=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),i(t),t=n;i(e)},O=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?C(e,n,r,s,i,o,a,c):k(t,e,s,i,o,a,c)},C=(t,e,n,i,c,u,l,f)=>{let d,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:b}=t;if(d=t.el=a(t.type,u,m&&m.is,m),8&y?h(d,t.children):16&y&&A(t.children,d,null,i,c,u&&"foreignObject"!==g,l,f),b&&En(t,null,i,"created"),m){for(const e in m)"value"===e||Object(r["A"])(e)||o(d,e,null,m[e],u,t.children,i,c,H);"value"in m&&o(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&Qr(p,i,t)}I(d,t,t.scopeId,l,i),b&&En(t,null,i,"beforeMount");const w=(!c||c&&!c.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(d),s(d,e,n),((p=m&&m.onVnodeMounted)||w||b)&&dr(()=>{p&&Qr(p,i,t),w&&v.enter(d),b&&En(t,null,i,"mounted")},c)},I=(t,e,n,r,s)=>{if(n&&p(t,n),r)for(let i=0;i<r.length;i++)p(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;I(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},A=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Hr(t[u]):Kr(t[u]);m(null,c,e,n,r,s,i,o,a)}},k=(t,e,n,s,i,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;n&&mr(n,!1),(m=g.onVnodeBeforeUpdate)&&Qr(m,n,e,t),d&&En(e,t,n,"beforeUpdate"),n&&mr(n,!0);const y=i&&"foreignObject"!==e.type;if(f?x(t.dynamicChildren,f,u,n,s,y,a):c||F(t,e,u,null,n,s,y,a,!1),l>0){if(16&l)j(u,e,p,g,n,s,i);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,i),4&l&&o(u,"style",p.style,g.style,i),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,i,t.children,n,s,H)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||j(u,e,p,g,n,s,i);((m=g.onVnodeUpdated)||d)&&dr(()=>{m&&Qr(m,n,e,t),d&&En(e,t,n,"updated")},s)},x=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===wr||!Lr(c,u)||70&c.shapeFlag)?f(c.el):n;m(c,u,l,null,r,s,i,o,!0)}},j=(t,e,n,s,i,a,c)=>{if(n!==s){if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in s||o(t,u,n[u],null,c,e.children,i,a,H);for(const u in s){if(Object(r["A"])(u))continue;const l=s[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,i,a,H)}"value"in s&&o(t,"value",n.value,s.value)}},D=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),A(e.children,n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&yr(t,e,!0)):F(t,e,n,f,i,o,a,u,l)},N=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):L(e,n,r,s,i,o,c):R(t,e,c)},L=(t,e,n,r,s,i,o)=>{const a=t.component=Jr(t,r,s);if(Ze(t)&&(a.ctx.renderer=Q),as(a),a.asyncDep){if(s&&s.registerDep(a,M),!t.el){const t=a.subTree=Vr(_r);v(null,t,e,n)}}else M(a,t,e,n,s,i,o)},R=(t,e,n)=>{const r=e.component=t.component;if(Ae(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void P(r,e,n);r.next=e,ue(r.update),r.update()}else e.el=t.el,r.vnode=e},M=(t,e,n,s,i,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:s,u:c,parent:u,vnode:l}=t,h=n;0,mr(t,!1),n?(n.el=l.el,P(t,n,a)):n=l,s&&Object(r["n"])(s),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Qr(e,u,n,l),mr(t,!0);const d=Se(t);0;const p=t.subTree;t.subTree=d,m(p,d,f(p.el),z(p),t,i,o),n.el=d.el,null===h&&xe(t,d.el),c&&dr(c,i),(e=n.props&&n.props.onVnodeUpdated)&&dr(()=>Qr(e,u,n,l),i)}else{let a;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=Je(e);if(mr(t,!1),l&&Object(r["n"])(l),!d&&(a=u&&u.onVnodeBeforeMount)&&Qr(a,f,e),mr(t,!0),c&&Y){const n=()=>{t.subTree=Se(t),Y(c,t.subTree,t,i,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=Se(t);0,m(null,r,n,s,t,i,o),e.el=r.el}if(h&&dr(h,i),!d&&(a=u&&u.onVnodeMounted)){const t=e;dr(()=>Qr(a,f,t),i)}(256&e.shapeFlag||f&&Je(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&dr(t.a,i),t.isMounted=!0,e=n=s=null}},u=t.effect=new w(c,()=>ae(l),t.scope),l=t.update=()=>u.run();l.id=t.uid,mr(t,!0),l()},P=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,zn(t,e.props,r,n),ar(t,e.children,n),T(),he(),S()},F=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void U(u,f,n,r,s,i,o,a,c);if(256&d)return void V(u,f,n,r,s,i,o,a,c)}8&p?(16&l&&H(u,s,i),f!==u&&h(n,f)):16&l?16&p?U(u,f,n,r,s,i,o,a,c):H(u,s,i,!0):(8&l&&h(n,""),16&p&&A(f,n,r,s,i,o,a,c))},V=(t,e,n,s,i,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?Hr(e[d]):Kr(e[d]);m(t[d],r,n,null,i,o,a,c,u)}l>h?H(t,i,o,!0,!1,f):A(e,n,s,i,o,a,c,u,f)},U=(t,e,n,s,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?Hr(e[l]):Kr(e[l]);if(!Lr(r,s))break;m(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?Hr(e[d]):Kr(e[d]);if(!Lr(r,s))break;m(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:s;while(l<=d)m(null,e[l]=u?Hr(e[l]):Kr(e[l]),n,r,i,o,a,c,u),l++}}else if(l>d)while(l<=f)q(t[l],i,o,!0),l++;else{const p=l,g=l,y=new Map;for(l=g;l<=d;l++){const t=e[l]=u?Hr(e[l]):Kr(e[l]);null!=t.key&&y.set(t.key,l)}let v,b=0;const w=d-g+1;let E=!1,_=0;const O=new Array(w);for(l=0;l<w;l++)O[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){q(r,i,o,!0);continue}let s;if(null!=r.key)s=y.get(r.key);else for(v=g;v<=d;v++)if(0===O[v-g]&&Lr(r,e[v])){s=v;break}void 0===s?q(r,i,o,!0):(O[s-g]=l+1,s>=_?_=s:E=!0,m(r,e[s],n,null,i,o,a,c,u),b++)}const T=E?vr(O):r["a"];for(v=T.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:s;0===O[l]?m(null,r,n,f,i,o,a,c,u):E&&(v<0||l!==T[v]?B(r,n,f,2):v--)}}},B=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void B(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,Q);if(a===wr){s(o,e,n);for(let t=0;t<u.length;t++)B(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===Or)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),dr(()=>c.enter(o),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,()=>{a(),i&&i()})};r?r(o,a,u):u()}else s(o,e,n)},q=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&hr(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Je(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Qr(g,e,t),6&l)K(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&En(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,Q,r):u&&(i!==wr||h>0&&64&h)?H(u,e,n,!1,!0):(i===wr&&384&h||!s&&16&l)&&H(c,e,n),r&&$(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&dr(()=>{g&&Qr(g,e,t),d&&En(t,null,e,"unmounted")},n)},$=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===wr)return void G(n,r);if(e===Or)return void _(t);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,i=()=>e(n,o);r?r(t.el,o,i):i()}else o()},G=(t,e)=>{let n;while(t!==e)n=d(t),i(t),t=n;i(e)},K=(t,e,n)=>{const{bum:s,scope:i,update:o,subTree:a,um:c}=t;s&&Object(r["n"])(s),i.stop(),o&&(o.active=!1,q(a,t,e,n)),c&&dr(c,e),dr(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},H=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)q(t[o],e,n,r,s)},z=t=>6&t.shapeFlag?z(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),W=(t,e,n)=>{null==t?e._vnode&&q(e._vnode,null,null,!0):m(e._vnode||null,t,e,null,null,null,n),he(),fe(),e._vnode=t},Q={p:m,um:q,m:B,r:$,mt:L,mc:A,pc:F,pbc:x,n:z,o:t};let X,Y;return e&&([X,Y]=e(Q)),{render:W,hydrate:X,createApp:lr(W,X)}}function mr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yr(t,e,n=!1){const s=t.children,i=e.children;if(Object(r["o"])(s)&&Object(r["o"])(i))for(let r=0;r<s.length;r++){const t=s[r];let e=i[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[r]=Hr(i[r]),e.el=t.el),n||yr(t,e)),e.type===Er&&(e.el=t.el)}}function vr(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const br=t=>t.__isTeleport;const wr=Symbol(void 0),Er=Symbol(void 0),_r=Symbol(void 0),Or=Symbol(void 0),Tr=[];let Sr=null;function Cr(t=!1){Tr.push(Sr=t?null:[])}function Ir(){Tr.pop(),Sr=Tr[Tr.length-1]||null}let Ar=1;function kr(t){Ar+=t}function xr(t){return t.dynamicChildren=Ar>0?Sr||r["a"]:null,Ir(),Ar>0&&Sr&&Sr.push(t),t}function jr(t,e,n,r,s,i){return xr(Fr(t,e,n,r,s,i,!0))}function Dr(t,e,n,r,s){return xr(Vr(t,e,n,r,s,!0))}function Nr(t){return!!t&&!0===t.__v_isVNode}function Lr(t,e){return t.type===e.type&&t.key===e.key}const Rr="__vInternal",Mr=({key:t})=>null!=t?t:null,Pr=({ref:t,ref_key:e,ref_for:n})=>null!=t?Object(r["E"])(t)||Rt(t)||Object(r["q"])(t)?{i:be,r:t,k:e,f:!!n}:t:null;function Fr(t,e=null,n=null,s=0,i=null,o=(t===wr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mr(e),ref:e&&Pr(e),scopeId:we,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:be};return c?(zr(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Ar>0&&!a&&Sr&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Sr.push(u),u}const Vr=Ur;function Ur(t,e=null,n=null,s=0,i=null,o=!1){if(t&&t!==Tn||(t=_r),Nr(t)){const r=qr(t,e,!0);return n&&zr(r,n),Ar>0&&!o&&Sr&&(6&r.shapeFlag?Sr[Sr.indexOf(t)]=r:Sr.push(r)),r.patchFlag|=-2,r}if(gs(t)&&(t=t.__vccOpts),e){e=Br(e);let{class:t,style:n}=e;t&&!Object(r["E"])(t)&&(e.class=Object(r["J"])(t)),Object(r["w"])(n)&&(At(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["K"])(n))}const a=Object(r["E"])(t)?1:je(t)?128:br(t)?64:Object(r["w"])(t)?4:Object(r["q"])(t)?2:0;return Fr(t,e,n,s,i,a,o,!0)}function Br(t){return t?At(t)||Rr in t?Object(r["h"])({},t):t:null}function qr(t,e,n=!1){const{props:s,ref:i,patchFlag:o,children:a}=t,c=e?Wr(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Mr(c),ref:e&&e.ref?n&&i?Object(r["o"])(i)?i.concat(Pr(e)):[i,Pr(e)]:Pr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wr?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx};return u}function $r(t=" ",e=0){return Vr(Er,null,t,e)}function Gr(t="",e=!1){return e?(Cr(),Dr(_r,null,t)):Vr(_r,null,t)}function Kr(t){return null==t||"boolean"===typeof t?Vr(_r):Object(r["o"])(t)?Vr(wr,null,t.slice()):"object"===typeof t?Hr(t):Vr(Er,null,String(t))}function Hr(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:qr(t)}function zr(t,e){let n=0;const{shapeFlag:s}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&s){const n=e.default;return void(n&&(n._c&&(n._d=!1),zr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Rr in e?3===r&&be&&(1===be.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=be}}else Object(r["q"])(e)?(e={default:e,_ctx:be},n=32):(e=String(e),64&s?(n=16,e=[$r(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wr(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const t in s)if("class"===t)e.class!==s.class&&(e.class=Object(r["J"])([e.class,s.class]));else if("style"===t)e.style=Object(r["K"])([e.style,s.style]);else if(Object(r["x"])(t)){const n=e[t],i=s[t];!i||n===i||Object(r["o"])(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=s[t])}return e}function Qr(t,e,n,r=null){zt(t,e,7,[n,r])}const Xr=cr();let Yr=0;function Jr(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Xr,a={uid:Yr++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xn(s,o),emitsOptions:ye(s,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:s.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=me.bind(null,a),t.ce&&t.ce(a),a}let Zr=null;const ts=()=>Zr||be,es=t=>{Zr=t,t.scope.on()},ns=()=>{Zr&&Zr.scope.off(),Zr=null};function rs(t){return 4&t.vnode.shapeFlag}let ss,is,os=!1;function as(t,e=!1){os=e;const{props:n,children:r}=t.vnode,s=rs(t);Hn(t,n,s,e),or(t,r);const i=s?cs(t,e):void 0;return os=!1,i}function cs(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xt(new Proxy(t.ctx,jn));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?fs(t):null;es(t),T();const i=Ht(s,t,0,[t.props,n]);if(S(),ns(),Object(r["z"])(i)){if(i.then(ns,ns),e)return i.then(n=>{us(t,n,e)}).catch(e=>{Wt(e,t,0)});t.asyncDep=i}else us(t,i,e)}else ls(t,e)}function us(t,e,n){Object(r["q"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["w"])(e)&&(t.setupState=qt(e)),ls(t,n)}function ls(t,e,n){const s=t.type;if(!t.render){if(!e&&ss&&!s.render){const e=s.template||Pn(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},i),a);s.render=ss(e,c)}}t.render=s.render||r["d"],is&&is(t)}es(t),T(),Nn(t),S(),ns()}function hs(t){return new Proxy(t.attrs,{get(e,n){return C(t,"get","$attrs"),e[n]}})}function fs(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=hs(t))},slots:t.slots,emit:t.emit,expose:e}}function ds(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qt(xt(t.exposed)),{get(e,n){return n in e?e[n]:n in kn?kn[n](t):void 0},has(t,e){return e in t||e in kn}}))}function ps(t,e=!0){return Object(r["q"])(t)?t.displayName||t.name:t.name||e&&t.__name}function gs(t){return Object(r["q"])(t)&&"__vccOpts"in t}const ms=(t,e)=>Kt(t,e,os);function ys(t,e,n){const s=arguments.length;return 2===s?Object(r["w"])(e)&&!Object(r["o"])(e)?Nr(e)?Vr(t,null,[e]):Vr(t,e):Vr(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):3===s&&Nr(n)&&(n=[n]),Vr(t,e,n))}const vs=Symbol(""),bs=()=>{{const t=Le(vs);return t}};const ws="3.2.45",Es="http://www.w3.org/2000/svg",_s="undefined"!==typeof document?document:null,Os=_s&&_s.createElement("template"),Ts={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?_s.createElementNS(Es,t):_s.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>_s.createTextNode(t),createComment:t=>_s.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_s.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{Os.innerHTML=r?`<svg>${t}</svg>`:t;const s=Os.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ss(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cs(t,e,n){const s=t.style,i=Object(r["E"])(n);if(n&&!i){for(const t in n)As(s,t,n[t]);if(e&&!Object(r["E"])(e))for(const t in e)null==n[t]&&As(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Is=/\s*!important$/;function As(t,e,n){if(Object(r["o"])(n))n.forEach(n=>As(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=js(t,e);Is.test(n)?t.setProperty(Object(r["l"])(s),n.replace(Is,""),"important"):t[s]=n}}const ks=["Webkit","Moz","ms"],xs={};function js(t,e){const n=xs[e];if(n)return n;let s=Object(r["e"])(e);if("filter"!==s&&s in t)return xs[e]=s;s=Object(r["f"])(s);for(let r=0;r<ks.length;r++){const n=ks[r]+s;if(n in t)return xs[e]=n}return e}const Ds="http://www.w3.org/1999/xlink";function Ns(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Ds,e.slice(6,e.length)):t.setAttributeNS(Ds,e,n);else{const s=Object(r["D"])(e);null==n||s&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ls(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=Object(r["m"])(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}function Rs(t,e,n,r){t.addEventListener(e,n,r)}function Ms(t,e,n,r){t.removeEventListener(e,n,r)}function Ps(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=Vs(e);if(r){const o=i[e]=$s(r,s);Rs(t,n,o,a)}else o&&(Ms(t,n,o,a),i[e]=void 0)}}const Fs=/(?:Once|Passive|Capture)$/;function Vs(t){let e;if(Fs.test(t)){let n;e={};while(n=t.match(Fs))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):Object(r["l"])(t.slice(2));return[n,e]}let Us=0;const Bs=Promise.resolve(),qs=()=>Us||(Bs.then(()=>Us=0),Us=Date.now());function $s(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();zt(Gs(t,n.value),e,5,[t])};return n.value=t,n.attached=qs(),n}function Gs(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const Ks=/^on[a-z]/,Hs=(t,e,n,s,i=!1,o,a,c,u)=>{"class"===e?Ss(t,s,i):"style"===e?Cs(t,n,s):Object(r["x"])(e)?Object(r["v"])(e)||Ps(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):zs(t,e,s,i))?Ls(t,e,s,o,a,c,u):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),Ns(t,e,s,i))};function zs(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&Ks.test(e)&&Object(r["q"])(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Ks.test(e)||!Object(r["E"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Ws="transition",Qs="animation",Xs=(t,{slots:e})=>ys(Ge,ti(t),e);Xs.displayName="Transition";const Ys={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Js=(Xs.props=Object(r["h"])({},Ge.props,Ys),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),Zs=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function ti(t){const e={};for(const r in t)r in Ys||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=ei(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:E,onLeaveCancelled:_,onBeforeAppear:O=v,onAppear:T=b,onAppearCancelled:S=w}=e,C=(t,e,n)=>{si(t,e?h:c),si(t,e?l:a),n&&n()},I=(t,e)=>{t._isLeaving=!1,si(t,f),si(t,p),si(t,d),e&&e()},A=t=>(e,n)=>{const r=t?T:b,i=()=>C(e,t,n);Js(r,[e,i]),ii(()=>{si(e,t?u:o),ri(e,t?h:c),Zs(r)||ai(e,s,m,i)})};return Object(r["h"])(e,{onBeforeEnter(t){Js(v,[t]),ri(t,o),ri(t,a)},onBeforeAppear(t){Js(O,[t]),ri(t,u),ri(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>I(t,e);ri(t,f),hi(),ri(t,d),ii(()=>{t._isLeaving&&(si(t,f),ri(t,p),Zs(E)||ai(t,s,y,n))}),Js(E,[t,n])},onEnterCancelled(t){C(t,!1),Js(w,[t])},onAppearCancelled(t){C(t,!0),Js(S,[t])},onLeaveCancelled(t){I(t),Js(_,[t])}})}function ei(t){if(null==t)return null;if(Object(r["w"])(t))return[ni(t.enter),ni(t.leave)];{const e=ni(t);return[e,e]}}function ni(t){const e=Object(r["O"])(t);return e}function ri(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function si(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ii(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let oi=0;function ai(t,e,n,r){const s=t._endId=++oi,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ci(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function ci(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(Ws+"Delay"),i=r(Ws+"Duration"),o=ui(s,i),a=r(Qs+"Delay"),c=r(Qs+"Duration"),u=ui(a,c);let l=null,h=0,f=0;e===Ws?o>0&&(l=Ws,h=o,f=i.length):e===Qs?u>0&&(l=Qs,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?Ws:Qs:null,f=l?l===Ws?i.length:c.length:0);const d=l===Ws&&/\b(transform|all)(,|$)/.test(r(Ws+"Property").toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function ui(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>li(e)+li(t[n])))}function li(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function hi(){return document.body.offsetHeight}new WeakMap,new WeakMap;const fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function di(t){t.target.composing=!0}function pi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=fi(i);const o=s||i.props&&"number"===i.props.type;Rs(t,e?"change":"input",e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=Object(r["O"])(s)),t._assign(s)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",di),Rs(t,"compositionend",pi),Rs(t,"change",pi))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=fi(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&Object(r["O"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const mi={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Object(r["C"])(e);Rs(t,"change",()=>{const e=Array.prototype.filter.call(t.options,t=>t.selected).map(t=>n?Object(r["O"])(vi(t)):vi(t));t._assign(t.multiple?i?new Set(e):e:e[0])}),t._assign=fi(s)},mounted(t,{value:e}){yi(t,e)},beforeUpdate(t,e,n){t._assign=fi(n)},updated(t,{value:e}){yi(t,e)}};function yi(t,e){const n=t.multiple;if(!n||Object(r["o"])(e)||Object(r["C"])(e)){for(let s=0,i=t.options.length;s<i;s++){const i=t.options[s],o=vi(i);if(n)Object(r["o"])(e)?i.selected=Object(r["H"])(e,o)>-1:i.selected=e.has(o);else if(Object(r["G"])(vi(i),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function vi(t){return"_value"in t?t._value:t.value}const bi=["ctrl","shift","alt","meta"],wi={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>bi.some(n=>t[n+"Key"]&&!e.includes(n))},Ei=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=wi[e[t]];if(r&&r(n,e))return}return t(n,...r)},_i={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):Oi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),Oi(t,!0),r.enter(t)):r.leave(t,()=>{Oi(t,!1)}):Oi(t,e))},beforeUnmount(t,{value:e}){Oi(t,e)}};function Oi(t,e){t.style.display=e?t._vod:"none"}const Ti=Object(r["h"])({patchProp:Hs},Ts);let Si;function Ci(){return Si||(Si=pr(Ti))}const Ii=(...t)=>{const e=Ci().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=Ai(t);if(!s)return;const i=e._component;Object(r["q"])(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ai(t){if(Object(r["E"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("1d80"),s=Object;t.exports=function(t){return s(r(t))}},"825a":function(t,e,n){var r=n("861d"),s=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e,n){var r=n("1626"),s=n("8ea1"),i=s.all;t.exports=s.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),s=n("1626"),i=n("c6cd"),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},"8a77":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r,s=256,i=[],o=256;while(s--)i[s]=(s+256).toString(16).substring(1);function a(t){var e=0,n=t||11;if(!r||s+n>2*o)for(r="",s=0;e<o;e++)r+=i[256*Math.random()|0];return r.substring(s,s+++n)}},"8ea1":function(t,e){var n="object"==typeof document&&document.all,r="undefined"==typeof n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mr})),n.d(e,"b",(function(){return vr})),n.d(e,"c",(function(){return yr})),n.d(e,"d",(function(){return wr})),n.d(e,"e",(function(){return br})),n.d(e,"f",(function(){return Er})),n.d(e,"g",(function(){return _r})),n.d(e,"h",(function(){return pr})),n.d(e,"i",(function(){return gr}));var r,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=s||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function b(){this.s=this.s,this.o=this.o}var w=0;b.prototype.s=!1,b.prototype.na=function(){this.s||(this.s=!0,this.M(),0==w)||h(this)},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(u(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function T(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}var I=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function A(t,e){return t<e?-1:t>e?1:0}function k(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=k().indexOf(t)}function j(t){return j[" "](t),t}function D(t){var e=K;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=c;var N,L=x("Opera"),R=x("Trident")||x("MSIE"),M=x("Edge"),P=M||R,F=x("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),V=-1!=k().toLowerCase().indexOf("webkit")&&!x("Edge");function U(){var t=a.document;return t?t.documentMode:void 0}t:{var B="",q=function(){var t=k();return F?/rv:([^\);]+)(\)|;)/.exec(t):M?/Edge\/([\d\.]+)/.exec(t):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):V?/WebKit\/(\S+)/.exec(t):L?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&(B=q?q[1]:""),R){var $=U();if(null!=$&&$>parseFloat(B)){N=String($);break t}}N=B}var G,K={};function H(){return D((function(){let t=0;const e=I(String(N)).split("."),n=I("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=A(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||A(0==s[2].length,0==i[2].length)||A(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&R){var z=U();G=z||(parseInt(N,10)||void 0)}else G=void 0;var W=G;function Q(t,e){if(T.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F){t:{try{j(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:X[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.X.h.call(this)}}v(Q,T);var X={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),J=0;function Z(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++J,this.ba=this.ea=!1}function tt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function et(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function st(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=E(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(tt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}it.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=at(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Z(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,s){if(r&&r.once)return dt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lt(t,e[i],n,r,s);return null}return n=wt(n),t&&t[Y]?t.N(e,n,l(r)?!!r.capture:!!r,s):ht(t,e,n,!1,r,s)}function ht(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=l(s)?!!s.capture:!!s,a=vt(t);if(a||(t[ct]=a=new it(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)S||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)dt(t,e[i],n,r,s);return null}return n=wt(n),t&&t[Y]?t.O(e,n,l(r)?!!r.capture:!!r,s):ht(t,e,n,!0,r,s)}function pt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)pt(t,e[i],n,r,s);else r=l(r)?!!r.capture:!!r,n=wt(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=at(i,n,r,s),-1<n&&(tt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,s)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Y])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):tt(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.ba)t=!0;else{e=new Q(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof it?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function Et(){b.call(this),this.i=new it(this),this.P=this,this.I=null}function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new T(e,t);else if(e instanceof T)e.target=e.target||t;else{var s=e;e=new T(r,t),st(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ot(o,r,!0,e)&&s}if(o=e.g=t,s=Ot(o,r,!0,e)&&s,s=Ot(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ot(o,r,!1,e)&&s}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ot(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(Et,b),Et.prototype[Y]=!0,Et.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},Et.prototype.M=function(){if(Et.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)tt(n[r]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=a.JSON.stringify;function St(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ct{constructor(){this.h=this.g=null}add(t,e){const n=At.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var It,At=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kt,t=>t.reset());class kt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){a.setTimeout(()=>{throw t},0)}function jt(t,e){It||Dt(),Nt||(It(),Nt=!0),Lt.add(t,e)}function Dt(){var t=a.Promise.resolve(void 0);It=function(){t.then(Rt)}}var Nt=!1,Lt=new Ct;function Rt(){for(var t;t=St();){try{t.h.call(t.g)}catch(n){xt(n)}var e=At;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nt=!1}function Mt(t,e){Et.call(this),this.h=t||1,this.g=e||a,this.j=m(this.lb,this),this.l=Date.now()}function Pt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ft(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Vt(t){t.g=Ft(()=>{t.g=null,t.i&&(t.i=!1,Vt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Mt,Et),r=Mt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(Pt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Mt.X.M.call(this),Pt(this),delete this.g};class Ut extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){b.call(this),this.h=t,this.g={}}v(Bt,b);var qt=[];function $t(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var s=0;s<n.length;s++){var i=lt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gt(t){et(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Kt(){this.g=!0}function Ht(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function zt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Wt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(r?" "+r:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Tt(n)}catch(a){return e}}Bt.prototype.M=function(){Bt.X.M.call(this),Gt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Aa=function(){this.g=!1},Kt.prototype.info=function(){};var Yt={},Jt=null;function Zt(){return Jt=Jt||new Et}function te(t){T.call(this,Yt.Pa,t)}function ee(t){const e=Zt();_t(e,new te(e))}function ne(t,e){T.call(this,Yt.STAT_EVENT,t),this.stat=e}function re(t){const e=Zt();_t(e,new ne(e,t))}function se(t,e){T.call(this,Yt.Qa,t),this.size=e}function ie(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}Yt.Pa="serverreachability",v(te,T),Yt.STAT_EVENT="statevent",v(ne,T),Yt.Qa="timingevent",v(se,T);var oe={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ae={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ce(){}function ue(t){return t.h||(t.h=t.i())}function le(){}ce.prototype.h=null;var he,fe={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function de(){T.call(this,"d")}function pe(){T.call(this,"c")}function ge(){}function me(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Bt(this),this.O=ve,t=P?125:void 0,this.T=new Mt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}v(de,T),v(pe,T),v(ge,ce),ge.prototype.g=function(){return new XMLHttpRequest},ge.prototype.i=function(){return{}},he=new ge;var ve=45e3,be={},we={};function Ee(t,e,n){t.K=1,t.v=$e(Fe(e)),t.s=n,t.P=!0,_e(t,null)}function _e(t,e){t.F=Date.now(),Ce(t),t.A=Fe(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),nn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ye,t.g=ar(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ut(m(t.La,t,t.g),t.N)),$t(t.S,t.g,"readystatechange",t.ib),e=t.H?nt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ee(),Ht(t.j,t.u,t.A,t.m,t.U,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Te(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Se(t,n),r==we){4==e&&(t.o=4,re(14),s=!1),Wt(t.j,t.m,null,"[Incomplete Response]");break}if(r==be){t.o=4,re(15),Wt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Wt(t.j,t.m,r,null),je(t,r)}Oe(t)&&r!=we&&r!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,re(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zn(e),e.K=!0,re(11))):(Wt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),ke(t))}function Se(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?we:(n=Number(e.substring(n,r)),isNaN(n)?be:(r+=1,r+n>e.length?we:(e=e.substr(r,n),t.C=r+n,e)))}function Ce(t){t.V=Date.now()+t.O,Ie(t,t.O)}function Ie(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ie(m(t.gb,t),e)}function Ae(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ke(t){0==t.l.G||t.I||nr(t.l,t)}function xe(t){Ae(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Pt(t.T),Gt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||hn(n.h,t)))if(!t.J&&hn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;er(n),Gn(n)}Jn(n),re(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ie(m(n.cb,n),6e3));if(1>=ln(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else sr(n,11)}else if((t.J||n.g==t)&&er(n),!C(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(fn(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,qe(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=or(r,r.H?r.ka:null,r.V),o.J){dn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ae(a),Ce(a)),r.g=o}else Yn(r);0<n.i.length&&Hn(n)}else"stop"!=u[0]&&"close"!=u[0]||sr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?sr(n,7):$n(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ee(4)}catch(u){}}function De(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ne(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(u(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ne(t),r=De(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}r=me.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Pn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const h=Pn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(3!=h||P||this.g&&(this.h.h||this.g.fa()||Fn(this.g)))){this.I||4!=h||7==e||ee(8==e||0>=f?3:2),Ae(this);var n=this.g.aa();this.Y=n;e:if(Oe(this)){var r=Fn(this.g);t="";var s=r.length,i=4==Pn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),ke(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,zt(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,re(12),xe(this),ke(this);break t}Wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.P?(Te(this,h,o),P&&this.i&&3==h&&($t(this.S,this.T,"tick",this.hb),this.T.start())):(Wt(this.j,this.m,o,null),je(this,o)),4==h&&xe(this),this.i&&!this.I&&(4==h?nr(this.l,this):(this.i=!1,Ce(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),xe(this),ke(this)}}}catch(h){}},r.hb=function(){if(this.g){var t=Pn(this.g),e=this.g.fa();this.C<e.length&&(Ae(this),Te(this,t,e),this.i&&4!=t&&Ce(this))}},r.cancel=function(){this.I=!0,xe(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qt(this.j,this.A),2!=this.K&&(ee(),re(17)),xe(this),this.o=2,ke(this)):Ie(this,this.V-t)};var Re=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Me(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pe){this.h=void 0!==e?e:t.h,Ve(this,t.j),this.s=t.s,this.g=t.g,Ue(this,t.m),this.l=t.l,e=t.i;var n=new Je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Be(this,n),this.o=t.o}else t&&(n=String(t).match(Re))?(this.h=!!e,Ve(this,n[1]||"",!0),this.s=Ge(n[2]||""),this.g=Ge(n[3]||"",!0),Ue(this,n[4]),this.l=Ge(n[5]||"",!0),Be(this,n[6]||"",!0),this.o=Ge(n[7]||"")):(this.h=!!e,this.i=new Je(null,this.h))}function Fe(t){return new Pe(t)}function Ve(t,e,n){t.j=n?Ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ue(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Be(t,e,n){e instanceof Je?(t.i=e,sn(t.i,t.h)):(n||(e=Ke(e,Xe)),t.i=new Je(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function $e(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,He),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function He(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Pe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,ze,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,ze,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Qe:We,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,Ye)),t.join("")};var ze=/[#\/\?@]/g,We=/[#\?:]/g,Qe=/[#\?]/g,Xe=/[#\?@]/g,Ye=/#/g;function Je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ze(t){t.g||(t.g=new Map,t.h=0,t.i&&Me(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function tn(t,e){Ze(t),e=rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function en(t,e){return Ze(t),e=rn(t,e),t.g.has(e)}function nn(t,e,n){tn(t,e),0<n.length&&(t.i=null,t.g.set(rn(t,e),_(n)),t.h+=n.length)}function rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sn(t,e){e&&!t.j&&(Ze(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(tn(this,e),nn(this,n,t))}),t)),t.j=e}r=Je.prototype,r.add=function(t,e){Ze(this),this.i=null,t=rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Ze(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){Ze(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},r.W=function(t){Ze(this);let e=[];if("string"===typeof t)en(this,t)&&(e=e.concat(this.g.get(rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Ze(this),this.i=null,t=rn(this,t),en(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var on=class{constructor(t,e){this.h=t,this.g=e}};function an(t){this.l=t||cn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ln(t){return t.h?1:t.g?t.g.size:0}function hn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function fn(t,e){t.g?t.g.add(e):t.h=e}function dn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function pn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _(t.i)}function gn(){}function mn(){this.g=new gn}function yn(t,e,n){const r=n||"";try{Le(t,(function(t,n){let s=t;l(t)&&(s=Tt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function vn(t,e){const n=new Kt;if(a.Image){const r=new Image;r.onload=y(bn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(bn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(bn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(bn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function bn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function wn(t){this.l=t.ac||null,this.j=t.jb||!1}function En(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_n,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}an.prototype.cancel=function(){if(this.i=pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},gn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},gn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(wn,ce),wn.prototype.g=function(){return new En(this.l,this.j)},wn.prototype.i=function(t){return function(){return t}}({}),v(En,Et);var _n=0;function On(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Tn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sn(t)}function Sn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=_n)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Tn(this)),this.readyState=_n},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;On(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tn(this):Sn(this),3==this.readyState&&On(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,Tn(this))},r.Ua=function(t){this.g&&(this.response=t,Tn(this))},r.ga=function(){this.g&&Tn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Cn=a.JSON.parse;function In(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=An,this.K=this.L=!1}v(In,Et);var An="",kn=/^https?$/i,xn=["POST","PUT"];function jn(t){return R&&H()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Dn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nn(t),Rn(t)}function Nn(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Pn(t)||2!=t.aa()))if(t.v&&4==Pn(t))Ft(t.Ha,0,t);else if(_t(t,"readystatechange"),4==Pn(t)){t.h=!1;try{const o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.H).match(Re)[1]||null;if(!s&&a.self&&a.self.location){var i=a.self.location.protocol;s=i.substr(0,i.length-1)}r=!kn.test(s?s.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var c=2<Pn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.aa()+"]",Nn(t)}}finally{Rn(t)}}}function Rn(t,e){if(t.g){Mn(t);const r=t.g,s=t.C[0]?c:null;t.g=null,t.C=null,e||_t(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Mn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}function Fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case An:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Vn(t){let e="";return et(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Un(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Vn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function Bn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ca=0,this.i=[],this.j=new Kt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bn("baseRetryDelayMs",5e3,t),this.bb=Bn("retryDelaySeedMs",1e4,t),this.$a=Bn("forwardChannelMaxRetries",2,t),this.ta=Bn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new an(t&&t.concurrentRequestLimit),this.Fa=new mn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function $n(t){if(Kn(t),3==t.G){var e=t.U++,n=Fe(t.F);qe(n,"SID",t.I),qe(n,"RID",e),qe(n,"TYPE","terminate"),Qn(t,n),e=new me(t,t.j,e,void 0),e.K=2,e.v=$e(Fe(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=ar(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ce(e)}ir(t)}function Gn(t){t.g&&(Zn(t),t.g.cancel(),t.g=null)}function Kn(t){Gn(t),t.u&&(a.clearTimeout(t.u),t.u=null),er(t),t.h.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Hn(t){un(t.h)||t.m||(t.m=!0,jt(t.Ja,t),t.C=0)}function zn(t,e){return!(ln(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ie(m(t.Ja,t,e),rr(t,t.C)),t.C++,!0))}function Wn(t,e){var n;n=e?e.m:t.U++;const r=Fe(t.F);qe(r,"SID",t.I),qe(r,"RID",n),qe(r,"AID",t.T),Qn(t,r),t.o&&t.s&&Un(r,t.o,t.s),n=new me(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),fn(t.h,n),Ee(n,r,e)}function Qn(t,e){t.ia&&et(t.ia,(function(t,n){qe(e,n,t)})),t.l&&Le({},(function(t,n){qe(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{yn(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Yn(t){t.g||t.u||(t.Z=1,jt(t.Ia,t),t.A=0)}function Jn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ie(m(t.Ia,t),rr(t,t.A)),t.A++,!0)}function Zn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function tr(t){t.g=new me(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Fe(t.sa);qe(e,"RID","rpc"),qe(e,"SID",t.I),qe(e,"CI",t.L?"0":"1"),qe(e,"AID",t.T),qe(e,"TYPE","xmlhttp"),Qn(t,e),t.o&&t.s&&Un(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$e(Fe(e)),n.s=null,n.P=!0,_e(n,t)}function er(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function nr(t,e){var n=null;if(t.g==e){er(t),Zn(t),t.g=null;var r=2}else{if(!hn(t.h,e))return;n=e.D,dn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Zt(),_t(r,new se(r,n)),Hn(t)}else Yn(t);else if(s=e.o,3==s||0==s&&0<t.pa||!(1==r&&zn(t,e)||2==r&&Jn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}function rr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function sr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new Pe("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ve(n,"https"),$e(n)),vn(n.toString(),r)}else re(2);t.G=0,t.l&&t.l.va(e),ir(t),Kn(t)}function ir(t){if(t.G=0,t.la=[],t.l){const e=pn(t.h);0==e.length&&0==t.i.length||(O(t.la,e),O(t.la,t.i),t.h.i.length=0,_(t.i),t.i.length=0),t.l.ua()}}function or(t,e,n){var r=n instanceof Pe?Fe(n):new Pe(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ue(r,r.m);else{var s=a.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Pe(null,void 0);r&&Ve(i,r),e&&(i.g=e),s&&Ue(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&qe(r,n,e),qe(r,"VER",t.ma),Qn(t,r),r}function ar(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new In(new wn({jb:!0})):new In(t.ra),e.Ka(t.H),e}function cr(){}function ur(){if(R&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function lr(t,e){Et.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new dr(this)}function hr(t){de.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function fr(){pe.call(this),this.status=1}function dr(t){this.g=t}r=In.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():he.g(),this.C=this.u?ue(this.u):ue(he),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Dn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=a.FormData&&t instanceof a.FormData,!(0<=E(xn,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mn(this),0<this.B&&((this.K=jn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ft(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dn(this,i)}},r.qa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Rn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rn(this,!0)),In.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Ln(this):this.fb())},r.fb=function(){Ln(this)},r.aa=function(){try{return 2<Pn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Cn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=qn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new me(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=nt(i),st(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,s,e),n=Fe(this.F),qe(n,"RID",t),qe(n,"CVER",22),this.D&&qe(n,"X-HTTP-Session-Id",this.D),Qn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Vn(i)))+"&"+e:this.o&&Un(n,this.o,i)),fn(this.h,s),this.Ya&&qe(n,"TYPE","init"),this.O?(qe(n,"$req",e),qe(n,"SID","null"),s.Z=!0,Ee(s,n,null)):Ee(s,n,e),this.G=2}}else 3==this.G&&(t?Wn(this,t):0==this.i.length||un(this.h)||Wn(this))},r.Ia=function(){if(this.u=null,tr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ie(m(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,re(10),Gn(this),tr(this))},r.cb=function(){null!=this.v&&(this.v=null,Gn(this),Jn(this),re(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))},r=cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},ur.prototype.g=function(t,e){return new lr(t,e)},v(lr,Et),lr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=or(t,null,t.V),Hn(t)},lr.prototype.close=function(){$n(this.g)},lr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.i.push(new on(e.ab++,t)),3==e.G&&Hn(e)},lr.prototype.M=function(){this.g.l=null,delete this.j,$n(this.g),delete this.g,lr.X.M.call(this)},v(hr,de),v(fr,pe),v(dr,cr),dr.prototype.xa=function(){_t(this.g,"a")},dr.prototype.wa=function(t){_t(this.g,new hr(t))},dr.prototype.va=function(t){_t(this.g,new fr)},dr.prototype.ua=function(){_t(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,lr.prototype.send=lr.prototype.u,lr.prototype.open=lr.prototype.m,lr.prototype.close=lr.prototype.close,oe.NO_ERROR=0,oe.TIMEOUT=8,oe.HTTP_ERROR=6,ae.COMPLETE="complete",le.EventType=fe,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",Et.prototype.listen=Et.prototype.N,In.prototype.listenOnce=In.prototype.O,In.prototype.getLastError=In.prototype.Oa,In.prototype.getLastErrorCode=In.prototype.Ea,In.prototype.getStatus=In.prototype.aa,In.prototype.getResponseJson=In.prototype.Sa,In.prototype.getResponseText=In.prototype.fa,In.prototype.send=In.prototype.da,In.prototype.setWithCredentials=In.prototype.Ka;var pr=i.createWebChannelTransport=function(){return new ur},gr=i.getStatEventTarget=function(){return Zt()},mr=i.ErrorCode=oe,yr=i.EventType=ae,vr=i.Event=Yt,br=i.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wr=i.FetchXmlHttpFactory=wn,Er=i.WebChannel=le,_r=i.XhrIo=In}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),s=0,i=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+i,36)}},9112:function(t,e,n){var r=n("83ab"),s=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),s=n("1626"),i=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(s(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"9bf2":function(t,e,n){var r=n("83ab"),s=n("0cfb"),i=n("aed9"),o=n("825a"),a=n("a04b"),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?i?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return C})),n.d(e,"e",(function(){return Z})),n.d(e,"f",(function(){return nt})),n.d(e,"g",(function(){return ot})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return ut})),n.d(e,"j",(function(){return st})),n.d(e,"k",(function(){return L})),n.d(e,"l",(function(){return et})),n.d(e,"m",(function(){return v})),n.d(e,"n",(function(){return it})),n.d(e,"o",(function(){return R})),n.d(e,"p",(function(){return X})),n.d(e,"q",(function(){return V})),n.d(e,"r",(function(){return i})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return W})),n.d(e,"u",(function(){return M})),n.d(e,"v",(function(){return x})),n.d(e,"w",(function(){return q})),n.d(e,"x",(function(){return k})),n.d(e,"y",(function(){return z})),n.d(e,"z",(function(){return $})),n.d(e,"A",(function(){return Q})),n.d(e,"B",(function(){return g})),n.d(e,"C",(function(){return P})),n.d(e,"D",(function(){return y})),n.d(e,"E",(function(){return U})),n.d(e,"F",(function(){return B})),n.d(e,"G",(function(){return w})),n.d(e,"H",(function(){return E})),n.d(e,"I",(function(){return r})),n.d(e,"J",(function(){return h})),n.d(e,"K",(function(){return o})),n.d(e,"L",(function(){return D})),n.d(e,"M",(function(){return _})),n.d(e,"N",(function(){return rt})),n.d(e,"O",(function(){return at})),n.d(e,"P",(function(){return H}));const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);function o(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=U(r)?l(r):o(r);if(s)for(const t in s)e[t]=s[t]}return e}return U(t)||q(t)?t:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(t){const e={};return t.replace(u,"").split(a).forEach(t=>{if(t){const n=t.split(c);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function h(t){let e="";if(U(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=h(t[n]);r&&(e+=r+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const f="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",d="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",p=r(f),g=r(d),m="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",y=r(m);function v(t){return!!t||""===t}function b(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=w(t[r],e[r]);return n}function w(t,e){if(t===e)return!0;let n=F(t),r=F(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=B(t),r=B(e),n||r)return t===e;if(n=R(t),r=R(e),n||r)return!(!n||!r)&&b(t,e);if(n=q(t),r=q(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!w(t[n],e[n]))return!1}}return String(t)===String(e)}function E(t,e){return t.findIndex(t=>w(t,e))}const _=t=>U(t)?t:null==t?"":R(t)||q(t)&&(t.toString===G||!V(t.toString))?JSON.stringify(t,O,2):String(t),O=(t,e)=>e&&e.__v_isRef?O(t,e.value):M(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:P(e)?{[`Set(${e.size})`]:[...e.values()]}:!q(e)||R(e)||z(e)?e:String(e),T={},S=[],C=()=>{},I=()=>!1,A=/^on[^a-z]/,k=t=>A.test(t),x=t=>t.startsWith("onUpdate:"),j=Object.assign,D=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},N=Object.prototype.hasOwnProperty,L=(t,e)=>N.call(t,e),R=Array.isArray,M=t=>"[object Map]"===K(t),P=t=>"[object Set]"===K(t),F=t=>"[object Date]"===K(t),V=t=>"function"===typeof t,U=t=>"string"===typeof t,B=t=>"symbol"===typeof t,q=t=>null!==t&&"object"===typeof t,$=t=>q(t)&&V(t.then)&&V(t.catch),G=Object.prototype.toString,K=t=>G.call(t),H=t=>K(t).slice(8,-1),z=t=>"[object Object]"===K(t),W=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,Q=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},J=/-(\w)/g,Z=Y(t=>t.replace(J,(t,e)=>e?e.toUpperCase():"")),tt=/\B([A-Z])/g,et=Y(t=>t.replace(tt,"-$1").toLowerCase()),nt=Y(t=>t.charAt(0).toUpperCase()+t.slice(1)),rt=Y(t=>t?"on"+nt(t):""),st=(t,e)=>!Object.is(t,e),it=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ot=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},at=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ct;const ut=()=>ct||(ct="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),s=n("d9b5");t.exports=function(t){var e=r(t,"string");return s(e)?e:e+""}},abc5:function(t,e,n){"use strict";(function(t){function r(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},aed9:function(t,e,n){var r=n("83ab"),s=n("d039");t.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},b622:function(t,e,n){var r=n("da84"),s=n("5692"),i=n("1a2d"),o=n("90e3"),a=n("04f8"),c=n("fdbf"),u=s("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},bc7b:function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var s="firebase",i="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(s,i,"app")},c04e:function(t,e,n){var r=n("c65b"),s=n("861d"),i=n("d9b5"),o=n("dc4a"),a=n("485a"),c=n("b622"),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!s(t)||i(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!s(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e,n){var r=n("40d5"),s=Function.prototype.call;t.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},c6b6:function(t,e,n){var r=n("e330"),s=r({}.toString),i=r("".slice);t.exports=function(t){return i(s(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),s=n("6374"),i="__core-js_shared__",o=r[i]||s(i,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),s=n("1a2d"),i=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!s(a,n)&&s(r,n)&&c(l,n);while(e.length>u)s(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},cb2d:function(t,e,n){var r=n("1626"),s=n("9bf2"),i=n("13d2"),o=n("6374");t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},cc12:function(t,e,n){var r=n("da84"),s=n("861d"),i=r.document,o=s(i)&&s(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},cdce:function(t,e,n){var r=n("da84"),s=n("1626"),i=r.WeakMap;t.exports=s(i)&&/native code/.test(String(i))},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),s=n("1626"),i=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,i=s&&!r.call({1:2},1);e.f=i?function(t){var e=s(this,t);return!!e&&e.enumerable}:r},d9b5:function(t,e,n){var r=n("d066"),s=n("1626"),i=n("3a9b"),o=n("fdbf"),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&i(e.prototype,a(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed"),s=n("7234");t.exports=function(t,e){var n=t[e];return s(n)?void 0:r(n)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),i=r(n.split("/")),o=Math.min(s.length,i.length),a=o,c=0;c<o;c++)if(s[c]!==i[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!s){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e330:function(t,e,n){var r=n("40d5"),s=Function.prototype,i=s.call,o=r&&s.bind.bind(i,i);t.exports=r?o:function(t){return function(){return i.apply(t,arguments)}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:i,type:e.name})}}}},e893:function(t,e,n){var r=n("1a2d"),s=n("56ef"),i=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=s(e),c=o.f,u=i.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f772:function(t,e,n){var r=n("5692"),s=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=s(t))}},fc6a:function(t,e,n){var r=n("44ad"),s=n("1d80");t.exports=function(t){return r(s(t))}},fdbf:function(t,e,n){var r=n("04f8");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.9fc57dbd.js.map