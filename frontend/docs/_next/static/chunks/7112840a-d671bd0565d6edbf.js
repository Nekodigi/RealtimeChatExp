"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{$5:function(){return u$},$q:function(){return uf},AE:function(){return aL},AK:function(){return uP},Ab:function(){return uB},B$:function(){return aO},Bt:function(){return uq},Cf:function(){return a_},EK:function(){return P},ET:function(){return uD},EZ:function(){return _},Eo:function(){return aq},F8:function(){return oE},Fc:function(){return oc},GH:function(){return ob},GL:function(){return uA},IO:function(){return o0},IX:function(){return ot},Ix:function(){return od},JU:function(){return aP},Jj:function(){return ow},Jm:function(){return oI},K9:function(){return E},Ky:function(){return $},L$:function(){return op},LV:function(){return or},Lx:function(){return un},Lz:function(){return ov},Me:function(){return e_},Mu:function(){return L},Mx:function(){return oh},O$:function(){return oJ},PL:function(){return uI},PU:function(){return uL},Pb:function(){return og},QT:function(){return up},RA:function(){return om},ST:function(){return oo},TF:function(){return of},TQ:function(){return ue},UQ:function(){return ub},Ub:function(){return p},Up:function(){return aQ},W:function(){return um},WA:function(){return S},WS:function(){return a$},Wi:function(){return aT},Wu:function(){return ur},Xb:function(){return G},Xk:function(){return uv},Xo:function(){return o4},YW:function(){return uF},Yp:function(){return uR},ad:function(){return oi},ar:function(){return o2},at:function(){return aR},b9:function(){return o8},cf:function(){return u_},e0:function(){return o7},fH:function(){return ou},gg:function(){return on},hJ:function(){return aF},hx:function(){return aM},i3:function(){return uO},iE:function(){return aU},kl:function(){return uw},l7:function(){return eF},my:function(){return aV},nP:function(){return uK},oZ:function(){return uh},oe:function(){return ux},pl:function(){return uT},qK:function(){return ug},qY:function(){return os},qs:function(){return uG},r7:function(){return uS},sc:function(){return uN},tO:function(){return oe},u7:function(){return uu},vh:function(){return o9},vr:function(){return uU},xU:function(){return ud},yf:function(){return uk},yq:function(){return v},zN:function(){return uE}});var r,i,s=n(5816),a=n(8463),o=n(3333),u=n(4444),l=n(3510),c=n(3454);let h="@firebase/firestore";/**
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
 */ class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
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
 */ let f="9.13.0",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){m.setLogLevel(e)}function y(e,...t){if(m.logLevel<=o.in.DEBUG){let n=t.map(I);m.debug(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=o.in.ERROR){let n=t.map(I);m.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(m.logLevel<=o.in.WARN){let n=t.map(I);m.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */ function b(e="Unexpected state"){let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;throw w(t),Error(t)}function E(e,t){e||b()}/**
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
 */ let T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends u.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */ class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */ class D{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new x;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new x,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new x)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||b(),new D(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||b(),new d(e)}}class C{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=d.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||b(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class k{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new C(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||b(),this.A=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class L{getToken(){return Promise.resolve(new R(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */ class M{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */ function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function O(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */ class P{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new P(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */ class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new P(0,0))}static max(){return new q(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */ class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends U{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}let K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends U{construct(e,t,n){return new G(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new S(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new S(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new S(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new G(t)}static emptyPath(){return new G([])}}/**
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
 */ class ${constructor(e){this.path=e}static fromPath(e){return new $(B.fromString(e))}static fromName(e){return new $(B.fromString(e).popFirst(5))}static empty(){return new $(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new B(e.slice()))}}/**
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
 */ class Q{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function z(e){return e.fields.find(e=>2===e.kind)}function j(e){return e.fields.filter(e=>2!==e.kind)}function W(e,t){let n=F(e.collectionGroup,t.collectionGroup);if(0!==n)return n;for(let r=0;r<Math.min(e.fields.length,t.fields.length);++r)if(0!==(n=function(e,t){let n=G.comparator(e.fieldPath,t.fieldPath);return 0!==n?n:F(e.kind,t.kind)}(e.fields[r],t.fields[r])))return n;return F(e.fields.length,t.fields.length)}Q.UNKNOWN_ID=-1;class H{constructor(e,t){this.fieldPath=e,this.kind=t}}class Y{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Y(0,J.min())}}function X(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=q.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r));return new J(i,$.empty(),t)}function Z(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(q.min(),$.empty(),-1)}static max(){return new J(q.max(),$.empty(),-1)}}function ee(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=$.comparator(e.documentKey,t.documentKey))?n:F(e.largestBatchId,t.largestBatchId)}/**
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
 */ let et="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class en{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */ async function er(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==et)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */ class ei{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ei((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ei?t:ei.resolve(t)}catch(n){return ei.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ei.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ei.reject(t)}static resolve(e){return new ei((t,n)=>{t(e)})}static reject(e){return new ei((t,n)=>{n(e)})}static waitFor(e){return new ei((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ei.resolve(!1);for(let n of e)t=t.next(e=>e?ei.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ei((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let u=o;t(e[u]).next(e=>{s[u]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ei((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */ class es{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new x,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new eu(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{let n=ef(t.target.error);this.P.reject(new eu(e,n))}}static open(e,t,n,r){try{return new es(t,e.transaction(r,n))}catch(i){throw new eu(t,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new ec(t)}}class ea{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===ea.D((0,u.z$)())&&w("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),eh(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,u.hl)())return!1;if(ea.N())return!0;let e=(0,u.z$)(),t=ea.D(e),n=ea.k(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static N(){var e;return void 0!==c&&"YES"===(null===(e=c.env)||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new eu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new S(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new S(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new eu(e,r))},r.onupgradeneeded=e=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.F(e);let a=es.open(this.db,e,i?"readonly":"readwrite",n),o=r(a).next(e=>(a.V(),e)).catch(e=>(a.abort(e),ei.reject(e))).toPromise();return o.catch(()=>{}),await a.v,o}catch(l){let u="FirebaseError"!==l.name&&s<3;if(y("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class eo{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return eh(this.U.delete())}}class eu extends S{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function el(e){return"IndexedDbTransactionError"===e.name}class ec{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(y("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eh(n)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),eh(this.store.add(e))}get(e){return eh(this.store.get(e)).next(t=>(void 0===t&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),eh(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),eh(this.store.count())}W(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let r=this.cursor(n),i=[];return this.H(r,(e,t)=>{i.push(t)}).next(()=>i)}{let s=this.store.getAll(n.range);return new ei((e,t)=>{s.onerror=e=>{t(e.target.error)},s.onsuccess=t=>{e(t.target.result)}})}}J(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new ei((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){y("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.X=!1;let r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.H(r,t)}tt(e){let t=this.cursor({});return new ei((n,r)=>{t.onerror=e=>{let t=ef(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){let n=[];return new ei((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new eo(i),a=t(i.primaryKey,i.value,s);if(a instanceof ei){let o=a.catch(e=>(s.done(),ei.reject(e)));n.push(o)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>ei.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eh(e){return new ei((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=ef(e.target.error);n(t)}})}let ed=!1;function ef(e){let t=ea.D((0,u.z$)());if(t>=12.2&&t<13){let n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){let r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ed||(ed=!0,setTimeout(()=>{throw r},0)),r}}return e}class em{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){el(e)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await er(e)}await this.nt(6e4)})}}class eg{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){let n=new Set,r=t,i=!0;return ei.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return y("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ot(r,n)).next(n=>(y("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ot(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=Z(t);ee(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */ class ep{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */ function ey(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ew(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ev(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */ ep.at=-1;class eI{constructor(e,t){this.comparator=e,this.root=t||eE.EMPTY}insert(e,t){return new eI(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eE.BLACK,null,null))}remove(e){return new eI(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eE.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eb(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eb(this.root,e,this.comparator,!1)}getReverseIterator(){return new eb(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eb(this.root,e,this.comparator,!0)}}class eb{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eE{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eE.RED,this.left=null!=r?r:eE.EMPTY,this.right=null!=i?i:eE.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eE(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eE.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eE.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eE.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eE.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();let e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}eE.EMPTY=null,eE.RED=!0,eE.BLACK=!1,eE.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eE(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */ class eT{constructor(e){this.comparator=e,this.data=new eI(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eS(this.data.getIterator())}getIteratorFrom(e){return new eS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eT)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eT(this.comparator);return t.data=e,t}}class eS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ex(e){return e.hasNext()?e.getNext():void 0}/**
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
 */ class eD{constructor(e){this.fields=e,e.sort(G.comparator)}static empty(){return new eD([])}unionWith(e){let t=new eT(G.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new eD(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return O(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */ function e_(){return"undefined"!=typeof atob}/**
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
 */ class eN{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new eN(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new eN(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eN.EMPTY_BYTE_STRING=new eN("");let eA=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eC(e){if(e||b(),"string"==typeof e){let t=0,n=eA.exec(e);if(n||b(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ek(e.seconds),nanos:ek(e.nanos)}}function ek(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eR(e){return"string"==typeof e?eN.fromBase64String(e):eN.fromUint8Array(e)}/**
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
 */ function eV(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eL(e){let t=eC(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */ class eM{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class eF{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new eF("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof eF&&e.projectId===this.projectId&&e.database===this.database}}function eO(e){return null==e}function eP(e){return 0===e&&1/e==-1/0}function eq(e){return"number"==typeof e&&Number.isInteger(e)&&!eP(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */ let eU={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},eB={nullValue:"NULL_VALUE"};function eK(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eV(e)?4:e1(e)?9007199254740991:10:b()}function eG(e,t){if(e===t)return!0;let n=eK(e);if(n!==eK(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eL(e).isEqual(eL(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eC(e.timestampValue),r=eC(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eR(e.bytesValue).isEqual(eR(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ek(e.geoPointValue.latitude)===ek(t.geoPointValue.latitude)&&ek(e.geoPointValue.longitude)===ek(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ek(e.integerValue)===ek(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ek(e.doubleValue),r=ek(t.doubleValue);return n===r?eP(n)===eP(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return O(e.arrayValue.values||[],t.arrayValue.values||[],eG);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ey(n)!==ey(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!eG(n[i],r[i])))return!1;return!0}(e,t);default:return b()}}function e$(e,t){return void 0!==(e.values||[]).find(e=>eG(e,t))}function eQ(e,t){if(e===t)return 0;let n=eK(e),r=eK(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ek(e.integerValue||e.doubleValue),r=ek(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ez(e.timestampValue,t.timestampValue);case 4:return ez(eL(e),eL(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eR(e),r=eR(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=F(n[i],r[i]);if(0!==s)return s}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=F(ek(e.latitude),ek(t.latitude));return 0!==n?n:F(ek(e.longitude),ek(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=eQ(n[i],r[i]);if(s)return s}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eU.mapValue&&t===eU.mapValue)return 0;if(e===eU.mapValue)return 1;if(t===eU.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=F(r[a],s[a]);if(0!==o)return o;let u=eQ(n[r[a]],i[s[a]]);if(0!==u)return u}return F(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b()}}function ez(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);let n=eC(e),r=eC(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos)}function ej(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eC(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eR(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,$.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ej(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${ej(e.fields[i])}`;return n+"}"}(e.mapValue):b()}function eW(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eH(e){return!!e&&"integerValue"in e}function eY(e){return!!e&&"arrayValue"in e}function eX(e){return!!e&&"nullValue"in e}function eZ(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eJ(e){return!!e&&"mapValue"in e}function e0(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ew(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=e0(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=e0(e.arrayValue.values[r]);return n}return Object.assign({},e)}function e1(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function e2(e,t){let n=eQ(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function e5(e,t){let n=eQ(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */ class e4{constructor(e){this.value=e}static empty(){return new e4({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eJ(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=e0(t)}setAll(e){let t=G.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=e0(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eJ(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eG(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eJ(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ew(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new e4(e0(this.value))}}/**
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
 */ class e3{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new e3(e,0,q.min(),q.min(),e4.empty(),0)}static newFoundDocument(e,t,n){return new e3(e,1,t,q.min(),n,0)}static newNoDocument(e,t){return new e3(e,2,t,q.min(),e4.empty(),0)}static newUnknownDocument(e,t){return new e3(e,3,t,q.min(),e4.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=e4.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=e4.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof e3&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new e3(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */ class e8{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ht=null}}function e9(e,t=null,n=[],r=[],i=null,s=null,a=null){return new e8(e,t,n,r,i,s,a)}function e6(e){let t=e;if(null===t.ht){let n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:"+t.filters.map(e=>e.field.canonicalString()+e.op.toString()+ej(e.value)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eO(t.limit)||(n+="|l:"+t.limit),t.startAt&&(n+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ej(e)).join(",")),t.endAt&&(n+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ej(e)).join(",")),t.ht=n}return t.ht}function e7(e,t){var n,r,i,s;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let a=0;a<e.orderBy.length;a++)if(i=e.orderBy[a],s=t.orderBy[a],!(i.dir===s.dir&&i.field.isEqual(s.field)))return!1;if(e.filters.length!==t.filters.length)return!1;for(let o=0;o<e.filters.length;o++)if(n=e.filters[o],r=t.filters[o],n.op!==r.op||!n.field.isEqual(r.field)||!eG(n.value,r.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tp(e.startAt,t.startAt)&&tp(e.endAt,t.endAt)}function te(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tt(e,t){return e.filters.filter(e=>e instanceof ti&&e.field.isEqual(t))}function tn(e,t,n){let r=eB,i=!0;for(let s of tt(e,t)){let a=eB,o=!0;switch(s.op){case"<":case"<=":var u;a="nullValue"in(u=s.value)?eB:"booleanValue"in u?{booleanValue:!1}:"integerValue"in u||"doubleValue"in u?{doubleValue:NaN}:"timestampValue"in u?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in u?{stringValue:""}:"bytesValue"in u?{bytesValue:""}:"referenceValue"in u?eW(eF.empty(),$.empty()):"geoPointValue"in u?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in u?{arrayValue:{}}:"mapValue"in u?{mapValue:{}}:b();break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,o=!1;break;case"!=":case"not-in":a=eB}0>e2({value:r,inclusive:i},{value:a,inclusive:o})&&(r=a,i=o)}if(null!==n){for(let l=0;l<e.orderBy.length;++l)if(e.orderBy[l].field.isEqual(t)){let c=n.position[l];0>e2({value:r,inclusive:i},{value:c,inclusive:n.inclusive})&&(r=c,i=n.inclusive);break}}return{value:r,inclusive:i}}function tr(e,t,n){let r=eU,i=!0;for(let s of tt(e,t)){let a=eU,o=!0;switch(s.op){case">=":case">":var u;a="nullValue"in(u=s.value)?{booleanValue:!1}:"booleanValue"in u?{doubleValue:NaN}:"integerValue"in u||"doubleValue"in u?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in u?{stringValue:""}:"stringValue"in u?{bytesValue:""}:"bytesValue"in u?eW(eF.empty(),$.empty()):"referenceValue"in u?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in u?{arrayValue:{}}:"arrayValue"in u?{mapValue:{}}:"mapValue"in u?eU:b(),o=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,o=!1;break;case"!=":case"not-in":a=eU}e5({value:r,inclusive:i},{value:a,inclusive:o})>0&&(r=a,i=o)}if(null!==n){for(let l=0;l<e.orderBy.length;++l)if(e.orderBy[l].field.isEqual(t)){let c=n.position[l];e5({value:r,inclusive:i},{value:c,inclusive:n.inclusive})>0&&(r=c,i=n.inclusive);break}}return{value:r,inclusive:i}}class ti extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new ts(e,t,n):"array-contains"===t?new tl(e,n):"in"===t?new tc(e,n):"not-in"===t?new th(e,n):"array-contains-any"===t?new td(e,n):new ti(e,t,n)}static lt(e,t,n){return"in"===t?new ta(e,n):new to(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(eQ(t,this.value)):null!==t&&eK(this.value)===eK(t)&&this.ft(eQ(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ts extends ti{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){let t=$.comparator(e.key,this.key);return this.ft(t)}}class ta extends ti{constructor(e,t){super(e,"in",t),this.keys=tu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class to extends ti{constructor(e,t){super(e,"not-in",t),this.keys=tu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>$.fromName(e.referenceValue))}class tl extends ti{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eY(t)&&e$(t.arrayValue,this.value)}}class tc extends ti{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&e$(this.value.arrayValue,t)}}class th extends ti{constructor(e,t){super(e,"not-in",t)}matches(e){if(e$(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!e$(this.value.arrayValue,t)}}class td extends ti{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eY(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>e$(this.value.arrayValue,e))}}class tf{constructor(e,t){this.position=e,this.inclusive=t}}class tm{constructor(e,t="asc"){this.field=e,this.dir=t}}function tg(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?$.comparator($.fromName(a.referenceValue),n.key):eQ(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tp(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eG(e.position[n],t.position[n]))return!1;return!0}/**
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
 */ class ty{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function tw(e){return new ty(e)}function tv(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tI(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tb(e){for(let t of e.filters)if(t.dt())return t.field;return null}function tE(e){return null!==e.collectionGroup}function tT(e){let t=e;if(null===t._t){t._t=[];let n=tb(t),r=tI(t);if(null!==n&&null===r)n.isKeyField()||t._t.push(new tm(n)),t._t.push(new tm(G.keyField(),"asc"));else{let i=!1;for(let s of t.explicitOrderBy)t._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){let a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new tm(G.keyField(),a))}}}return t._t}function tS(e){let t=e;if(!t.wt){if("F"===t.limitType)t.wt=e9(t.path,t.collectionGroup,tT(t),t.filters,t.limit,t.startAt,t.endAt);else{let n=[];for(let r of tT(t)){let i="desc"===r.dir?"asc":"desc";n.push(new tm(r.field,i))}let s=t.endAt?new tf(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new tf(t.startAt.position,t.startAt.inclusive):null;t.wt=e9(t.path,t.collectionGroup,n,t.filters,t.limit,s,a)}}return t.wt}function tx(e,t,n){return new ty(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tD(e,t){return e7(tS(e),tS(t))&&e.limitType===t.limitType}function t_(e){return`${e6(tS(e))}|lt:${e.limitType}`}function tN(e){var t;let n;return`Query(target=${n=(t=tS(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>`${e.field.canonicalString()} ${e.op} ${ej(e.value)}`).join(", ")}]`),eO(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ej(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ej(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tA(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tg(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tT(e),t))&&(!e.endAt||!!function(e,t,n){let r=tg(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tT(e),t))}function tC(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tk(e){return(t,n)=>{let r=!1;for(let i of tT(e)){let s=function(e,t,n){let r=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eQ(r,i):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return b()}}(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}/**
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
 */ function tR(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eP(t)?"-0":t}}function tV(e){return{integerValue:""+e}}function tL(e,t){return eq(t)?tV(t):tR(e,t)}/**
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
 */ class tM{constructor(){this._=void 0}}function tF(e,t){return e instanceof tK?eH(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tO extends tM{}class tP extends tM{constructor(e){super(),this.elements=e}}function tq(e,t){let n=t$(t);for(let r of e.elements)n.some(e=>eG(e,r))||n.push(r);return{arrayValue:{values:n}}}class tU extends tM{constructor(e){super(),this.elements=e}}function tB(e,t){let n=t$(t);for(let r of e.elements)n=n.filter(e=>!eG(e,r));return{arrayValue:{values:n}}}class tK extends tM{constructor(e,t){super(),this.It=e,this.yt=t}}function tG(e){return ek(e.integerValue||e.doubleValue)}function t$(e){return eY(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */ class tQ{constructor(e,t){this.field=e,this.transform=t}}class tz{constructor(e,t){this.version=e,this.transformResults=t}}class tj{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tj}static exists(e){return new tj(void 0,e)}static updateTime(e){return new tj(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tW(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tH{}function tY(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new t4(e.key,tj.none()):new tJ(e.key,e.data,tj.none());{let n=e.data,r=e4.empty(),i=new eT(G.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);null===a&&s.length>1&&(s=s.popLast(),a=n.field(s)),null===a?r.delete(s):r.set(s,a),i=i.add(s)}return new t0(e.key,r,new eD(i.toArray()),tj.none())}}function tX(e,t,n,r){return e instanceof tJ?function(e,t,n,r){if(!tW(e.precondition,t))return n;let i=e.value.clone(),s=t5(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof t0?function(e,t,n,r){if(!tW(e.precondition,t))return n;let i=t5(e.fieldTransforms,r,t),s=t.data;return(s.setAll(t1(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tW(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tZ(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&O(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tP&&r instanceof tP||n instanceof tU&&r instanceof tU?O(n.elements,r.elements,eG):n instanceof tK&&r instanceof tK?eG(n.yt,r.yt):n instanceof tO&&r instanceof tO)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tJ extends tH{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class t0 extends tH{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t1(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function t2(e,t,n){var r;let i=new Map;e.length===n.length||b();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,u=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof tP?tq(o,u):o instanceof tU?tB(o,u):r))}return i}function t5(e,t,n){let r=new Map;for(let i of e){let s=i.transform,a=n.data.field(i.field);r.set(i.field,s instanceof tO?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,a):s instanceof tP?tq(s,a):s instanceof tU?tB(s,a):function(e,t){let n=tF(e,t),r=tG(n)+tG(e.yt);return eH(n)&&eH(e.yt)?tV(r):tR(e.It,r)}(s,a))}return r}class t4 extends tH{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t3 extends tH{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */ class t8{constructor(e){this.count=e}}function t9(e){switch(e){default:return b();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function t6(e){if(void 0===e)return w("GRPC error has no .code"),T.UNKNOWN;switch(e){case r.OK:return T.OK;case r.CANCELLED:return T.CANCELLED;case r.UNKNOWN:return T.UNKNOWN;case r.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case r.INTERNAL:return T.INTERNAL;case r.UNAVAILABLE:return T.UNAVAILABLE;case r.UNAUTHENTICATED:return T.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case r.NOT_FOUND:return T.NOT_FOUND;case r.ALREADY_EXISTS:return T.ALREADY_EXISTS;case r.PERMISSION_DENIED:return T.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case r.ABORTED:return T.ABORTED;case r.OUT_OF_RANGE:return T.OUT_OF_RANGE;case r.UNIMPLEMENTED:return T.UNIMPLEMENTED;case r.DATA_LOSS:return T.DATA_LOSS;default:return b()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */ class t7{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ew(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return ev(this.inner)}size(){return this.innerSize}}/**
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
 */ let ne=new eI($.comparator),nt=new eI($.comparator);function nn(...e){let t=nt;for(let n of e)t=t.insert(n.key,n);return t}function nr(e){let t=nt;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ni(){return new t7(e=>e.toString(),(e,t)=>e.isEqual(t))}let ns=new eI($.comparator),na=new eT($.comparator);function no(...e){let t=na;for(let n of e)t=t.add(n);return t}let nu=new eT(F);/**
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
 */ class nl{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nl(q.min(),r,nu,ne,no())}}class nc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nc(n,t,no(),no(),no())}}/**
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
 */ class nh{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class nd{constructor(e,t){this.targetId=e,this.At=t}}class nf{constructor(e,t,n=eN.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nm{constructor(){this.Rt=0,this.bt=ny(),this.Pt=eN.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=no(),t=no(),n=no();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b()}}),new nc(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=ny()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ng{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ne,this.qt=np(),this.Kt=new eT(F)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,n)=>{this.Ht(n)&&t(n)})}Yt(e){let t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){let i=r.target;if(te(i)){if(0===n){let s=new $(i.path);this.jt(t,s,e3.newNoDocument(s,q.min()))}else 1===n||b()}else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((n,r)=>{let i=this.Xt(r);if(i){if(n.current&&te(i.target)){let s=new $(i.target.path);null!==this.Ut.get(s)||this.ee(r,s)||this.jt(r,s,e3.newNoDocument(s,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}});let n=no();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new nl(e,t,this.Kt,this.Ut,n);return this.Ut=ne,this.qt=np(),this.Kt=new eT(F),r}Qt(e,t){if(!this.Ht(e))return;let n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;let r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new nm,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new eT(F),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||y("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new nm),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function np(){return new eI($.comparator)}function ny(){return new eI($.comparator)}/**
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
 */ let nw={asc:"ASCENDING",desc:"DESCENDING"},nv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class nI{constructor(e,t){this.databaseId=e,this.gt=t}}function nb(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nE(e,t){return e.gt?t.toBase64():t.toUint8Array()}function nT(e){return e||b(),q.fromTimestamp(function(e){let t=eC(e);return new P(t.seconds,t.nanos)}(e))}function nS(e,t){return new B(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function nx(e){let t=B.fromString(e);return nB(t)||b(),t}function nD(e,t){return nS(e.databaseId,t.path)}function n_(e,t){let n=nx(t);if(n.get(1)!==e.databaseId.projectId)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(nk(n))}function nN(e,t){return nS(e.databaseId,t)}function nA(e){let t=nx(e);return 4===t.length?B.emptyPath():nk(t)}function nC(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nk(e){return e.length>4&&"documents"===e.get(4)||b(),e.popFirst(5)}function nR(e,t,n){return{name:nD(e,t),fields:n.value.mapValue.fields}}function nV(e,t,n){let r=n_(e,t.name),i=nT(t.updateTime),s=new e4({mapValue:{fields:t.fields}}),a=e3.newFoundDocument(r,i,s);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function nL(e,t){var n;let r;if(t instanceof tJ)r={update:nR(e,t.key,t.value)};else if(t instanceof t4)r={delete:nD(e,t.key)};else if(t instanceof t0)r={update:nR(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t3))return b();r={verify:nD(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tO)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tP)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tU)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tK)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw b()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nb(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:b()),r}function nM(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?tj.updateTime(nT(n.updateTime)):void 0!==n.exists?tj.exists(n.exists):tj.none():tj.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||b(),n=new tO;else if("appendMissingElements"in t){let r=t.appendMissingElements.values||[];n=new tP(r)}else if("removeAllFromArray"in t){let i=t.removeAllFromArray.values||[];n=new tU(i)}else"increment"in t?n=new tK(e,t.increment):b();let s=G.fromServerFormat(t.fieldPath);return new tQ(s,n)})(e,t)):[];if(t.update){t.update.name;let s=n_(e,t.update.name),a=new e4({mapValue:{fields:t.update.fields}});if(t.updateMask){let o=function(e){let t=e.fieldPaths||[];return new eD(t.map(e=>G.fromServerFormat(e)))}(t.updateMask);return new t0(s,a,o,r,i)}return new tJ(s,a,r,i)}if(t.delete){let u=n_(e,t.delete);return new t4(u,r)}if(t.verify){let l=n_(e,t.verify);return new t3(l,r)}return b()}function nF(e,t){return{documents:[nN(e,t.path)]}}function nO(e,t){var n,r,i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s.parent=nN(e,a),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=nN(e,a.popLast()),s.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){if("=="===e.op){if(eZ(e.value))return{unaryFilter:{field:nq(e.field),op:"IS_NAN"}};if(eX(e.value))return{unaryFilter:{field:nq(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eZ(e.value))return{unaryFilter:{field:nq(e.field),op:"IS_NOT_NAN"}};if(eX(e.value))return{unaryFilter:{field:nq(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nq(e.field),op:nv[e.op],value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);o&&(s.structuredQuery.where=o);let u=function(e){if(0!==e.length)return e.map(e=>({field:nq(e.field),direction:nw[e.dir]}))}(t.orderBy);u&&(s.structuredQuery.orderBy=u);let l=(r=t.limit,e.gt||eO(r)?r:{value:r});return null!==l&&(s.structuredQuery.limit=l),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}function nP(e){var t,n,r,i,s,a,o,u;let l,c=nA(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||b();let m=h.from[0];m.allDescendants?f=m.collectionId:c=c.child(m.collectionId)}let g=[];h.where&&(g=function e(t){return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nU(e.unaryFilter.field);return ti.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nU(e.unaryFilter.field);return ti.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nU(e.unaryFilter.field);return ti.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nU(e.unaryFilter.field);return ti.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t)]:void 0!==t.fieldFilter?[ti.create(nU(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):b():[]}(h.where));let p=[];h.orderBy&&(p=h.orderBy.map(e=>new tm(nU(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let y=null;h.limit&&(y=eO(l="object"==typeof(t=h.limit)?t.value:t)?null:l);let w=null;h.startAt&&(w=function(e){let t=!!e.before,n=e.values||[];return new tf(n,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new tf(n,t)}(h.endAt)),n=c,r=f,i=p,s=g,a=y,o=w,u=v,new ty(n,r,i,s,a,"F",o,u)}function nq(e){return{fieldPath:e.canonicalString()}}function nU(e){return G.fromServerFormat(e.fieldPath)}function nB(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */ function nK(e){var t,n;let r="";for(let i=0;i<e.length;i++)r.length>0&&(r+="\x01\x01"),r=function(e,t){let n=t,r=e.length;for(let i=0;i<r;i++){let s=e.charAt(i);switch(s){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=s}}return n}(e.get(i),r);return r+"\x01\x01"}function nG(e){let t=e.length;if(t>=2||b(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||b(),B.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let a=e.indexOf("\x01",s);switch((a<0||a>n)&&b(),e.charAt(a+1)){case"\x01":let o;let u=e.substring(s,a);0===i.length?o=u:(i+=u,o=i,i=""),r.push(o);break;case"\x10":i+=e.substring(s,a)+"\0";break;case"\x11":i+=e.substring(s,a+1);break;default:b()}s=a+2}return new B(r)}/**
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
 */ let n$=["userId","batchId"],nQ={},nz=["prefixPath","collectionGroup","readTime","documentId"],nj=["prefixPath","collectionGroup","documentId"],nW=["collectionGroup","readTime","prefixPath","documentId"],nH=["canonicalId","targetId"],nY=["targetId","path"],nX=["path","targetId"],nZ=["collectionId","parent"],nJ=["indexId","uid"],n0=["uid","sequenceNumber"],n1=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],n2=["indexId","uid","orderedDocumentKey"],n5=["userId","collectionPath","documentId"],n4=["userId","collectionPath","largestBatchId"],n3=["userId","collectionGroup","largestBatchId"],n8=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],n9=[...n8,"documentOverlays"],n6=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],n7=[...n6,"indexConfiguration","indexState","indexEntries"];/**
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
 */ class re extends en{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function rt(e,t){return ea.M(e.ie,t)}/**
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
 */ class rn{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];if(i.key.isEqual(e.key)){var s;s=n[r],i instanceof tJ?function(e,t,n){let r=e.value.clone(),i=t2(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,s):i instanceof t0?function(e,t,n){if(!tW(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=t2(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(t1(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,s):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tX(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tX(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ni();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=tY(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),no())}isEqual(e){return this.batchId===e.batchId&&O(this.mutations,e.mutations,(e,t)=>tZ(e,t))&&O(this.baseMutations,e.baseMutations,(e,t)=>tZ(e,t))}}class rr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||b();let r=ns,i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new rr(e,t,n,r)}}/**
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
 */ class ri{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */ class rs{constructor(e,t,n,r,i=q.min(),s=q.min(),a=eN.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */ class ra{constructor(e){this.re=e}}function ro(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ru(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:nD(i=e.re,t.key),fields:t.data.value.mapValue.fields,updateTime:nb(i,t.version.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rl(t.version)};else{if(!t.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:rl(t.version)}}return r}function ru(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rl(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rc(e){let t=new P(e.seconds,e.nanoseconds);return q.fromTimestamp(t)}function rh(e,t){let n=(t.baseMutations||[]).map(t=>nM(e.re,t));for(let r=0;r<t.mutations.length-1;++r){let i=t.mutations[r];if(r+1<t.mutations.length&&void 0!==t.mutations[r+1].transform){let s=t.mutations[r+1];i.updateTransforms=s.transform.fieldTransforms,t.mutations.splice(r+1,1),++r}}let a=t.mutations.map(t=>nM(e.re,t)),o=P.fromMillis(t.localWriteTimeMs);return new rn(t.batchId,o,n,a)}function rd(e){var t;let n;let r=rc(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?rc(e.lastLimboFreeSnapshotVersion):q.min();return void 0!==e.query.documents?(1===(t=e.query).documents.length||b(),n=tS(tw(nA(t.documents[0])))):n=tS(nP(e.query)),new rs(n,e.targetId,0,e.lastListenSequenceNumber,r,i,eN.fromBase64String(e.resumeToken))}function rf(e,t){let n;let r=rl(t.snapshotVersion),i=rl(t.lastLimboFreeSnapshotVersion);n=te(t.target)?nF(e.re,t.target):nO(e.re,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:e6(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rm(e){let t=nP({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tx(t,t.limit,"L"):t}function rg(e,t){return new ri(t.largestBatchId,nM(e.re,t.overlayMutation))}function rp(e,t){let n=t.path.lastSegment();return[e,nK(t.path.popLast()),n]}function ry(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rl(r.readTime),documentKey:nK(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */ class rw{getBundleMetadata(e,t){return rv(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rc(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rv(e).put({bundleId:t.id,createTime:rl(nT(t.createTime)),version:t.version})}getNamedQuery(e,t){return rI(e).get(t).next(e=>{if(e)return{name:e.name,query:rm(e.bundledQuery),readTime:rc(e.readTime)}})}saveNamedQuery(e,t){return rI(e).put({name:t.name,readTime:rl(nT(t.readTime)),bundledQuery:t.bundledQuery})}}function rv(e){return rt(e,"bundles")}function rI(e){return rt(e,"namedQueries")}/**
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
 */ class rb{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){let n=t.uid||"";return new rb(e,n)}getOverlay(e,t){return rE(e).get(rp(this.userId,t)).next(e=>e?rg(this.It,e):null)}getOverlays(e,t){let n=ni();return ei.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new ri(t,i);r.push(this.ue(e,s))}),ei.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(nK(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rE(e).Y("collectionPathOverlayIndex",r))}),ei.waitFor(i)}getOverlaysForCollection(e,t,n){let r=ni(),i=nK(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rE(e).W("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let n=rg(this.It,t);r.set(n.getKey(),n)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=ni(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rE(e).Z({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rg(this.It,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}ue(e,t){return rE(e).put(function(e,t,n){let[r,i,s]=rp(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:nL(e.re,n.mutation)}}(this.It,this.userId,t))}}function rE(e){return rt(e,"documentOverlays")}/**
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
 */ class rT{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(ek(e.integerValue));else if("doubleValue"in e){let n=ek(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),eP(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){let r=e.timestampValue;this.le(t,20),"string"==typeof r?t.de(r):(t.de(`${r.seconds||""}`),t.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(eR(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.le(t,45),t.fe(i.latitude||0),t.fe(i.longitude||0)}else"mapValue"in e?e1(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):b()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let n=e.fields||{};for(let r of(this.le(t,55),Object.keys(n)))this._e(r,t),this.ae(n[r],t)}pe(e,t){let n=e.values||[];for(let r of(this.le(t,50),n))this.ae(r,t)}ge(e,t){this.le(t,37),$.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}function rS(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rT.Te=new rT;class rx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(let t of e){let n=t.charCodeAt(0);if(n<128)this.Ae(n);else if(n<2048)this.Ae(960|n>>>6),this.Ae(128|63&n);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|n>>>12),this.Ae(128|63&n>>>6),this.Ae(128|63&n);else{let r=t.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}Se(e){for(let t of e){let n=t.charCodeAt(0);if(n<128)this.Pe(n);else if(n<2048)this.Pe(960|n>>>6),this.Pe(128|63&n);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|n>>>12),this.Pe(128|63&n>>>6),this.Pe(128|63&n);else{let r=t.codePointAt(0);this.Pe(240|r>>>18),this.Pe(128|63&r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r)}}this.ve()}De(e){let t=this.Ce(e),n=rS(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){let t=this.Ce(e),n=rS(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ae(e){let t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){let t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rD{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class r_{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class rN{constructor(){this.Be=new rx,this.Le=new rD(this.Be),this.Ue=new r_(this.Be)}seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */ class rA{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ke(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rA(this.indexId,this.documentKey,this.arrayValue,n)}}function rC(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rk(e.arrayValue,t.arrayValue))?n:0!==(n=rk(e.directionalValue,t.directionalValue))?n:$.comparator(e.documentKey,t.documentKey)}function rk(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */ class rR{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[],e.filters)){let n=t;n.dt()?this.je=n:this.Qe.push(n)}}We(e){let t=z(e);if(void 0!==t&&!this.ze(t))return!1;let n=j(e),r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.je){let s=n[r];if(!this.He(this.je,s)||!this.Je(this.Ge[i++],s))return!1;++r}for(;r<n.length;++r){let a=n[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],a))return!1}return!0}ze(e){for(let t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}/**
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
 */ class rV{constructor(){this.Ye=new rL}addToCollectionParentIndex(e,t){return this.Ye.add(t),ei.resolve()}getCollectionParents(e,t){return ei.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return ei.resolve()}deleteFieldIndex(e,t){return ei.resolve()}getDocumentsMatchingTarget(e,t){return ei.resolve(null)}getIndexType(e,t){return ei.resolve(0)}getFieldIndexes(e,t){return ei.resolve([])}getNextCollectionGroupToUpdate(e){return ei.resolve(null)}getMinOffset(e,t){return ei.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return ei.resolve(J.min())}updateCollectionGroup(e,t,n){return ei.resolve()}updateIndexEntries(e,t){return ei.resolve()}}class rL{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eT(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eT(B.comparator)).toArray()}}/**
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
 */ let rM=new Uint8Array(0);class rF{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new rL,this.Ze=new t7(e=>e6(e),(e,t)=>e7(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});let i={collectionId:n,parent:nK(r)};return rO(e).put(i)}return ei.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return rO(e).W(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(nG(r.parent))}return n})}addFieldIndex(e,t){let n=rq(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let s=rU(e);return i.next(e=>{s.put(ry(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=rq(e),r=rU(e),i=rP(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=rP(e),r=!0,i=new Map;return ei.forEach(this.tn(t),t=>this.en(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=no(),s=[];return ei.forEach(i,(r,i)=>{y("IndexedDbIndexManager",`Using index id=${r.indexId}|cg=${r.collectionGroup}|f=${r.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${e6(t)}`);let a=function(e,t){let n=z(t);if(void 0===n)return null;for(let r of tt(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,r),o=function(e,t){let n=new Map;for(let r of j(t))for(let i of tt(e,r.fieldPath))switch(i.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),i.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),i.value),Array.from(n.values())}return null}(i,r),u=function(e,t){let n=[],r=!0;for(let i of j(t)){let s=0===i.kind?tn(e,i.fieldPath,e.startAt):tr(e,i.fieldPath,e.startAt);n.push(s.value),r&&(r=s.inclusive)}return new tf(n,r)}(i,r),l=function(e,t){let n=[],r=!0;for(let i of j(t)){let s=0===i.kind?tr(e,i.fieldPath,e.endAt):tn(e,i.fieldPath,e.endAt);n.push(s.value),r&&(r=s.inclusive)}return new tf(n,r)}(i,r),c=this.nn(r,i,u),h=this.nn(r,i,l),d=this.sn(r,i,o),f=this.rn(r.indexId,a,c,u.inclusive,h,l.inclusive,d);return ei.forEach(f,r=>n.J(r,t.limit).next(t=>{t.forEach(t=>{let n=$.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),s.push(n))})}))}).next(()=>s)}return ei.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),u=o/(null!=t?t.length:1),l=[];for(let c=0;c<o;++c){let h=t?this.on(t[c/u]):rM,d=this.un(e,h,n[c%u],r),f=this.cn(e,h,i[c%u],s),m=a.map(t=>this.un(e,h,t,!0));l.push(...this.createRange(d,f,m))}return l}un(e,t,n,r){let i=new rA(e,$.empty(),t,n);return r?i:i.Ke()}cn(e,t,n,r){let i=new rA(e,$.empty(),t,n);return r?i.Ke():i}en(e,t){let n=new rR(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.We(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;return ei.forEach(this.tn(t),t=>this.en(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eT(G.comparator),n=!1;for(let r of e.filters){let i=r;i.field.isKeyField()||("array-contains"===i.op||"array-contains-any"===i.op?n=!0:t=t.add(i.field))}for(let s of e.orderBy)s.field.isKeyField()||(t=t.add(s.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>n)}an(e,t){let n=new rN;for(let r of j(e)){let i=t.data.field(r.fieldPath);if(null==i)return null;let s=n.qe(r.kind);rT.Te.ce(i,s)}return n.$e()}on(e){let t=new rN;return rT.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){let n=new rN;return rT.Te.ce(eW(this.databaseId,t),n.qe(function(e){let t=j(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let r=[];r.push(new rN);let i=0;for(let s of j(e)){let a=n[i++];for(let o of r)if(this.ln(t,s.fieldPath)&&eY(a))r=this.fn(r,s,a);else{let u=o.qe(s.kind);rT.Te.ce(a,u)}}return this.dn(r)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){let r=[...e],i=[];for(let s of n.arrayValue.values||[])for(let a of r){let o=new rN;o.seed(a.$e()),rT.Te.ce(s,o.qe(t.kind)),i.push(o)}return i}ln(e,t){return!!e.filters.find(e=>e instanceof ti&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=rq(e),r=rU(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{let t=[];return ei.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new Y(t.sequenceNumber,new J(rc(t.readTime),new $(nG(t.documentKey)),t.largestBatchId)):Y.empty(),r=e.fields.map(([e,t])=>new H(G.fromServerFormat(e),t));return new Q(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:F(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=rq(e),i=rU(e);return this._n(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>ei.forEach(t,t=>i.put(ry(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return ei.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?ei.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),ei.forEach(i,n=>this.wn(e,t,n).next(t=>{let i=this.mn(r,n);return t.isEqual(i)?ei.resolve():this.gn(e,r,n,t,i)}))))})}yn(e,t,n,r){return rP(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,r){return rP(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){let r=rP(e),i=new eT(rC);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},(e,r)=>{i=i.add(new rA(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}mn(e,t){let n=new eT(rC),r=this.an(t,e);if(null==r)return n;let i=z(t);if(null!=i){let s=e.data.field(i.fieldPath);if(eY(s))for(let a of s.arrayValue.values||[])n=n.add(new rA(t.indexId,e.key,this.on(a),r))}else n=n.add(new rA(t.indexId,e.key,rM,r));return n}gn(e,t,n,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=ex(s),u=ex(a);for(;o||u;){let l=!1,c=!1;if(o&&u){let h=n(o,u);h<0?c=!0:h>0&&(l=!0)}else null!=o?c=!0:l=!0;l?(r(u),u=ex(a)):c?(i(o),o=ex(s)):(o=ex(s),u=ex(a))}}(r,i,rC,r=>{s.push(this.yn(e,t,n,r))},r=>{s.push(this.pn(e,t,n,r))}),ei.waitFor(s)}_n(e){let t=1;return rU(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rC(e,t)).filter((e,t,n)=>!t||0!==rC(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let s=rC(i,e),a=rC(i,t);if(0===s)r[0]=e.Ke();else if(s>0&&a<0)r.push(i),r.push(i.Ke());else if(a>0)break}r.push(t);let o=[];for(let u=0;u<r.length;u+=2)o.push(IDBKeyRange.bound([r[u].indexId,this.uid,r[u].arrayValue,r[u].directionalValue,rM,[]],[r[u+1].indexId,this.uid,r[u+1].arrayValue,r[u+1].directionalValue,rM,[]]));return o}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(rB)}getMinOffset(e,t){return ei.mapArray(this.tn(t),t=>this.en(e,t).next(e=>e||b())).next(rB)}}function rO(e){return rt(e,"collectionParents")}function rP(e){return rt(e,"indexEntries")}function rq(e){return rt(e,"indexConfiguration")}function rU(e){return rt(e,"indexState")}function rB(e){0!==e.length||b();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>ee(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new J(t.readTime,t.documentKey,n)}/**
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
 */ let rK={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rG{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new rG(e,rG.DEFAULT_COLLECTION_PERCENTILE,rG.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */ function r$(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,u=r.Z({range:a},(e,t,n)=>(o++,n.delete()));s.push(u.next(()=>{1===o||b()}));let l=[];for(let c of n.mutations){var h,d;let f=(h=c.key.path,d=n.batchId,[t,nK(h),d]);s.push(i.delete(f)),l.push(c.key)}return ei.waitFor(s).next(()=>l)}function rQ(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}/**
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
 */ rG.DEFAULT_COLLECTION_PERCENTILE=10,rG.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rG.DEFAULT=new rG(41943040,rG.DEFAULT_COLLECTION_PERCENTILE,rG.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rG.DISABLED=new rG(-1,0,0);class rz{constructor(e,t,n,r){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static oe(e,t,n,r){""!==e.uid||b();let i=e.isAuthenticated()?e.uid:"";return new rz(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rW(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=rH(e),s=rW(e);return s.add({}).next(a=>{"number"==typeof a||b();let o=new rn(a,t,n,r),u=function(e,t,n){let r=n.baseMutations.map(t=>nL(e.re,t)),i=n.mutations.map(t=>nL(e.re,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.It,this.userId,o),l=[],c=new eT((e,t)=>F(e.canonicalString(),t.canonicalString()));for(let h of r){let d=[this.userId,nK(h.key.path),a];c=c.add(h.key.path.popLast()),l.push(s.put(u)),l.push(i.put(d,nQ))}return c.forEach(t=>{l.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.In[a]=o.keys()}),ei.waitFor(l).next(()=>o)})}lookupMutationBatch(e,t){return rW(e).get(t).next(e=>e?(e.userId===this.userId||b(),rh(this.It,e)):null)}Tn(e,t){return this.In[t]?ei.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.In[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return rW(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||b(),i=rh(this.It,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return rW(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return rW(e).W("userMutationsIndex",t).next(e=>e.map(e=>rh(this.It,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,nK(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return rH(e).Z({range:r},(n,r,s)=>{let[a,o,u]=n,l=nG(o);if(a===this.userId&&t.path.isEqual(l))return rW(e).get(u).next(e=>{if(!e)throw b();e.userId===this.userId||b(),i.push(rh(this.It,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eT(F),r=[];return t.forEach(t=>{let i=[this.userId,nK(t.path)],s=IDBKeyRange.lowerBound(i),a=rH(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,u=nG(a);s===this.userId&&t.path.isEqual(u)?n=n.add(o):i.done()});r.push(a)}),ei.waitFor(r).next(()=>this.En(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,nK(n)],s=IDBKeyRange.lowerBound(i),a=new eT(F);return rH(e).Z({range:s},(e,t,i)=>{let[s,o,u]=e,l=nG(o);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(a=a.add(u)):i.done()}).next(()=>this.En(e,a))}En(e,t){let n=[],r=[];return t.forEach(t=>{r.push(rW(e).get(t).next(e=>{if(null===e)throw b();e.userId===this.userId||b(),n.push(rh(this.It,e))}))}),ei.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return r$(e.ie,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),ei.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ei.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return rH(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let i=nG(e[1]);r.push(i)}else n.done()}).next(()=>{0===r.length||b()})})}containsKey(e,t){return rj(e,this.userId,t)}Rn(e){return rY(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function rj(e,t,n){let r=[t,nK(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return rH(e).Z({range:s,X:!0},(e,n,r)=>{let[s,o,u]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function rW(e){return rt(e,"mutations")}function rH(e){return rt(e,"documentMutations")}function rY(e){return rt(e,"mutationQueues")}/**
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
 */ class rX{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new rX(0)}static vn(){return new rX(-1)}}/**
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
 */ class rZ{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{let n=new rX(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(e=>q.fromTimestamp(new P(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>rJ(e).delete(t.targetId)).next(()=>this.Vn(e)).next(t=>(t.targetCount>0||b(),t.targetCount-=1,this.Sn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return rJ(e).Z((s,a)=>{let o=rd(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>ei.waitFor(i)).next(()=>r)}forEachTarget(e,t){return rJ(e).Z((e,n)=>{let r=rd(n);t(r)})}Vn(e){return r0(e).get("targetGlobalKey").next(e=>(null!==e||b(),e))}Sn(e,t){return r0(e).put("targetGlobalKey",t)}Dn(e,t){return rJ(e).put(rf(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=e6(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return rJ(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rd(n);e7(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=r1(e);return t.forEach(t=>{let s=nK(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),ei.waitFor(r)}removeMatchingKeys(e,t,n){let r=r1(e);return ei.forEach(t,t=>{let i=nK(t.path);return ei.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=r1(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=r1(e),i=no();return r.Z({range:n,X:!0},(e,t,n)=>{let r=nG(e[1]),s=new $(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=nK(t.path),r=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return r1(e).Z({index:"documentTargetsIndex",X:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}se(e,t){return rJ(e).get(t).next(e=>e?rd(e):null)}}function rJ(e){return rt(e,"targets")}function r0(e){return rt(e,"targetGlobal")}function r1(e){return rt(e,"targetDocuments")}/**
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
 */ function r2([e,t],[n,r]){let i=F(e,n);return 0===i?F(t,r):i}class r5{constructor(e){this.xn=e,this.buffer=new eT(r2),this.Nn=0}kn(){return++this.Nn}On(e){let t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{let n=this.buffer.last();0>r2(t,n)&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class r4{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){el(e)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await er(e)}await this.Fn(3e5)})}}class r3{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ei.resolve(ep.at);let n=new r5(t);return this.$n.forEachTarget(e,e=>n.On(e.sequenceNumber)).next(()=>this.$n.Ln(e,e=>n.On(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),ei.resolve(rK)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rK):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,r,i,s,a,u,l;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),g()<=o.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(u-a)+"ms\n"+`	Removed ${e} documents in `+(l-u)+"ms\n"+`Total Duration: ${l-c}ms`),ei.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */ class r8{constructor(e,t){this.db=e,this.garbageCollector=new r3(this,t)}Bn(e){let t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}qn(e){let t=0;return this.Ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(e,n)=>t(n))}addReference(e,t,n){return r9(e,n)}removeReference(e,t,n){return r9(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return r9(e,t)}Gn(e,t){let n;return n=!1,rY(e).tt(r=>rj(e,r,t).next(e=>(e&&(n=!0),ei.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Kn(e,(s,a)=>{if(a<=t){let o=this.Gn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,q.min()),r1(e).delete([0,nK(s.path)])))});r.push(o)}}).next(()=>ei.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return r9(e,t)}Kn(e,t){let n=r1(e),r,i=ep.at;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==ep.at&&t(new $(nG(r)),i),i=a,r=s):i=ep.at}).next(()=>{i!==ep.at&&t(new $(nG(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function r9(e,t){var n;return r1(e).put((n=e.currentSequenceNumber,{targetId:0,path:nK(t.path),sequenceNumber:n}))}/**
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
 */ class r6{constructor(){this.changes=new t7(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,e3.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ei.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */ class r7{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ir(e).put(n)}removeEntry(e,t,n){return ir(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],ru(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Qn(e,n)))}getEntry(e,t){let n=e3.newInvalidDocument(t);return ir(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ii(t))},(e,r)=>{n=this.jn(t,r)}).next(()=>n)}Wn(e,t){let n={size:0,document:e3.newInvalidDocument(t)};return ir(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ii(t))},(e,r)=>{n={document:this.jn(t,r),size:rQ(r)}}).next(()=>n)}getEntries(e,t){let n=ne;return this.zn(e,t,(e,t)=>{let r=this.jn(e,t);n=n.insert(e,r)}).next(()=>n)}Hn(e,t){let n=ne,r=new eI($.comparator);return this.zn(e,t,(e,t)=>{let i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,rQ(t))}).next(()=>({documents:n,Jn:r}))}zn(e,t,n){if(t.isEmpty())return ei.resolve();let r=new eT(ia);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(ii(r.first()),ii(r.last())),s=r.getIterator(),a=s.getNext();return ir(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=$.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>ia(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.j(ii(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){let r=[t.popLast().toArray(),t.lastSegment(),ru(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ir(e).W(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=ne;for(let n of e){let r=this.jn($.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(r.key,r)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=ne,s=is(t,n),a=is(t,J.max());return ir(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.jn($.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ie(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return it(e).get("remoteDocumentGlobalKey").next(e=>(e||b(),e))}Qn(e,t){return it(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){let n=function(e,t){let n;if(t.document)n=nV(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let r=$.fromSegments(t.noDocument.path),i=rc(t.noDocument.readTime);n=e3.newNoDocument(r,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{let s=$.fromSegments(t.unknownDocument.path),a=rc(t.unknownDocument.version);n=e3.newUnknownDocument(s,a)}}return t.readTime&&n.setReadTime(function(e){let t=new P(e[0],e[1]);return q.fromTimestamp(t)}(t.readTime)),n}(this.It,t);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return e3.newInvalidDocument(e)}}class ie extends r6{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new t7(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eT((e,t)=>F(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=ro(this.Yn.It,s);r=r.add(i.path.popLast());let u=rQ(o);n+=u-a.size,t.push(this.Yn.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let l=ro(this.Yn.It,s.convertToNoDocument(q.min()));t.push(this.Yn.addEntry(e,i,l))}}),r.forEach(n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Yn.updateMetadata(e,n)),ei.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:e,Jn:t})=>(t.forEach((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function it(e){return rt(e,"remoteDocumentGlobal")}function ir(e){return rt(e,"remoteDocumentsV14")}function ii(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function is(e,t){let n=t.documentKey.path.toArray();return[e,ru(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ia(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=F(n[s],r[s]))return i;return(i=F(n.length,r.length))||(i=F(n[n.length-2],r[r.length-2]))||F(n[n.length-1],r[r.length-1])}/**
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
 */ /**
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
 */ class io{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */ class iu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.getBaseDocument(e,t,n))).next(e=>(null!==n&&tX(n.mutation,e,eD.empty(),P.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,no()).next(()=>t))}getLocalViewOfDocuments(e,t,n=no()){let r=ni();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ni();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,no()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=ne,s=ni(),a=ni();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof t0)?i=i.insert(t.key,t):void 0!==a&&(s.set(t.key,a.mutation.getFieldMask()),tX(a.mutation,t,a.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new io(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ni(),r=new eI((e,t)=>e-t),i=no();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eD.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||no()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),u=o.key,l=o.value,c=ni();l.forEach(e=>{if(!i.has(e)){let r=tY(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,c))}return ei.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ei.resolve(ni()),a=-1,o=i;return s.next(t=>ei.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ei.resolve():this.getBaseDocument(e,t,n).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,no())).next(e=>({batchId:a,changes:nr(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(e=>{let t=nn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=nn();return this.indexManager.getCollectionParents(e,r).next(s=>ei.forEach(s,s=>{var a;let o=(a=s.child(r),new ty(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{let n=t.getKey();null===r.get(n)&&(r=r.insert(n,e3.newInvalidDocument(n)))});let n=nn();return r.forEach((r,i)=>{let s=e.get(r);void 0!==s&&tX(s.mutation,i,eD.empty(),P.now()),tA(t,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):ei.resolve(e3.newInvalidDocument(t))}}/**
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
 */ class il{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return ei.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:nT(t.createTime)}),ei.resolve()}getNamedQuery(e,t){return ei.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:rm(t.bundledQuery),readTime:nT(t.readTime)}),ei.resolve()}}/**
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
 */ class ic{constructor(){this.overlays=new eI($.comparator),this.es=new Map}getOverlay(e,t){return ei.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ni();return ei.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ue(e,t,r)}),ei.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),ei.resolve()}getOverlaysForCollection(e,t,n){let r=ni(),i=t.length+1,s=new $(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,u=o.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return ei.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eI((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=i.get(a.largestBatchId);null===o&&(o=ni(),i=i.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let u=ni(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((e,t)=>u.set(e,t)),!(u.size()>=r)););return ei.resolve(u)}ue(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new ri(t,n));let s=this.es.get(t);void 0===s&&(s=no(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}/**
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
 */ class ih{constructor(){this.ns=new eT(id.ss),this.rs=new eT(id.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new id(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new id(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new $(new B([])),n=new id(t,e),r=new id(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new $(new B([])),n=new id(t,e),r=new id(t,e+1),i=no();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new id(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class id{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return $.comparator(e.key,t.key)||F(e._s,t._s)}static os(e,t){return F(e._s,t._s)||$.comparator(e.key,t.key)}}/**
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
 */ class im{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new eT(id.ss)}checkEmpty(e){return ei.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new rn(i,t,n,r);for(let a of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new id(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ei.resolve(s)}lookupMutationBatch(e,t){return ei.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return ei.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ei.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ei.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new id(t,0),r=new id(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),ei.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eT(F);return t.forEach(e=>{let t=new id(e,0),r=new id(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),ei.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;$.isDocumentKey(i)||(i=i.child(""));let s=new id(new $(i),0),a=new eT(F);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)},s),ei.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||b(),this.mutationQueue.shift();let n=this.gs;return ei.forEach(t.mutations,r=>{let i=new id(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new id(t,0),r=this.gs.firstAfterOrEqual(n);return ei.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ei.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */ class ig{constructor(e){this.Es=e,this.docs=new eI($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ei.resolve(n?n.document.mutableCopy():e3.newInvalidDocument(t))}getEntries(e,t){let n=ne;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():e3.newInvalidDocument(e))}),ei.resolve(n)}getAllFromCollection(e,t,n){let r=ne,i=new $(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){let{key:a,value:{document:o}}=s.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=ee(Z(o),n)||(r=r.insert(o.key,o.mutableCopy()))}return ei.resolve(r)}getAllFromCollectionGroup(e,t,n,r){b()}As(e,t){return ei.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ip(this)}getSize(e){return ei.resolve(this.size)}}class ip extends r6{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),ei.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */ class iy{constructor(e){this.persistence=e,this.Rs=new t7(e=>e6(e),e7),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ih,this.targetCount=0,this.vs=rX.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),ei.resolve()}getLastRemoteSnapshotVersion(e){return ei.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ei.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ei.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),ei.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new rX(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,ei.resolve()}updateTargetData(e,t){return this.Dn(t),ei.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,ei.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ei.waitFor(i).next(()=>r)}getTargetCount(e){return ei.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return ei.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),ei.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ei.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),ei.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return ei.resolve(n)}containsKey(e,t){return ei.resolve(this.Ps.containsKey(t))}}/**
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
 */ class iw{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new ep(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new iy(this),this.indexManager=new rV,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new ig(n)),this.It=new ra(t),this.Ns=new il(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ic,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new im(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new iv(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return ei.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class iv extends en{constructor(e){super(),this.currentSequenceNumber=e}}class iI{constructor(e){this.persistence=e,this.Fs=new ih,this.$s=null}static Bs(e){return new iI(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),ei.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),ei.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),ei.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ei.forEach(this.Ls,n=>{let r=$.fromPath(n);return this.Us(e,r).next(e=>{e||t.removeEntry(r,q.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return ei.or([()=>ei.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */ class ib{constructor(e){this.It=e}$(e,t,n,r){let i=new es("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",n$,{unique:!0}),e.createObjectStore("documentMutations"),iE(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=ei.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iE(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").W().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",n$,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return ei.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.qs(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Ks(i)))),n<7&&r>=7&&(s=s.next(()=>this.Gs(i))),n<8&&r>=8&&(s=s.next(()=>this.Qs(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.js(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:n5});t.createIndex("collectionPathOverlayIndex",n4,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",n3,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:nz});t.createIndex("documentKeyIndex",nj),t.createIndex("collectionGroupIndex",nW)})(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.zs(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:nJ}).createIndex("sequenceNumberIndex",n0,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:n1}).createIndex("documentKeyIndex",n2,{unique:!1})})),s}Ks(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=rQ(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}qs(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>ei.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>ei.forEach(n,n=>{n.userId===t.userId||b();let r=rh(this.It,n);return r$(e,t.userId,r).next(()=>{})}))}))}Gs(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{let s=new B(n),a=[0,nK(s)];r.push(t.get(a).next(n=>n?ei.resolve():t.put({targetId:0,path:nK(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ei.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:nZ});let n=t.store("collectionParents"),r=new rL,i=e=>{if(r.add(e)){let t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:nK(i)})}};return t.store("remoteDocuments").Z({X:!0},(e,t)=>{let n=new B(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([e,t,n],r)=>{let s=nG(t);return i(s.popLast())}))}js(e){let t=e.store("targets");return t.Z((e,n)=>{let r=rd(n),i=rf(this.It,r);return t.put(i)})}Ws(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new $(B.fromString(n.document.name).popFirst(5)):n.noDocument?$.fromSegments(n.noDocument.path):n.unknownDocument?$.fromSegments(n.unknownDocument.path):b()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>ei.waitFor(r))}zs(e,t){var n;let r=t.store("mutations"),i=(n=this.It,new r7(n)),s=new iw(iI.Bs,this.It.re);return r.W().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:no();rh(this.It,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),ei.forEach(n,(e,n)=>{let r=new d(n),a=rb.oe(this.It,r),o=s.getIndexManager(r),u=rz.oe(r,this.It,o,s.referenceDelegate);return new iu(i,u,a,o).recalculateAndSaveOverlaysForDocumentKeys(new re(t,ep.at),e).next()})})}}function iE(e){e.createObjectStore("targetDocuments",{keyPath:nY}).createIndex("documentTargetsIndex",nX,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",nH,{unique:!0}),e.createObjectStore("targetGlobal")}let iT="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iS{constructor(e,t,n,r,i,s,a,o,u,l,c=15){var h;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=a,this.Js=u,this.Ys=l,this.Xs=c,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!iS.C())throw new S(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new r8(this,r),this.ii=t+"main",this.It=new ra(o),this.ri=new ea(this.ii,this.Xs,new ib(this.It)),this.Cs=new rZ(this.referenceDelegate,this.It),this.remoteDocumentCache=(h=this.It,new r7(h)),this.Ns=new rw,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===l&&w("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,iT);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new ep(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iD(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(el(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return ix(e).get("owner").next(e=>ei.resolve(this.mi(e)))}gi(e){return iD(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=rt(e,"clientMetadata");return t.W().next(e=>{let n=this.Ii(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return ei.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.oi)for(let t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?ei.resolve(!0):ix(e).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,iT);return!1}}return!(!this.networkEnabled||!this.inForeground)||iD(e).W().next(e=>void 0===this.Ii(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&y("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new re(e,ep.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>iD(e).W().next(e=>this.Ii(e,18e5).map(e=>e.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return rz.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rF(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return rb.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){var r;let i;y("IndexedDbPersistence","Starting transaction:",e);let s=15===(r=this.Xs)?n7:14===r?n6:13===r?n6:12===r?n9:11===r?n8:void b();return this.ri.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new re(r,this.Ss?this.Ss.next():ep.at),"readwrite-primary"===t?this.fi(i).next(e=>!!e||this.di(i)).next(t=>{if(!t)throw w(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new S(T.FAILED_PRECONDITION,et);return n(i)}).next(e=>this.wi(i).next(()=>e)):this.Vi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Vi(e){return ix(e).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(T.FAILED_PRECONDITION,iT)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ix(e).put("owner",t)}static C(){return ea.C()}_i(e){let t=ix(e);return t.get("owner").next(e=>this.mi(e)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):ei.resolve())}pi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(w(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,u.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{let n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return y("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(r){return w("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){w("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ix(e){return rt(e,"owner")}function iD(e){return rt(e,"clientMetadata")}function i_(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
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
 */ class iN{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=no(),r=no();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new iN(e,t.fromCache,n,r)}}/**
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
 */ class iA{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(tv(t))return ei.resolve(null);let n=tS(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tS(t=tx(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=no(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,tx(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return tv(t)||r.isEqual(q.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(g()<=o.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tN(t)),this.Bi(e,s,t,X(r,-1)))})}Fi(e,t){let n=new eT(tk(e));return t.forEach((t,r)=>{tA(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return g()<=o.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",tN(t)),this.Ni.getDocumentsMatchingQuery(e,t,J.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */ class iC{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new eI(F),this.qi=new t7(e=>e6(e),e7),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}async function ik(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=no();for(let o of r)for(let u of(i.push(o.batchId),o.mutations))a=a.add(u.key);for(let l of t)for(let c of(s.push(l.batchId),l.mutations))a=a.add(c.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function iR(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function iV(e,t,n){let r=no(),i=no();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=ne;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(q.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):y("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function iL(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,ei.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new rs(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e})}async function iM(e,t,n){let r=e,i=r.Ui.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(s){if(!el(s))throw s;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function iF(e,t,n){let r=q.min(),i=no();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.qi.get(n);return void 0!==r?ei.resolve(e.Ui.get(r)):e.Cs.getTargetData(t,n)})(e,s,tS(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(s,t,n?r:q.min(),n?i:no())).next(n=>(iq(e,tC(t),n),{documents:n,Hi:i})))}function iO(e,t){let n=e.Cs,r=e.Ui.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.se(e,t).next(e=>e?e.target:null))}function iP(e,t){let n=e.Ki.get(t)||q.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.Gi.getAllFromCollectionGroup(r,t,X(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(iq(e,t,n),n))}function iq(e,t,n){let r=e.Ki.get(t)||q.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ki.set(t,r)}async function iU(e,t,n,r){let i=no(),s=ne;for(let a of n){let o=t.Ji(a.metadata.name);a.document&&(i=i.add(o));let u=t.Yi(a);u.setReadTime(t.Xi(a.metadata.readTime)),s=s.insert(o,u)}let l=e.Gi.newChangeBuffer({trackRemovals:!0}),c=await iL(e,tS(tw(B.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>iV(t,l,s).next(e=>(l.apply(t),e)).next(n=>e.Cs.removeMatchingKeysForTargetId(t,c.targetId).next(()=>e.Cs.addMatchingKeys(t,i,c.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.Wi,n.zi)).next(()=>n.Wi)))}async function iB(e,t,n=no()){let r=await iL(e,tS(rm(t.bundledQuery))),i=e;return i.persistence.runTransaction("Save named query","readwrite",e=>{let s=nT(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);let a=r.withResumeToken(eN.EMPTY_BYTE_STRING,s);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(e,a).next(()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Cs.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(e,t))})}function iK(e,t){return`firestore_clients_${e}_${t}`}function iG(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function i$(e,t){return`firestore_targets_${e}_${t}`}class iQ{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new S(r.error.code,r.error.message)),s?new iQ(e,t,r.state,i):(w("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class iz{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new S(n.error.code,n.error.message)),i?new iz(e,n.state,r):(w("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ij{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nu;for(let s=0;r&&s<n.activeTargetIds.length;++s)r=eq(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ij(e,i):(w("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class iW{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new iW(t.clientId,t.onlineState):(w("SharedClientState",`Failed to parse online state: ${e}`),null)}}class iH{constructor(){this.activeTargetIds=nu}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iY{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new eI(F),this.started=!1,this.cr=[];let s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=iK(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new iH),this.lr=RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=`firestore_online_state_${this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.vi();for(let t of e){if(t===this.sr)continue;let n=this.getItem(iK(this.persistenceKey,t));if(n){let r=ij.Zi(t,n);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();let i=this.storage.getItem(this.wr);if(i){let s=this.yr(i);s&&this.pr(s)}for(let a of this.cr)this.rr(a);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(i$(this.persistenceKey,e));if(n){let r=iz.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(i$(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Er(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){if(e.storageArea===this.storage){if(y("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ar)return void w("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.lr.test(e.key)){if(null==e.newValue){let t=this.vr(e.key);return this.Vr(t,null)}{let n=this.Sr(e.key,e.newValue);if(n)return this.Vr(n.clientId,n)}}else if(this.dr.test(e.key)){if(null!==e.newValue){let r=this.Dr(e.key,e.newValue);if(r)return this.Cr(r)}}else if(this._r.test(e.key)){if(null!==e.newValue){let i=this.Nr(e.key,e.newValue);if(i)return this.kr(i)}}else if(e.key===this.wr){if(null!==e.newValue){let s=this.yr(e.newValue);if(s)return this.pr(s)}}else if(e.key===this.hr){let a=function(e){let t=ep.at;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||b(),t=n}catch(r){w("SharedClientState","Failed to read sequence number from WebStorage",r)}return t}(e.newValue);a!==ep.at&&this.sequenceNumberHandler(a)}else if(e.key===this.mr){let o=this.Or(e.newValue);await Promise.all(o.map(e=>this.syncEngine.Mr(e)))}}}else this.cr.push(e)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){let r=new iQ(this.currentUser,e,t,n),i=iG(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){let t=iG(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){let t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){let r=i$(this.persistenceKey,e),i=new iz(e,t,n);this.setItem(r,i.tr())}Pr(e){let t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){let t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){let n=this.vr(e);return ij.Zi(n,t)}Dr(e,t){let n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return iQ.Zi(new d(i),r,t)}Nr(e,t){let n=this._r.exec(e),r=Number(n[1]);return iz.Zi(r,t)}yr(e){return iW.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){let n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Br(s,a).then(()=>{this.ur=n})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=nu;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class iX{constructor(){this.Lr=new iH,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new iH,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */ class iZ{qr(e){}shutdown(){}}/**
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
 */ class iJ{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */ let i0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */ class i1{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */ class i2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){let s=this.ho(e,t);y("RestConnection","Sending: ",s,n);let a={};return this.lo(a,r,i),this.fo(e,s,a,n).then(e=>(y("RestConnection","Received: ",e),e),t=>{throw v("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+f,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=i0[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{let a=new l.JJ;a.setWithCredentials(!0),a.listenOnce(l.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case l.jK.NO_ERROR:let t=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(t)),i(t);break;case l.jK.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),s(new S(T.DEADLINE_EXCEEDED,"Request time out"));break;case l.jK.HTTP_ERROR:let n=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let r=a.getResponseJson().error;if(r&&r.status&&r.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(t)>=0?t:T.UNKNOWN}(r.status);s(new S(o,r.message))}else s(new S(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new S(T.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}wo(e,t,n){let i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,l.UE)(),a=(0,l.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new l.zI({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=i.join("");y("Connection","Creating WebChannel: "+u,o);let c=s.createWebChannel(u,o),h=!1,d=!1,f=new i1({Hr(e){d?y("Connection","Not sending because WebChannel is closed:",e):(h||(y("Connection","Opening WebChannel transport."),c.open(),h=!0),y("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(c,l.ii.EventType.OPEN,()=>{d||y("Connection","WebChannel transport opened.")}),m(c,l.ii.EventType.CLOSE,()=>{d||(d=!0,y("Connection","WebChannel transport closed"),f.io())}),m(c,l.ii.EventType.ERROR,e=>{d||(d=!0,v("Connection","WebChannel transport errored:",e),f.io(new S(T.UNAVAILABLE,"The operation could not be completed")))}),m(c,l.ii.EventType.MESSAGE,e=>{var t;if(!d){let n=e.data[0];n||b();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){y("Connection","WebChannel received error:",i);let s=i.status,a=function(e){let t=r[e];if(void 0!==t)return t6(t)}(s),o=i.message;void 0===a&&(a=T.INTERNAL,o="Unknown error status: "+s+" with message "+i.message),d=!0,f.io(new S(a,o)),c.close()}else y("Connection","WebChannel received:",n),f.ro(n)}}),m(a,l.ju.STAT_EVENT,e=>{e.stat===l.kN.PROXY?y("Connection","Detected buffering proxy"):e.stat===l.kN.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}/**
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
 */ /**
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
 */ function i5(){return"undefined"!=typeof window?window:null}function i4(){return"undefined"!=typeof document?document:null}/**
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
 */ function i3(e){return new nI(e,!0)}class i8{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */ class i9{constructor(e,t,n,r,i,s,a,o){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new i8(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new S(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i6 extends i9{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:b(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.gt?(void 0===i||"string"==typeof i||b(),eN.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||b(),eN.fromUint8Array(i||new Uint8Array))),u=t.targetChange.cause,l=u&&function(e){let t=void 0===e.code?T.UNKNOWN:t6(e.code);return new S(t,e.message||"")}(u);n=new nf(s,a,o,l||null)}else if("documentChange"in t){t.documentChange;let c=t.documentChange;c.document,c.document.name,c.document.updateTime;let h=n_(e,c.document.name),d=nT(c.document.updateTime),f=new e4({mapValue:{fields:c.document.fields}}),m=e3.newFoundDocument(h,d,f),g=c.targetIds||[],p=c.removedTargetIds||[];n=new nh(g,p,m.key,m)}else if("documentDelete"in t){t.documentDelete;let y=t.documentDelete;y.document;let w=n_(e,y.document),v=y.readTime?nT(y.readTime):q.min(),I=e3.newNoDocument(w,v),E=y.removedTargetIds||[];n=new nh([],E,I.key,I)}else if("documentRemove"in t){t.documentRemove;let x=t.documentRemove;x.document;let D=n_(e,x.document),_=x.removedTargetIds||[];n=new nh([],_,D,null)}else{if(!("filter"in t))return b();{t.filter;let N=t.filter;N.targetId;let A=N.count||0,C=new t8(A),k=N.targetId;n=new nd(k,C)}}return n}(this.It,e),n=function(e){if(!("targetChange"in e))return q.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?q.min():t.readTime?nT(t.readTime):q.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=nC(this.It),t.addTarget=function(e,t){let n;let r=t.target;return(n=te(r)?{documents:nF(e,r)}:{query:nO(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=nE(e,t.resumeToken):t.snapshotVersion.compareTo(q.min())>0&&(n.readTime=nb(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=nC(this.It),t.removeTarget=e,this.Bo(t)}}class i7 extends i9{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||b(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||b(),t.map(e=>{let t;return(t=e.updateTime?nT(e.updateTime):nT(n)).isEqual(q.min())&&(t=nT(n)),new tz(t,e.transformResults||[])})):[]),i=nT(e.commitTime);return this.listener.Zo(i,r)}return e.writeResults&&0!==e.writeResults.length&&b(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=nC(this.It),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>nL(this.It,e))};this.Bo(t)}}/**
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
 */ class se extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}async function st(e,t){let n=function(e,t){let n=nO(e,t);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:n.structuredQuery},parent:n.parent}}(e.It,tS(t)),r=n.parent;return e.connection.co||delete n.parent,(await e._o("RunAggregationQuery",r,n,1)).filter(e=>!!e.result).map(e=>e.result.aggregateFields)}class sn{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(w(t),this.ou=!1):y("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
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
 */ class sr{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(e=>{n.enqueueAndForget(async()=>{sd(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await ss(e),e.gu.set("Unknown"),e._u.delete(4),await si(e)}(this))})}),this.gu=new sn(n,r)}}async function si(e){if(sd(e))for(let t of e.wu)await t(!0)}async function ss(e){for(let t of e.wu)await t(!1)}function sa(e,t){e.du.has(t.targetId)||(e.du.set(t.targetId,t),sh(e)?sc(e):s_(e).ko()&&su(e,t))}function so(e,t){let n=s_(e);e.du.delete(t),n.ko()&&sl(e,t),0===e.du.size&&(n.ko()?n.Fo():sd(e)&&e.gu.set("Unknown"))}function su(e,t){e.yu.Mt(t.targetId),s_(e).zo(t)}function sl(e,t){e.yu.Mt(t),s_(e).Ho(t)}function sc(e){e.yu=new ng({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),s_(e).start(),e.gu.uu()}function sh(e){return sd(e)&&!s_(e).No()&&e.du.size>0}function sd(e){return 0===e._u.size}async function sf(e){e.du.forEach((t,n)=>{su(e,t)})}async function sm(e,t){e.yu=void 0,sh(e)?(e.gu.hu(t),sc(e)):e.gu.set("Unknown")}async function sg(e,t,n){if(e.gu.set("Online"),t instanceof nf&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await sp(e,r)}else if(t instanceof nh?e.yu.Gt(t):t instanceof nd?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(q.min()))try{let i=await iR(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.yu.te(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(eN.EMPTY_BYTE_STRING,n.snapshotVersion)),sl(e,t);let r=new rs(n.target,t,1,n.sequenceNumber);su(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await sp(e,s)}}async function sp(e,t,n){if(!el(t))throw t;e._u.add(1),await ss(e),e.gu.set("Offline"),n||(n=()=>iR(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await si(e)})}function sy(e,t){return t().catch(n=>sp(e,n,t))}async function sw(e){let t=sN(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;sd(e)&&e.fu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.fu.length&&t.Fo();break}n=r.batchId,function(e,t){e.fu.push(t);let n=sN(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,r)}catch(i){await sp(e,i)}sv(e)&&sI(e)}function sv(e){return sd(e)&&!sN(e).No()&&e.fu.length>0}function sI(e){sN(e).start()}async function sb(e){sN(e).eu()}async function sE(e){let t=sN(e);for(let n of e.fu)t.Xo(n.mutations)}async function sT(e,t,n){let r=e.fu.shift(),i=rr.from(r,t,n);await sy(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sw(e)}async function sS(e,t){t&&sN(e).Yo&&await async function(e,t){var n;if(t9(n=t.code)&&n!==T.ABORTED){let r=e.fu.shift();sN(e).Mo(),await sy(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await sw(e)}}(e,t),sv(e)&&sI(e)}async function sx(e,t){e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let n=sd(e);e._u.add(3),await ss(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await si(e)}async function sD(e,t){t?(e._u.delete(2),await si(e)):t||(e._u.add(2),await ss(e),e.gu.set("Unknown"))}function s_(e){var t,n,r;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,r={Yr:sf.bind(null,e),Zr:sm.bind(null,e),Wo:sg.bind(null,e)},t.su(),new i6(n,t.connection,t.authCredentials,t.appCheckCredentials,t.It,r)),e.wu.push(async t=>{t?(e.pu.Mo(),sh(e)?sc(e):e.gu.set("Unknown")):(await e.pu.stop(),e.yu=void 0)})),e.pu}function sN(e){var t,n,r;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,r={Yr:sb.bind(null,e),Zr:sS.bind(null,e),tu:sE.bind(null,e),Zo:sT.bind(null,e)},t.su(),new i7(n,t.connection,t.authCredentials,t.appCheckCredentials,t.It,r)),e.wu.push(async t=>{t?(e.Iu.Mo(),await sw(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */ class sA{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new sA(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sC(e,t){if(w("AsyncQueue",`${t}: ${e}`),el(e))return new S(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */ class sk{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(e,t)=>$.comparator(e.key,t.key),this.keyedMap=nn(),this.sortedSet=new eI(this.comparator)}static emptySet(e){return new sk(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sk)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new sk;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */ class sR{constructor(){this.Tu=new eI($.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):b():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class sV{constructor(e,t,n,r,i,s,a,o,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new sV(e,t,sk.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tD(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */ class sL{constructor(){this.Au=void 0,this.listeners=[]}}class sM{constructor(){this.queries=new t7(e=>t_(e),tD),this.onlineState="Unknown",this.Ru=new Set}}async function sF(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new sL),r)try{i.Au=await e.onListen(n)}catch(a){let s=sC(a,`Initialization of query '${tN(t.query)}' failed`);return void t.onError(s)}e.queries.set(n,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&sU(e)}async function sO(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let s=i.listeners.indexOf(t);s>=0&&(i.listeners.splice(s,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function sP(e,t){let n=!1;for(let r of t){let i=r.query,s=e.queries.get(i);if(s){for(let a of s.listeners)a.Pu(r)&&(n=!0);s.Au=r}}n&&sU(e)}function sq(e,t,n){let r=e.queries.get(t);if(r)for(let i of r.listeners)i.onError(n);e.queries.delete(t)}function sU(e){e.Ru.forEach(e=>{e.next()})}class sB{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new sV(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),r=!0):this.Cu(e,this.onlineState)&&(this.xu(e),r=!0),this.Su=e,r}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=sV.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */ class sK{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */ class sG{constructor(e){this.It=e}Ji(e){return n_(this.It,e)}Yi(e){return e.metadata.exists?nV(this.It,e.document,!1):e3.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return nT(e)}}class s${constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=sQ(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;let n=B.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){let t=new Map,n=new sG(this.It);for(let r of e)if(r.metadata.queries){let i=n.Ji(r.metadata.name);for(let s of r.metadata.queries){let a=(t.get(s)||no()).add(i);t.set(s,a)}}return t}async complete(){let e=await iU(this.localStore,new sG(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(let n of this.queries)await iB(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function sQ(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
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
 */ class sz{constructor(e){this.key=e}}class sj{constructor(e){this.key=e}}class sW{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=no(),this.mutatedKeys=no(),this.Gu=tk(e),this.Qu=new sk(this.Gu)}get ju(){return this.Uu}Wu(e,t){let n=t?t.zu:new sR,r=t?t.Qu:this.Qu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let l=r.get(e),c=tA(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;l&&c?l.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(l,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Gu(c,o)>0||u&&0>this.Gu(c,u))&&(a=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(o||u)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let l="F"===this.query.limitType?s.last():s.first();s=s.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{Qu:s,zu:n,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let i=e.zu.Eu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let s=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==i.length||o)?{snapshot:new sV(this.query,e.Qu,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new sR,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=no(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new sj(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new sz(n))}),t}tc(e){this.Uu=e.Hi,this.Ku=no();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return sV.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class sH{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sY{constructor(e){this.key=e,this.nc=!1}}class sX{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new t7(e=>t_(e),tD),this.rc=new Map,this.oc=new Set,this.uc=new eI($.comparator),this.cc=new Map,this.ac=new ih,this.hc={},this.lc=new Map,this.fc=rX.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function sZ(e,t){let n,r;let i=ap(e),s=i.ic.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.ec();else{let a=await iL(i.localStore,tS(t));i.isPrimaryClient&&sa(i.remoteStore,a);let o=i.sharedClientState.addLocalQueryTarget(a.targetId);r=await sJ(i,t,n=a.targetId,"current"===o,a.resumeToken)}return r}async function sJ(e,t,n,r,i){e._c=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await iF(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return an(e,t.targetId,a.Xu),a.snapshot})(e,t,n,r);let s=await iF(e.localStore,t,!0),a=new sW(t,s.Hi),o=a.Wu(s.documents),u=nc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=a.applyChanges(o,e.isPrimaryClient,u);an(e,n,l.Xu);let c=new sH(t,n,a);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function s0(e,t){let n=e.ic.get(t),r=e.rc.get(n.targetId);if(r.length>1)return e.rc.set(n.targetId,r.filter(e=>!tD(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await iM(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),so(e.remoteStore,n.targetId),ae(e,n.targetId)}).catch(er)):(ae(e,n.targetId),await iM(e.localStore,n.targetId,!0))}async function s1(e,t,n){let r=ay(e);try{var i,s;let a;let o=await function(e,t){let n,r;let i=P.now(),s=t.reduce((e,t)=>e.add(t.key),no());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ne,u=no();return e.Gi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let o of t){let u=function(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=tF(r.transform,i||null);null!=s&&(null===n&&(n=e4.empty()),n.set(r.field,s))}return n||null}(o,n.get(o.key).overlayedDocument);null!=u&&s.push(new t0(o.key,u,function e(t){let n=[];return ew(t.fields,(t,r)=>{let i=new G([t]);if(eJ(r)){let s=e(r.mapValue).fields;if(0===s.length)n.push(i);else for(let a of s)n.push(i.child(a))}else n.push(i)}),new eD(n)}(u.value.mapValue),tj.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,u);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:nr(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(a=i.hc[i.currentUser.toKey()])||(a=new eI(F)),a=a.insert(s,n),i.hc[i.currentUser.toKey()]=a,await ai(r,o.changes),await sw(r.remoteStore)}catch(l){let u=sC(l,"Failed to persist write");n.reject(u)}}async function s2(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{let s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;let a=[];t.targetChanges.forEach((s,o)=>{var u;let l=i.get(o);if(!l)return;a.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?c=c.withResumeToken(eN.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(o,c),u=c,(0===l.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(n.Cs.updateTargetData(e,c))});let o=ne,u=no();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(iV(e,s,t.documentUpdates).next(e=>{o=e.Wi,u=e.zi})),!r.isEqual(q.min())){let l=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(l)}return ei.waitFor(a).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,u)).next(()=>o)}).then(e=>(n.Ui=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.cc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||b(),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?r.nc||b():t.removedDocuments.size>0&&(r.nc||b(),r.nc=!1))}),await ai(e,n,t)}catch(r){await er(r)}}function s5(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let i=[];r.ic.forEach((e,n)=>{let r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let i of n.listeners)i.bu(t)&&(r=!0)}),r&&sU(n)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function s4(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.cc.get(t),s=i&&i.key;if(s){let a=new eI($.comparator);a=a.insert(s,e3.newNoDocument(s,q.min()));let o=no().add(s),u=new nl(q.min(),new Map,new eT(F),a,o);await s2(r,u),r.uc=r.uc.remove(s),r.cc.delete(t),ar(r)}else await iM(r.localStore,t,!1).then(()=>ae(r,t,n)).catch(er)}async function s3(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ei.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||b(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=no();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});s7(e,r,null),s6(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ai(e,i)}catch(s){await er(s)}}async function s8(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||b(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});s7(e,t,n),s6(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await ai(e,i)}catch(s){await er(s)}}async function s9(e,t){var n;sd(e.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.lc.get(r)||[];i.push(t),e.lc.set(r,i)}catch(a){let s=sC(a,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function s6(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function s7(e,t,n){let r=e,i=r.hc[r.currentUser.toKey()];if(i){let s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function ae(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||at(e,t)})}function at(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(so(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ar(e))}function an(e,t,n){for(let r of n)r instanceof sz?(e.ac.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(y("SyncEngine","New document in limbo: "+n),e.oc.add(r),ar(e))}(e,r)):r instanceof sj?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||at(e,r.key)):b()}function ar(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let n=new $(B.fromString(t)),r=e.fc.next();e.cc.set(r,new sY(n)),e.uc=e.uc.insert(n,r),sa(e.remoteStore,new rs(tS(tw(n.path)),r,2,ep.at))}}async function ai(e,t,n){let r=[],i=[],s=[];e.ic.isEmpty()||(e.ic.forEach((a,o)=>{s.push(e._c(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let s=iN.Ci(o.targetId,t);i.push(s)}}))}),await Promise.all(s),e.sc.Wo(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ei.forEach(t,t=>ei.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>ei.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!el(r))throw r;y("LocalStore","Failed to update sequence numbers: "+r)}for(let i of t){let s=i.targetId;if(!i.fromCache){let a=n.Ui.get(s),o=a.snapshotVersion,u=a.withLastLimboFreeSnapshotVersion(o);n.Ui=n.Ui.insert(s,u)}}}(e.localStore,i))}async function as(e,t){let n=e;if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let r=await ik(n.localStore,t);n.currentUser=t,n.lc.forEach(e=>{e.forEach(e=>{e.reject(new S(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ai(n,r.ji)}}function aa(e,t){let n=e.cc.get(t);if(n&&n.nc)return no().add(n.key);{let r=no(),i=e.rc.get(t);if(!i)return r;for(let s of i){let a=e.ic.get(s);r=r.unionWith(a.view.ju)}return r}}async function ao(e,t){let n=await iF(e.localStore,t.query,!0),r=t.view.tc(n);return e.isPrimaryClient&&an(e,t.targetId,r.Xu),r}async function au(e,t){return iP(e.localStore,t).then(t=>ai(e,t))}async function al(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Tn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):ei.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sw(e.remoteStore):"acknowledged"===n||"rejected"===n?(s7(e,t,r||null),s6(e,t),function(e,t){e.mutationQueue.An(t)}(e.localStore,t)):b(),await ai(e,i)):y("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ac(e,t){let n=e;if(ap(n),ay(n),!0===t&&!0!==n.dc){let r=n.sharedClientState.getAllActiveQueryTargets(),i=await ah(n,r.toArray());for(let s of(n.dc=!0,await sD(n.remoteStore,!0),i))sa(n.remoteStore,s)}else if(!1===t&&!1!==n.dc){let a=[],o=Promise.resolve();n.rc.forEach((e,t)=>{n.sharedClientState.isLocalQueryTarget(t)?a.push(t):o=o.then(()=>(ae(n,t),iM(n.localStore,t,!0))),so(n.remoteStore,t)}),await o,await ah(n,a),function(e){let t=e;t.cc.forEach((e,n)=>{so(t.remoteStore,n)}),t.ac.fs(),t.cc=new Map,t.uc=new eI($.comparator)}(n),n.dc=!1,await sD(n.remoteStore,!1)}}async function ah(e,t,n){let r=[],i=[];for(let s of t){let a;let o=e.rc.get(s);if(o&&0!==o.length)for(let u of(a=await iL(e.localStore,tS(o[0])),o)){let l=e.ic.get(u),c=await ao(e,l);c.snapshot&&i.push(c.snapshot)}else{let h=await iO(e.localStore,s);await sJ(e,ad(h),s,!1,(a=await iL(e.localStore,h)).resumeToken)}r.push(a)}return e.sc.Wo(i),r}function ad(e){var t,n,r,i,s,a,o;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,s=e.limit,a=e.startAt,o=e.endAt,new ty(t,n,r,i,s,"F",a,o)}function af(e){return e.localStore.persistence.vi()}async function am(e,t,n,r){if(e.dc)return void y("SyncEngine","Ignoring unexpected query state notification.");let i=e.rc.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let s=await iP(e.localStore,tC(i[0])),a=nl.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,eN.EMPTY_BYTE_STRING);await ai(e,s,a);break}case"rejected":await iM(e.localStore,t,!0),ae(e,t,r);break;default:b()}}async function ag(e,t,n){let r=ap(e);if(r.dc){for(let i of t){if(r.rc.has(i)){y("SyncEngine","Adding an already active target "+i);continue}let s=await iO(r.localStore,i),a=await iL(r.localStore,s);await sJ(r,ad(s),a.targetId,!1,a.resumeToken),sa(r.remoteStore,a)}for(let o of n)r.rc.has(o)&&await iM(r.localStore,o,!1).then(()=>{so(r.remoteStore,o),ae(r,o)}).catch(er)}}function ap(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=s2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aa.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=s4.bind(null,t),t.sc.Wo=sP.bind(null,t.eventManager),t.sc.wc=sq.bind(null,t.eventManager),t}function ay(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=s3.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=s8.bind(null,t),t}class aw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=i3(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,r,i;return t=this.persistence,n=new iA,r=e.initialUser,i=this.It,new iC(t,n,r,i)}yc(e){return new iw(iI.Bs,this.It)}gc(e){return new iX}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class av extends aw{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await ay(this.Ac.syncEngine),await sw(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){var t,n,r,i;return t=this.persistence,n=new iA,r=e.initialUser,i=this.It,new iC(t,n,r,i)}Tc(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new r4(n,e.asyncQueue,t)}Ec(e,t){let n=new eg(t,this.persistence);return new em(e.asyncQueue,n)}yc(e){let t=i_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?rG.withCacheSize(this.cacheSizeBytes):rG.DEFAULT;return new iS(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,i5(),i4(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new iX}}class aI extends av{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Ac.syncEngine;this.sharedClientState instanceof iY&&(this.sharedClientState.syncEngine={Fr:al.bind(null,t),$r:am.bind(null,t),Br:ag.bind(null,t),vi:af.bind(null,t),Mr:au.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async e=>{await ac(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}gc(e){let t=i5();if(!iY.C(t))throw new S(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=i_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new iY(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ab{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>s5(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=as.bind(null,this.syncEngine),await sD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sM}createDatastore(e){var t,n,r;let i=i3(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new i2(t));return n=e.authCredentials,r=e.appCheckCredentials,new se(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>s5(this.syncEngine,e,0),s=iJ.C()?new iJ:new iZ,new sr(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new sX(e,t,n,r,i,s);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){y("RemoteStore","RemoteStore shutting down."),e._u.add(5),await ss(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */ function aE(e,t,n){if(!n)throw new S(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aT(e,t,n,r){if(!0===t&&!0===r)throw new S(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function aS(e){if(!$.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ax(e){if($.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aD(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":b()}function a_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=aD(e);throw new S(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function aN(e,t){if(t<=0)throw new S(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */ let aA=new Map;class aC{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,aT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */ class ak{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aC({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aC(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new _;switch(e.type){case"gapi":let t=e.client;return new k(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aA.get(e);t&&(y("ComponentProvider","Removing Datastore"),aA.delete(e),t.terminate())}(this),Promise.resolve()}}function aR(e,t,n,r={}){var i;let s=(e=a_(e,ak))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&v("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let a,o;if("string"==typeof r.mockUserToken)a=r.mockUserToken,o=d.MOCK_USER;else{a=(0,u.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new d(l)}e._authCredentials=new N(new D(a,o))}}/**
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
 */ class aV{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aM(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aV(this.firestore,e,this._key)}}class aL{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new aL(this.firestore,e,this._query)}}class aM extends aL{constructor(e,t,n){super(e,t,tw(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new aV(this.firestore,null,new $(e))}withConverter(e){return new aM(this.firestore,e,this._path)}}function aF(e,t,...n){if(e=(0,u.m9)(e),aE("collection","path",t),e instanceof ak){let r=B.fromString(t,...n);return ax(r),new aM(e,null,r)}{if(!(e instanceof aV||e instanceof aM))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(B.fromString(t,...n));return ax(i),new aM(e.firestore,null,i)}}function aO(e,t){if(e=a_(e,ak),aE("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new aL(e,null,new ty(B.emptyPath(),t))}function aP(e,t,...n){if(e=(0,u.m9)(e),1==arguments.length&&(t=M.R()),aE("doc","path",t),e instanceof ak){let r=B.fromString(t,...n);return aS(r),new aV(e,null,new $(r))}{if(!(e instanceof aV||e instanceof aM))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(B.fromString(t,...n));return aS(i),new aV(e.firestore,e instanceof aM?e.converter:null,new $(i))}}function aq(e,t){return e=(0,u.m9)(e),t=(0,u.m9)(t),(e instanceof aV||e instanceof aM)&&(t instanceof aV||t instanceof aM)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function aU(e,t){return e=(0,u.m9)(e),t=(0,u.m9)(t),e instanceof aL&&t instanceof aL&&e.firestore===t.firestore&&tD(e._query,t._query)&&e.converter===t.converter}/**
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
 */ function aB(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */ /**
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
 */ class aK{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):w("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */ class aG{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new x,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.ku)}`))},e=>this.metadata.reject(e))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){let e=await this.Sc();if(null===e)return null;let t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);let r=await this.Cc(n);return new sK(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex(e=>123===e)}async Sc(){for(;0>this.xc()&&!await this.Nc(););if(0===this.buffer.length)return null;let e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");let t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),Error(`Invalid bundle format: ${e}`)}async Nc(){let e=await this.Pc.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */ class a${constructor(){this.type="AggregateField"}}class aQ{constructor(e,t){this._data=t,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._data}}/**
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
 */ class az{constructor(e,t,n){this.query=e,this.datastore=t,this.userDataWriter=n}run(){return st(this.datastore,this.query._query).then(e=>{void 0!==e[0]||b();let t=Object.entries(e[0]).filter(([e,t])=>"count_alias"===e).map(([e,t])=>this.userDataWriter.convertValue(t))[0];return"number"==typeof t||b(),Promise.resolve(new aQ(this.query,{count:t}))})}}/**
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
 */ class aj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=nC(e.It)+"/documents",r={documents:t.map(t=>nD(e.It,t))},i=await e._o("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.It,"found"in t?function(e,t){t.found||b(),t.found.name,t.found.updateTime;let n=n_(e,t.found.name),r=nT(t.found.updateTime),i=new e4({mapValue:{fields:t.found.fields}});return e3.newFoundDocument(n,r,i)}(n,t):"missing"in t?function(e,t){t.missing||b(),t.readTime||b();let n=n_(e,t.missing),r=nT(t.readTime);return e3.newNoDocument(n,r)}(n,t):b());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||b(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new t4(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=$.fromPath(t);this.mutations.push(new t3(n,this.precondition(n)))}),await async function(e,t){let n=nC(e.It)+"/documents",r={writes:t.map(t=>nL(e.It,t))};await e.ao("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=q.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?tj.exists(!1):tj.updateTime(t):tj.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new S(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tj.updateTime(t)}return tj.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */ class aW{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new i8(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{let e=new aj(this.datastore),t=this.Mc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Fc(e)}))}).catch(e=>{this.Fc(e)})})}Mc(e){try{let t=this.updateFunction(e);return!eO(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||!t9(t)}return!1}}/**
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
 */ class aH{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=M.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{y("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=sC(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aY(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await ik(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function aX(e,t){e.asyncQueue.verifyOperationInProgress();let n=await aZ(e);y("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sx(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sx(t.remoteStore,n)),e.onlineComponents=t}async function aZ(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await aY(e,new aw)),e.offlineComponents}async function aJ(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await aX(e,new ab)),e.onlineComponents}function a0(e){return aZ(e).then(e=>e.persistence)}function a1(e){return aZ(e).then(e=>e.localStore)}function a2(e){return aJ(e).then(e=>e.remoteStore)}function a5(e){return aJ(e).then(e=>e.syncEngine)}function a4(e){return aJ(e).then(e=>e.datastore)}async function a3(e){let t=await aJ(e),n=t.eventManager;return n.onListen=sZ.bind(null,t.syncEngine),n.onUnlisten=s0.bind(null,t.syncEngine),n}function a8(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aK({next(s){t.enqueueAndForget(()=>sO(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new S(T.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new sB(tw(n.path),s,{includeMetadataChanges:!0,Nu:!0});return sF(e,a)})(await a3(e),e.asyncQueue,t,n,r)),r.promise}function a9(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aK({next(n){t.enqueueAndForget(()=>sO(e,a)),n.fromCache&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new sB(n,s,{includeMetadataChanges:!0,Nu:!0});return sF(e,a)})(await a3(e),e.asyncQueue,t,n,r)),r.promise}class a6{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new i8(this,"async_queue_retry"),this.Wc=()=>{let e=i4();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=i4();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;let t=i4();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});let t=new x;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!el(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw w("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let r=sA.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.qc.push(r),r}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.qc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.qc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.qc.indexOf(e);this.qc.splice(t,1)}}function a7(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oe{constructor(){this._progressObserver={},this._taskCompletionResolver=new x,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */ let ot=-1;class on extends ak{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new a6,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oa(this),this._firestoreClient.terminate()}}function or(e,t,n){n||(n="(default)");let r=(0,s.qX)(e,"firestore");if(r.isInitialized(n)){let i=r.getImmediate({identifier:n}),a=r.getOptions(n);if((0,u.vZ)(a,t))return i;throw new S(T.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new S(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function oi(e,t){let n="object"==typeof e?e:(0,s.Mq)(),r=(0,s.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let i=(0,u.P0)("firestore");i&&aR(r,...i)}return r}function os(e){return e._firestoreClient||oa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oa(e){var t,n,r,i;let s=e._freezeSettings(),a=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new eM(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new aH(e._authCredentials,e._appCheckCredentials,e._queue,a)}function oo(e,t){oy(e=a_(e,on));let n=os(e),r=e._freezeSettings(),i=new ab;return ol(n,i,new av(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function ou(e){oy(e=a_(e,on));let t=os(e),n=e._freezeSettings(),r=new ab;return ol(t,r,new aI(r,n.cacheSizeBytes))}function ol(e,t,n){let r=new x;return e.asyncQueue.enqueue(async()=>{try{await aY(e,n),await aX(e,t),r.resolve()}catch(i){if(!("FirebaseError"===i.name?i.code===T.FAILED_PRECONDITION||i.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&i instanceof DOMException)||22===i.code||20===i.code||11===i.code))throw i;v("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function oc(e){if(e._initialized&&!e._terminated)throw new S(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new x;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ea.C())return Promise.resolve();await ea.delete(e+"main")}(i_(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}}),t.promise}function oh(e){return function(e){let t=new x;return e.asyncQueue.enqueueAndForget(async()=>s9(await a5(e),t)),t.promise}(os(e=a_(e,on)))}function od(e){var t;return(t=os(e=a_(e,on))).asyncQueue.enqueue(async()=>{let e=await a0(t),n=await a2(t);return e.setNetworkEnabled(!0),n._u.delete(0),si(n)})}function of(e){var t;return(t=os(e=a_(e,on))).asyncQueue.enqueue(async()=>{let e=await a0(t),n=await a2(t);return e.setNetworkEnabled(!1),async function(e){e._u.add(0),await ss(e),e.gu.set("Offline")}(n)})}function om(e){return(0,s.wN)(e.app,"firestore",e._databaseId.database),e._delete()}function og(e,t){let n=os(e=a_(e,on)),r=new oe;return function(e,t,n,r){var i,s;let a=(i=i3(t),s=function(e,t){if(e instanceof Uint8Array)return aB(e,t);if(e instanceof ArrayBuffer)return aB(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?(new TextEncoder).encode(n):n),new aG(s,i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=nT(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Ns.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(sQ(i));let s=new s$(i,e.localStore,t.It),a=await t.mc();for(;a;){let o=await s.Fu(a);o&&n._updateProgress(o),a=await t.mc()}let u=await s.complete();return await ai(e,u.Lu,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.Ns.saveBundleMetadata(e,i)),n._completeWith(u.progress),Promise.resolve(u.Bu)}catch(l){return v("SyncEngine",`Loading bundle failed with ${l}`),n._failWith(l),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await a5(e),a,r)})}(n,e._databaseId,t,r),r}function op(e,t){var n;return(n=os(e=a_(e,on))).asyncQueue.enqueue(async()=>{var e;return(e=await a1(n)).persistence.runTransaction("Get named query","readonly",n=>e.Ns.getNamedQuery(n,t))}).then(t=>t?new aL(e,null,t.query):null)}function oy(e){if(e._initialized||e._terminated)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */ /**
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
 */ class ow{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ow(eN.fromBase64String(e))}catch(t){throw new S(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ow(eN.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */ class ov{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function oI(){return new ov("__name__")}/**
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
 */ class ob{constructor(e){this._methodName=e}}/**
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
 */ class oE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
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
 */ let oT=/^__.*__$/;class oS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new t0(e,this.data,this.fieldMask,t,this.fieldTransforms):new tJ(e,this.data,t,this.fieldTransforms)}}class ox{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new t0(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oD(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class o_{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new o_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return oj(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(oD(this.sa)&&oT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class oN{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||i3(e)}da(e,t,n,r=!1){return new o_({sa:e,methodName:t,fa:n,path:G.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function oA(e){let t=e._freezeSettings(),n=i3(e._databaseId);return new oN(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oC(e,t,n,r,i,s={}){let a,o;let u=e.da(s.merge||s.mergeFields?2:0,t,n,i);oG("Data must be an object, but it was:",u,r);let l=oB(r,u);if(s.merge)a=new eD(u.fieldMask),o=u.fieldTransforms;else if(s.mergeFields){let c=[];for(let h of s.mergeFields){let d=o$(t,h,n);if(!u.contains(d))throw new S(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);oW(c,d)||c.push(d)}a=new eD(c),o=u.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=u.fieldTransforms;return new oS(new e4(l),a,o)}class ok extends ob{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ok}}function oR(e,t,n){return new o_({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class oV extends ob{_toFieldTransform(e){return new tQ(e.path,new tO)}isEqual(e){return e instanceof oV}}class oL extends ob{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){let t=oR(this,e,!0),n=this._a.map(e=>oU(e,t)),r=new tP(n);return new tQ(e.path,r)}isEqual(e){return this===e}}class oM extends ob{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){let t=oR(this,e,!0),n=this._a.map(e=>oU(e,t)),r=new tU(n);return new tQ(e.path,r)}isEqual(e){return this===e}}class oF extends ob{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){let t=new tK(e.It,tL(e.It,this.wa));return new tQ(e.path,t)}isEqual(e){return this===e}}function oO(e,t,n,r){let i=e.da(1,t,n);oG("Data must be an object, but it was:",i,r);let s=[],a=e4.empty();ew(r,(e,r)=>{let o=oz(t,e,n);r=(0,u.m9)(r);let l=i.ca(o);if(r instanceof ok)s.push(o);else{let c=oU(r,l);null!=c&&(s.push(o),a.set(o,c))}});let o=new eD(s);return new ox(a,o,i.fieldTransforms)}function oP(e,t,n,r,i,s){let a=e.da(1,t,n),o=[o$(t,r,n)],l=[i];if(s.length%2!=0)throw new S(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)o.push(o$(t,s[c])),l.push(s[c+1]);let h=[],d=e4.empty();for(let f=o.length-1;f>=0;--f)if(!oW(h,o[f])){let m=o[f],g=l[f];g=(0,u.m9)(g);let p=a.ca(m);if(g instanceof ok)h.push(m);else{let y=oU(g,p);null!=y&&(h.push(m),d.set(m,y))}}let w=new eD(h);return new ox(d,w,a.fieldTransforms)}function oq(e,t,n,r=!1){return oU(n,e.da(r?4:3,t))}function oU(e,t){if(oK(e=(0,u.m9)(e)))return oG("Unsupported field value:",t,e),oB(e,t);if(e instanceof ob)return function(e,t){if(!oD(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=oU(i,t.aa(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,u.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tL(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=P.fromDate(e);return{timestampValue:nb(t.It,n)}}if(e instanceof P){let r=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nb(t.It,r)}}if(e instanceof oE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ow)return{bytesValue:nE(t.It,e._byteString)};if(e instanceof aV){let i=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(i))throw t.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nS(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${aD(e)}`)}(e,t)}function oB(e,t){let n={};return ev(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ew(e,(e,r)=>{let i=oU(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function oK(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof oE||e instanceof ow||e instanceof aV||e instanceof ob)}function oG(e,t,n){if(!oK(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=aD(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function o$(e,t,n){if((t=(0,u.m9)(t))instanceof ov)return t._internalPath;if("string"==typeof t)return oz(e,t);throw oj("Field path arguments must be of type string or ",e,!1,void 0,n)}let oQ=RegExp("[~\\*/\\[\\]]");function oz(e,t,n){if(t.search(oQ)>=0)throw oj(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ov(...t.split("."))._internalPath}catch(r){throw oj(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function oj(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new S(T.INVALID_ARGUMENT,o+e+u)}function oW(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */ class oH{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new aV(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new oY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(oX("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class oY extends oH{data(){return super.data()}}function oX(e,t){return"string"==typeof t?oz(e,t):t instanceof ov?t._internalPath:t._delegate._internalPath}/**
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
 */ function oZ(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oJ{}function o0(e,...t){for(let n of t)e=n._apply(e);return e}class o1 extends oJ{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){let t=oA(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ua(a,s);let u=[];for(let l of a)u.push(us(r,e,l));o={arrayValue:{values:u}}}else o=us(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ua(a,s),o=oq(n,t,a,"in"===s||"not-in"===s);let c=ti.create(i,s,o);return function(e,t){if(t.dt()){let n=tb(e);if(null!==n&&!n.isEqual(t.field))throw new S(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);let r=tI(e);null!==r&&uo(e,t.field,r)}let i=function(e,t){for(let n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==i)throw i===t.op?new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new aL(e.firestore,e.converter,function(e,t){let n=e.filters.concat([t]);return new ty(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function o2(e,t,n){let r=oX("where",e);return new o1(r,t,n)}class o5 extends oJ{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new tm(t,n);return function(e,t){if(null===tI(e)){let n=tb(e);null!==n&&uo(e,n,t.field)}}(e,r),r}(e._query,this.ma,this.pa);return new aL(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new ty(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function o4(e,t="asc"){let n=oX("orderBy",e);return new o5(n,t)}class o3 extends oJ{constructor(e,t,n){super(),this.type=e,this.Ia=t,this.Ta=n}_apply(e){return new aL(e.firestore,e.converter,tx(e._query,this.Ia,this.Ta))}}function o8(e){return aN("limit",e),new o3("limit",e,"F")}function o9(e){return aN("limitToLast",e),new o3("limitToLast",e,"L")}class o6 extends oJ{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){var t;let n=ui(e,this.type,this.Ea,this.Aa);return new aL(e.firestore,e.converter,(t=e._query,new ty(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}function o7(...e){return new o6("startAt",e,!0)}function ue(...e){return new o6("startAfter",e,!1)}class ut extends oJ{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){var t;let n=ui(e,this.type,this.Ea,this.Aa);return new aL(e.firestore,e.converter,(t=e._query,new ty(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function un(...e){return new ut("endBefore",e,!1)}function ur(...e){return new ut("endAt",e,!0)}function ui(e,t,n,r){if(n[0]=(0,u.m9)(n[0]),n[0]instanceof oH)return function(e,t,n,r,i){if(!r)throw new S(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let a of tT(e))if(a.field.isKeyField())s.push(eW(t,r.key));else{let o=r.data.field(a.field);if(eV(o))throw new S(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===o){let u=a.field.canonicalString();throw new S(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${u}' (used as the orderBy) does not exist.`)}s.push(o)}return new tf(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oA(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new S(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let u=0;u<i.length;u++){let l=i[u];if(a[u].field.isKeyField()){if("string"!=typeof l)throw new S(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!tE(e)&&-1!==l.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let c=e.path.child(B.fromString(l));if(!$.isDocumentKey(c))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${c}' is not because it contains an odd number of segments.`);let h=new $(c);o.push(eW(t,h))}else{let d=oq(n,r,l);o.push(d)}}return new tf(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function us(e,t,n){if("string"==typeof(n=(0,u.m9)(n))){if(""===n)throw new S(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(t)&&-1!==n.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(B.fromString(n));if(!$.isDocumentKey(r))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eW(e,new $(r))}if(n instanceof aV)return eW(e,n._key);throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aD(n)}.`)}function ua(e,t){if(!Array.isArray(e)||0===e.length)throw new S(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new S(T.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function uo(e,t,n){if(!n.isEqual(t))throw new S(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */ class uu{convertValue(e,t="none"){switch(eK(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ek(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eR(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){let n={};return ew(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oE(ek(e.latitude),ek(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return eV(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eL(e));default:return null}}convertTimestamp(e){let t=eC(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=B.fromString(e);nB(n)||b();let r=new eF(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */ function ul(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class uc extends uu{constructor(e){super(),this.firestore=e}convertBytes(e){return new ow(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aV(this.firestore,null,t)}}/**
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
 */ class uh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ud extends oH{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new uf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(oX("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class uf extends ud{data(e={}){return super.data(e)}}class um{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new uh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new uf(this._firestore,this._userDataWriter,n.key,n,new uh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>{let r=new uf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new uh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new uf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new uh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ug(e,t){return e instanceof ud&&t instanceof ud?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof um&&t instanceof um&&e._firestore===t._firestore&&aU(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
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
 */ function up(e){e=a_(e,aV);let t=a_(e.firestore,on);return a8(os(t),e._key).then(n=>uC(t,e,n))}class uy extends uu{constructor(e){super(),this.firestore=e}convertBytes(e){return new ow(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aV(this.firestore,null,t)}}function uw(e){e=a_(e,aV);let t=a_(e.firestore,on),n=os(t),r=new uy(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new S(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(s){let i=sC(s,`Failed to get document '${t} from cache`);n.reject(i)}})(await a1(e),t,n)),n.promise})(n,e._key).then(n=>new ud(t,r,e._key,n,new uh(null!==n&&n.hasLocalMutations,!0),e.converter))}function uv(e){e=a_(e,aV);let t=a_(e.firestore,on);return a8(os(t),e._key,{source:"server"}).then(n=>uC(t,e,n))}function uI(e){e=a_(e,aL);let t=a_(e.firestore,on),n=os(t),r=new uy(t);return oZ(e._query),a9(n,e._query).then(n=>new um(t,r,e,n))}function ub(e){e=a_(e,aL);let t=a_(e.firestore,on),n=os(t),r=new uy(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await iF(e,t,!0),i=new sW(t,r.Hi),s=i.Wu(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(u){let o=sC(u,`Failed to execute query '${t} against cache`);n.reject(o)}})(await a1(e),t,n)),n.promise})(n,e._query).then(n=>new um(t,r,e,n))}function uE(e){e=a_(e,aL);let t=a_(e.firestore,on),n=os(t),r=new uy(t);return a9(n,e._query,{source:"server"}).then(n=>new um(t,r,e,n))}function uT(e,t,n){e=a_(e,aV);let r=a_(e.firestore,on),i=ul(e.converter,t,n);return uA(r,[oC(oA(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,tj.none())])}function uS(e,t,n,...r){let i;e=a_(e,aV);let s=a_(e.firestore,on),a=oA(s);return i="string"==typeof(t=(0,u.m9)(t))||t instanceof ov?oP(a,"updateDoc",e._key,t,n,r):oO(a,"updateDoc",e._key,t),uA(s,[i.toMutation(e._key,tj.exists(!0))])}function ux(e){return uA(a_(e.firestore,on),[new t4(e._key,tj.none())])}function uD(e,t){let n=a_(e.firestore,on),r=aP(e),i=ul(e.converter,t);return uA(n,[oC(oA(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,tj.exists(!1))]).then(()=>r)}function u_(e,...t){var n,r,i;let s,a,o;e=(0,u.m9)(e);let l={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||a7(t[c])||(l=t[c],c++);let h={includeMetadataChanges:l.includeMetadataChanges};if(a7(t[c])){let d=t[c];t[c]=null===(n=d.next)||void 0===n?void 0:n.bind(d),t[c+1]=null===(r=d.error)||void 0===r?void 0:r.bind(d),t[c+2]=null===(i=d.complete)||void 0===i?void 0:i.bind(d)}if(e instanceof aV)a=a_(e.firestore,on),o=tw(e._key.path),s={next(n){t[c]&&t[c](uC(a,e,n))},error:t[c+1],complete:t[c+2]};else{let f=a_(e,aL);a=a_(f.firestore,on),o=f._query;let m=new uy(a);s={next(e){t[c]&&t[c](new um(a,m,f,e))},error:t[c+1],complete:t[c+2]},oZ(e._query)}return function(e,t,n,r){let i=new aK(r),s=new sB(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>sF(await a3(e),s)),()=>{i.bc(),e.asyncQueue.enqueueAndForget(async()=>sO(await a3(e),s))}}(os(a),o,h,s)}function uN(e,t){return function(e,t){let n=new aK(t);return e.asyncQueue.enqueueAndForget(async()=>{(await a3(e)).Ru.add(n),n.next()}),()=>{n.bc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.Ru.delete(t)})(await a3(e),n))}}(os(e=a_(e,on)),a7(t)?t:{next:t})}function uA(e,t){return function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>s1(await a5(e),t,n)),n.promise}(os(e),t)}function uC(e,t,n){let r=n.docs.get(t._key),i=new uy(e);return new ud(e,i,t._key,r,new uh(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */ function uk(e,t){return aU(e.query,t.query)&&(0,u.vZ)(e.data(),t.data())}/**
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
 */ function uR(e){let t=a_(e.firestore,on);return function(e,t,n){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>{try{if(sd(await a2(e))){let i=await a4(e),s=new az(t,i,n).run();r.resolve(s)}else r.reject(new S(T.UNAVAILABLE,"Failed to get count result because the client is offline."))}catch(a){r.reject(a)}}),r.promise}(os(t),e,new uy(t))}/**
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
 */ let uV={maxAttempts:5};/**
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
 */ class uL{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oA(e)}set(e,t,n){this._verifyNotCommitted();let r=uM(e,this._firestore),i=ul(r.converter,t,n),s=oC(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,tj.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=uM(e,this._firestore);return i="string"==typeof(t=(0,u.m9)(t))||t instanceof ov?oP(this._dataReader,"WriteBatch.update",s._key,t,n,r):oO(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,tj.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=uM(e,this._firestore);return this._mutations=this._mutations.concat(new t4(t._key,tj.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uM(e,t){if((e=(0,u.m9)(e)).firestore!==t)throw new S(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */ /**
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
 */ class uF extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oA(e)}get(e){let t=uM(e,this._firestore),n=new uc(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b();let r=e[0];if(r.isFoundDocument())return new oH(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new oH(this._firestore,n,t._key,null,t.converter);throw b()})}set(e,t,n){let r=uM(e,this._firestore),i=ul(r.converter,t,n),s=oC(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=uM(e,this._firestore);return i="string"==typeof(t=(0,u.m9)(t))||t instanceof ov?oP(this._dataReader,"Transaction.update",s._key,t,n,r):oO(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=uM(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=uM(e,this._firestore),n=new uy(this._firestore);return super.get(e).then(e=>new ud(this._firestore,n,t._key,e._document,new uh(!1,!1),t.converter))}}function uO(e,t,n){e=a_(e,on);let r=Object.assign(Object.assign({},uV),n);return!function(e){if(e.maxAttempts<1)throw new S(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a4(e);new aW(e.asyncQueue,i,n,t,r).run()}),r.promise}(os(e),n=>t(new uF(e,n)),r)}/**
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
 */ function uP(){return new ok("deleteField")}function uq(){return new oV("serverTimestamp")}function uU(...e){return new oL("arrayUnion",e)}function uB(...e){return new oM("arrayRemove",e)}function uK(e){return new oF("increment",e)}/**
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
 */ function uG(e){return os(e=a_(e,on)),new uL(e,t=>uA(e,t))}/**
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
 */ function u$(e,t){var n;let r=os(e=a_(e,on));if(!(null===(n=r.offlineComponents)||void 0===n?void 0:n.indexBackfillerScheduler))return v("Cannot enable indexes when persistence is disabled"),Promise.resolve();let i=function(e){let t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(t){throw new S(T.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==t?void 0:t.message))}}(e):e,n=[];if(Array.isArray(t.indexes))for(let r of t.indexes){let i=uQ(r,"collectionGroup"),s=[];if(Array.isArray(r.fields))for(let a of r.fields){let o=oz("setIndexConfiguration",uQ(a,"fieldPath"));"CONTAINS"===a.arrayConfig?s.push(new H(o,2)):"ASCENDING"===a.order?s.push(new H(o,0)):"DESCENDING"===a.order&&s.push(new H(o,1))}n.push(new Q(Q.UNKNOWN_ID,i,s,Y.empty()))}return n}(t);return a1(r).then(e=>(async function(e,t){let n=e.indexManager,r=[];return e.persistence.runTransaction("Configure indexes","readwrite",e=>n.getFieldIndexes(e).next(i=>(function(e,t,n,r,i){t=[...t],(e=[...e]).sort(n),t.sort(n);let s=e.length,a=t.length,o=0,u=0;for(;o<a&&u<s;){let l=n(e[u],t[o]);l<0?i(e[u++]):l>0?r(t[o++]):(o++,u++)}for(;o<a;)r(t[o++]);for(;u<s;)i(e[u++])})(i,t,W,t=>{r.push(n.addFieldIndex(e,t))},t=>{r.push(n.deleteFieldIndex(e,t))})).next(()=>ei.waitFor(r)))})(e,i))}function uQ(e,t){if("string"!=typeof e[t])throw new S(T.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}!function(e,t=!0){f=s.Jn,(0,s.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new on(new A(e.getProvider("auth-internal")),new V(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eF(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(h,"3.7.2",void 0),(0,s.KN)(h,"3.7.2","esm2017")}()}}]);