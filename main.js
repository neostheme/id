/*<![CDATA[*/
/* PANDUAN PEMBUAT LOCAL KEY
		contoh:	Local_Key, Cookie_Policy, dll

	BELUM DIKERJAKAN
	*	{{FC_GRID_1_COL}}
	*	{{FC_GRID_2_COL}}
	
	TEMPORARRY:
		*	
	
*/
(()=>{
	"use strict";
	const MAIN = ()=>{
		/*(BAHASA INDONESIA)*/
		/*DEVS_START*/
		const Dev_Fonts = ["Poppins:400,400italic,500,500italic,700,700italic"];
		const Dev_DateFormat = "DD MMMM YYYY"; // MM-DD-YYYY for en
		const Dev_fontAwesomeUrl = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"; // see new at: https://cdnjs.com/libraries/font-awesome
		/*DEVS_END*/
		
		/*TEXTS_START*/ 
		// month_name
		const Text_month1 = "Januari";
		const Text_month2 = "Februari";
		const Text_month3 = "Maret";
		const Text_month4 = "April";
		const Text_month5 = "Mei";
		const Text_month6 = "Juni";
		const Text_month7 = "Juli";
		const Text_month8 = "Agustus";
		const Text_month9 = "September";
		const Text_month10 = "Oktober";
		const Text_month11 = "November";
		const Text_month12 = "Desember";
		
		// blog_message
		const Text_blogMessage_noScriptTitle = "Aktifkan Javascript!";
		const Text_blogMessage_noScriptMessage = "Browser yang anda gunakan memblock penggunaan Javascript. Kami menggunakan javascript untuk memproduksi dan mengontrol konten. Mohon untuk mengaktifkan javascript pada pengaturan browser anda untuk dapat mengakses konten pada situs kami.";
		const Text_blogMessage_errorPageTitle = "Halaman Tidak Ditemukan!";
		const Text_blogMessage_errorPageMessage = "Halaman tidak tersedia atau mungkin sudah dihapus. Kunjungi halaman utama untuk mendapatkan berbagai konten menarik lainnya.";
		const Text_blogMessage_searchNoResultsTitle = "Hasil Tidak Ditemukan!";
		const Text_blogMessage_searchNoResultsMessage = "Tidak ada hasil yang relevan dengan kata kunci yang anda cari. Kunjungi halaman utama untuk mendapatkan berbagai konten menarik lainnya.";
		const Text_blogMessage_noPostsTitle = "Tidak Terdapat Apapun Disini!";
		const Text_blogMessage_noPostsMessage = "Kunjungi halaman utama untuk melihat berbagai konten menarik lainnya.";
		const Text_blogMessage_goToHomepageTitle = "Halaman Utama";
		
		// default_values
		const Text_defaultValues_moreLinkTitle = "Selengkapnya";
		
		// breadcrumbs id
		const Text_breadcrumbs_titleForHomepage = "Postingan Terbaru"; // Recent posts
		const Text_breadcrumbs_titleForSearchByLabel = "{{label_name}}";
		const Text_breadcrumbs_titleForSearchByQuery = "Cari postingan";
		const Text_breadcrumbs_titleForSearchByPublished = "Jelajahi postingan";
		const Text_breadcrumbs_titleForArchive = "Arsip";
		const Text_breadcrumbs_pageInfo = "Halaman {{page}} dari {{total_pages}}";
		const Text_breadcrumbs_textHome = "Beranda";
		const Text_breadcrumbs_textPost = "Postingan";
		const Text_breadcrumbs_textSearch = "Pencarian";
		const Text_breadcrumbs_textArchive = "Arsip";
		const Text_breadcrumbs_textBlogPage = "Laman";
		/* breadcrumbs en
		const Text_breadcrumbs_titleForHomepage = "Recent posts"; 
		const Text_breadcrumbs_titleForSearchByLabel = "{{label_name}}";
		const Text_breadcrumbs_titleForSearchByQuery = "Search posts";
		const Text_breadcrumbs_titleForSearchByPublished = "Browse posts";
		const Text_breadcrumbs_titleForArchive = "Archive";
		const Text_breadcrumbs_pageInfo = "Page {{page}} of {{total_pages}}";
		const Text_breadcrumbs_textHome = "Home";
		const Text_breadcrumbs_textPost = "Posts";
		const Text_breadcrumbs_textSearch = "Search";
		const Text_breadcrumbs_textArchive = "Archive";
		const Text_breadcrumbs_textBlogPage = "Page";*/
		
		
		// pagination
		const Text_pagination_textHome = "Beranda";
		const Text_pagination_textNewer= "Lebih baru";
		const Text_pagination_textNewest = "Terbaru";
		const Text_pagination_textOlder = "Lebih lama";
		const Text_pagination_textViewNumericPagination = "Lihat halaman bernomor";
		/* pagination en
		const Text_pagination_textHome = "Home";
		const Text_pagination_textNewer= "Newer";
		const Text_pagination_textNewest = "Newset";
		const Text_pagination_textOlder = "Older";
		const Text_pagination_textViewNumericPagination = "View numeric pagination";*/
		
		
		
		// cookie_policy
		const Text_cookiePolicy_textMessage = "Blog ini menggunakan cookie dari google untuk berbagai keperluan. Dengan menggunakan situs ini, anda setuju dengan ketentuan penggunaan cookie google.";
		const Text_cookiePolicy_textLearnMore = "Pelajari selengkapnya";
		const Text_cookiePolicy_textConfirm = "Saya setuju, tutup pesan ini";
		/* cookie_policy en
		const Text_cookiePolicy_textMessage = "This blog uses cookies from Google for various purposes. By using this site, you agree to google's terms of use of cookie.";
		const Text_cookiePolicy_textLearnMore = "Learn more";
		const Text_cookiePolicy_textConfirm = "I agree, close this message";*/
		
		// overlay_share_buttons
		const Text_overlayShareButton_openerTitle = "Bagikan";
		const Text_overlayShareButton_contentTitle = "Bagikan";
		/* overlay_share_buttons en
		const Text_overlayShareButton_openerTitle = "Share";
		const Text_overlayShareButton_contentTitle = "Share";*/
		
		// window_resized
		const Text_windowResized_textTitle = "Ukuran jendela browser berubah!";
		const Text_windowResized_textMessage = "Ukuran layar browser telah berubah. Mohon muat ulang halaman untuk memastikan semua fungsi berjalan dengan benar.";
		const Text_windowResized_textReload = "Muat ulang";
		const Text_windowResized_textIgnore = "Abaikan";
		/* window_resized en
		const Text_windowResized_textTitle = "Window browser has been resized!";
		const Text_windowResized_textMessage = "The browser screen size has changed. Please reload this page to make sure all functions are working properly";
		const Text_windowResized_textReload = "Reload";
		const Text_windowResized_textIgnore = "Ignore";*/
		
		
		// view_mode
		const Text_viewMode_switchToLightButtonTitle = "Mode terang";
		const Text_viewMode_switchToDarkButtonTitle = "Mode gelap";
		/* view_mode en
		const Text_viewMode_switchToLightButtonTitle = "Light view";
		const Text_viewMode_switchToDarkButtonTitle = "Dark view";*/
		
		
		// #blog_posts
		const Text_blogPosts_textAuthor = "Penulis";
		const Text_blogPosts_textPublished = "Diterbitkan";
		const Text_blogPosts_textUpdated = "Diupdate";
		const Text_blogPosts_textLocation = "Lokasi";
		/* #blog_posts en
		const Text_blogPost_textAuthor = "Author";
		const Text_blogPost_textPublished = "Published";
		const Text_blogPost_textUpdated = "Updated";
		const Text_blogPost_textLocation = "Location";*/
		
		
		// #blog_post
		const Text_blogPost_textAuthor = "Penulis";
		const Text_blogPost_textPublished = "Diterbitkan";
		const Text_blogPost_textUpdated = "Diupdate";
		const Text_blogPost_textLocation = "Lokasi";
		const Text_blogPost_textDescription = "Deskripsi"; // belum digunakan
		/* #blog_post en
		const Text_blogPost_textAuthor = "Author";
		const Text_blogPost_textPublished = "Published";
		const Text_blogPost_textUpdated = "Updated";
		const Text_blogPost_textLocation = "Location";
		const Text_blogPost_textDescription = "Description";*/

					
		// #post_comments
		const Text_postComments_noPublishedMessage = "Belum terdapat komentar yang diterbitkan";
		const Text_postComments_closedMessage = "Komentar baru untuk postingan ini telah ditutup!";
		const Text_postComments_textNumberOfComments = "{{number_of_comments}} Komentar";
		const Text_postComments_textNumberOfReplies = "{{number_of_replies}} Tanggapan";
		const Text_postComments_textAddComment =  "Tambahkan komentar";
		const Text_postComments_textAddNewComment = "Tambahkan komentar baru";
		const Text_postComments_textAddReply = "Tambahkan tanggapan";
		const Text_postComments_textReply = "Balas";
		const Text_postComments_textDelete = "Hapus";
		const Text_postComments_textNewest = "Terbaru";
		const Text_postComments_textOldest = "Terlama";
		const Text_postComments_textAuthorLabel = "Pengarang";
		/* #post_comments en
		const Text_postComments_noPublishedMessage = "No comments published yet";
		const Text_postComments_closedMessage = "Comments for this post have been closed!";
		const Text_postComments_textNumberOfComments = "{{number_of_comments}} Comments":
		const Text_postComments_textNumberOfReplies = "{{number_of_replies}} Replies";
		const Text_postComments_textAddComment =  "Add comment";
		const Text_postComments_textAddNewComment = "Add new comment";
		const Text_postComments_textAddReply = "Add reply";
		const Text_postComments_textReply = "Reply";
		const Text_postComments_textDelete = "Delete";
		const Text_postComments_textNewest = "Newest";
		const Text_postComments_textOldest = "Oldest";
		const Text_postComments_textAuthorLabel = "Author";*/
		
		
		/*TEXTS_END*/
		
		
		
		
		const g_win = window;
		const g_doc = document;
		const g_html = g_doc.documentElement;
		const g_head = g_doc.getElementsByTagName("head")[0];	
		const g_body = g_doc.getElementsByTagName("body")[0];
		const g_blog = g_doc.getElementById("w-blog-w1");
		const g_mainScrollable = g_blog;
		const g_bodyMirror = g_blog; 
		const g_blogw1 = g_blog;
		const g_blogw2 = g_doc.getElementById("w-blog-w2");
		const g_modalsContainer = g_doc.getElementById("w-modals-container");
		
		
		const g_arrayItemBoxs = ["none", "border", "shadow"];
		const g_arrayAlignsNoJustify = ["left", "center", "right"];
		const g_arrayAlignsHasJustify = ["left", "center", "right", "justify"];
		
		
		
		
		const g_alphabet = "abcdefghijklmnopqrstuvwxyz./:_"; 
		// a[0], b[1], c[2], d[3,] e[4], f[5], g[6], h[7], i[8], j[9], k[10], l[11], m[12], n[13], o[14], p[15], q[16], r[17], s[18], t[19], u[20], v[21], w[22], x[23], y[24], z[25], .[26], /[27], :[28], _[29]
		
		let g_alphabetByLicenseKey = null; // wiblogger.comabcdefghijklmnopqrstuvwxyz./:_    ---> akan terdefnisi ketika key valid
		// w[0], i[1], b[2], l[3], o[4], g[5], g[6], e[7], r[8], .[9], c[10], o[11], m[12, a[13], b[14], c[15], d[16] e[17], f[18], g[19], h[20], i[21], j[22], k[23], l[24], m[25], n[26], o[27], p[28], q[29], r[30], s[31], t[32], u[33], v[34], w[35], x[36], y[37], z[38], .[39], /[40], :[41], _[42]
		
		const g_number = [0,1,2,3,4,5,6,7,8,9];
		const g_themeNameToAlphabetIndex = [13, 4, 14, 18]; // neos
		const g_themeVariantToAlpabetIndex = [6, 4, 13, 4, 17, 0, 11]; // general
		const g_wibloggerComToAlphabetIndex = [22, 8, 1, 11, 14, 6, 6, 4, 17, 26, 2, 14, 12]; // wiblogger.com

		const g_s_location = g_alphabet[11] + g_alphabet[14] + g_alphabet[2] + g_alphabet[0] + g_alphabet[19] + g_alphabet[8] + g_alphabet[14] + g_alphabet[13];
		const g_s_href = g_alphabet[7] + g_alphabet[17] + g_alphabet[4] + g_alphabet[5];
		const g_s_www = g_alphabet[22] + g_alphabet[22] + g_alphabet[22] + g_alphabet[26];
		const g_s_https = g_alphabet[7] + g_alphabet[19] + g_alphabet[19] + g_alphabet[15] + g_alphabet[18] + g_alphabet[28] + g_alphabet[27] + g_alphabet[27];
		const g_s_http = g_alphabet[7] + g_alphabet[19] + g_alphabet[19] + g_alphabet[15] + g_alphabet[28] + g_alphabet[27] + g_alphabet[27];
		const g_s_license_key = g_alphabet[11] + g_alphabet[8] + g_alphabet[2] + g_alphabet[4] + g_alphabet[13] + g_alphabet[18] + g_alphabet[4] + g_alphabet[29] + g_alphabet[10] + g_alphabet[4] + g_alphabet[24];

		const g_s_themeName = (()=>{
			let value = "";
			for(const i of g_themeNameToAlphabetIndex){
				value += g_alphabet[i];
			}
			return value;
		})(); 
		const g_s_themeVariant = (()=>{
			let value = "";
			for(const i of g_themeVariantToAlpabetIndex){
				value += g_alphabet[i];
			}
			return value;
		})(); 
		const g_s_wiBloggerCom = (()=>{
			let value = "";
			for(const i of g_wibloggerComToAlphabetIndex){
				value += g_alphabet[i];
			}
			return value;
		})(); 		
		
		const g_screenWidth = g_win.innerWidth || g_html.clientWidth;
		const g_screenHeight = g_win.innerHeight || g_html.clientHeight;	
		const g_isOperamini = Object.prototype.toString.call(g_win.operamini) === "[object OperaMini]";
		const g_isUCBrowser = /UCBrowser/.test(navigator.userAgent);
		const g_isTouch = (()=>{
			const win = g_win;
			const nav = navigator;
			if('ontouchstart' in win || nav.maxTouchPoints > 0 || nav.msMaxTouchPoints > 0){
				return /(iphone|ipod|ipad|android|iemobile|blackberry|bada)/.test(nav.userAgent.toLowerCase());
			}
			return false;
		})();	
		
		let	g_responsiverOffsetLeft;
		let	g_responsiverOffsetRight;
		
		
		const p_runEval = g_win.Wi.protos.runEval;
		const p_stringTrim = (()=>{
			const reg_newLine = /\r?\n|\r/g;
			const reg_doubleSpace = /\s\s+/g;
			return (s)=>{
				return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
			};
		})();
		const p_stringFirstLetterToUpperCase = (s)=>{
			return s.charAt(0).toUpperCase() + s.slice(1);
		};
		const p_stringFirstLetterToLowerCase = (s)=>{
			return s.charAt(0).toLowerCase() + s.slice(1);
		};
		const p_stringToBoolean = (()=>{
			/*	Arguments:
				s			:	string. ketika value ini buka string (termasuk boolean), fungsi akan mereturn def
				def		:	default value (boolean)
					
				return
				boolean		
				null			:	ketika value tidak valid dan argument def dikosongkan atau === null */
			const validValues = ["true", "false", "yes", "no"];
			return (s, def = null)=>{
				if(validValues.indexOf(s) !== -1){
					return s === validValues[0] || s === validValues[2] ? true : false;
				}
					
				return def;
			}
		})();
		const p_stringToNumber = (s, def=null)=>{ 
			/* argument:
				s : s bisa berupa string untrimmed dan harus berupa string
				
				returns:
				number || def */
			const num = parseInt(s.replace(/\s/g, ""));
			if(typeof num === "number" && !isNaN(num)){
				return num;
			}
			
			return def;
		};
		const p_stringToArray = (()=>{
			/* arguments: s = berupa string yang dipisahkan dengan koma
				return = selalu array (mungkin kosong). Adapun Item array bersifat trimmed */
			const stringTrim = p_stringTrim;		
			return (s)=>{
				const trimmed = stringTrim(s);
				const list = trimmed.split(",");
				const content = [];
				for(let item of list){
					item = item.trim();
					if(item){
						content.push(item);
					}
				}
				return content;
			};	
		})();
		const p_stringBlockToArray = (()=>{
			/* argument: s = string yang diapit dengan blockKode (contoh : {{a}} {{b}})
				return : selalu array (mungkin kosong). Adapun item array bersifat trimmed */
			const stringTrim = p_stringTrim;
			return (s)=>{
				const results = [];
				const trimmed = stringTrim(s);
				const arry = trimmed.split("{{");
				for(let item of arry){
					if(item){
						item = item.trim();
						if(item){
							const closerIndex = item.indexOf("}}");
							if(closerIndex !== -1){
								results.push(item.substring(0, closerIndex));
							}
						}
					}
				}
				
				return results;
			}
		})();
		const p_stringIsUrl = (()=>{
			const regNoRelative = /^(https{0,1}?:\/\/.+)/;
			const regAllowRelative = /^((https{0,1}?:\/\/.+)|(#))/;
			const main = (s, allowRelative)=>{
				return (allowRelative ? regAllowRelative : regNoRelative).test(s);
			};
			return main;
		})();
		const p_stringRemoveComment = (s)=>{
			return s.replace("<!--", "").replace("-->", "");			
		};
		const p_stringIsFalsy = (()=>{
			const falsyString = ["", "none", "null", "-"];
			return (s)=>{
				if(s){
					if(falsyString.indexOf(s) === -1){
						return false;
					}
					else{
						return true;
					}
				}
				else{
					return true;
				}
			};
		})(); 
		const p_stringIsTrue = (()=>{
			const trueStrings = ["true", "yes"];
			return (s)=>{
				if(!s){
					return false;
				}
				else{
					return trueStrings.indexOf(s) !== -1;
				}
			}
		})();
		const p_stringIsFalse = (()=>{
			const falseStrings = ["false", "no"];
			return (s)=>{
				if(!s){
					return true;
				}
				else{
					return falseStrings.indexOf(s) !== -1;
				}
			}
		})();
		const p_typeIsString = (data)=>{
			return typeof data === "string";
		};
		const p_typeIsNumber = (data)=>{
			return (typeof data === "number" && !isNaN(data));
		};
		const p_typeIsBoolean = (data)=>{
			return typeof data === "boolean";
		};
		const p_typeIsObject = (data)=>{
			return Object.prototype.toString.call(data) === "[object Object]";
		};
		const p_typeIsArray = (data)=>{
			return Object.prototype.toString.call(data) === "[object Array]";
		};
		const p_typeIsFunction = (data)=>{
			return typeof data === "function";
		};
		const p_typeIsDOM = (data)=>{
			return (data instanceof Element || data instanceof HTMLDocument);  
		};
		
		const p_elemGetById = (()=>{
			const doc = g_doc;
			return (id)=>{
				return doc.getElementById(id);
			}
		})();	
		const p_elemGetByClass = (()=>{
			const doc = g_doc;
			return (parentElem, className, index)=>{
				if(!parentElem){
					parentElem = doc;
				}
				
				const elems = parentElem.getElementsByClassName(className);
				const len = elems.length;
				
				if(len !== 0){
					if(typeof index === "number"){
						if(index < len){
							return elems[index];
						}
						else{
							return null;
						}
					}
					else{
						const arrayElems = [];
						for(let i=0;i<len;i++){
							arrayElems.push(elems[i]);
						}
						return arrayElems;
					}
				}
				else{
					return null;
				}
			}
		})();
		const p_elemGetByTag = (()=>{
			const doc = g_doc;
			return (parentElem, tagName, index)=>{
				if(!parentElem){
					parentElem = doc;
				}
				
				const elems = parentElem.getElementsByTagName(tagName.toUpperCase());
				const len = elems.length;
				if(len !== 0){
					if(typeof index === "number"){
						if(index < len){
							return elems[index];
						}
						else{
							return null;
						}
					}
					else{
						const arrayElems = [];
						for(let i=0;i<len;i++){
							arrayElems.push(elems[i]);
						}
						return arrayElems;
					}
				}
				else{
					return null;
				}
			}
		})();
		const p_elemGetChildrenByClass = (()=>{
			const getByClass = p_elemGetByClass;
			return (parentElem, classname, index)=>{
				if(typeof index === "number"){
					const byClass = getByClass(parentElem, classname, index);
					if(byClass){
						if(byClass.parentNode === parentElem){
							return byClass;
						}
					}
					
					return null;
				}
				else{
					const items = [];
					const byClass = getByClass(parentElem, classname);
					if(byClass){
						for(const item of byClass){
							if(item.parentNode === parentElem){
								items.push(item);
							}
						}
					}
					return items.length === 0 ? null : items;			
				}
			}
		})();
		const p_elemGetChildrenByTag = (()=>{
			const getByTag = p_elemGetByTag;
			return (parentElem, tagname, index)=>{
				if(typeof index === "number"){
					const byTag = getByTag(parentElem, tagname, index);
					if(byTag){
						if(byTag.parentNode === parentElem){
							return byTag;
						}
					}
					
					return null;
				}
				else{
					const items = [];
					const byTag = getByTag(parentElem, tagname);
					if(byTag){
						for(const item of byTag){
							if(item.parentNode === parentElem){
								items.push(item);
							}
						}
					}
					return items.length === 0 ? null : items;	
				}
			}
		})();
		
		const p_elemGetChildren = (parentElem, index)=>{
			const els = parentElem.children;
			const len = els.length;
			if(len === 0){
				return null;
			}
			else{
				if(typeof index === "number"){
					if(els[index]){
						return els[index];
					}
					else{
						return null;
					}
				}
				else{
					const items = [];
					for(let i=0;i<len;i++){
						items.push(els[i]);
					}
					return items;
				}
			}
		};
		const p_elemGetPreviousSibling = (elem)=>{
			/* return: node atau null */
			let node = elem.previousSibling;
			while (node !== null && node.nodeType !== 1){
				// node === null										: tidak tereksekusi
				// node !== null, nodeType === 1				: tidak tereksekusi
				// node !== null, nodeType !== 1				: tereksekusi
				node = node.previousSibling;
			}
			return node;
		};
		const p_elemGetNextSibling = (elem)=>{
			/* return: node atau null */
			let node = elem.nextSibling;
			while (node !== null && node.nodeType !== 1){
				// node === null										: tidak tereksekusi
				// node !== null, nodeType === 1				: tidak tereksekusi
				// node !== null, nodeType !== 1				: tereksekusi
				node = node.nextSibling;
			}
			return node;
		};	

		const p_elemAppends = (parentElem, ...elems)=>{
			for(const e of elems){
				parentElem.appendChild(e);
			}
		};	
		const p_elemRemove = (...elems)=>{
			for(const e of elems){
				e.parentNode.removeChild(e);
			}
		};	
		const p_elemReplace = (oldElem, newElem)=>{
			oldElem.parentNode.replaceChild(newElem, oldElem);
		};
		const p_elemAddClasses = (elem, ...classes)=>{
			for(const c of classes){
				elem.classList.add(c);
			}
		};
		const p_elemRemoveClasses = (elem, ...classes)=>{
			for(const c of classes){
				elem.classList.remove(c);
			}
		};
		const p_elemHasClass = (elem, className)=>{
			return elem.classList.contains(className);
		};		
		
		const p_elemCreateTextNode = (()=>{
			const doc = g_doc;
			return (s)=>{
				return doc.createTextNode(s);
			}
		})();
		const p_elemCreateElem = (()=>{
			/*	arguments 
					o
						c				:	class, 
						i				:	id
						s				:	src
						n				:	innerHTML
						h				:	href
						cs				:	array argumentO || DOM || falsy
						f				:	f(elem), fungsi yang akan dijalankan ketida sub telah diproses 
					
					appendTo		:	DOM || falsy
											Ketika nilai adalah falsy, fungsi akan mereturn elem
											Sebaliknya, fungsi akan mereturn nothing (undefined) */
			const doc = g_doc;
			const typeIsArray = p_typeIsArray;
			const attrsData = {
				c : "className",
				i : "id",
				s : "src",
				n : "innerHTML",
				h : "href",
				tt : "title",
				al : "aria-label",
				at : "alt"
			};
			const create = (o, appendTo) =>{
				const tag = o.t;
				const elem = doc.createElement(tag || "div");
				const oProperties = Object.keys(o);
				for(const p of oProperties){
					// {{p}} merupakan semua property yang terdapat pada argumentO
					// pada argumentO, semua property yang terdapat pada {{attrsData}} harus bertype string atau falsy
					// proses akan diskip jika nilai adalah falsy
					const disO = o[p];
					if(disO){
						const disAttr = attrsData[p];
						// {{disAttr}} akan bernilai string atau undefined
						// ketika nilai adalah {{undefined}}, itu artinya property yang bersangkutan bukan property yang digunakan untuk menambahkan {{atribut atau inner}}
						// hal ini seperti property {{cs dan f}}. dua property ini tidak disertakan pada {{attrsData}}, oleh karena itu, disAttr dengan p === cs || f akan undefined.
						// pada keadaan disAttr undefined, fungsi akan diskip, proses untuk property yang bersangkutan akan diproses pada tahap selanjutnya.
						if(p === "al"){
							elem.setAttribute("aria-label", disO);
						}
						else{
							elem[disAttr] = disO;
						}
					}
				}
				
				// proses khusus link,
				// untuk link, argument {{h}} mungkin tidak didefinisikan, 
				// pada kasus ini, href akan diset ke "#"
				if(tag === "a"){
					if(!o.h){
						elem.href = "#";
					}
				}
				
				// memproses sub
				const sub = o.cs;
				if(sub){
					if(typeIsArray(sub)){
						for(const s of sub){
							create(s, elem);
						}
					}
					else{
						elem.appendChild(sub);
					}
				}
				
				// memproses f
				if(o.f){
					o.f(elem);
				}
				
				if(appendTo){
					appendTo.appendChild(elem);
				}
				else{
					return elem;
				}
			};
			return (o, appendTo)=>{
				return create(o, appendTo);
			}
		})();	
		const p_elemCreateFragment = (()=>{
			const doc = g_doc;
			return ()=>{
				return doc.createDocumentFragment();
			};
		})(); 		
		const p_elemInsertFirstChild = (parentElem, newElem)=>{
			
			const fc = parentElem.childNodes[0]; //parentElem.firstElementChild; // dom || null
			if(fc){
				parentElem.insertBefore(newElem, fc);
			}
			else{
				parentElem.appendChild(newElem);
			}
		};
		const p_elemInsertBefore = (elem, paramElem)=>{
			paramElem.parentNode.insertBefore(elem, paramElem);
		};
		
		const p_elemMoveUp = (()=>{
			const elemGetPreviousSibling = p_elemGetPreviousSibling;
			return (elem)=>{
				const previousSibling = elemGetPreviousSibling(elem);
				if(previousSibling){
					elem.parentNode.insertBefore(elem, previousSibling);
				}
			}
		})();
		const p_elemMoveDown = (()=>{
			const elemGetNextSibling = p_elemGetNextSibling;
			return (elem)=>{
				const nextSibling = elemGetNextSibling(elem);
				if(nextSibling){
					elem.parentNode.insertBefore(nextSibling, elem);
				}
			}
		})();		
		const p_elemExtrackJSData = (()=>{
			const runEval = p_runEval;
			const stringRemoveComment = p_stringRemoveComment;
			const elemRemove = p_elemRemove;
			const main = (elem, doRemove)=>{
				if(doRemove){
					elemRemove(elem);
				}
				
				const s = elem.innerHTML;
				const sNoComment = stringRemoveComment(s);
				const jsData = runEval(sNoComment);
				if(jsData){
					return jsData;
				}
				else{
					return null;
				}
			};
			return main;
		})();
		const p_arrayMin = (arr)=>{
			return Math.min.apply(null, arr);
		};
		const p_arrayMax = (arr)=>{
			return Math.max.apply(null, arr);
		};
		const p_arrayMoveItem = (array, from, to)=>{
			/* arguments
					array	:	array
					form		:	index awal base 0, harus < array.length. Sebaliknya, proses akan diskip
					to			:	index akhir base 0, harus < array.length. Sebaliknya, proses akan diskip
				
				return nothing */
			const len = array.length;
			if(from < len && to < len){
				const cutAndGet = array.splice(from, 1);
				array.splice(to, 0, cutAndGet[0]);
			}
		};
		const p_arrayRemoveItem = (array, item)=>{
			const len = array.length;
			for(let i=0;i<len;i++){
				if(array[i] === item){
					array.splice(i, 1);
					return;
				}
			}
		};
		const p_arrayRemoveItemByIndex = (array, index)=>{
			// index harus < array.length. Sebaliknya, proses akan diskip.
			// return nothing. hanya menghapus item
			if(index < array.length){
				array.splice(index, 1);
			}
		};
		const p_arrayMoveItemToOtherArray = (arrayFrom, itemIndex, arrayTo)=>{
			// itemIndex harus < arrayFrom.length. Sebaliknya, proses akan diskip
			// return nothing, hanya memindahkan item
			// item akan dipindahkan pada arrayTo (indexTerakhir)
			if(itemIndex < arrayFrom.length){
				arrayTo.push(arrayFrom.splice(itemIndex, 1)[0]);
			}
		};
		const p_arrayGetRandomIndexs = (()=>{
			const main = (arry, maxResults)=>{
				const len = arry.length;
				let max = maxResults;
				if(len < max){
					max = len;
				}
				
				const indexs = [];
				const availableIndexs = [];
				for(let i=0;i<len;i++){
					availableIndexs.push(i);
				}
				
				for(let i=0;i<max;i++){
					let randomNumber = getRandomNumber(0, availableIndexs.length - 1);
					indexs.push(availableIndexs[randomNumber]);
					availableIndexs.splice(randomNumber, 1);
				}	
				return indexs;
			};
			const getRandomNumber = (min, max) =>{
				return Math.floor(Math.random() * (max - min + 1) + min);
			};	
			return main;
		})();
		const p_arrayGetRandomItems = (()=>{
			const getRandomIndexs = p_arrayGetRandomIndexs;
			const main = (items, maxResults)=>{
				const returned = [];
				const randomIndexs = getRandomIndexs(items, maxResults);
				for(const index of randomIndexs){
					returned.push(items[index]);
				}
				return returned;
			};		
			return main;
		})();
		
		
		
		
		const p_elemGetAttrs = (()=>{
			/* return selalu object: {attrName : attrValue (trimmed)} 
				value bersifat trimmed */
			
			const stringTrim = p_stringTrim;
			return (elem)=>{
				const attributes = elem.attributes;
				const o = {};
				for(const a of attributes){
					o[a.name] = stringTrim(a.value);
				}
				return o;
			}
		})();		
		const p_elemGetOffsetToDocument = (()=>{
			const scrollAble = g_mainScrollable;
			const bodyMirror = g_bodyMirror;
			return (el)=>{
				const elDatas = el.getBoundingClientRect();
				const scrollTop = scrollAble.scrollTop;
				const scrollLeft = scrollAble.scrollLeft;
				const bodyHeight = bodyMirror.offsetHeight;
				const bodyWidth = bodyMirror.offsetWidth;
				const topOfDocument = elDatas.top + scrollTop;
				const leftOfDocument = elDatas.left + scrollLeft;
			
				return {
					top: topOfDocument, 
					bottom: bodyHeight - (topOfDocument + el.offsetHeight),
					left: leftOfDocument,
					right : bodyWidth - (leftOfDocument + el.offsetWidth)
				}
			}			
		})();
		const p_elemGetBoundingClientRect = (()=>{
			const screenHeight = g_screenHeight;
			const screenWidth = g_screenWidth;
			return (elem)=>{
				const rects = elem.getBoundingClientRect();					
				return {
					top : rects.top,
					bottom : screenHeight - (rects.top + rects.height),
					left : rects.left,
					right : screenWidth - (rects.left + rects.width)
				}
			};
		})();		
				
		const p_eventAdd = (()=>{
			const win = g_win;
			if(win.addEventListener){
				return (elem, eventName, runFunction)=>{
					elem.addEventListener(eventName, runFunction);
				}
			}
			else if(win.attachEvent){
				return (elem, eventName, runFunction)=>{
					elem.attachEvent("on"+ eventName, runFunction)
				}
			}
		})();
		const p_eventRemove = (()=>{
			const win = g_win;
			if(win.removeEventListener){
				return (elem, eventName, functionName)=>{
					elem.removeEventListener(eventName, functionName)
				}
			}
			else if(win.detachEvent){
				return (elem, eventName, functionName)=>{
					elem.detachEvent("on"+ eventName, functionName)
				}
			}
		})();	
		const p_eventAddTouch = (()=>{
			/*	ALGORITMA				
				ARGUMENTS RUN FUNCS
					1.	start						:	event ini jarang digunakan, ini sama halnya dengan onclick, 
														kecuali jika ingin menambahkan onclick hanya untuk perangkat touch saja
					2.	move 					:	event ini akan selalu dipanggil, baik itu swipe cepat maupun lambat
					3. moveend				:	event akan dipanggil ketika swipe lambat selesai
					3. swipe					:	event hanya dipanggil ketika swipe cepat selesai
			*/
			const addEvent = p_eventAdd;
			const mainScrollable = g_mainScrollable;
			const isTouch = g_isTouch;
			return (elem, runFuncs)=>{
				if(!isTouch){
					return false;
				}
				
				let startTime;								// start time, untuk melacak berapa lama proses move berakhir
				let startX;										// titik awal touch
				let startY;										// titik awal touch
				let startScrollX;								// titik awal scroll window X
				let startScrollY;								// titik awal scroll window 
				let runEvent = false;						// akan dimanipulasi pada start, ini digunakan agar event biasa diblock dengan cara set propagation pada childs
				let inMoveSession = false;				// untuk mengidentifikasi akan itu merupakan move atau touch biasa (klik)
				
				
				const startFunc = runFuncs.start;
				const moveFunc = runFuncs.move;
				const moveendFunc = runFuncs.moveend;
				
				
				addEvent(elem, "touchstart", (e)=>{
					runEvent = true;
					const touchesObj = e.changedTouches[0];
					startTime = new Date().getTime();
					startX = touchesObj.pageX;
					startY =  touchesObj.pageY;
					startScrollX = mainScrollable.scrollLeft;
					startScrollY = mainScrollable.scrollTop;
					
					if(startFunc){
						startFunc(startX, startY);
					}
				});
				
				addEvent(elem, "touchmove", (e)=>{
					if(runEvent){
						if(!inMoveSession){
							inMoveSession = true;
						}
						
						if(moveFunc){
							const touchesObj = e.changedTouches[0];
							const currentX = touchesObj.pageX;
							const currentY = touchesObj.pageY;
							const currentXChange = currentX - startX;
							const currentYChange = currentY - startY;
							moveFunc(currentXChange, currentYChange);
						}	
					}				
				});
				
				addEvent(elem, "touchend", (e)=>{
					if(inMoveSession){
						const touchesObj = e.changedTouches[0];
						const endTime = new Date().getTime();
						const endX = touchesObj.pageX;
						const endY = touchesObj.pageY;
						const endScrollX = mainScrollable.scrollLeft;
						const endScrollY = mainScrollable.scrollTop;
						
						
						const endXChange = Math.abs(endX - startX);
						const endYChange = Math.abs(endY - startY);
						const isXChange = endXChange >= endYChange;
						const direction = isXChange ? (endX > startX ? "right" : "left") : (endY > startY ? "down" : "up");
						const usedChange = isXChange ? endXChange : endYChange;
						const isFastSwipe = (endTime - startTime) / 2 <  usedChange;
						
						if(isFastSwipe){
							const runSwipeFunc = runFuncs["swipe" + direction];
							if(runSwipeFunc){
								runSwipeFunc(usedChange);
							}
						}
						else{
							if(moveendFunc){
								moveendFunc(isXChange ? startX : startY, isXChange ? endX : endY);
							}
						}
						
						inMoveSession = false;
						runEvent = false;
					}
				});
			
				return true;
			}
		})();		
		
		const p_screen = (()=>{
			const win = g_win;
			return {
				min(mediaWidth){
					return win.matchMedia("(min-width:" + mediaWidth +"px)").matches;
				},
				max(mediaWidth){
					return win.matchMedia("(max-width:" + mediaWidth +"px)").matches;
				}
			}
		})();	
		const p_local = (()=>{
			const win = g_win;
			const isSupport = (()=>{
				// CREDIT: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
				try {
					const storage = win["localStorage"], x = '__storage_test__';
					storage.setItem(x, x);
					storage.removeItem(x);
					return true;
				}
				catch(e){
					return e instanceof DOMException && (
						// everything except Firefox
						e.code === 22 ||
						// Firefox
						e.code === 1014 ||
						// test name field too, because code might not be present
						// everything except Firefox
						e.name === 'QuotaExceededError' ||
						// Firefox
						e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
						// acknowledge QuotaExceededError only if there's something already stored
						storage.length !== 0;
				}
			})();
			
			return {
				set : (item, value)=>{
					if(isSupport){localStorage.setItem(item, value)} // item and value is string
				},
				get : (()=>{
					if(isSupport){
						return (item)=>{
							 return localStorage.getItem(item);
						}
					}
					else {
						return (item)=>{
							return null;
						}
					}
				})(),
				remove : (item)=>{
					if(isSupport){localStorage.removeItem(item)}
				},
				getKeys : (()=>{
					if(isSupport){
						return ()=>{
							const keys = [];
							const len = localStorage.length;
							for(let i=0;i<len;i++){
								keys.push(localStorage.key(i));
							}
							return keys;
						}
					}
					else{
						return ()=>{
							return [];
						}
					}
				})(),
				createKey : (name)=>{
					return "Wi_Local_" + name;
				}
			};
		})();
		const p_session = (()=>{
			const win = g_win;
			const isSupport = (()=>{
				// CREDIT: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
				try {
					var storage = win["sessionStorage"], x = '__storage_test__';
					storage.setItem(x, x);
					storage.removeItem(x);
					return true;
				}
				catch(e) {
					return e instanceof DOMException && (
						// everything except Firefox
						e.code === 22 ||
						// Firefox
						e.code === 1014 ||
						// test name field too, because code might not be present
						// everything except Firefox
						e.name === 'QuotaExceededError' ||
						// Firefox
						e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
						// acknowledge QuotaExceededError only if there's something already stored
						storage.length !== 0;
				}
			})();
			
			return {
				set : (item, value)=>{
					if(isSupport){sessionStorage.setItem(item, value)} // item and value is string
				},
				get : (()=>{
					if(isSupport){
						return (item)=>{
							 return sessionStorage.getItem(item);
						}
					}
					else {
						return (item)=>{
							return null;
						}
					}
				})(),
				remove : (item)=>{
					if(isSupport){sessionStorage.removeItem(item)}
				},
				createKey : (name)=>{
					return "Wi_Session_" + name;
				}
			};	
		})();
		const p_animationFrameReg = (()=>{
			const win = g_win;
			const req = win.requestAnimationFrame;
			return (func)=>{
				return req(func);
			}
		})();
		const p_animationFrameCancel = (()=>{
			const win = g_win;
			const cancel = win.cancelAnimationFrame;
			return (func)=>{
				return cancel(func);
			}
		})();		
		
		const p_getDataAttrTypeString = (()=>{
			const stringTrim = p_stringTrim;
			return (elem, name, doRemove = true, def = null)=>{
				let value = elem.getAttribute("data-" + name);
				if(value){
					if(doRemove){
						elem.removeAttribute("data-" + name);
					}
					
					value = stringTrim(value);
					if(value){
						return value;
					}
				}
				
				return def;
			}
		})();
		const p_getDataAttrTypeNumber = (()=>{
			const stringTrim = p_stringTrim;
			const typeIsNumber = p_typeIsNumber;
			return (elem, name, doRemove = true, def = null)=>{
				let value = elem.getAttribute("data-" + name);
				if(value){
					if(doRemove){
						elem.removeAttribute("data-" + name);
					}
					
					value = stringTrim(value);
					if(value){
						let num = parseInt(value);
						if(typeIsNumber(num)){
							return num;
						}
					}
				}
				return def;
			}
		})();
		const p_getDataAttrTypeBoolean = (()=>{
			const stringTrim = p_stringTrim;
			const stringIsTrue = p_stringIsTrue;
			const validValue = ["true", "false", "yes", "no"];
			return (elem, name, doRemove = true, def = null)=>{
				let value = elem.getAttribute("data-" + name);
				if(value){
					if(doRemove){
						elem.removeAttribute("data-" + name);
					}
					value = stringTrim(value);
					if(validValue.indexOf(value) !== -1){
						return stringIsTrue(value);
					}
				}
				
				return def;
			}
		})();					
		const p_getDataAttrTypeOptions = (()=>{
			const stringTrim = p_stringTrim;
			const main = (elem, name, doRemove, def, options)=>{
				let value = elem.getAttribute("data-" + name);
				if(value){
					if(doRemove){
						elem.removeAttribute("data-" + name);
					}
					value = stringTrim(value);
					if(options.indexOf(value) !== -1){
						return value;
					}
				}
				return def;
			};
			return main;
		})();
		
		const p_encodeHTML = (s)=>{
			//	s :	string html baik itu versi normal maupun versi encoded. untuk encoded, kode tidak akan terencoded lagi
			return s.replace(/&(?!(amp|gt|lt|quot|apos);)/g, (match)=>{
				return "&amp;";  /* Hanya akan mereplace & yang bukan merupakan versi ecoded entity */
			}).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
		};
		const p_decodeHTML = (s)=>{
			return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&amp;/g, "&");
		};		
		
		const p_getScrollbarSizes = (()=>{
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const removeElem = p_elemRemove;
			
			return (parentElem)=>{
				const	wrap = createElem({});
							wrap.setAttribute("style", "width:100px;height:100px;visibility:hidden;overflow:scroll;margin:0;padding:0;border:0");
				const 	content = createElem({});
							content.setAttribute("style", "width:100%;height:100%");
				
				appends(wrap, content);
				appends(parentElem, wrap);
				
				const ver = wrap.offsetWidth - content.offsetWidth;
				const hor = wrap.offsetHeight - content.offsetHeight;
				
				removeElem(wrap);
				return [ver, hor];
			}
		})();	
		const p_getRandomNumber = (min, max) =>{
			return Math.floor(Math.random() * (max - min + 1) + min);
		};	
		const p_removeComment = (s)=>{
			return s.replace("<!--", "").replace("-->", "");			
		};
		const p_isChildOf = (()=>{
			const body = g_body;
			const main = (el, parentElem)=>{
				if(el === parentElem){
					return true;
				}
				else{
					const p = el.parentNode;
					if(p === parentElem){
						return true;
					}
					else{
						if(p === body){
							return false;
						}
						else{
							return main(p, parentElem);
						}
					}
				}
			};
			return main;
		})();
	
		const p_resizeImg = (()=>{
			const devicePixelRatio = window.devicePixelRatio || 1;
			return (src, newSize, webpFormat = true)=>{
				/* arguments
					src				:	original src
					newSize		:	string size parameter || array[displayWidget, displayHeight]
					webpFormat	:	
				*/
				const reg = /(.+?)(blogspot|googleusercontent)(.+?\/.+?\/.+?\/.+?\/.+?\/)(.+?)(\/.+?)/;
				const regNew = /(.+?)(blogspot|googleusercontent)(.+?\/img\/a\/.+?)(=.+$|$)/;
				const matches =  reg.exec(src);
				if(matches){
					let newSrc = src.replace(reg, (match, p1, p2, p3, p4, p5)=>{
						return p1 + p2 + p3 + (()=>{
							if(typeof newSize === "string"){
								let newString = newSize;
								if(webpFormat){
									if(newString.indexOf("-rw") === -1){
										newString += "-rw";
									}
								}
								return newString;
							}
							else{
								let newString = "w" + Math.round(newSize[0] * devicePixelRatio);
								if(newSize[1]){
									newString += "-h"+ Math.round(newSize[1] * devicePixelRatio) + "-c";
								}
								if(webpFormat){
									newString += "-rw";
								}
								return newString;
							}
						})() + p5;
					});
					return newSrc;
				}
				else{
					const matchesNew =  regNew.exec(src);
					if(matchesNew){
						let newSrc = src.replace(regNew, (match, p1, p2, p3, p4)=>{
							return p1 + p2 + p3 + "=" + (()=>{
								if(typeof newSize === "string"){
									let newString = newSize;
									if(webpFormat){
										if(newString.indexOf("-rw") === -1){
											newString += "-rw";
										}
									}
									return newString;
								}
								else{
									let newString = "w" + Math.round(newSize[0] * devicePixelRatio);
									if(newSize[1]){
										newString += "-h"+ Math.round(newSize[1] * devicePixelRatio) + "-c";
									}
									if(webpFormat){
										newString += "-rw";
									}
									return newString;
								}
							})();
						});
						return newSrc;
					}
				}
				
				return src;
			};
		})();
		const p_createRandomId = (()=>{
			const getById = p_elemGetById;
			let latestUsedNum = 0;
			const prefix = "w-randomid";
			const main = ()=>{
				const newNum = latestUsedNum + 1;
				latestUsedNum += 1;
				const el = getById(prefix + newNum);
				if(el){
					return main();
				}
				else{
					return prefix + newNum;
				}
			};
			return main;
		})();
		const p_getItemsMaxHeight = (()=>{ 
			const arrayMax = p_arrayMax;
			const getByClass = p_elemGetByClass;
			const main = (parent, target)=>{
				const elItems = getByClass(parent, target);
				if(!elItems){
					return null;
				}
				else{
					const heights = [];
					for(const item of elItems){
						heights.push(item.clientHeight);
					}
					
					return arrayMax(heights);
				}
			};
			return main;
		})();			
		const p_jumpToElement = (()=>{ // return nothing || false ketika dukungan client rect tidak tersedia
			const getOffsetToDocument = p_elemGetOffsetToDocument;
			const elemGetBoundingClientRect = p_elemGetBoundingClientRect;
			const screenHeight = g_screenHeight;
			const mainScrollable = g_mainScrollable;
			const addEvent = p_eventAdd;
			const removeEvent = p_eventRemove;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const _clearTimeout = clearTimeout;
			const _setTimeout = setTimeout;

				
			const prefix = "w-89";
			const ClassAnimationState1 = prefix + "p1";
			const ClassAnimationState2 = prefix + "p2";
			const ClassAnimationState3 = prefix + "p3";
			let ActiveElem;
			
			const main = (el, configs)=>{
				ActiveElem = el;
				
				const {animation} = configs;
				const elRectsToDocument = getOffsetToDocument(el);
				if(elRectsToDocument === null){
					return false;
				}
				
				const elTopToDocument = elRectsToDocument.top;
				const elRects = elemGetBoundingClientRect(el);
				
				const isOnViewArea = (elRects.top >= 0 && elRects.top < screenHeight) || (elRects.bottom >= 0 && elRects.bottom < screenHeight);
				let runAnimation = animation;
				if(runAnimation){
					if(isOnViewArea){
						runAnimation = false;
					}
				}
				
				const	scrollToOptions = {};
							scrollToOptions.left = 0;
							scrollToOptions.top = elTopToDocument -  80;
							scrollToOptions.behavior = "smooth";
							
				if(runAnimation){
					// hide with no transition
					addClasses(el, ClassAnimationState1); 
					
					// add scroll event
					onScroll.add();
				}		
				
				mainScrollable.scrollTo(scrollToOptions);
				
				/*	kode yang tereksekusi selanjutnya,
				*	runAnimation === true
					selanjutnya adalah mengeksekusi kode yang diassign pada onscroll
				*	runAnimation === false
					proses selesai disini, tidak terdapat kode selanjutnya */
			};
			const onScroll = (()=>{
				let activeEvent;							
				const fn = ()=>{
					remove();
					const el = ActiveElem;
					addClasses(el, ClassAnimationState2); // elemen masih tersembunyi, namun memiliki transisi
					_setTimeout(()=>{
						addClasses(el, ClassAnimationState3); // elemen mulai ditampilkan
						_setTimeout(()=>{
							removeClasses(el, ClassAnimationState1, ClassAnimationState2, ClassAnimationState3);
						}, 1100); // transisi animasi adalah 1s
					}, 20);
				};
				const waiter = ()=>{
					if(activeEvent){
						_clearTimeout(activeEvent);
					}
					activeEvent = _setTimeout(()=>{
						fn();
					}, 300);
				};
				const add = ()=>{
					addEvent(mainScrollable, "scroll", waiter);
				};
				const remove = ()=>{
					removeEvent(mainScrollable, "scroll", waiter);
				};
			
				return{add,remove}
			})();
			return main;
		})();		
							
		const p_objLoop = (o, func)=>{
			const keys = Object.keys(o);
			const len = keys.length;
			for(let i=0;i<len;i++){
				const key = keys[i];
				if(func(o[key], i, key) === "break"){
					break;
				}
			}
		};	
		const p_objClone = (o)=>{
			/* return Object || false if cant stringify object */
			let newObj;
			try{
				newObj = JSON.parse(JSON.stringify(o));
			}
			catch(e){
				return false;
			}
			return newObj;
		};
		const p_objAssign = (()=>{
			const objLoop = p_objLoop;
			const main = (target, newData)=>{
				objLoop(newData, (item, index, key)=>{
					target[key] = item;
				});
			};
			return main;
		})();
		
		const p_copyTextToClipboard = (()=>{
			// source: https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript (dengan modifikasi)
			const doc = g_doc;
			const body = g_body;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const removeElem = p_elemRemove;
			
			const main = (string, successCallback, errorCallback)=>{
				if(!navigator.clipboard){
					byExecCommand(string, successCallback, errorCallback);
				}
				else{
					byClipboardAPI(string, successCallback, errorCallback);
				}
			};
			const byClipboardAPI = (string, successCallback, errorCallback)=>{
				// disini, APInya berbasi promis, jadi byClipboardAPI tidak dapat melakukan return value
				// inilah kenapa parameter callbacks diterapkan pada fungsi utama
				navigator.clipboard.writeText(string).then(()=>{
					if(successCallback){
						successCallback();
					}
				}, (err)=>{
					if(errorCallback){
						errorCallback();
					}
				});
			};
			const byExecCommand = (string, successCallback, errorCallback)=>{
				const textArea = createElem({t : "textarea"});
				textArea.value = string;
				
				// Avoid scrolling to bottom
				textArea.style.top = "0";
				textArea.style.left = "0";
				textArea.style.position = "fixed";
				textArea.style.visibility = "hidden";
				
				appends(body, textArea);
				
				textArea.focus();
				textArea.select();
				
				try{
					const successful = doc.execCommand("copy");
					if(successful){
						if(successCallback){
							successCallback();
						}
					}
					else{
						if(errorCallback){
							errorCallback();
						}
					}
				} 
				catch(err){
					errorCallback();
				}
				
				removeElem(textArea);
			};
			return main;
		})();
		
		const p_configsCreateData = (()=>{
			const types = ["", "string", "boolean", "number", "function"];
			const main = (sources)=>{
				/*	PEMBUATAN 
						const configsData = configsCreateData([
							[name, type, value, optionOrMinMax]
						]);
				
						types							: 	1 String, 2 boolean, 3 Number
						optionOrMinMax			:	number || null || undefined	
						value							:	default value
						
						RETURN OBJECT DENGAN PROPERTY SESUAI {{name}}
							{
								name : {
									name 	: 
									type 		:
									value 	:
									option	:
								}
							}
				*/
				const returned = {};
				for(const item of sources){
					const name = item[0];
					const type = item[1];
					const value = item[2];
					const optionOrMinMax = item[3];
					const obj = {};
					obj.name = name;
					obj.type = types[type];
					obj.value = value;
					if(optionOrMinMax){
						if(type === 3){
							obj.min = optionOrMinMax[0];
							obj.max = optionOrMinMax[1];
						}
						else{
							obj.option = optionOrMinMax;
						}
					}
					returned[name] = obj;
				}			
				return returned;
			};
			return main;
		})();
		const p_configsStringValueToRealValue = (()=>{
			/* FUNGSI:
				*	mengconvert {{string value ke real value}} dan {{mengassign semua property}} pada configsData ke configs
				*	return {{configs}} yang sudah tervalidasi sepenuhnya
				
				CATATAN...!
				*	Tentang value none
					Untuk value none, jika option tidak terdefinisi, value akan diubah ke "". Sebaliknya, value tetap ke none.
				*	Tentang number
					type number belum mensupport options, hanya min dan max */
			const stringTrim = p_stringTrim;
			const stringIsTrue = p_stringIsTrue;
			const typeIsNumber = p_typeIsNumber;
			const booleanStringValue = ["true", "false", "yes", "no"];
			const main = (configs, configsData)=>{
				let keysInConfigs = Object.keys(configs);
				let keysInData = Object.keys(configsData);
				
				// REMOVE ALL UNKNOW PROPERTIES IN Configs
				for(const key of keysInConfigs){
					if(keysInData.indexOf(key) === -1){
						delete configs[key];
					}
				}
				
				keysInConfigs = Object.keys(configs);
				// SAMPAI DISINI, SEMUA PROPERTY PADA {{keysInConfigs}} TERDAPAT PADA {{keysInData}}
				
					
				// VALIDASI VALUE
				for(const key of keysInConfigs){
					const data = configsData[key];
					let usedValue = stringTrim(configs[key] + "");		// karena pada keadaan ini value masih berupa string semua
					const type = data.type;
					const defaultValue = data.value;		
						
					if(type === "string"){
						if(data.option){
							if(data.option.indexOf(usedValue) === -1){
								usedValue = defaultValue;
							}
						}
						else{
							if(usedValue === "null" || usedValue === "-"){
								usedValue = defaultValue;
							}
							else{
								if(usedValue === "none"){
									usedValue = "";
								}
							}
						}
					}		
					
					else if(type === "number"){
						const numValue = parseInt(usedValue);
						if(typeIsNumber(numValue)){
							let usedNumValue = numValue;
							
							// validasi min
							if(data.min !== null && data.min !== undefined){
								if(numValue < data.min){
									usedNumValue = null;
								}
							}
							
							// validasi max
							if(data.max !== null && data.max !== undefined){
								if(numValue > data.max){
									usedNumValue = null;
								}
							}
							
							if(usedNumValue === null){
								usedValue = defaultValue;
							}
							else{
								usedValue = usedNumValue;
							}
						}
						else{
							usedValue = defaultValue;
						}
					}
					
					else if(type === "boolean"){
						if(booleanStringValue.indexOf(usedValue) !== -1){
							if(stringIsTrue(usedValue)){
								usedValue = true;
							}
							else{
								usedValue = false;
							}
						}
						else{
							usedValue = defaultValue;
						}
					}	
					// next type here...............
					
					
					configs[key] = usedValue;						
				}
				
				
				// {{step2}}
				// sampai disini, karena loop basis adalah berdasarkan keys in configs
				// ada kemungkinan suatu configs pada data tidak terdefinisi
				// definisikan ke value default
				// disini, value setiap configs mungkin {{realValue}}, {{emptyString}}, {{null}}
				for(const key of keysInData){
					const config = configs[key];
					if(config === undefined){
						configs[key] = configsData[key].value;
					}
				}
				
				return configs;
			};
			return main;
		})();		
		const p_configsExtractFromString = (()=>{
			/*	TAHAP PADA FUNGSI
					1.	Membuat {{configsStringValue}} berdasarkan {{configsString}} yang diformat dengan {{name=value;}}
					2.	Mengconvert {{configsStringValue}} ke {{configsRealValue}}
				
				RETURN
					?configsData didefinisikan
						- {{configsRealValue}}
					?sebaliknya
						- {{configsStringValue}}
				
				ARGUMENTS
					* string 			:  	{{configsString}} yang diformat dengan {{name=value;}}
					* configsData	:	falsy || configsData yang dibuat dengan {{p_configsCreateData}}
												configsData == falsy mungkin diperlukan untuk beberapa jenis configs yang tidak dapat divalidasi dengan data
			*/
			const stringTrim = p_stringTrim;
			const configsStringValueToRealValue = p_configsStringValueToRealValue;
			const main = (string, configsData)=>{
				const objString = {};
				const arrayString = stringTrim(string).split(";");
				for(const item of arrayString){
					const propertyAndValue = item.split("=");
					if(propertyAndValue.length === 2){
						const property = propertyAndValue[0].trim();
						if(property){
							if(!configsData || configsData[property]){
								objString[property] =  propertyAndValue[1].trim();
							}
						}
					}
				}
				
				// sampai disini {{arrayObjString}} telah menagndung semua property yang terdapat pada input {{string}} yang valid (juga terdapat pada {{configsData}})
				// adapun value masih berupa string
				// lakukan validasi dan assign real value
				
				if(configsData){	
					configsStringValueToRealValue(objString, configsData);
					// sampai disini {{objString}} telah memiliki value sebenarnya
				}
				
				return objString;
			};
			return main;
		})();
		const p_configsValidate = (()=>{
			/*	FUNGSI:
					*	memvalidasi {{configsRealValue}}
						ini mungkin dibutuhkan untuk proses validasi berbagai configs yang didapatkan dengan runEval
					*	return nothing, {{configsRealValue}} yang telah {{tervalidasi}}
					*	hanya memvalidasi property {{configsRealValue}} yang tersedia pada {{configsData}}
			*/
			const typeIsString = p_typeIsString;
			const typeIsNumber = p_typeIsNumber;
			const typeIsBoolean = p_typeIsBoolean;
			const typeIsFunction = p_typeIsFunction;
			const objLoop = p_objLoop;
			const main = (configs, configsData)=>{
				objLoop(configs, (item, index, key)=>{
					const data = configsData[key];
					if(data){
						const {type, option, min, max, value} = data;
						let resetToDefault = false;
						if(	type === "string" && !typeIsString(item) ||
								type === "boolean" && !typeIsBoolean(item) ||
								type === "number" && !typeIsNumber(item) ||
								type === "function" && !typeIsFunction(item)
						){
							resetToDefault = true;
						}
						
						if(!resetToDefault){
							if(option){
								if(option.indexOf(item) === -1){
									resetToDefault = true;
								}
							}
							else{
								if(min){
									if(item < min){
										resetToDefault = true;
									}
								}
								
								if(max){
									if(item > max){
										resetToDefault = true;
									}
								}
							}
						}
						
						if(resetToDefault){
							configs[key] = value;
						}
					}
				});
			};
			return main;
		})();
		const p_configsElemToObj = (()=>{
			/* arguments:
			idOrElem							: 	suffix id element. setiap element configs memiliki id dengan format w-configs-[id], atau element
			configsData		 				: 	ketika terdefinisi, return real value. sebaliknya, return string value
			unnecessaryParentLevel 		: 	2 menghapus parent-parent, 
														1 untuk menghapus parent, 
														0 menghapus el, 
														null tidak menghapus,
														undefined tidak menghapus,
			*/
			/*return
			null									: element tidak ditemukan dan tidak terdapat configs data
			configs string value			: ketika tidak terdefinisi configsData
			configs real value				: ketika terdefinisi configs data */
			const getById = p_elemGetById;
			const removeComment = p_removeComment;
			const runEval = p_runEval;
			const configsStringValueToRealValue = p_configsStringValueToRealValue;
			const typeIsString = p_typeIsString;
			const elemRemove =p_elemRemove;
			const stringTrim = p_stringTrim;
			const main = (idOrElem, configsData, unnecessaryParentLevel)=>{
				const el = typeIsString(idOrElem) ? getById("w-configs-" + idOrElem) : idOrElem;
				if(el || configsData){
					// remove element
					if(el){
						if(unnecessaryParentLevel !== null && unnecessaryParentLevel !== undefined){
							let willRemovedElem = el;
							let activeLevel = unnecessaryParentLevel;
							while(activeLevel > 0){
								willRemovedElem = willRemovedElem.parentNode;
								activeLevel -= 1;
							}
							elemRemove(willRemovedElem);
						}
					}
					
					const string = stringTrim(el ? removeComment(el.innerHTML) : "");
					const object = el ? runEval(string) : {};
					
					if(object){
						if(!configsData){
							return object;
						}
						else{
							return configsStringValueToRealValue(object, configsData);
						}
					}
				}
				return null;
			};
			return main;
		})();
		const p_configsGetOptionIndex = (configsData, property, value, base)=>{
			return configsData[property].option.indexOf(value) + base;
		};
		const p_configsCloneProperties = (()=>{
			const objClone = p_objClone;
			const objLoop = p_objLoop;
			const main = (holder, source, arrayGetProperties, arraySkipProperties, newNamePrefix)=>{
				/*	Arguments:
						holder							:	wajib. berupa object configs data 
						source							:	configsData yang akan di clone
						arrayGetProperties		:	daftar properties yang akan diambil, ketika ini terdefinisi, {{arraySkipProperties}} harus falsy
						arraySkipProperties		:	daftar properties yang tidak akan diambil, ketika ini terdefinisi {{arrayGetProperties}} harus falsy
						newNamePrefix				:	prefix untuk nama 
					Aksi
						Mengassign semua property yang diambil ke holder dengan atau tanpa prefix
						
					Return
						nothing, hanya mengassign new prperties
					
					Catatan
						fungsi bersifat DEV, berbagai kemungkinan error tidak diantisivasi
						*	setiap nama pada array harus tersedia pada source
				*/
				if(arrayGetProperties){
					for(const itemName of arrayGetProperties){
						const clonned = objClone(source[itemName]);
						const newName =  newNamePrefix  ? newNamePrefix + "_" + itemName : itemName;
						if(newNamePrefix){
							clonned.name = newName;
						}
						holder[newName] = clonned;
					}
				}
				else{
					objLoop(source, (config, index, key)=>{
						if(!arraySkipProperties || arraySkipProperties.indexOf(key) === -1){
							const clonned = objClone(config);
							const newName =  newNamePrefix  ? newNamePrefix +"_"+ key : key;
							if(newNamePrefix){
								clonned.name = newName;
							}
							holder[newName] = clonned;
						}
					});
				}
			};
			return main;
		})();
		
		const p_configsAssignAll = (()=>{
			/* CATATAN: 
			fungsi harus dipanggil setelah proses validasi dilakukan atau configs sudah sepenuhnya valid (dev definition)*/
			const objLoop = p_objLoop;
			const main = (configsData, configs)=>{
				objLoop(configsData, (configData, index, key)=>{
					if(configs[key] === undefined){
						configs[key] = configData.value;
					}
				});
			};
			return main;
		})();	
		const p_configsOverwrite = (()=>{
			const objLoop = p_objLoop;
			const main = (configs, priorityConfigs)=>{
				objLoop(configs, (item, index, key)=>{
					const priority = priorityConfigs[key];
					if(priority !== undefined && priority !== null){
						configs[key] = priority;
					}
				});
			};
			return main;
		})();
	
		
		
		
		
		const g_wijs = g_win.Wi;
		g_wijs.log = [];								// mungkin perlu dipush beberapa log yang memudahkan proses developer
		g_wijs.msgs = [];							// berbagai msg yang mungkin dapat menyebabkan masalah
		g_wijs.temp = {};							// holder untuk fungsi yang bersifat sementara
		g_wijs.error = [];
		g_wijs.layout = {};	
		
		const g_wijsBlog = g_wijs.blog;
		const g_wijsVars = g_wijs.vars;
		const g_wijsLog = g_wijs.log;
		const g_wijsMsgs = g_wijs.msgs;
		const g_wijsTemp = g_wijs.temp;
		const g_wijsError = g_wijs.error;
		const g_wijsLayout = g_wijs.layout;	
		const g_wijsTexts = g_wijs.texts;
		const g_wijsConfigs = g_wijs.configs;
		const g_wijsIcons = g_wijs.icons;
		const g_wijsFn = g_wijs.fn;
		const g_wijsEvents = g_wijs.events;
		const g_wijsWidgets = g_wijs.widgets;
		
		
		const dev_buttonBoxType = "outline";
		const dev_buttonRounded = true;
		const dev_tableShadow = true;
		const dev_tableAlign = "center";
		const dev_youtubeVideoShadow = true;
		const dev_indentParagraphBorder = "dashed";
		const dev_tabShadow = true;
		const dev_codeboxShadow = true;
		const dev_enableOverlayToC = true;
		
		
		
		const g_isSelfReferrer = (()=>{
			/*	TENTANG REFERRER DAN SESSION
				*	USER BERADA PADA BLOG
					1	USER MENGKLIK SALAH SATU LINK (SAME TAB)
						1.1	*	Protocol sebelumnya berbeda
									R 	:	empty
									S	:	false
								*	Protokol sebelumnya sama
									R	:	normal
									S	:	true
									
					2.	USER MENGKLIK SALAH SATU LINK (NEW TAB)
						2.1	*	Protocol sebelumnya berbeda
									R 	:	empty
									S	:	false
								*	Protokol sebelumnya sama
									R	:	normal
									S	:	false
						
								
					>	USER MEREFRESH DENGAN ENTER ADDRESS BAR	(return empty string)
							R		:	empty
							S		:	true
							
					>	USER MEREFRESH DENGAN TOMBOL REFRESH 
						Ini akan tergantung keadaan, 
							*	jika sebelumnya user sudah pernah merefresh dengan entr address bar
									R	:	empty
									S	:	true
									
							*	sebaliknya
									R :	referal sebelumnya
									S :	true
				
				berdasarkan data diatas, terdapat satu keadaan dimana referal sebenarnya berasal dari blog sendiri namun kedua data mereturn falsy hal ini terjadi pada state 1.1 dan state 2.1. 
				untuk protocol yang berbeda, ini tidak memiliki solusi hingga saat ini. oleh karena itu, pada koding xml, pastikan protocol semua link pada blog menggunakan protocol yang sedang aktif.
				adapun untuk kegiatan open new tab, pembacaan akan dilakukan dengan referrer.
				
				Tambahan:
				Sission juga tetap akan bernilai true untuk kegiatan submit comment.
			*/
			const doc = g_doc;
			const session = p_session;
			const local = p_local;
			const homepageUrl = g_wijsBlog.homepageUrl;
			const referrer = doc.referrer;
			
			// sesuaikan dengan berbagai local key eksternal. 
			// Ini dibutuhkan pada proses penghapusan local.
			// adapun local ini tidak akan dihapus meskipun !isSelf.
			const keepLocalWithThisKeys = [local.createKey("Cookiepolicy"), local.createKey("View_Mode")];
																										
			const sessionKey = session.createKey("Session");
			const sessionData = session.get(sessionKey);
			const hasSession = sessionData === "true";
			
			let state = false;
			if(hasSession){
				state = true;
				// kondisi ini dapat true meski referal bukan url sendiri,
				// contoh kasus ini adalah ketika referal adalah dashbaord blogger (jika aksi dilakukan terus menerus)
				// jika kita open browser ulang, prilaku tetap normal (return falsy)
				// penyebab kondisi ini masih belum diketahui, kemungkinan besar kondisi ini disebabkan oleh chace browser
				// hal ini karena mungkin pada antarmuka HTML editor blogger, run juga dijalankan
				// kondisi ini tidak akan dibuat false, tetap manfaatkan prilaku chace browser
			}
			else{
				// kondisi ini dapat terjadi ketika user mengklik open new tab
				// oleh karena itu, cek referel,
				// adapun referal sendiri, untuk open new tab, selagi protokol adalah sama, referel akan mereturn url sebelumnya
				if(referrer.indexOf(homepageUrl) !== -1){
					state = true;
				}
				
				// untuk kegiatan submit komen, referal adalah blogger comment ("https://www.blogger.com/comment-iframe.do") namun session tetap truly
			}
			
			
			if(!state){
				session.set(sessionKey, "true");

				(()=>{ // hapus local
					const localKeys = local.getKeys();			
					for(const key of localKeys){
						if(keepLocalWithThisKeys.indexOf(key) === -1){
							local.remove(key);
						}
					}
				})();
			}
			
			return state;
		})();			
		const g_mainScrollbarSizes = (()=>{ // ver, hor
			const getScrollbarSizes = p_getScrollbarSizes;
			const body = g_body;
			return getScrollbarSizes(body);
		})();
		const g_bodyMirrorScrollbarSizes = (()=>{ // ver, hor
			const getScrollbarSizes = p_getScrollbarSizes;
			const bodyMirror = g_bodyMirror;
			return getScrollbarSizes(bodyMirror);
		})();				
		
	
		const SE_OnLoad = (()=>{
			let state = false;
			const fns = [];
			const push = (fn)=>{
				if(fns.indexOf(fn) === -1){
					fns.push(fn);
					
					if(state){
						fn();
					}
				}
			};
			const execute = ()=>{
				if(!state){
					for(const fn of fns){
						fn();
					}
					
					state = true;
				}
			};	
			return {
				push,
				execute,
			}
		})();
		const SE_OnscrollStop = (()=>{
			const arrayRemoveItem = p_arrayRemoveItem;
			
			const _setTimeout = setTimeout;
			const _clearTimeout = clearTimeout;
			const elMainScrollable = g_mainScrollable;
			let activeTimeout;
			const funcs = [];
			const init = ()=>{
				const timeoutFunction = (e)=>{
					for(const func of funcs){
						func(e);
					}
				};
				elMainScrollable.onscroll = (e)=>{
					if(activeTimeout){
						_clearTimeout(activeTimeout);
					}
					
					activeTimeout = _setTimeout(timeoutFunction, 300);
				};
			};
			const push = (fn)=>{
				if(funcs.indexOf(fn) === -1){
					funcs.push(fn);
				}
			};
			const remove = (fn)=>{
				if(funcs.indexOf(fn) !== -1){
					arrayRemoveItem(funcs, fn);
				}
			};
			return {
				push,
				remove,
				init,
			}
		})();	
		const SE_OnFinish = (()=>{
			const fns = [];
			const push = (fn)=>{
				if(fns.indexOf(fn === -1)){
					fns.push(fn);
				}
			};
			const execute = ()=>{
				for(const fn of fns){
					fn();
				}
			};
			return{
				push,
				execute
			}
		})();
		const SE_OnAllWidgetsInited = (()=>{
			const fns = [];
			const push = (fn)=>{
				if(fns.indexOf(fn === -1)){
					fns.push(fn);
				}
			};
			const execute = ()=>{
				for(const fn of fns){
					fn();
				}
			};
			return{
				push,
				execute
			}
		})();
		const SE_OnChangeViewMode = (()=>{
			const fns = [];
			const push = (fn)=>{
				if(fns.indexOf(fn === -1)){
					fns.push(fn);
				}
			};
			const execute = (currentMode)=>{
				for(const fn of fns){
					fn(currentMode);
				}
			};
			return{
				push,
				execute
			}
		})();	
	
	
	
	
	
		// {{SPECIAL_PROTOTYPES}}
		const p_createFn = (()=>{
			const fn = g_wijs.fn;
			const pendingFn = g_wijs.pendingFn;
			const main = (name, runfuction)=>{
				fn[name] = runfuction;
				if(pendingFn.indexOf(name) !== -1){
					runfuction();
				}
			};
			return main;
		})();
		const p_pushMsg = (msg)=>{
			g_wijsMsgs.push(msg);
		};
		const p_pushError = (data)=>{
			g_wijsError.push(data);
		};
		const p_pushLog = (data)=>{
			g_wijsLog.push(data);
		};		
		const p_insertJsBasedCss = (()=>{
			const head = g_head;
			const getById = p_elemGetById;
			const createElem = p_elemCreateElem;
			const createTextNode = p_elemCreateTextNode;
			const appends = p_elemAppends;
			const holder = createElem({t : "style", i : "w-css-by-js"});
			appends(head, holder);
			
			return (selector, styleValue)=>{
				holder.appendChild(createTextNode(selector + "{" + styleValue + "}"));
			}
		})();		
		const p_getScriptParent = (()=>{
			const getById = p_elemGetById;
			const prefix = "w-js-";
			return (name)=>{
				const el = getById(prefix + name);
				if(el){
					return el.parentNode;
				}
				else{
					return null;
				}
			}
		})();
			
		const p_urlIsSelf = (()=>{
			const wijsBlog = g_wijsBlog;
			const {homepageUrl, canonicalHomepageUrl} = wijsBlog;
			
			// hapus protocol
			const homepageUrlNoProtocol = homepageUrl.substring(homepageUrl.indexOf("://") + 3, homepageUrl.length);
			const canonicalHomepageUrlNoProtocol = canonicalHomepageUrl.substring(canonicalHomepageUrl.indexOf("://") + 3, canonicalHomepageUrl.length);
			
			// hapus slash
			const homepageUrlHost = homepageUrlNoProtocol.replace("/", "");
			const canonicalHomepageUrlHost = canonicalHomepageUrlNoProtocol.replace("/", "");
			
			return (url)=>{
				return url === "#" || url.indexOf(homepageUrlHost) !== -1 || url.indexOf(canonicalHomepageUrlHost) !== -1;
			}
		})();
		const p_urlSetParam = (url, paramName, paramValue)=>{
			/* mengappend atau mereplace param */
			let newUrl = url;
			const regString = paramName + "=(.+?)($|&)";
			const reg = new RegExp(regString);
			const match = reg.exec(newUrl);
			if(match){
				newUrl = newUrl.replace(match[0], paramName + "=" + paramValue + match[2]);
			}
			else{
				newUrl = newUrl + (newUrl.indexOf("?") === -1 ? "?" : "&") + (paramName + "=" + paramValue);
			}
			return newUrl;
		};
		
		const p_urlAppendParam = (url, param)=>{
			return url + (url.indexOf("?") === -1 ? "?" : "&") + param;
		};
		const p_urlAppendMobileParam = (()=>{
			const urlAppendParam = p_urlAppendParam;
			const win = g_win;
			const currentUrl = win.location.href;
			return (url)=>{
				if(currentUrl.indexOf("m=1") !== -1){
					return urlAppendParam(url, "m=1");
				}
				else if(currentUrl.indexOf("m=0") !== -1){
					return urlAppendParam(url, "m=0");
				}
				else{
					return url;
				}
			}
		})();
		
		const p_urlGetCanonical = (url, removeWww, removeProtocol)=>{
			let newUrl = url;
			const paramsStartIndex = newUrl.indexOf("?");
			const hashStartIndex = newUrl.indexOf("#");
			let nearestIndex = null;
			if(paramsStartIndex !== -1 && hashStartIndex !== -1){
				nearestIndex = paramsStartIndex < hashStartIndex ? paramsStartIndex : hashStartIndex;
			}
			else if(paramsStartIndex !== -1 || hashStartIndex !== -1){
				// terdapat satu yang -1, gunakan yang bukan -1
				nearestIndex = paramsStartIndex !== -1 ? paramsStartIndex : hashStartIndex;
			}
			// else,
			// semuanya -1,
			// do nothings
		
			
			if(nearestIndex !== null){ 
				newUrl = newUrl.substring(0, nearestIndex);
			}
			
			if(removeWww){
				// ini harus didahulukan karena ada kemungkinan karakter "www." juga terdapat pada patch,
				// jadi pencarian akan menggunakan "://www."
				newUrl = newUrl.replace("://www.", "://");
			}
			
			if(removeProtocol){
				newUrl = newUrl.replace("https://", "").replace("http://", "");
			}
			
			if(newUrl[newUrl.length - 1] === "/"){
				newUrl = newUrl.substring(0, newUrl.length - 1);
			}
			
			return newUrl;
		};
		const p_urlGetParamValue = (()=>{
			const win = g_win;
			return (urlArg, paramName)=>{
				const url = urlArg || win.location.href;
				let usedValue = null;
				const regString = paramName + "=(.+?)($|&|#)";
				const reg = new RegExp(regString);
				const match = reg.exec(url);
				if(match){
					usedValue = match[1];
				}
				return usedValue;	
			};
		})();			
		const p_urlDoBlankTarget = (()=>{
			const urlIsSelf = p_urlIsSelf;
			const wijsConfigs = g_wijsConfigs;
			let open_external_link_in_new_tab = null;
			return (url)=>{
				if(open_external_link_in_new_tab === null){
					open_external_link_in_new_tab = wijsConfigs.open_external_link_in_new_tab;
				}
				
				if(open_external_link_in_new_tab){
					// ketika url isSelf, return false, 
					// sebaliknya, return true. Jadi, fungsi dapat ditulis seperti berikut:
					return !urlIsSelf(url);
				}
				else{
					return false;
				}
			};
		})();
		const p_urlDoNofollow = (()=>{
			const urlIsSelf = p_urlIsSelf;
			const wijsConfigs = g_wijsConfigs;
			let add_nofollow_for_external_link = null; // karena belum terdefinisi pada scope ini
			return (url)=>{
				if(add_nofollow_for_external_link === null){
					add_nofollow_for_external_link = wijsConfigs.add_nofollow_for_external_link;
				}
				
				if(add_nofollow_for_external_link){
					// ketika url isSelf, return false, 
					// sebaliknya, return true. Jadi, fungsi dapat ditulis seperti berikut:
					return !urlIsSelf(url);
				}
				else{
					return false;
				}
			};
		})();		
		const p_urlAssignRel = (()=>{
			const urlDoNofollow = p_urlDoNofollow;
			const main = (elem)=>{
				const href = elem.href;
				if(urlDoNofollow(href)){
					const hasRel = elem.getAttribute("rel");
					if(!hasRel){
						elem.setAttribute("rel", "nofollow");
					}
				}
			};
			return main;
		})();
		const p_urlAssignTarget = (()=>{
			const urlDoBlankTarget = p_urlDoBlankTarget;
			const main = (elem)=>{
				const href = elem.href;
				if(urlDoBlankTarget(href)){
					const hasTarget = elem.getAttribute("target");
					if(!hasTarget){
						elem.setAttribute("target", "_blank");
					}
				}
			};
			return main;
		})();		
		const p_urlGetAnchor = (url)=>{
			let anchorId = url;
			const anchorStart = url.indexOf("#");
			if(anchorStart !== -1){
				anchorId = url.substring(anchorStart + 1);
				
				const paramStart = anchorId.indexOf("?");
				if(paramStart !== -1){
					anchorId = anchorId.substring(0, paramStart);
				}
				
				const otherStart = anchorId.indexOf("&");
				if(otherStart !== -1){
					anchorId = anchorId.substring(0, otherStart);
				}
				
				return anchorId;
			}
			
			return null;
		};
		const p_urlGetHash = p_urlGetAnchor;
		const p_urlRemoveProtocol = (url)=>{
			let newUrl = url.trim();
			newUrl = newUrl.replace(/^https:\/\//, "").replace(/^http:\/\//, "");
			return newUrl;
		};
		
		const p_dateISOToString = (()=>{
			const stringTrim = p_stringTrim;
			const objLoop = p_objLoop;
			
			
			let monthNames;
			let defaultDateFormat;
			
			return (ISO, format)=>{
				if(!defaultDateFormat){
					const wijsTexts = g_wijsTexts;
					const wijsConfigs = g_wijsConfigs;
					
					defaultDateFormat = wijsConfigs.dateFormat || "MMMM, DD, YYYY";
					
					monthNames = (()=>{
						const returned = [];
						const reg = /month_(\d+?)$/;
						objLoop(wijsTexts, (item, index, key)=>{
							const match = reg.exec(key);
							if(match){
								returned[parseInt(match[1]) - 1 ] = item;
							}
						});
						
						return returned;
					})();
				}
				const year = ISO.substring(0,4);
				const month = ISO.substring(5,7);
				const day = ISO.substring(8,10);
				const dayNotNol = day[0] !== "0" ? day : day[1];
					
				const monthNum = parseInt(month); // 1 digit number based 1
				const dayNum = parseInt(day); // 1 digit number based 1
					
				let usedFormat;
				if(!format){
					usedFormat = defaultDateFormat;
				}
				else{
					usedFormat = stringTrim(format + "");
					if(!usedFormat){
						usedFormat = defaultDateFormat;
					}
				}
				
				let	time = usedFormat;
						time = time.replace("DD", day);
						time = time.replace("D", dayNotNol);
						time = time.replace("MMMM", monthNames[monthNum-1]);
						time = time.replace("MM", month);
						time = time.replace("YYYY", year);
						
				return time;
			};
		})();
		const p_translateTextWithData = (s, com, lenParam)=>{
			let newString = s;
			if(com){
				const arrayKeys = com.keys;
				const arrayValues = com.values;
				const len = arrayKeys.length;
				if(len !== 0 && len === arrayValues.length){
					for(let i=0;i<len;i++){
						const key = arrayKeys[i];
						const value = arrayValues[i];
						const reg = new RegExp("{{" + key + "}}", "g");
						newString = newString.replace(reg, value);
					}	
				}
				
				if(typeof lenParam === "number"){
					const singleOrMultipleReg = /{{(.*?):(.*?)}}/g;
					newString = newString.replace(singleOrMultipleReg, (match, g1, g2)=>{
						return lenParam <= 1 ? g1 : g2;
					});
				}
			}
			return newString;
		};
		
		const FW_LisenceValidator = (()=>{ 
			/*
				*	return function(); yang akan mereturn boolean
				*	cari: 
					{{license_checker}}  
						-	proses pengecek awal lisensi
						
					{{license_integrations}}			
						-	ada banyak
						-	proses integrasi licensi ke berbagai fitur
			*/
			const alphabet  = g_alphabet;
			const number = g_number;
			const themeNameToAlphabetIndex = g_themeNameToAlphabetIndex;
			const themeVariantToAlpabetIndex = g_themeVariantToAlpabetIndex;
			const wibloggerComToAlphabetIndex = g_wibloggerComToAlphabetIndex;
			
			const win = g_win;
			const s_location = g_s_location; 
			const s_href = g_s_href;
			const s_www = g_s_www;
			const s_https = g_s_https;
			const s_http = g_s_http;
			
			
			const themeNameString = (()=>{
				let value = "";
				for(const i of themeNameToAlphabetIndex){
					value += alphabet[i];
				}
				return value;
			})(); 
			const themeVariantString = (()=>{
				let value = "";
				for(const i of themeVariantToAlpabetIndex){
					value += alphabet[i];
				}
				return value;
			})(); 
			const wiBloggerComString = (()=>{
				let value = "";
				for(const i of wibloggerComToAlphabetIndex){
					value += alphabet[i];
				}
				return value;
			})(); 
			const domainSortedVariant = [];
			const main = (key)=>{
				// STEP 1: pisahkan key per karakter
				const keyPerChars = key.trim().split("-");
				
				// STEP 2: pisahkan key per grup 
				// terdapat 3 grup, themeName, themeVarian, dan wibloggerComToAlphabetIndex
				const themeNameKeys = (()=>{
					const returned = [];
					const len = themeNameToAlphabetIndex.length;
					for(let i=0;i<len;i++){
						const key = keyPerChars[i];
						if(key){
							returned.push(keyPerChars[i]);
						}
						else{
							// error karena jumlah key tidak sesuai,
							// ini bisa diidentifikasikan bahwa key tidak valid
							return null;
						}
					}
					return returned;
				})();		
				const themeVariantKeys = (()=>{
					const returned = [];
					const indexStart = themeNameToAlphabetIndex.length;
					const indexEnd = indexStart + themeVariantToAlpabetIndex.length;
					for(let i=indexStart;i<indexEnd;i++){
						const key = keyPerChars[i];
						if(key){
							returned.push(keyPerChars[i]);
						}
						else{
							// error karena jumlah key tidak sesuai,
							// ini bisa diidentifikasikan bahwa key tidak valid
							return null;
						}
					}
					return returned;
				})();
				const wiBloggerKeys = (()=>{
					const returned = [];
					const indexStart = themeNameToAlphabetIndex.length + themeVariantToAlpabetIndex.length;
					const indexEnd = indexStart + wibloggerComToAlphabetIndex.length;
					for(let i=indexStart;i<indexEnd;i++){
						const key = keyPerChars[i];
						if(key){
							returned.push(keyPerChars[i]);
						}
						else{
							// error karena jumlah key tidak sesuai,
							// ini bisa diidentifikasikan bahwa key tidak valid
							return null;
						}
					}
					return returned;
				})();
				
				
				if(!themeNameKeys || !themeVariantKeys || !wiBloggerKeys){
					// salah satu grup tidak valid
					return null;
				}
				
				// STEP 3: VALIDASI BERDASARKAN URL
				const url = win[s_location][s_href];
				const urlNoProtocol = url.replace(s_https, "").replace(s_http, "");
				const urlNoWww = urlNoProtocol.replace(s_www, "");
				const lastHastIndex = urlNoWww.indexOf("/");
				let urlDomain;
				if(lastHastIndex === -1){
					urlDomain = urlNoWww;
				}
				else{
					urlDomain = urlNoWww.substring(0, lastHastIndex);
				}
				
				
				// STEP4. MEMBUAT VARIAN SORT 
				const domainSortNo = urlDomain; // wiblogger.com to wiblogger.com			prefix in key 0-2
				const domainSortRevert = (()=>{ // wiblogger.com to moc.reggolbiw			prefix in key 3-5
					let returned = "";
					const len = urlDomain.length;
					for(let i=len-1;i>=0;i--){
						returned += urlDomain[i];
					}
					return returned;
				})();
				const domainSortSplit = (()=>{ // wiblogger.com to ger.comwiblog				prefix in key 6-8
					// ketika jumlah karakter ganjil, karakter yang banyak akan berada pada section2
					// misal abcdefg  menjadi section1[abc], section1[defg], full[defgabc]
					const len = urlDomain.length;
					const half = Math.floor(len / 2);
					const section1 = urlDomain.substring(0, half);
					const section2 = urlDomain.substring(half, len);
					return section2 + section1;
				})();
				
				domainSortedVariant.push(domainSortNo);
				domainSortedVariant.push(domainSortRevert);
				domainSortedVariant.push(domainSortSplit);
				
				
				// STEP 5: VAIDASI GROUP
				const isValidThemeName = (()=>{
					const len = themeNameKeys.length;
					for(let i=0;i<len;i++){
						const key = themeNameKeys[i];
						const targetChar = themeNameString[i];
						const isValid = _validate(key, targetChar);
						if(!isValid){
							return false;
						}
					}
					
					return true;
				})();
				const isValidThemeVariant = (()=>{
					const len = themeVariantKeys.length;
					for(let i=0;i<len;i++){
						const key = themeVariantKeys[i];
						const targetChar = themeVariantString[i];
						const isValid = _validate(key, targetChar);
						if(!isValid){
							return false;
						}
					}
					
					return true;
				})();
				const isValidWibloggerCom = (()=>{
					const len = wiBloggerKeys.length;
					for(let i=0;i<len;i++){
						const key = wiBloggerKeys[i];
						const targetChar = wiBloggerComString[i];
						const isValid = _validate(key, targetChar);
						if(!isValid){
							return false;
						}
					}
					
					return true;
				})();
				
				if(isValidThemeName && isValidThemeVariant && isValidWibloggerCom){
					return true;
				}
				
				return false;
			};
			const _validate = (()=>{
				const prefixNoSort = [alphabet[0], alphabet[1], alphabet[2], number[0] + "", number[1] + "", number[2] + ""];
				const prefixRevertSort = [alphabet[3], alphabet[4], alphabet[5], number[3] + "", number[4] + "", number[5] + ""];
				const prefixSplitSort = [alphabet[6], alphabet[7], alphabet[8], number[6] + "", number[7] + "", number[8] + ""];
				return (charKey, targetChar)=>{
					const sortPrefix = charKey[0];
					const charIndexInDomainSorted = charKey.substring(1, charKey.length);
					let domainSorted;
					if(sortPrefix){
						if(prefixNoSort.indexOf(sortPrefix) !== -1){
							domainSorted = domainSortedVariant[0];
						}
						else if(prefixRevertSort.indexOf(sortPrefix) !== -1){
							domainSorted = domainSortedVariant[1];
						}
						else if(prefixSplitSort.indexOf(sortPrefix) !== -1){
							domainSorted = domainSortedVariant[2];
						}
					}
					
					if(domainSorted){
						let charIndexNumber = null;
						if(charIndexInDomainSorted === (alphabet[0] + alphabet[0]) || charIndexInDomainSorted === (number[0] + "" + number[0])){
							charIndexNumber = -1;
						}
						else{
							if(alphabet.indexOf(charIndexInDomainSorted) !== -1){
								// ini artinya index disampaikan berupa alphabet
								charIndexNumber = alphabet.indexOf(charIndexInDomainSorted);
							}
							else{
								// ini artinya index disampaikan derupa angka
								charIndexNumber = parseInt(charIndexInDomainSorted);
							}
						}
						
						// validasi
						if(charIndexNumber !== null){
							if(domainSorted.indexOf(targetChar) === charIndexNumber){
								return true;
							}
						}
					}
				
					return false;
				};
			})();

			return main;
		})();
		
		const FW_OverrideConfigs = (()=>{
			const getByClass = p_elemGetByClass;
			const configsCreateData = p_configsCreateData;
			const configsStringValueToRealValue = p_configsStringValueToRealValue;
			const objLoop = p_objLoop;
			const wijs = g_wijs;
			
			
			const configsDataItems = {}; // sudah memiliki prefix					
			const init = ()=>{
				const stringObj = {};
				const elsConfigs = getByClass(null, "w-override-configs");
				
				// user bisa mendefinisikan banyak element
				// semua konfigurasi akan diambil dan akan menggunakan konfigurasi pada element terakhir
				if(elsConfigs){
					for(const elConfigs of elsConfigs){
						const attrs = elConfigs.attributes;
						for(const attr of attrs){
							const name = attr.name;
							const value = attr.value;
							if(name.indexOf("data-") === 0){
								const property = name.replace(/-/g, "_").replace(/^data_/, "");
								stringObj[property] = value.trim();
							}
						}
					}
				}
				
				// sampai disini, perlu dilakukan hapus item configs data yang tidak terdefinisi pada configs string
				// hal ini karena jika tidak, semua yang tidak terdefinisi pada configs string akan menggunakan nilai default awal (bukan menggunakan konfigurasi yg sudah user set)
				const includedKeys = Object.keys(stringObj);
				const newConfigsData = {};
				objLoop(configsDataItems, (item, index, key)=>{
					if(includedKeys.indexOf(key) !== -1){
						newConfigsData[key] = item;
					}
				});
				
				const overrideConfigs = configsStringValueToRealValue(stringObj, newConfigsData);
				wijs.overrideConfigs = overrideConfigs;
			};
			const pushData = (()=>{
				const configsTypes = ["string", "boolean", "number"];
				return (prefix, data, get, ignore)=>{
					/* arguments:
							data : configsData
							get : array || falsy. property yang akan diambil
							ignore : array || falsy -  property yang dikecualikan
							
							ketika get terdefinisi dan ignore terdefinisi, yang diutamakan adalah get
					*/
					objLoop(data, (item, index, key)=>{
						let doGet = false;
						if(!get && !ignore){
							doGet = true;
						}
						else{
							if(get){
								if(get.indexOf(key) !== -1){
									doGet = true;
								}
							}
							else{
								if(ignore.indexOf(key) === -1){
									doGet = true;
								}
							}
						}
						
						if(doGet){
							configsDataItems[prefix + "_" + key] = item;
						}
					});
				};
			})();
			const apply = (configs, prefixInOverride)=>{
				const overrideConfigs= wijs.overrideConfigs;
				objLoop(configs, (item, index, key)=>{
					const priority = overrideConfigs[prefixInOverride + "_" + key];
					if(priority !== undefined && priority !== null){
						configs[key] = priority;
					}
				});
			};
			
			
			return {
				init,
				pushData,
				apply
			}
		})();				
		const FW_DefaultBloggerJS = (()=>{
			/* return:
					load(callback)				:	callback mengizinkan 1 argument yaitu {{loadedState}}
															kurang lebih seperti berikut:
					
																load(callback(loadedState)=>{
																	do staff here.....................
																});
																
					pushCallback(fn)			:	dimana {{fn}} adalah {{callback}} seperti halnya diatas
					
					
					disini, user berkemungkinan hanya mempush callback saya atau memanggil load dengan callback
															
			*/
			const win = g_win;
			const doc = g_doc;
			const getById = p_elemGetById;
			const getByTag = p_elemGetByTag;
			const createElem = p_elemCreateElem;
			const createTextNode = p_elemCreateTextNode;
			const appends = p_elemAppends;
			const elemRemove = p_elemRemove;
			const elBody = g_body;
			const stringWrapperId = "w-body-enscape";
			const stringAssetsWrapperId = "w-head-enscape";
			
			{	// hapus assets (tidak begitu harus)
				const elAssets = getById(stringAssetsWrapperId);
				if(elAssets){
					elemRemove(elAssets);
				}
			}
			
			
			let loadedState = null; // null : belum diproses atau loading, false (error), true (loaded)
			let scriptHasAppended = false; // keadaan dimana proses load script suah pernah dilakukan atau sebaliknya
			const onloadCallbacksFn = [];
			let scriptNode;

			const load = (callback)=>{
				// push callback
				if(callback){
					pushCallback(callback);
				}
				
				
				// load harus dipanggil ketika ready karena posisi elemen skript yang terletak diakhir
				// jika tidak, elemen w-body-enscape adalah null
				_doLoad();
			};
			const pushCallback = (fn)=>{
				if(onloadCallbacksFn.indexOf(fn) === -1){
					if(loadedState === null){
						onloadCallbacksFn.push(fn);
					}
					else{
						// script sudah terload. langsung panggil
						fn(loadedState);
					}
				}
			};
			const _runCallback = ()=>{
				for(const fn of onloadCallbacksFn){
					fn(loadedState);
				}
			};
						const _doLoad = ()=>{
				/*	*	ini mungkin akan dipanggil oleh berbagai aset yang membutuhkan, oleh karena itu,
						proses akan mengecek apakah script sudah pernah diload atau sebaliknya. */
						
				if(!scriptHasAppended){
					scriptHasAppended = true;
				
					// extract src
					const elWrap = getById(stringWrapperId);
					if(elWrap){
						elemRemove(elWrap);
						let realInnerString = elWrap.innerHTML; 
						realInnerString = realInnerString.substring(realInnerString.indexOf("/*") + 2, realInnerString.length);
						realInnerString = realInnerString.substring(0, realInnerString.lastIndexOf("*/"));
						realInnerString = realInnerString.replace(/<\/body>/, "");
						
						const temp = createElem({});
						temp.innerHTML = realInnerString;
						
						let elScriptStatic;
						let elInlineScript;
						
						let scriptStaticSrc;
						let scriptInlineText;
						
						const elScripts = getByTag(temp, "script");
						if(elScripts){
							for(const el of elScripts){
								const src = el.src;
								if(src){
									if(src.indexOf("blogger.com/static/") !== -1){
										scriptStaticSrc = src;
									}
								}
								else{
									if(el.text.indexOf("window['__wavt']") !== -1){
										scriptInlineText = el.text;
									}
								}
							}
							
							if(scriptStaticSrc && scriptInlineText){
								/*	INFO:
									*	Ketika element script langsung mengambil element pada temp dan mengappendnnya ke body, 
										event onload dan onerror tidak terpanggil, padaha; script berhasil diload. 
										alasan belum diketahui, kemungkinan karena ini sudah terappend pada dom temp sebelumnya
										jadi, disini script harus dibuat ulang
								*/
								const script = createElem({t : "script"});
								script.async = true;
								script.onload = ()=>{
									loadedState = true;
									
									{	// create and append inline
										const elInlineScript = createElem({t : "script"});
										elInlineScript.text = scriptInlineText;
										appends(elBody, elInlineScript);
									}
									
									_runCallback();
								};
								script.onerror = ()=>{
									loadedState = false;
									_runCallback();
								};
								script.src = scriptStaticSrc;
								appends(elBody, script);
								return;
							}
						}
					}
				}
				
				// hanya terpanggil ketika return diatas tidak tereksekusi
				// dengan kata lain, tidak ditemukan semua script reuirements
				loadedState = false;
				_runCallback();
			};
			return{
				load,
				pushCallback
			}
		})();
		const FW_Skin = (()=>{
			const arrayGetRandomIndexs = p_arrayGetRandomIndexs;
			const items = {
				light : [
					"white", 
					"secondary",
				],
				regular : [
					"grey",
					"red",
					"green",
					"blue",
					"purple",
					"orange",
					"yellow",
					"pink",
					"brown",	

					"main",
					"warn",
					"error",
					"success",
				
					"facebook",
					"twitter",
					"whatsapp",
					"youtube",
					"instagram",
					"telegram",
				],
				dark : [
					"black",
				],
			};
			const allItems = [].concat(items.light, items.regular, items.dark);
			const getItems = (group)=>{
				if(group && group !== "all"){
					return items[group];
				}
				else{
					return allItems;
				}
			};
			const createClassString =(skinName)=>{
				let group;
				if(items.regular.indexOf(skinName) !== -1){
					group = "r";
				}
				else if(items.light.indexOf(skinName) !== -1){
					group = "l";
				}
				else if(items.dark.indexOf(skinName) !== -1){
					group = "d";
				}
				
				return "w-s-"+ group + "-" + skinName;
			};
			const getGroup = (skinName)=>{
				if(items.light.indexOf(skinName) !== -1){
					return "light";
				}
				else if(items.regular.indexOf(skinName) !== -1){
					return "regular";
				}
				else{
					return "dark";
				}
			};
			const getRandomItems = (group, length)=>{
				/*arguments:
					group : falsy || array groups
				*/
				let disItems = [];
				if(!group || group === "all"){
					disItems = disItems.concat(allItems);
				}
				else{
					for(const g of group){
						if(items[g]){
							disItems = disItems.concat(items[g]);
						}
					}
				}
				
				if(disItems.length === 0){
					// keadaan tidak valid,
					return null;
				}
				else{
					while(disItems.length < length){
						disItems = disItems.concat(disItems);
					}
					
					const randomIndex = arrayGetRandomIndexs(disItems, length);
					const usedItems = [];
					for(const i of randomIndex){
						usedItems.push(disItems[i]);
					}
					
					return usedItems;
				}
			};
			return {
				items,
				allItems,
				getItems,
				createClassString,
				getGroup,
				getRandomItems,
			}
		})();
		const FW_DefaultValues = (()=>{
			// proses pengambilan konfigs widget langsung dilakukan di sini,
			// hal ini karena berbagai FW setelah ini membutuhka data {{defaultValues}}
			// !!!!pastikan untuk meletakkan setiap FW yang membutuhkan data defaultValue setelah pendefinisian FW ini
			const configsCreateData = p_configsCreateData;
			const configsElemToObj = p_configsElemToObj;
			const wijs = g_wijs;
			
			const fwSkin = FW_Skin;
			const fwSkin_allItems = fwSkin.allItems;
			const alignsJustify = g_arrayAlignsHasJustify;
			const arrayItemBoxs = g_arrayItemBoxs;
			
			const configsData = configsCreateData([
				["button_skin", 1, "main", fwSkin_allItems],
				["button_box_type", 1, "outline", ["solid", "outline"]],
				["button_rounded", 2, true],
				["message_shadow", 2, false],
				["image_box", 1, "border", arrayItemBoxs],
				["tab_box", 1, "shadow", arrayItemBoxs],
				["youtube_video_box", 1, "none", arrayItemBoxs],
				["indent_border_type", 1, "dashed", ["none", "solid", "dashed"]],
				["table_skin", 1, "secondary", fwSkin_allItems],
				["table_shadow", 2, false],
				["table_align", 1, "left", alignsJustify],
				["table_header_align", 1, "center", alignsJustify],
				["table_caption_align", 1, "top", alignsJustify],
				["table_caption_side", 1, "top", ["top", "bottom"]],
				["table_caption_weight", 1, "normal", ["normal", "medium", "bold"]],
				["qna_box", 1, "none", arrayItemBoxs],
				["codebox_box", 1, "none", arrayItemBoxs],
				
			
				["more_link_title", 1, Text_defaultValues_moreLinkTitle]
			]);
			const configs = configsElemToObj("default-values", configsData);
			wijs.defaultValues = configs;
			return configs;
		})();
		const FW_ConfigsGeneral = (()=>{
			const configsCreateData = p_configsCreateData;
			const fwOverrideConfigs = FW_OverrideConfigs;
			
			const configsData = configsCreateData([
				["sticky_header", 1, "auto", ["none", "static", "minimize", "auto"]],
				["date_format", 1, Dev_DateFormat],
				["add_nofollow_for_external_link", 2, true],
				["open_external_link_in_new_tab", 2, true],
			]);
			fwOverrideConfigs.pushData("general", configsData);
			
			return {
				configsData
			}
		})();
		
		
		const FW_Button = (()=>{
			/* PEMBUATAN
					const elButton = fwButton.create({
						title 						: 	"title",
						tag 						: 	"a",
						url 						: 	"",
						skin 						: 	"main",
						box_type				:	"solid",
						rounded				:	false,
						full_width				:	false,
						size						:	"normal"
					});
			*/
			const configsCreateData = p_configsCreateData;
			const configsGetOptionIndex = p_configsGetOptionIndex;
			const configsStringValueToRealValue = p_configsStringValueToRealValue;
			const configsAssignAll = p_configsAssignAll;
			
			const createElem = p_elemCreateElem;
			const createTextNode = p_elemCreateTextNode;
			const appends = p_elemAppends;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const hasClass = p_elemHasClass;
			
			const fwSkin = FW_Skin;
			const fwDefaultValues = FW_DefaultValues;
			const devSkin = fwDefaultValues.button_skin;
			const devBoxType = fwDefaultValues.button_box_type;
			const devRounded = fwDefaultValues.button_rounded;
			
			const hasProcessed = [];
			const configsData = configsCreateData([
				["title", 1, ""],
				["tag", 1, "button", ["a", "button", "span"]],
				["url", 1, ""],
				["skin", 1, devSkin, fwSkin.allItems],
				["box_type", 1, devBoxType, ["solid", "outline"]],
				["rounded", 2, devRounded],
				["full_width", 2, false],
				["size", 1, "normal", ["small", "normal", "medium", "large"]]
			]);
			const create = (configs)=>{
				configsAssignAll(configsData, configs);
				const {title,tag,url,skin,box_type,rounded,full_width,size} = configs;
				
				// define classes
				const classes = ["w-button"];
				classes.push("w--b" + configsGetOptionIndex(configsData, "box_type", box_type, 1)); 
				classes.push(fwSkin.createClassString(skin));
				classes.push("w--r" + (rounded ? "1" : "0")); 
				classes.push("w--w" + (full_width ? "1" : "0")); 
				classes.push("w--s" + configsGetOptionIndex(configsData, "size", size, 1));
				
				// start create
				const elem = createElem({
					t : tag,
					c : classes.join(" "),
					f : (elem)=>{
						appends(elem, createElem({
							t : "span",
							cs : createTextNode(title)
						}));
						
						if(url){
							elem.setAttribute("href", url);
						}
					}
				});
				hasProcessed.push(elem);
				return elem;
			};
			const init = (elem)=>{
				/* AKSI: Menambahkan berbagai class konfigurasi. Konfigurasi didefinisikan memalui atribute {{data}}
				Ketersediaan konfigurasi seperti halnya yang tersedia pada {{configsString}} dibawah */
				if(hasProcessed.indexOf(elem) === -1){
					hasProcessed.push(elem);
					
					const configsString = {
						box_type : getDataAttrTypeString(elem, "box-type", true, devBoxType),
						rounded : getDataAttrTypeString(elem, "rounded", true, devRounded + ""),
						skin : getDataAttrTypeString(elem, "skin", true, devSkin),
						full_width : getDataAttrTypeString(elem, "full-width", true, "false"),
						size : getDataAttrTypeString(elem, "size", true, "normal"),
					}; 
					const configs = configsStringValueToRealValue(configsString, configsData);
					const {skin,box_type,rounded,full_width, size} = configs;
					const classes = [];
					classes.push("w--b" + configsGetOptionIndex(configsData, "box_type", box_type, 1)); 
					classes.push(fwSkin.createClassString(skin));
					classes.push("w--r" + (rounded ? "1" : "0")); 
					classes.push("w--w" + (full_width ? "1" : "0")); 
					classes.push("w--s" + configsGetOptionIndex(configsData, "size", size, 1));
					if(!hasClass(elem, "w-button")){
						classes.push("w-button");
					}
					elem.className += (elem.className ? " " : "")+ classes.join(" ");
				}
			};
			return {
				configsData : configsData,
				create : create,
				init : init
			};
		})();		
		const FW_Texts = (()=>{
			const getByClass = p_elemGetByClass;
			const wijsTexts = g_wijsTexts;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const pushError = p_pushError;
			const elemReplace = p_elemReplace;
			const createTextNode = p_elemCreateTextNode;
			
			const init = (parent)=>{
				const els = getByClass(parent, "w-textbyjs");
				if(els){
					for(const el of els){
						const content = getDataAttrTypeString(el, "content", false, "");
						if(!content){
							pushError("element with class w-textbyjs must have an data-content attribute");
						}
						else{
							const realContent = wijsTexts[content];
							if(!realContent){
								pushError(`text with name ${content} was not found!`);
							}
							else{
								elemReplace(el, createTextNode(realContent));
							}
						}
					}
				}
			};
			return {
				init
			}
		})();	
		const FW_TextsWithData = (()=>{
			const getByClass = p_elemGetByClass;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const stringToArray = p_stringToArray;
			const elemReplace = p_elemReplace;
			const createTextNode = p_elemCreateTextNode;
			const pushError = p_pushError;
			const elemHasClass = p_elemHasClass;
			const addClasses = p_elemAddClasses;
			
			const translateText = (originalText, arrayKeys, arrayValues)=>{
				const arrayKeysLength = arrayKeys.length;
				const arrayValuesLength = arrayValues.length;
				if(arrayKeysLength !== arrayValuesLength){
					// error
					pushError(`Can't translate text "${originalText}"! keys and values length is not matched`);
					return originalText;
				}
				else{
					if(arrayKeysLength === 0){
						return originalText;
					}
					else{
						let newText = originalText;
						for(let i=0;i<arrayKeysLength;i++){
							const key = arrayKeys[i];
							const value = arrayValues[i];
							const reg = new RegExp("{{" + key + "}}", "g");
							newText = newText.replace(reg, value);
						}
						return newText;
					}
				}
			};
			const init = (parent)=>{
				const els = getByClass(parent, "w-textwithdata");
				if(els){
					for(const el of els){
						if(!elemHasClass(el, "w--error")){
							const content = getDataAttrTypeString(el, "content", false, "");
							const keys = getDataAttrTypeString(el, "keys", false, "");
							const values = getDataAttrTypeString(el, "values", false, "");
							const arrayKeys = stringToArray(keys);
							const arrayValues = stringToArray(values);
							
							
							const translatedText = translateText(content, arrayKeys, arrayValues);
							elemReplace(el, createTextNode(translatedText));
						}
					}
				}
			};
			return {
				translateText,
				init
			}
		})();
		const FW_Adsense = (()=>{
			/*	TAHAP KODING
				1. buat dan appends semua ins dan js pusher ke dokument
				2. load js statis
				
				TENTANG PLACEHOLDER UNFILLED
					ad widget
						*	support mutation						: element widget dihapus
						*	tidak support mutation				: place holder tetap ada dengan text {{ad not loaded}} yang diatur pada css
			*/
			const getByTag = p_elemGetByTag;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const objLoop = p_objLoop;
			const createFragment = p_elemCreateFragment;
			const local = p_local;
			const eventAdd = p_eventAdd;
			const eventRemove = p_eventRemove;
			const addClasses = p_elemAddClasses;
			const isTouch = g_isTouch;
			
			const elBody = g_body;
			const elHead = g_head;
			const elBodyMirror = g_bodyMirror;
			
			
			const data = {
				/*
					adClient	: ad client yang didapat dari kode iklan ins pertama kali
				*/
			};
			const extractIns = (adsenseCode)=>{
				const temp = createElem({n : adsenseCode});
				const elIns = getByTag(temp, "ins", 0);
				if(elIns){
					const obj = {};
					const attrs = elIns.attributes;
					for(const attr of attrs){
						obj[attr.name] = attr.value;
					}
					
					if(obj["class"].indexOf("adsbygoogle") !== -1){
						const thisAdClient = obj["data-ad-client"];
						if(thisAdClient){
							const assignedAdClient = data.adClient;
							if(!assignedAdClient){
								data.adClient = thisAdClient;
							}
							
							return obj;
						}
					}
					
					/*	INFO FORMAT KODE IKLAN
						display reponsive
						<ins class="adsbygoogle"
						 style="display:block"
						 data-ad-client="ca-pub-8683515219617088"
						 data-ad-slot="1963880172"
						 data-ad-format="auto"
						 data-full-width-responsive="true"></ins>
	 
						display static
						<ins class="adsbygoogle"
						 style="display:inline-block;width:728px;height:90px"
						 data-ad-client="ca-pub-8683515219617088"
						 data-ad-slot="7906378783"></ins>
						 
						 in-article
						 <ins class="adsbygoogle"
						 style="display:block; text-align:center;"
						 data-ad-layout="in-article"
						 data-ad-format="fluid"
						 data-ad-client="ca-pub-8683515219617088"
						 data-ad-slot="1105823252"></ins>
	 
						 in-feed
						 <ins class="adsbygoogle"
						 style="display:block"
						 data-ad-format="fluid"
						 data-ad-layout-key="-fs-1t-1i-ju+16t"
						 data-ad-client="ca-pub-8683515219617088"
						 data-ad-slot="4306701667"></ins>
					*/
				}
				return null;
			};
			const createIns = (insObj, onfilled, onunfilled)=>{
				const frag = createFragment();
				const el = createElem({t : "ins"});
				objLoop(insObj, (item, index, key)=>{
					el.setAttribute(key, item);
				});
				
				const elPusher = createElem({t : "script"});
				elPusher.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
				appends(frag, el);
				appends(frag, elPusher);
				
				const elLoading = createElem({c : "w-placeholder"});
				appends(frag, elLoading);
				
				_assignMutationObserver(el, onfilled, onunfilled);
				
				return frag;
			};
			const loadStaticJS = (()=>{
				/* harus dipanggil setiap kali dilakukan append ins. pada keadaan ini, data.addClient sudah terdefinisi */
				let hasTrigger = false; // keadaan dimana {{loadStaticJS}} sudah terpanggil
				let hasLoad = false; // keadaan dimana {{load}} sudah terpanggil
				
				const localKey = local.createKey("LazyAdsense");
				const main = ()=>{
					if(!hasTrigger){
						hasTrigger = true;
						const hasLazyBefore = local.get(localKey);
						if(hasLazyBefore === "true"){
							// ini artinya perangkat user yang sudah pernah meload js
							// langsung load saja
							// untuk page speed, local ini tidak akan pernah ada karena sistemnya tidak menjalankan {{scroll}}, {{touchstart}}, dan {{mouseover}}
							load();
						}
						else{
							const hasScrollEvent = true;
							const hasTouchEvent = isTouch;
							const hasMouseOver = isTouch ? false : true;
							
							// const call load
							const fn_onscroll = ()=>{
								load();
								setLocal();
								removeEvents();
							};
							const fn_onmouseover = ()=>{
								load();
								setLocal();
								removeEvents();
							};
							const fn_ontouch = ()=>{
								load();
								setLocal();
								removeEvents();
							};
							const removeEvents = ()=>{
								if(hasScrollEvent){
									eventRemove(elBodyMirror, "scroll", fn_onscroll);
								}
								if(hasTouchEvent){
									eventRemove(elBodyMirror, "touchstart", fn_ontouch);
								}
								if(hasMouseOver){
									eventRemove(elBodyMirror, "mouseover", fn_onmouseover);
								}
							};
							const setLocal = ()=>{
								local.set(localKey, "true");
							};
							
							// assign on scroll
							if(hasScrollEvent){
								eventAdd(elBodyMirror, "scroll", fn_onscroll);
							}
							
							// assign on touch
							if(hasTouchEvent){
								eventAdd(elBodyMirror, "touchstart", fn_ontouch);
							}
							
							// assign on mouseover
							if(hasMouseOver){
								eventAdd(elBodyMirror, "mouseover", fn_onmouseover);
							}
						}
					}
				};
				const load = ()=>{
					if(!hasLoad){
						hasLoad = true;
						const elScript = createElem({t : "script"});
						elScript.async = true;
						elScript.setAttribute("crossorigin", "anonymous");
						elScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + data.adClient;
						elScript.onerror = ()=>{
							addClasses(elBody, "w--noadsense");
						};
						appends(elHead, elScript);
					}
				};
				return main;
			})(); 
			const _assignMutationObserver = (elIns, onfilled, onunfilled)=>{
				if("MutationObserver" in window){
					// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
					// Select the node that will be observed for mutations
					const targetNode = elIns;

					// Options for the observer (which mutations to observe)
					const config = {attributes: true, childList: false, subtree: false};
				  
				  // Callback function to execute when mutations are observed
					const callback = function(mutationsList, observer){
						// Use traditional 'for loops' for IE 11
						for(const mutation of mutationsList){
							if(mutation.type === 'attributes'){
								// terdapat perubahan atribut, check value baru
								const newDataAdStatus = targetNode.getAttribute("data-ad-status");
								if(newDataAdStatus === "unfilled"){
									if(onunfilled){
										onunfilled();
										observer.disconnect();
										return;
									}
								}
								else if(newDataAdStatus === "filled"){
									if(onfilled){
										onfilled();
										observer.disconnect();
										return;
									}
								}
							}
						}
					};
					
					// Create an observer instance linked to the callback function
					const observer = new window.MutationObserver(callback);

					// Start observing the target node for configured mutations
					observer.observe(targetNode, config);
				}
			};
			return {
				extractIns,
				createIns,
				loadStaticJS,
				data
			}
		})();
		
		const FW_PostBodyAds = (()=>{
			const configsCreateData = p_configsCreateData;
			const configsElemToObj = p_configsElemToObj;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const elemRemove = p_elemRemove;
			const insertFirstChild = p_elemInsertFirstChild;
			
			const getByTag = p_elemGetByTag;
			const getByClass =p_elemGetByClass;
			const getOffsetToDocument = p_elemGetOffsetToDocument;
			const getNextSibling = p_elemGetNextSibling;
			const getPreviousSibling = p_elemGetPreviousSibling;
			const insertBefore = p_elemInsertBefore;
			const stringTrim = p_stringTrim;
			const hasClass = p_elemHasClass;
			
		
			const fwAdsense = FW_Adsense;
			const fwOverrideConfigs = FW_OverrideConfigs;
			
			const configsData_topOfPost = configsCreateData([
				["enable", 2, false],
				["ad_code", 1, ""],
				["remove_blank_ad", 2, true], // locked untuk kebutuhan dev, set ke false
			]);
			const configsData_bottomOfPost = configsCreateData([
				["enable", 2, false],
				["ad_code", 1, ""],
				["remove_blank_ad", 2, true], // locked untuk kebutuhan dev, set ke false
			]);
			const configsData_inPost = configsCreateData([
				["enable", 2, false],
				["max_count", 3, 3, [1, null]],
				["min_distance", 3, 1000, [300, null]],
				["preferred_position", 1, "bottom", ["top", "bottom"]],
				["ad_code", 1, ""],
				["prevent_parent_class", 1, ""],
				["prevent_parent_id", 1, ""],
				["also_detect_single_br", 2, false],
				["remove_blank_ad", 2, true], // locked untuk kebutuhan dev, set ke false
			]);

			fwOverrideConfigs.pushData("ad_top_of_post", configsData_topOfPost);
			fwOverrideConfigs.pushData("ad_bottom_of_post", configsData_bottomOfPost);
			fwOverrideConfigs.pushData("ad_in_post", configsData_inPost, ["enable"]);
			
			const init = (elPostBody)=>{
				const topOfPost = (()=>{
					/* return object || null
					{
						elWrapper,
						elIns
					}*/
					const configs = configsElemToObj("ad-top-of-post", configsData_topOfPost);
					fwOverrideConfigs.apply(configs, "ad_top_of_post");
					
					const {enable, ad_code, remove_blank_ad} = configs;
					if(enable && ad_code){
						const insObj = fwAdsense.extractIns(ad_code);
						if(insObj){
							const elAd = createElem({i : "w-ad-top-of-post", c : "w-ad w--adsense"});
							const elWrapper = createElem({c : "w-adsense-wrapper"});
							const elIns = fwAdsense.createIns(insObj, null, ()=>{
								if(remove_blank_ad){
									elemRemove(elAd);
								}
							});
							
							appends(elAd, elWrapper);
							insertFirstChild(elPostBody, elAd);
							
							return {
								elWrapper : elWrapper,
								elIns : elIns
							};
						}
					}
					
					return null;
				})();
				const bottomOfPost = (()=>{
					/* return object || null
					{
						elWrapper,
						elIns
					}*/
					const configs = configsElemToObj("ad-bottom-of-post", configsData_bottomOfPost);
					fwOverrideConfigs.apply(configs, "ad_bottom_of_post");
					
					const {enable, ad_code, remove_blank_ad} = configs;
					if(enable && ad_code){
						const insObj = fwAdsense.extractIns(ad_code);
						if(insObj){
							const elAd = createElem({i : "w-ad-bottom-of-post", c : "w-ad w--adsense"});
							const elWrapper = createElem({c : "w-adsense-wrapper"});
							const elIns = fwAdsense.createIns(insObj, null, ()=>{
								if(remove_blank_ad){
									elemRemove(elAd);
								}
							});
							
							appends(elAd, elWrapper);
							appends(elPostBody, elAd);
							
							return {
								elWrapper : elWrapper,
								elIns : elIns
							};
						}
					}
					
					return null;
				})();
			
				// sampai disini, topOfPost dan bottomOfPost hanya mengappend elWrapper saja
				// untuk elIns akan dilakukan nanti. hal ini karena jika dilakukan langsung, client rects tidak dapat terprediksi karena perubahan dimensi iklan
				
				const inPost = (()=>{
					/* return array object maybe empty || null
					[
						{
							elWrapper,
							elIns
						}
					]*/
					const configs = configsElemToObj("ad-in-post", configsData_inPost);
					fwOverrideConfigs.apply(configs, "ad_in_post");
					
					const {
						enable,
						max_count,
						min_distance,
						ad_code,
						preferred_position,
						prevent_parent_class,
						prevent_parent_id,
						also_detect_single_br, // locked
						remove_blank_ad,
					} = configs;
					const prevent_parent_tag = [
						"a",
						"button",
						"table",
						"details",
						"summary",
						"h2",
						"h3",
						"h4",
						"h5",
						"h6",
						"pre",
						"code",
						"label",
					];
					if(enable && ad_code){
						// membuat berbagai fungsi pendukung
						const _isPrevent = (()=>{
							const hasC = hasClass;
							const preventTags = prevent_parent_tag;
							const preventClasses = stringTrim((prevent_parent_class || "") + [
								"w-accordion",
								"w-message",
								"w-heading",
								"w-tab",
								"w-dialogue",
								"w-mark",
								"w-img",
								"w-toc"
							].join(",")).split(",");
							const preventIds = stringTrim((prevent_parent_id || "")).split(",");
							
							const postBody = elPostBody;
							
							const main = (el)=>{
								const parent = el.parentNode;
								if(parent === elPostBody){
									return false;
								}
								else{
									// tags
									if(preventTags.indexOf(parent.tagName.toLowerCase()) !== -1){
										return true;
									}
									
									// class
									for(const c of preventClasses){
										if(hasC(parent, c)){
											return true;
										}
									}
									
									// id
									for(const i of preventIds){
										if(parent.id === i){
											return true;
										}
									}
									
									return main(parent);
								}
							};
							return main;
						})();
											
						
						
						const insObj = fwAdsense.extractIns(ad_code);
						if(insObj){
							const elBrs = getByTag(elPostBody, "BR");
							if(elBrs){
								const elWrappers = [];
								const hasProcess = [];	// menampung semua element br yang sudah diproses (untuk kepentingan internal)
								if(preferred_position === "bottom"){
									const revertIndex = [];
									const len = elBrs.length;
									for(let i=len-1; i>=0; i--){
										revertIndex.push(elBrs[i]);
									}
									
									let currentOffset =  bottomOfPost ? getOffsetToDocument(bottomOfPost.elWrapper).top : (getOffsetToDocument(elPostBody).top + elPostBody.offsetHeight);
									let currentCount = 0;
									let currentPlacement = null;
									for(const elBr of revertIndex){
										if(hasProcess.indexOf(elBr) === -1){
											hasProcess.push(elBr);
											
											const doProcess = !_isPrevent(elBr);
											
											if(doProcess){
												// disini, element placement akan diletakkan pada br paling pertama
												// misal, ketika terdapat 3 br berurutan, br br br. placement akan diletakkan di sebelum br pertama
												let brCounter = 1;
												let usedBr = elBr;
												let previousSibling = getPreviousSibling(usedBr);
												while(previousSibling && previousSibling.tagName === "BR"){
													brCounter += 1;
													usedBr = previousSibling;
													hasProcess.push(usedBr);
													previousSibling = getPreviousSibling(usedBr);
												}
												
												// disini, element placement akan diletakkan sebelum element br pertama
												// ketika terdeteksi single br, mungkin perlu ditambahkan margin bottom tambahan,
												// sebaliknya, ketika terdeteksi double br, margin bottom mungkin sudah cukup
												// oleh karena itu, diperlukan deteksi apakan ini single br atau double br
												const isDoubleBr = brCounter >= 2;												
												if(!isDoubleBr && !also_detect_single_br){
													continue;
												}
												
												// check selisih jarak
												const offset =  getOffsetToDocument(usedBr).top;
												if(currentOffset - offset < min_distance){
													continue;
												}
												
												
												// jarak juga akan diberlakukan antara in dan bottom, 
												// jadi, check jarak ke top
												if(topOfPost){
													if(offset - getOffsetToDocument(topOfPost.elWrapper).top < min_distance){
														// ini artinya sudaH tidak memungkinkan untuk ditambahkan placement lagi
														// langsung break
														break;
													}
												}
												
												// buat placeholder
												const newPlacement = createElem({c : "w-ad w-ad-in-post w--adsense w--brt" + (isDoubleBr ? "2": "1")});
												const newWrapper = createElem({c : "w-adsense-wrapper"});
												appends(newPlacement, newWrapper);												
												insertBefore(newPlacement, usedBr);
												
												elWrappers.push(newWrapper);
												
												currentPlacement = newPlacement;
												currentOffset = getOffsetToDocument(usedBr).top; // sudah update karena update tinggi placeholder
												currentCount += 1;
												if(currentCount === max_count){
													break;
												}
											}
										}
									}
								}
								else{
									let currentOffset = getOffsetToDocument(topOfPost ? topOfPost.elWrapper : elPostBody).top;
									let currentCount = 0;
									let currentPlacement = null;
									for(const elBr of elBrs){
										if(hasProcess.indexOf(elBr) === -1){
											hasProcess.push(elBr);
											
											const doProcess = !_isPrevent(elBr);											
											
											if(doProcess){
												// disini, element placement akan diletakkan sebelum element br
												// ketika terdeteksi single br, mungkin perlu ditambahkan margin bottom tambahan,
												// sebaliknya, ketika terdeteksi double br, margin bottom mungkin sudah cukup
												// oleh karena itu, diperlukan deteksi apakan ini single br atau double br
												const nextSibling = getNextSibling(elBr);
												const isDoubleBr = nextSibling && nextSibling.tagName === "BR";
												if(isDoubleBr){
													hasProcess.push(nextSibling); // agar looping selanjutnya tidak perlu memproses element next sibling
												}
												
												if(!isDoubleBr && !also_detect_single_br){
													continue;
												}
												
												const offset =  getOffsetToDocument(elBr).top;
												if(offset - currentOffset < min_distance){
													continue;
												}
												
												
												// jarak juga akan diberlakukan antara in dan bottom, 
												// jadi, check jarak ke bottom
												if(bottomOfPost){
													if(getOffsetToDocument(bottomOfPost.elWrapper).top - offset < min_distance){
														// ini artinya sudaH tidak memungkinkan untuk ditambahkan placement lagi
														// langsung break
														break;
													}
												}
												
												
												// buat placeholder
												const newPlacement = createElem({c : "w-ad w-ad-in-post w--adsense w--brt" + (isDoubleBr ? "2": "1")});
												const newWrapper = createElem({c : "w-adsense-wrapper"});
												appends(newPlacement, newWrapper);												
												insertBefore(newPlacement, elBr);
												
												elWrappers.push(newWrapper);
												
												currentPlacement = newPlacement;
												currentOffset = getOffsetToDocument(elBr).top; // sudah update karena update tinggi placeholder
												currentCount += 1;
												if(currentCount === max_count){
													break;
												}
											}
										}
									}
								}
								
								// RETURN ARRAY OBJECT eWrapper, elIns
								return (()=>{
									const returned = [];
									for(const elWrapper of elWrappers){
										const disObj = {};
										disObj.elWrapper = elWrapper;
										disObj.elIns = fwAdsense.createIns(insObj, null, ()=>{
											if(remove_blank_ad){
												elemRemove(elWrapper.parentNode);
											}
										});
										returned.push(disObj);
									}
									
									return returned;
								})();
							}
						}
					}
					
					return null;
				})();
				
				
				// SAMPAI DISINI, PEMBUATAN DATA SUDAH SELESAI,
				// SELANJUTNYA TINGGAL MENGAPPEND SEMUA ELEMENT INS KE WRAPPER
				if(topOfPost){
					appends(topOfPost.elWrapper, topOfPost.elIns);
				}
				if(bottomOfPost){
					appends(bottomOfPost.elWrapper, bottomOfPost.elIns);
				}
				if(inPost){
					for(const item of inPost){
						appends(item.elWrapper, item.elIns);
					}
				}
				
				// semua sudah terappend. load JS jika belum
				fwAdsense.loadStaticJS();
				
			};
			return {
				init
			}
		})();
		

		
		const FW_OneRow = (()=>{
			/*	RETURN
					create(configs, content)			:	membuat dom
																	untuk sekarang, properti configs yang tersedia adalah:
																		tag
																		wrapClasses
					init(elem)								:	fungsi ini akan melakukan init
																	pastikan elemen sedang dalam keadaan terappend sebelum melakukan init
																	hal ini karena jika elem belum terappend, bisa saja font telah terload,
																	maka fungsi akan dipanggil. ini tentu akan error
																	
				STATES CLASSES
					w--b1									:	Keadaan dimana terdapat button 
					w--f1									:	over left
					w--f2									:	over right
					w--p1									:	elemen telah diproses
			*/
			const createElem = p_elemCreateElem;
			const createTextNode = p_elemCreateTextNode;
			const hasClass = p_elemHasClass;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const addEvent = p_eventAdd;
			const removeEvent = p_eventRemove;
			const isTouch = g_isTouch;
			const appends = p_elemAppends;
			const getByClass = p_elemGetByClass;
			const typeIsString = p_typeIsString;
			
			const Id = "6";
			const Prefix = "w-"+ Id;
			
			const FRunOnClickButton = (toLeft, elWrap, callback)=>{
				const elScrollable = elWrap.children[0];
				const elContent = elScrollable.children[0];
				const wrapWidth = elWrap.offsetWidth;
				const contentWidth = elContent.offsetWidth;
				const maxScroll = (contentWidth - wrapWidth) - 1;
				const hasHiddenWidth = Math.abs(parseInt(elContent.style.marginLeft) || 0);
				
				if(!toLeft){
					let nextToLeft;
					let hideButtonNext;
					const overRight = maxScroll - hasHiddenWidth;
					if(overRight > wrapWidth){
						nextToLeft = wrapWidth - 100;
						hideButtonNext = false;
					}
					else{
						nextToLeft = overRight;
						hideButtonNext = true;
					}
					
					elContent.style.marginLeft = (hasHiddenWidth + nextToLeft) * -1 + "px";
					addClasses(elWrap, "w--f1");
					setTimeout(()=>{
						if(hideButtonNext){
							removeClasses(elWrap, "w--f2");
						}
						callback();
					}, 1020);
					
				}
				else{
					let nextToRight;
					let hideButtonNext;
					const overLeft = hasHiddenWidth;
					if(overLeft > wrapWidth){
						nextToRight = wrapWidth - 100;
						hideButtonNext = false;
					}
					else{
						nextToRight = overLeft;
						hideButtonNext = true;
					}
					
					elContent.style.marginLeft = (hasHiddenWidth - nextToRight) * -1 + "px";
					addClasses(elWrap, "w--f2");
					setTimeout(()=>{
						if(hideButtonNext){
							removeClasses(elWrap, "w--f1");
						}									
						callback();
					}, 1020);
				}
			};
			const FCreateButton = (e)=>{
				let elWrap =  e.target;
				while(!hasClass(elWrap, Prefix + "a")){
					elWrap = elWrap.parentNode;
				}
			
				const elScrollable = elWrap.children[0];
				const elContent = elScrollable.children[0];
				const wrapWidth = elWrap.offsetWidth;
				const contentWidth = elContent.offsetWidth;
				if(wrapWidth < contentWidth){
					const rightButton = createElem({
						t : "button",
						c : "w-right w-nostyle",
						f : (elem)=>{
							(()=>{
								let ontransition = false;
								elem.onclick = (e)=>{
									e.preventDefault();
									if(!ontransition){
										ontransition = true;
										FRunOnClickButton(false, elWrap, ()=>{
											ontransition = false;
										});
									}
								}
							})();
						}
					});
					const leftButton = createElem({
						t : "button",
						c : "w-left w-nostyle",
						f : (elem)=>{
							(()=>{
								let ontransition = false;
								elem.onclick = (e)=>{
									e.preventDefault();
									if(!ontransition){
										ontransition = true;
										FRunOnClickButton(true, elWrap, ()=>{
											ontransition = false;
										});
									}
								}
							})();
						}
					});
					appends(elWrap, leftButton, rightButton);
					addClasses(elWrap, "w--b1");
				}
				
				removeEvent(elWrap, "mouseover", FCreateButton);
			};
			const FRunOnScroll = (e)=>{
				// fungsi ini tentunya hanya akan tereksekusi ketika content > dari wrap
				// jika sebaliknya, event onscroll tidak akan tereksekusi
				const elScrollable = e.target;
				const elWrap = elScrollable.parentNode;
				const elContent = elScrollable.children[0];
				const wrapWidth = elWrap.offsetWidth;
				const contentWidth = elContent.offsetWidth;
				const maxScroll = (contentWidth - wrapWidth) - 1;
				const scrollLeft = elScrollable.scrollLeft;
				if(scrollLeft !== 0){
					addClasses(elWrap, "w--f1");
				}
				else{
					removeClasses(elWrap, "w--f1");
				}
				
				if(scrollLeft < maxScroll){
					addClasses(elWrap, "w--f2");
				}
				else{
					removeClasses(elWrap, "w--f2");
				}
			};
			const FInit = (elem)=>{
				const hasAssign = hasClass(elem, "w--p1");
				if(!hasAssign){
					addClasses(elem, "w--p1");
					
					const elScrollable = elem.children[0];
					const elContent = elScrollable.children[0];
					const contentWidth = elContent.offsetWidth;
					const wrapWidth = elem.offsetWidth;
					if(contentWidth > wrapWidth){
						const scrollLeft = elScrollable.scrollLeft;
						const maxScroll = (contentWidth - wrapWidth) - 1;
						if(scrollLeft !== 0){
							addClasses(elem, "w--f1"); // fade left
						}
						else{
							removeClasses(elem, "w--f1");
						}
						
						if(scrollLeft < maxScroll){
							addClasses(elem, "w--f2"); // fade right
						}
						else{
							removeClasses(elem, "w--f2");
						}
					}
					
					
					if(isTouch){		
						addEvent(elScrollable, "scroll", FRunOnScroll);							
					}
					else{
						addEvent(elem, "mouseover", FCreateButton);	
					}
				}
			};
			const FCreate = (configs, content)=>{
				const wrapClasses = configs.wrapClasses;
				const tag = configs.tag || "div";
				return createElem({
					t : tag,
					c : Prefix + "a" + (wrapClasses ? " " + wrapClasses : ""),
					cs : [
						{
							t : tag,
							c : Prefix + "b",
							cs : [
								{
									t : tag,
									c : Prefix + "c",
									f : (elem)=>{
										if(typeIsString(content)){
											appends(elem, createTextNode(content));
										}
										else{
											appends(elem, content);
										}
									}
								}
							]
						}
					]
				});
			};
			const FInitParent = (parentElem)=>{
				const els = getByClass(parentElem, Prefix + "a", null, true);
				if(els){
					for(const el of els){
						FInit(el);
					}
				}
			};
			return {
				create : FCreate,
				init : FInit,
				initParent : FInitParent
			}
		})();		
		const FW_EllipsisOverRow = (()=>{
			/*	Fungsi akan memproses over row sesuai dengan tinggi wrap
				*	disini, tingga wrap harus terdefinisi via css
			*/
			const typeIsString = p_typeIsString;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const getByClass = p_elemGetByClass;	
			
			const Id = "90";
			const Prefix = "w-" + Id;
			const ClassElem = Prefix + "a";
			const ClassContent = Prefix + "b";
			
			const Create = (()=>{
				const main = (content)=>{
					const el = createElem({
						c : ClassElem,
						cs : [
							{
								c : ClassContent,
								f : (elem)=>{
									if(typeIsString(content)){
										elem.innerHTML = content;
									}
									else{
										appends(elem, content);
									}
								}
							}
						]
					});
					
					return el;
				};
				return main;
			})();
			const Init = (()=>{
				const main = (elParent)=>{
					const els = getByClass(elParent, ClassContent, null, true);
					if(els){
						for(const el of els){
							const contentHeight = el.offsetHeight;
							const parentHeight = el.parentNode.clientHeight;
							if(contentHeight - 5 > parentHeight){
								let innerBefore = el.innerHTML.trim();
								while(el.offsetHeight - 5 > parentHeight){
									const lastSpaseIndex = innerBefore.lastIndexOf(" ");
									if(lastSpaseIndex !== -1){
										const newInner = innerBefore.substring(0, lastSpaseIndex) + "...";
										el.innerHTML = newInner;
										innerBefore = newInner;
									}
									else{
										break;
									}
								}
							}
							
							/* mengenai - 5 
							pada desktop, ketika line heingt adalah 25, return tinggi adalah 25,
							namun, pada mobile, return adalah 26, ini belum diketahui penyebabnya apa,
							kemungkinan karena sistem, oleh karea itu, value -5 dibutuhkan.
							-5 sendiri dianggap jarak text ke sisi bawah untuk satu baris (line-height font)
							*/
						}
					}
				};
				return main;
			})();
			
			return {
				classes : {
					elem : ClassElem,
					content : ClassContent
				},
				create : Create,
				init : Init
			}
		})();
		const FW_Fonts = (()=>{
			/* TAHAP DAN FUNGSI UTAMA
				init			:	mengappend dan mengecek keadaan font 
				onReady 	:	function(spects, callback){}
									dimana,
										spects				:	all, atau gabungan family_weight_style
										callback			:	function(state){}
																	*	dimana {{state}} adalah keadaan font apakah {{ready}} atau {{timeout}}
																	*	untuk style == all, state akan bernilai false jika terdapat item yang timeout
																	
																	callback akan terpanggil baik itu untuk keadaan ready maupun timeout
																	
				RETURN
					items		
						family			: family
						style				:
						weight			:
						name			: family_weight_style, contoh (poppins_400_normal)
						index 			: currentIndex,
						callback 		: [], dihapus ketika fungsi checker selesai
						state 			: loading, ready, timeout
						
					itemsByName	:
					states				: states items sesuai index
					init
					onReady
			*/
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const body = g_body;
			const getById = p_elemGetById;
			const removeElem =  p_elemRemove;
			const addClasses = p_elemAddClasses;
			
			const devFonts = Dev_Fonts;
			const checkerWrapId = "w-fonts-checker";
			
			const obj = {};
			let	 onCheckerDone = [];	// akan bernilai null pada akhir proses checking, (semua event yang terpush telah dipanggil)
			const states = [];
			const items = (()=>{
				const returned = [];
				let currentIndex = 0;
				for(const s of devFonts){
					const splitedString = s.split(":");
					const family = splitedString[0];
					const variants = splitedString[1].split(",");
					for(const v of variants){
						const style = v.indexOf("italic") !== -1 ? "italic" : "normal";
						const weight = parseInt(v.replace(style, ""));
						const property = [family.replace(/\s+/g, "").toLowerCase(), weight, style].join("_");
						const data = {
							family,
							style,
							weight,
							name : property,
							index : currentIndex,
							callback : [],
							state : "loading"
						};
						states.push("loading");
						returned.push(data);
						currentIndex += 1;
					}
				}
				
				return returned;
			})();
			const itemsByName = (()=>{
				const returned = {};
				for(const item of items){
					returned[item.name] = item;
				}
				return returned;
			})();
			const init = ()=>{
				const elWrap = createElem({i : checkerWrapId});
				const elWrapStyle = elWrap.style;
				elWrapStyle.position = "absolute";
				elWrapStyle.top = "0";
				elWrapStyle.width = "100px";
				elWrapStyle.overflow = "hidden";
				elWrapStyle.fontSize = "30px";
				elWrapStyle.opacity = "0";
				elWrapStyle.visibility = "hidden";	
				
				const string = "01234abcdefGHIJKLMNOpqrstUVWXYZ";
				for(const item of items){
					const {family, style, weight} = item;
					const elFallback = createElem({n : string});
					const elRendered = createElem({n : string});
					for(const el of [elFallback, elRendered]){
						const s = el.style;
						s.fontFamily = (el === elRendered ? family + "," : "") + "sans-serif";
						s.fontStyle = style;
						s.fontWeight = weight;
						s.display = "inline-block";
						s.position = "relative";
						s.whiteSpace = "nowrap";
						s.visibility = "hidden"; // agar tidak memicu CLS		
					}
					item.elFallback = elFallback;
					item.elRendered = elRendered;
					appends(elWrap, elFallback);
					appends(elWrap, elRendered);
				}	
				appends(body, elWrap);	
				
				
				// Elements telah terappends
				// lakukan check
				{
					let timeout = 3000;
					let intervalDelay = 300;
					let timeSpend = 0;
					let runInterval = setInterval(()=>{
						_check();
						timeSpend += intervalDelay;	
						const timeover = timeSpend >= timeout;
						const allIsDone = states.indexOf("loading") === -1;
						if(timeover || allIsDone){
							clearInterval(runInterval);
							
							// sebelum menjalankan callback, agar lebih mudah update state terlebih dahulu
							// pada fase ini, ketika {{allIsDone}}, semua state sudah ready melalui fungsi {{_check}}
							// oleh karena itu, proses dapat dilakukan dengan mengecek state loading,
							// item dengan state loading adalah timeout
							for(const item of items){
								if(item.state === "loading"){
									item.state = "timeout";
									states[item.index] = "timeout";
									_addClassToBody(item); // {{kaghsgsvbFGGFGFAGFABDDDASDTYJN}}
								}
							}
							
							
							// RUN CALLBACK
							// sampai disini, callback telah terpanggil untuk semua item dengan state "ready" melalui fungsi _check
							// oleh karena itu, cukup proses callback item dengan state timeout
							for(const item of items){
								if(item.state === "timeout"){
									const callback = item.callback;
									for(const cb of callback){
										cb(item.state);
									}
									
									// beberapa property sudah tidak dibutuhkan, hapus
									// {{kaghsgsvbFGlkoutAGFABDDDASDTYJN}}
									delete item.elFallback;
									delete item.elRendered;
									delete item.callback;
								}
							}
						
							// selesai
							_checkDone();
						}
					}, intervalDelay);
				}
			};
			const onReady = (name, callback)=>{
				if(name === "all"){
					if(onCheckerDone === null){
						callback(states.indexOf("timeout") === -1);
					}
					else{
						onCheckerDone.push(callback);
					}
				}
				else{
					const item = itemsByName[name];
					if(item){
						if(item.state === "loading"){
							item.callback.push(callback);
						}
						else{
							callback(item.state);
						}
					}
				}
			};
			const _check = ()=>{
				for(const item of items){
					if(item.state === "loading"){
						const {elFallback, elRendered, index} = item;
						if(elFallback.offsetWidth !== elRendered.offsetWidth){
							const currentState = "ready";
							item.state = currentState;
							states[index] = currentState;							
							_addClassToBody(item); // posisi harus sama dengan pada proses init: {{kaghsgsvbFGGFGFAGFABDDDASDTYJN}}
							
							// eksekusi callback
							for(const cb of item.callback){
								cb(currentState);
							}
							
							// beberapa property sudah tidak dibutuhkan, hapus
							// posisi harus sama dengan pada proses init: {{kaghsgsvbFGlkoutAGFABDDDASDTYJN}}
							delete item.elFallback;
							delete item.elRendered;
							delete item.callback;
						}
					}
				}
			};
			const _checkDone = ()=>{
				const el = getById(checkerWrapId);
				if(el){
					removeElem(el);
				}
				
				// run onCheckerDone
				const isAllReady = states.indexOf("timeout") === -1;
				for(const cb of onCheckerDone){
					cb(isAllReady);
				}
				
				onCheckerDone = null;
			};
			const _addClassToBody = (item)=>{
				// class hanya akan ditambahkan jika font state adalah timeout
				if(item.state === "timeout"){
					const classes = ["w-font"];
					classes.push(item.family.replace(/\s+/g, "").toLowerCase()); // family to lower nospace
					classes.push((item.style === "italic" ? "i" : "n") + (item.weight + "")[0]); // style + weight ex: n4, i4, n7, i7
					addClasses(body, classes.join("-") + "-timeout");
				}
			};
		
			obj.items = items;
			obj.itemsByName = itemsByName;
			obj.states = states;
			obj.init = init;
			obj.onReady = onReady;
			
			return obj;		
		})();
		const FW_Labels = (()=>{
			const stringToArray = p_stringToArray;
			const wijsConfigs = g_wijsConfigs;
			const wijsBlog = g_wijsBlog;
			const {canonicalHomepageUrl} = wijsBlog; 
			const urlAppendParam = p_urlAppendParam;
			const urlAppendMobileParam = p_urlAppendMobileParam;
			
			let postsPerPage;
			const configsLabelsGroups = wijsConfigs.labelsGroup || "";
			const configsLabelsHidden =  wijsConfigs.labelsPrivate || "";
			const configsLabelsItemsPerGroup = 1;
	
			const Obj = (()=>{
				const groupsString = configsLabelsGroups; 
				const hiddenString =  configsLabelsHidden;
				const itemsPerGroup =  configsLabelsItemsPerGroup;
				
				const groupsItems = [];
				const groupsArray = groupsString.split("{{");
				for(const group of groupsArray){
					const closer = group.indexOf("}}");
					if(closer !== -1){
						const labels = group.substring(0, closer);
						const labelsArray = stringToArray(labels);
						const labelsLength = labelsArray.length;
						if(labelsLength !== 0){
							groupsItems.push(labelsArray);
						}
					}
				}
				
				const hiddenItems = stringToArray(hiddenString);
				return {
					itemsPerGroup : itemsPerGroup,
					groups : groupsItems.length === 0 ? null : groupsItems,
					hidden : hiddenItems.length === 0 ? null : hiddenItems
				}
			})();
			
			/*	SAMPAI DISINI: 
				Obj.groups === null jika tidak terdapat group
				Obj.hidden === null jika tidak terdapat hidden  */
			const GetFiltered = (()=>{
				const groupsArray = Obj.groups;
				const hiddenArray = Obj.hidden;
				const maxResultsPerGroup = Obj.itemsPerGroup;
				const main = (o)=>{
					/* argument o:
							labels					:	array labels name
							maxResults			:	number
							reverse					:	boolean
							skipGroups			:	string splited by koma
					*/
					let labels = o.labels;
					const maxResults = o.maxResults;
					const isReversed = o.reverse;
					const skippedGroups = stringToArray(o.skipGroups || "");
					
					let labelsLength = labels.length;
					if(labelsLength === 0){
						return null;
					}
					
					// STEP1: REMOVE ALL HIDDEN
					let nohidden; // array labels yang tidak termasuk hidden
					if(!hiddenArray){
						nohidden = labels;
					}
					else{
						nohidden = [];
						for(const label of labels){
							if(hiddenArray.indexOf(label) === -1){
								nohidden.push(label);
							}
						}
					}
					
					let nohiddenLength = nohidden.length;
					if(nohiddenLength === 0){
						return null;
					}
					
					labels = nohidden;
					labelsLength = nohiddenLength;
					
					
					// STEP2: SORT BY GROUPS
					if(groupsArray){
						const groups = groupsArray;
						const unGroupped = [];
						const groupped = [];
						const groupsLength = groups.length;
						for(let i=0;i<groupsLength;i++){
							groupped.push([]);
						}
						
						const len1 = labelsLength;
						const len2 = groupsLength;
						for(let i=0;i<len1;i++){
							for(let j=0;j<len2;j++){
								const group = groups[j];
								const label = labels[i];
								if(group.indexOf(label) !== -1){
									groupped[j].push(label);
									break;
								}
								else{
									if(j === len2 -1){
										unGroupped.push(label);
									}
								}
							}
						}
						
						let newLabels = [];
						if(!isReversed){
							for(let i=0;i<groupsLength;i++){
								const skippedNumString = (i + 1) + "";
								if(skippedGroups.indexOf(skippedNumString) === -1){
									const group = groupped[i];
									const len = group.length;
									for(let j=0;j<len;j++){
										if(j < maxResultsPerGroup){
											newLabels.push(group[j]);
										}
										else{
											break;
										}
									}
								}
							}
							
							newLabels = newLabels.concat(unGroupped);
						}
						else{
							for(let i=groupsLength -1;i>-1;i--){
								const skippedNumString = (i + 1) + "";
								if(skippedGroups.indexOf(skippedNumString) === -1){
									const group = groupped[i];
									const len = group.length;
									for(let j=0;j<len;j++){
										if(j < maxResultsPerGroup){
											newLabels.push(group[j]);
										}
										else{
											break;
										}
									}
								}
							}
							
							const newLabelsLength = newLabels.length;
							if(newLabelsLength < maxResults){
								const includedUngrouped = maxResults - newLabelsLength;
								for(let i=0;i<includedUngrouped;i++){
									if(unGroupped[i]){
										newLabels.splice(0, 0, unGroupped[i]);
									}
									else{
										break;
									}
								}
							}
						}
						
						labels = newLabels;
						labelsLength = newLabels.length;
					}
					
					if(labelsLength === 0){
						return null;
					}			

					if(maxResults < labelsLength){
						// !groups										:	langsung cut last
						// groups && !isReverses				:	langsung cut last
						// groups && isReversed				:	Ini artinya semua label adalah groupped labels, cut last
						
						// jadi, tidak ada perbedaan algorima
						// langsung cut
						labels.length = maxResults;
					}
				
					// ada kemungkinan label length == 0, ini bisa terjadi ketika maxResults === 0
					if(labels.length === 0){
						return null;
					}
					else{
						return labels;
					}							
				};
				return main;
			})();
			const CreateURL = (name)=>{
				if(!postsPerPage){
					postsPerPage = wijsConfigs.posts_per_page;
				}
				let url = canonicalHomepageUrl + "search/label/" + encodeURIComponent(name);
				url = urlAppendParam(url, "max-results=" + postsPerPage);
				url = urlAppendParam(url, "page=1");
				url = urlAppendMobileParam(url);
				return url;
			};

			
			const returnedObj = {
				data : Obj,
				getFiltered : GetFiltered,
				createURL :  CreateURL
				
			};
			
			
			return returnedObj;
		})();	
		const FW_Date = (()=>{
			const stringTrim = p_stringTrim;
			const objLoop = p_objLoop;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const getByClass = p_elemGetByClass;
			const createTextNode = p_elemCreateTextNode;
			const appends = p_elemAppends;
			const stringIsFalsy = p_stringIsFalsy;
			
			const wijsTexts = g_wijsTexts;
			const wijsConfigs = g_wijsConfigs;		
			
			let defaultDateFormat; // karena ini terdefinisi telat
			
			const monthNames = [
				Text_month1, 
				Text_month2, 
				Text_month3, 
				Text_month4, 
				Text_month5, 
				Text_month6, 
				Text_month7, 
				Text_month8, 
				Text_month9, 
				Text_month10, 
				Text_month11, 
				Text_month12
			];
			const keysReg = /D+|M+|Y+/g;
			const ISOToString = (ISO, format)=>{
				/*if(!monthNames){
					monthNames = (()=>{
						const returned = [];
						const reg = /month_(\d+?)$/;
						objLoop(wijsTexts, (item, index, key)=>{
							const match = reg.exec(key);
							if(match){
								returned[parseInt(match[1]) - 1 ] = item;
							}
						});
						
						return returned;
					})();
				}*/
				if(!defaultDateFormat){
					defaultDateFormat =  wijsConfigs.date_format;
				}
				const year = ISO.substring(0,4);
				const year2Digit = year[2] + year[3];
				const month = ISO.substring(5,7);
				const monthNotNol = month[0] !== "0" ? month : month[1];
				const day = ISO.substring(8,10);
				const dayNotNol = day[0] !== "0" ? day : day[1];
					
				const monthNum = parseInt(month); // 1 digit number based 1
				const dayNum = parseInt(day); // 1 digit number based 1
					
				let usedFormat;
				if(!format || stringIsFalsy(format)){
					usedFormat = defaultDateFormat;
				}
				else{
					usedFormat = format;
				}
				
				const time = usedFormat.replace(keysReg, (m)=>{
					const len = m.length;
					if(m[0] === "D"){
						if(len === 1){
							return dayNotNol;
						}
						else if(len === 2){
							return day;
						}
					}
					else if(m[0] === "M"){
						if(len === 1){
							return monthNotNol;
						}
						else if(len === 2){
							return month;
						}
						else if(len === 4){
							return monthNames[monthNum-1];
						}
					}
					else{
						if(len === 2){
							return year2Digit;
						}
						else if(len === 4){
							return year;
						}
					}
					
					// return kembali keyword yang tidak match dengan kondisi2 diatas,
					// ini harus direturn karena jika tidak akan tereplace dengan undefined
					return m;
				});
						
				return time;				
			};
			const init = (elTime)=>{
				/* *	mendefinisikan inner html pada elTime,
					*	elTime harus dibuat dengan format {{class='w-datetime' datetime='iso' format='format'}}
						dimana format bersifat opsional */
				const iso = elTime.getAttribute("datetime");
				if(iso){
					const format = getDataAttrTypeString(elTime, "format", true, null);
					const dateString = ISOToString(iso, format);
					if(dateString){
						appends(elTime, createTextNode(dateString));
					}
				}
			};
			const initParent = (elParent)=>{
				/* *	mendefinisikan inner html dates pada parent,
					*	elemen data harus dibuat dengan format {{class='w-datetime' datetime='iso' format='format'}}
						dimana format bersifat opsional */
				const els = getByClass(elParent, "w-datetime");
				if(els){
					for(const el of els){
						init(el);
					}
				}
			};
			return{
				monthNames,
				ISOToString,
				init,
				initParent
			}
		})();
		const FW_Img = (()=>{
			/*	ALUR PROGRAM
					1.	buat instance new fwImg.create(src, url, title)
						isi url dengan null atau nilai falsy lainnya untuk mendisable link
						
						atau buat instance berdasar element img data
						fwImg.createByImgData(elImgData)
							*	dimana elImgData dibuat dengan format
								<div class='w-img-data' data-src='' data-url='' data-title=''/>
							*	pembuatan tanpa keyword {{new}}
							
						sampai disini, instance akan menghasilkan properties
							src		
							url
							title
							
							
					2.	defineDom({wrapTag:"", wrapClasses:""})
						sampai disini, instance telah memiliki properties doms:
							elWrap				:	selalu dom, terdapat class w--s0 atau w--i0 jika tidak terdapat src
							elLink				:	dom or null. null jika tidak terdapat src atau url
							elImg				:	dom or null. null jika tidak terdapat src
					
							element2 diatas belum terappends pada masing-masing. lakukan proses appens dengan memanggil prototype .appendsImg();
					
					Sampa disini, proses mungkin akan dinamis sesuai kebutuhan. adapun beberapa proses selanjutnya yang mungkin dilakukan adalah:
					1.	instance.updateSrcByWrapDimension()
						mengupdate src berdasarkan dimensi wrap. disini dimensi wrap harus telah terdefinisi sepenuhnya
						proses ini akan meresize gambar dan mengupdate atribute src pada img maupun property src pada instance
						untuk instance tanpa src, proses akan diskip
						
					2. instance.appendsImg()
					   mengappend element-element image sesuai tempatnya			
			*/
			const appends = p_elemAppends;
			const createElem = p_elemCreateElem;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const resizeImg = p_resizeImg;
			const stringIsFalsy = p_stringIsFalsy;
			
			const createObj = function(src, url, title){
				const dis = this;
				dis.src = stringIsFalsy(src) ? null : src;
				dis.url = stringIsFalsy(url) ? null : url;
				dis.title = title;
			}
			createObj.prototype.defineDom = function(configs){
				const dis = this;
				const {src, url, title} = dis;
			
				const {wrapTag, wrapClasses} = configs || {};
				const elWrap = createElem({
					t : wrapTag || "div",
					c : "w-img" + (src ? " w--s0" : "") + (wrapClasses ? " " + wrapClasses : "") + (!src ? " w--i0" : "")
				});							
				const elLink = (!url || !src) ? null : createElem({
					t : "a",
					h : url,
					tt : title || false
				});
				const elImg = !src ? null : createElem({
					t : "img",
					s : src || "",
					f : (elem)=>{
						elem.setAttribute("title", title || "");
						elem.setAttribute("alt", title || "");
						elem.setAttribute("loading", "lazy");
						elem.onload = ()=>{
							_onload(dis);
						};
					}
				});
				
				dis.elWrap = elWrap;
				dis.elLink = elLink;
				dis.elImg = elImg;
			};
			createObj.prototype.updateSrcByWrapDimension = function(){
				const dis = this;
				const {src, elWrap, elLink, elImg} = dis;
				if(src){
					// ketika tanpa src, tidak ada elLink dan elImg jadi tidak dibutuhkan
					const wrapWidth = Math.floor(elWrap.clientWidth);
					const wrapHeight = Math.floor(elWrap.clientHeight);
					const newSrc = resizeImg(src || "", [wrapWidth, wrapHeight]);
					dis.src = newSrc;
					elImg.src = newSrc;
				}
			}
			createObj.prototype.appendImg = function(){
				const dis = this;
				const {elWrap, elLink, elImg} = dis;
				if(elLink){
					// ketika terdapat elLink, pasti terdapat elImg
					appends(elLink, elImg);
					appends(elWrap, elLink);
				}
				else{
					if(elImg){
						appends(elWrap, elImg);
					}
				}
			}
			
			const createObjByImgData = function(elImgData){
				const dataSrc = getDataAttrTypeString(elImgData, "src", true, null);
				const dataUrl = getDataAttrTypeString(elImgData, "url", true, null);
				const dataTitle = getDataAttrTypeString(elImgData, "title", true, "");
				const instance = new createObj(dataSrc, dataUrl, dataTitle);
				return instance;
			}
			
			
			const _onload = (instance)=>{
				const dis = instance;
				const {elWrap} = dis;
				
				// pada keadaan ini, wrap memiliki class w--s0 yang menampilkan pseudo
				// fade pseudo dengan menambahkan class w--s1
				addClasses(elWrap, "w--s1");
					
				setTimeout(()=>{
					removeClasses(elWrap, "w--s0");
					removeClasses(elWrap, "w--s1");
				}, 520);
			};
			
			return {
				create : createObj,
				createByImgData : createObjByImgData
			}
		})();
		const FW_JSONFeed = (()=>{
			const appends = p_elemAppends;
			const createElem = p_elemCreateElem;
			const removeElem = p_elemRemove;
			const head = g_head;
			
			const wijsBlog = g_wijsBlog;
			const wijsTemp = g_wijsTemp;
			const {canonicalHomepageUrl} = wijsBlog;
			
			const load = (callback, options, errorCallback)=>{
				const {
					content,						// posts, comments
					contentType,					// default, summary, full
					label,
					query,
					startIndex,
					maxResults
				} = options;
				
				const usedStartIndex = startIndex || 1;
				const usedMaxResults = maxResults || 1;
				const usedContent = content || "posts";
				const usedContentType = contentType || "summary";
				const callbackName = _createFnId();
				wijsTemp[callbackName] = callback;
				
				
				let src = canonicalHomepageUrl + "feeds/"+ usedContent +"/" + usedContentType;
				if(src.indexOf("http://") === 0){ // wajib https, jika tidak ada kemungkinan load json error
					src = "https://" + (src.substring(7));
				}
				
				if(label){
					src += "/-/" + encodeURI(label);
				}
				src += "?alt=json-in-script&start-index="+ usedStartIndex +"&max-results="+ usedMaxResults +"&callback=Wi.temp."+ callbackName;
				if(!label){
					if(query){
						src += "&q="+ encodeURI(query);
					}
				}
				
				const	script = createElem({t : "script"});
							script.async = true;
							script.src = src;
							script.onload = (e)=>{
								removeElem(script);
							};
							if(errorCallback){
								script.onerror = (e)=>{
									errorCallback();
								};
							}
							
						
				appends(head, script);
			};
			const JSONToPostsArray = (()=>{
				const main = (json)=>{
					const entries = json.feed.entry;
					if(entries){
						if(entries.length > 0){
							const postsArray = [];
							for(const entry of entries){
								const post = {};
								post.id = entry.id.$t.substring(entry.id.$t.indexOf("post-") + 5);
								post.title = entry.title.$t;
								post.url = getUrl(entry);
								post.summary = entry.summary  ? entry.summary.$t : (entry.content ? entry.content.$t : null);
								post.img = entry.media$thumbnail ? entry.media$thumbnail.url : null;
								post.authorName = entry.author[0].name.$t;
								post.authorProfileUrl = entry.author[0].uri ? entry.author[0].uri.$t : null;
								post.published = entry.published.$t;
								post.lastUpdated = entry.updated.$t;
								post.labels = getLabels(entry);
								postsArray.push(post);
							}
							return postsArray;
						}
					}
					return null;
				};
				const getUrl = (entry)=>{
					const links = entry.link;
					for(const link of links){
						if(link.rel === "alternate"){
							return link.href;
						}
					}
					return null;
				};
				const getLabels = (entry)=>{
					const category = entry.category || [];
					const labels = [];
					for(const label of category){
						labels.push(label.term);
					}
					return labels;
				};
				return main;
			})();
			const _createFnId = (()=>{
				const fnPrefix = "loadFeed";
				let latestUsedNum = 0;
				const main = ()=>{
					const newNum = latestUsedNum + 1;
					latestUsedNum += 1;
					const newFnName = fnPrefix + latestUsedNum;
					if(!wijsTemp[newFnName]){
						return newFnName;
					}
					else{
						return main();
					}
				};
			
				return main;
			})();
			
		
			return {
				load,
				JSONToPostsArray
			}
		})();
		const FW_LoadFeed = FW_JSONFeed;
		
		const FW_Breadcrumbs = (()=>{
			/* STRUKTUR
				homepage
					home > postingan	>
				search query
					home > pencarian > query > date >
				search by published
					home > postingan > date || page >
				search by label
					home > {{labelName}} > date || page >
				archive
					home > arsip > tahun || tahun > bulan || tahun > bulan > hari >
				page
					home > halaman blog >
				post
					home > {{labels}} >*/
			/*	RETURN
				create					:	fungsi pembuatan
				definePageInfo		:	(dataPagination)=>{}, dipanggil pada callback FW_BlogPagination untuk mendefinisikan berbagai data yang belum ditampilkan 
												seperti date atau page info */
				
			const getById = p_elemGetById;
			const removeComment = p_removeComment;
			const configsCreateData = p_configsCreateData;
			const configsStringValueToRealValue = p_configsStringValueToRealValue;
			const runEval = p_runEval;
			const createElem = p_elemCreateElem;
			const elemRemove = p_elemRemove;
			const elemReplace = p_elemReplace;
			const appends = p_elemAppends;
			const createTextNode = p_elemCreateTextNode;
			
			const wijsConfigs = g_wijsConfigs;
			const wijsBlog = g_wijsBlog;
			const isMultipleItems = wijsBlog.isMultipleItems;
			const isHomepage = wijsBlog.isHomepage;
			const isSearchByQuery = wijsBlog.isSearchByQuery;
			const isArchive = wijsBlog.isArchive;
			const isSearchByLabel = wijsBlog.isSearchByLabel;
			const isSearchByPublished = wijsBlog.isSearchByPublished;
			const searchLabel = wijsBlog.searchLabel;
			const searchQuery = wijsBlog.searchQuery;
			const isSingleItem = wijsBlog.isSingleItem;
			const isPost = wijsBlog.isPost;
			const isPage = wijsBlog.isPage;
			const homepageUrl = wijsBlog.homepageUrl;
			const blogTitle = wijsBlog.title;
			
			const fwDate = FW_Date;
			const fwLabels = FW_Labels;
			const fwOneRow = FW_OneRow;
			
			const prefix = "w-93";
			const selectorData = "w-data-breadcrumbs";
			const obj = {
				/*
					data
					configs
					el
				*/
			};
			const configsData = configsCreateData([
				["max_labels", 3, 3],
				["title_for_homepage", 1, Text_breadcrumbs_titleForHomepage],
				["title_for_search_by_label", 1, Text_breadcrumbs_titleForSearchByLabel],
				["title_for_search_by_query", 1, Text_breadcrumbs_titleForSearchByQuery],
				["title_for_search_by_published", 1, Text_breadcrumbs_titleForSearchByPublished],
				["title_for_archive", 1, Text_breadcrumbs_titleForArchive],
				["page_info", 1, Text_breadcrumbs_pageInfo],
				["text_home", 1, Text_breadcrumbs_textHome],
				["text_posts", 1, Text_breadcrumbs_textPost],
				["text_search", 1, Text_breadcrumbs_textSearch],
				["text_archive", 1, Text_breadcrumbs_textArchive],
				["text_blog_page", 1, Text_breadcrumbs_textBlogPage]
			]);
			const getData = ()=>{
				const elData = getById(selectorData);
				if(elData){
					elemRemove(elData);
					const stringObject = removeComment(elData.innerHTML);
					const objectObject = runEval(stringObject); // configs string
					if(objectObject){
						return objectObject;
					}
				}
				return null;
			};
			const create = ()=>{
				const configs = wijsConfigs.breadcrumbs;
				const data = getData();				
				
				if(!data){
					// error
					obj.errorMsg = "data_undefined";
				}
				else{
					obj.configs = configs;
					obj.data = data;
					
					const {
						max_labels,
						title_for_homepage,
						title_for_search_by_label,
						title_for_search_by_query,
						title_for_search_by_published,
						title_for_archive,
						page_info,
						text_home,
						text_posts,
						text_search,
						text_archive,
						text_blog_page
					} = configs;
					const {
						archiveYear,
						archiveMonth,
						archiveDay,
						postLabels
					} = data;
				
					const el = createElem({
						t : "section",
						c : prefix + "a",
						cs : [
							{
								c : "w-responsiver",
								cs : [
									{
										c : prefix + "b",
										f : (elem)=>{
											// TITLE
											let elTitle;
											if(isMultipleItems){
												let text = "";
												if(isHomepage){
													text = title_for_homepage;
												}
												else if(isSearchByLabel){
													text = (title_for_search_by_label || "").replace("{{label_name}}", searchLabel);
												}
												else if(isSearchByQuery){
													text = title_for_search_by_query;
												}
												else if(isSearchByPublished){
													text = title_for_search_by_published;
												}
												else{
													text = title_for_archive;
												}
												
												if(text){
													elTitle =  createElem({
														c : prefix + "c",
														f : (elem)=>{
															elem.innerHTML = text;
														}
													});
												}
											}
											
											if(elTitle){
												appends(elem, elTitle);
											}
											
											const elContent = createElem({
												c : prefix + "d",
												f : (elem)=>{
													// HOME
													appends(elem, createElem({
														t : "a",
														c : prefix + "i",
														h : homepageUrl,
														tt : blogTitle,
														n : text_home
													}));
													
													// MULTIPLEITEMS
													if(isMultipleItems){
														appends(elem, createElem({
															t : "span",
															c : prefix + "i",
															f : (elem)=>{
																let text = "";
																if(isHomepage || isSearchByPublished){
																	text = text_posts;
																}
																else if(isSearchByQuery){
																	text = text_search;
																}
																else if(isArchive){
																	text = text_archive;
																}
																else if(isSearchByLabel){
																	text = searchLabel;
																}
																
																elem.innerHTML = text;
															}
														}));
													}
													
													// SEARCH QUERY
													if(isSearchByQuery){
														appends(elem, createElem({
															t : "span",
															c : prefix + "i",
															cs : createTextNode(searchQuery)
														}));
													}
													
													// ARCHIVE
													if(isArchive){
														appends(elem, createElem({
															t : "span",
															c : prefix + "i",
															n : archiveYear
														}));
														
														if(archiveMonth !== "null"){
															appends(elem, createElem({
																t : "span",
																c : prefix + "i",
																n : fwDate.monthNames[parseInt(archiveMonth) - 1]
															}));
														}
														
														if(archiveDay !== "null"){
															appends(elem, createElem({
																t : "span",
																c : prefix + "i",
																n : archiveDay
															}));
														}
													}
													
													// BY PUBLISHED OR LABEL OR BY QUERY
													// ELEMENT TARGET YANG AKAN DIGUNAKAN PADA BLOG PAGINATION
													if(isSearchByPublished || isSearchByLabel || isSearchByQuery){
														appends(elem, createElem({
															t : "span",
															i : prefix + "pageinfo"
														}));
													}
													
													if(isSingleItem){
														if(isPost){
															if(postLabels.length !== 0){
																const usedLabels = fwLabels.getFiltered({
																	labels : postLabels,
																	maxResults : max_labels,
																	reverse : false,
																	skipGroups : ""
																}); // null or not empty
																if(usedLabels){
																	const isByGroup = fwLabels.data.groups;
																	const len = usedLabels.length;
																	for(let i=0;i<len;i++){
																		const label = usedLabels[i];
																		const elLabel = createElem({
																			t : "span",
																			c : prefix + "i" + (!isByGroup && i < len - 1 ? " w--bullet" : ""),
																			cs : [
																				{
																					t : "a",
																					tt : label,
																					n : label,
																					h : fwLabels.createURL(label)
																				}
																			]
																		});
																		appends(elem, elLabel);
																	}
																}
															}
														}
														
														if(isPage){
															appends(elem, createElem({
																t : "span",
																c : prefix + "i",
																n : text_blog_page
															}));
														}
													}
												}
											});
											const elOneRow = fwOneRow.create({}, elContent);
											appends(elem, elOneRow);
										}
									}
								]
							}
						]
					});
					obj.el = el;
					return el;
				}
			};
			const definePageInfo = (dataPagination)=>{
				// pastikan pemanggilan hanya dilakukan selain halaman singleitem dan homepage
				// jika tidak, akan terjadi duplikat process {{init}}
				// hal ini karena {{init}} juga dipanggil pada {{FN.createBreadcrumbs}}
				
				const {
					type,
					firstPostDateIso,
					lastPostDateIso,
					page,
					totalPages,
					hasToNum
				} = dataPagination;
				const {
					page_info
				} = obj.configs || {};
				
				const elPageInfo = getById(prefix + "pageinfo");
				if(elPageInfo){
					if(type === "default"){
						if(!firstPostDateIso || !lastPostDateIso){
							elemRemove(elPageInfo);
						}
						else{
							const fString = fwDate.ISOToString(firstPostDateIso);
							const lString = fwDate.ISOToString(lastPostDateIso);
							elPageInfo.className = prefix + "i"; // tambahkan class item karena belum ditambahkan
							elPageInfo.innerHTML = fString + (firstPostDateIso !== lastPostDateIso ? " - " + lString : "");
						}
					}
					else{
						const text = page_info.replace(/{{page}}/g, "<span>"+page+"</span>").replace(/{{total_pages}}/g, "<span>"+totalPages+"</span>");
						elPageInfo.className = prefix + "i";
						elPageInfo.innerHTML = text;
					}
				}
				
				init();
			};
			const init = ()=>{
				/* proses ini harus dipanggil setelah el diappend */
				fwOneRow.initParent(obj.el);
			};
			obj.configsData = configsData;
			obj.create = create;
			obj.definePageInfo = definePageInfo;
			obj.init = init;
			
			return obj;
		})();
		const FW_BlogPagination = !g_wijsBlog.isMultipleItems ? null : (()=>{
			const getById = p_elemGetById;
			const elemRemove = p_elemRemove;
			const configsCreateData = p_configsCreateData;
			const configsElemToObj = p_configsElemToObj;
			const fwBreadcrumbs = FW_Breadcrumbs;
				
			const prefix = "w-92";
			const obj = {};		
			/*	NONE 			
				obj.prefix
				obj.type = "none";		
				obj.callback
			*/
			/*  DEFAULT
				obj.el																
				obj.prefix														
				obj.type = "default";											
				obj.hasToNum = boolean;					
				obj.lastPostDateIso				
				obj.firstPostDateIso			
			*/
			/*  NUMBER					
				obj.el
				obj.prefix
				obj.type = "number";
				obj.lastPostDateIso				
				obj.firstPostDateIso	
				obj.totalPosts
				obj.totalPages
				obj.page
				obj.callback
			*/
			
			const configsData = configsCreateData([				
				["type", 1, "number", ["default", "number"]],		// string splited by koma, all || page, post, posts
				["text_home", 1, Text_pagination_textHome],
				["text_newer", 1, Text_pagination_textNewer],
				["text_newest", 1, Text_pagination_textNewest],
				["text_older", 1, Text_pagination_textOlder],
				["text_view_numeric_pagination", 1, Text_pagination_textViewNumericPagination]
			]);
			const configsDataForData = configsCreateData([
				["newerPageUrl", 1, null],		// string splited by koma, all || page, post, posts
				["olderPageUrl", 1, null],
				["postsLength", 3, null],
				["firstPostDateIso", 1, null],
				["lastPostDateIso", 1, null],
				["lastPostId", 1, null],
			]);						
			const getConfigs = ()=>{
				obj.configs = configsElemToObj("pagination", configsData);
			};
			const getData = ()=>{
				const elData = getById("w-data-pagination");
				const data = elData ? configsElemToObj(elData, configsDataForData) : null;
				obj.data = data;
			};
			const init = ()=>{
				const win = g_win;
				const getByClass = p_elemGetByClass;
				const pushError = p_pushError;
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const urlSetParam = p_urlSetParam;
				const urlAppendMobileParam = p_urlAppendMobileParam;
				const elemReplace = p_elemReplace;
				const urlGetParamValue = p_urlGetParamValue;
				const addClasses = p_elemAddClasses;
				const removeClasses = p_elemRemoveClasses;
				const elemGetBoundingClientRect = p_elemGetBoundingClientRect;
				const screen = p_screen;
				const getDataAttrTypeNumber = p_getDataAttrTypeNumber;
				const typeIsNumber = p_typeIsNumber;	
				
				const fwJSONFeed = FW_JSONFeed;

				const wijsConfigs = g_wijsConfigs;
				const posts_per_page = wijsConfigs.posts_per_page;
				const wijsBlog = g_wijsBlog;
				const {
					isArchive, 
					isHomepage, 
					isSearchByLabel, 
					isSearchByPublished,
					isSearchByQuery,
					homepageUrl,
					canonicalHomepageUrl,
					searchLabel,
					searchQuery
				} = wijsBlog;
				const blogTitle = wijsBlog.title;

				const wijsIcons = g_wijsIcons;
				const icon_chevron_left = wijsIcons.chevron_left;
				const icon_chevron_right = wijsIcons.chevron_right;
				const icon_first_page = wijsIcons.first_page;
				const icon_repeat_one = wijsIcons.repeat_one;
				const icon_reply_left = wijsIcons.reply_left;		

				const maxIncludedNum = screen.max(700) ? 5 : 7;
				const elTarget = getById("w-jstarget-pagination");		
				
				if(!elTarget){
					return _returnError("target element not found");
				}
				else{
					obj.elTarget = elTarget;
				}
				
				const content = "posts";
				const contentType = "summary";
				const label = isSearchByLabel ? searchLabel : null;
				const query = isSearchByQuery ? searchQuery : null;
				
				const configs = obj.configs;
				const {
					type,
					text_home,
					text_newer,
					text_newest,
					text_older,
					text_view_numeric_pagination
				} = configs;
				
				const data = obj.data;
				if(!data){
					return _returnError("data element not found");
				}
				
				const {
					newerPageUrl,
					olderPageUrl,
					postsLength,
					firstPostDateIso,
					lastPostDateIso,
					lastPostId,
				} = data;
				
				if(!postsLength || !firstPostDateIso || !lastPostDateIso || !lastPostId){
					obj.type = "none";
					return _returnError("one or more data undefined");
				}
							
				obj.firstPostDateIso = firstPostDateIso;
				obj.lastPostDateIso = lastPostDateIso;
				
				const url = win.location.href;
				const pageInUrl = (()=>{
					const stringValue = urlGetParamValue(url, "page"); // string || null
					if(stringValue){
						const numValue = parseInt(stringValue);
						if(typeIsNumber(numValue)){
							if(numValue > 0){
								return numValue;
							}
						}
					}
					return null;
				})();
				const maxResultsInUrl = (()=>{
					const stringValue = urlGetParamValue(url, "max-results"); // string || null
					if(stringValue){
						const numValue = parseInt(stringValue);
						if(typeIsNumber(numValue)){
							if(numValue > 0){
								return numValue;
							}
						}
					}
					return null;
				})();
				const hasUpdatedMax = url.indexOf("updated-max=") !== -1;
				const hasFromArchiveParam = url.indexOf("from-archive=true") !== -1;
				
				const setFromArchiveParam = (url)=>{
					return urlSetParam(url, "from-archive", "true");
				};
				const setMaxResultsParam = (url)=>{
					return urlSetParam(url, "max-results", posts_per_page);
				};
						
				// DEFINISIKAN FINAL URL PAGE
				let usedNewerPageUrl = null;
				let usedNewestPageUrl = null;
				let usedOlderPageUrl = null;
				if(type === "number"){
					usedNewerPageUrl = newerPageUrl;
					usedOlderPageUrl = olderPageUrl;
				}
				else{
					{ // newer
						if(newerPageUrl){
							if(isArchive){ 
								// tidak tersedia
								usedNewerPageUrl = null;
							}
							else if(isSearchByLabel){
								// tidak tersedia karena yang akan digunakan adalah newest
								usedNewerPageUrl = null;
							}
							else if(isSearchByQuery){
								// tetap gunakan default
								usedNewerPageUrl = newerPageUrl;
							}
							else if(isSearchByPublished){
								if(newerPageUrl === homepageUrl){
									// keadaan ini hanya mungkin ditemui pada halaman searchByLabel dan searchByPublished
									// disini, ini adalah untuk searchByPublished
									if(!hasUpdatedMax){
										// tidak terdapat updated-max, ini artinya ini adalah halaman pertama
										// newer akan didisabled
										usedNewerPageUrl = null;
									}
									else{
										// ini artinya adalah halaman kedua 
										// newer akan diubah ke halaman pertama
										usedNewerPageUrl = canonicalHomepageUrl + "search";
									}
								}
								else{
									// tetap gunakan default
									usedNewerPageUrl = newerPageUrl;
								}
								
								// ada kemungkinan user menuju published dari archive
								// tambahkan parameter from-archive
								if(usedNewerPageUrl){
									if(hasFromArchiveParam){
										usedNewerPageUrl = setFromArchiveParam(usedNewerPageUrl);
									}
								}
							}
						}
					}
					{ // newest
						if(newerPageUrl){
							if(isSearchByLabel){
								// halaman search by label selalu memiliki url newer ke halaman pertama,
								// jadi, langsung atur saja
								usedNewerPageUrl = canonicalHomepageUrl + "search/label/" + encodeURIComponent(label);
							}
						}
						
						if(usedNewestPageUrl){
							usedNewestPageUrl = setMaxResultsParam(usedNewestPageUrl);
							usedNewestPageUrl = urlAppendMobileParam(usedNewestPageUrl);	
							// karena type default, page tidak ditambahkan agar selanjutnya tetap default
						}
					}
					{ // older
						if(olderPageUrl){
							usedOlderPageUrl = olderPageUrl;
							if(isArchive){
								usedOlderPageUrl = setFromArchiveParam(usedOlderPageUrl);
							}
							else if(isSearchByPublished){
								if(hasFromArchiveParam){
									usedOlderPageUrl = setFromArchiveParam(usedOlderPageUrl);
								}
							}
						}
						
						if(usedOlderPageUrl){
							usedOlderPageUrl = setMaxResultsParam(usedOlderPageUrl);
							// disini, older page url didapat sepenuhnya dari data 
							// jadi tidak perlu menambahkan parameter mobile dan max-results karena sudah tersedia
							// namun untuk max-results, untuk amannya, set agar tidak terjadi perbedaan dengan {{posts_per_page}}
						}
					}
				}				
			
				// TENTUKAN TYPE PAGINATION YANG DIGUNAKAN
				const paginationType = (()=>{
					/* validasi berbagai keadaan yang akan memaksa type ke default 
					1. jumlah postingan yang tampil > dari jumlah posts per page
					2. jumlah postingan yang tampil < dari jumlah posts per page namun terdapat older
					3. bukan homepage namun tidak terdapat param {{page}}
					4. halaman arsip
					5. halaman view arsip 
					6. halaman search by query*/
					const setToDefault = (()=>{
						if(type === "number"){
							// 1. jumlah postingan yang tampil > dari jumlah posts per page
							if(postsLength > posts_per_page){
								return true;
							}
							
							// 2. jumlah postingan yang tampil < dari jumlah posts per page namun terdapat older
							if((postsLength < posts_per_page) && usedOlderPageUrl){
								return true;
							}
							
							// 3. bukan homepage namun tidak terdapat param {{page}}
							if(!isHomepage && !pageInUrl){
								return true;
							}
							
							// 4. halaman arsip
							if(isArchive){
								return true;
							}
							
							// 5. halaman view arsip
							if(isSearchByPublished && hasFromArchiveParam){
								return true;
							}
							
							// 6. halaman search by query
							if(isSearchByQuery){
								return true;
							}
						}
						return false;
					})();
					
					return setToDefault ? "default" : type;
				})();
				obj.type = paginationType;
				const isDefaultType = paginationType === "default";
				const isForcedToDefault = isDefaultType && type === "number";
				const hasHomeLink = !isHomepage;
				const hasNewerLink = isDefaultType && usedNewerPageUrl;
				const hasNewerButton = isDefaultType && !isSearchByLabel;
				const hasNewestLink = isDefaultType && usedNewestPageUrl;
				const hasNewestButton = isDefaultType && isSearchByLabel;
				const hasOlderLink = isDefaultType && usedOlderPageUrl;
				const hasOlderButton = isDefaultType && true;
				const hasToNumButton = isForcedToDefault && (hasNewerLink || hasNewestLink || hasOlderLink) && !isArchive && !isSearchByQuery;
				
				const runOnFinish = ()=>{
					const {type, el, callback} = obj;
					if(type !== "none"){
						if(type === "number"){
							process();
						}
					
						if(el){
							removeClasses(el, "w--invisible");
						}
					
						if(callback){
							callback();
						}
					}
				};			
				const process = ()=>{ 
					// hanya terpanggil jika type !== "none"
					// jadi tidak memerlukan kondisi by type
					const el = obj.el;
					const wrapper = getByClass(el, prefix + "b", 0);
					const pageNum = getById(prefix + "pagenum");
					
					// pageNum mungkin tidak tersedia karena halaman yang tersedia cuma 1
					// jadi, harus pake check seperti berikut
					if(wrapper && pageNum){
						const wrapperRight = elemGetBoundingClientRect(wrapper).right;
						const pageNumRight = elemGetBoundingClientRect(pageNum).right;
						if(wrapperRight > pageNumRight){
							const homeText = getByClass(el, prefix + "ht", 0);
							if(homeText){
								elemRemove(homeText);
							}
						}
					}
				};		
				const onClickNum = (e)=>{
					e.preventDefault();
					const el = e.target;
					addClasses(el, "w--s1");
					const numPage = getDataAttrTypeNumber(el, "page", false, null);
					if(numPage){
						if(numPage === 1){
							let url = canonicalHomepageUrl;
							if(isSearchByPublished){
								url += "search";
							}
							else if(isSearchByLabel){
								url += "search/label/" + encodeURIComponent(label);
							}
							else if(isSearchByQuery){
								url += "search?q=" + encodeURIComponent(query);
							}
							// arsip pasti default, jadi tidak diperlukan
							url = setMaxResultsParam(url);
							url = urlSetParam(url, "page", "1");
							url = urlAppendMobileParam(url);
						
							win.location.href = url;
							return;
						}
						else{
							fwJSONFeed.load((json)=>{
								const feed = json.feed;
								if(feed){
									const entry = feed.entry;
									if(entry){
										const post = entry[0];
										const publishedISO = post.published.$t;
						
										// dari format iso ini:							2021-05-14T20:33:00.011-07:00
										// yang digunakan oleh url hanya 		2021-05-14T20:33:00		-07:00
										const publishedISOToUrl = publishedISO.substring(0, publishedISO.indexOf(".")) + publishedISO.substring(publishedISO.indexOf(".") + 4);
										
										let url = canonicalHomepageUrl;
										if(isHomepage || isSearchByPublished){
											url += "search";
										}
										else if(isSearchByLabel){
											url += "search/label/" + encodeURIComponent(label);
										}
										else if(isSearchByQuery){
											url += "search?q=" + encodeURIComponent(query); 
										}
										// arsip pasti default, jadi tidak diperlukan
										url = urlSetParam(url, "updated-max", encodeURIComponent(publishedISOToUrl)); // publishedISONoZone;
										url = setMaxResultsParam(url);
										url = urlSetParam(url, "page", numPage);
										url = urlAppendMobileParam(url);
										
										win.location.href = url;
										return;
									}
								}
								
								// error
								// kembalikan inner pageNum dengan menghapus class w--s1
								removeClasses(el, "w--s1");
							}, {
								content,
								contentType,
								label,
								query,
								startIndex : ((posts_per_page * numPage) - posts_per_page) || 1,
								maxResults : 1
							});
						}
					}
					else{
						// error
						// kembalikan inner pageNum dengan menghapus class w--s1
						removeClasses(el, "w--s1");
					}
				};				
				
				// pagination hanya akan dibuat ketika terdapat setidaknya 1 tombol yang aktif
				const maybeHasPagination = (()=>{
					if(isDefaultType){
						if(hasHomeLink || hasNewerLink || hasNewestLink || hasOlderLink){
							return true;
						}
					}
					else{
						if(newerPageUrl || olderPageUrl){ // compare harus menggunakan data original
							return true;
						}
					}
					return false;
				})(); 
				
				if(!maybeHasPagination){
					// tidak terdapat pagination namun valid. 
					obj.type = "none";
					runOnFinish();
				}
				else{
					const el = createElem({
						t : "section",
						c : prefix + "a w--invisible",
						cs : [
							{
								c : "w-responsiver",
								cs : [
									{
										c : prefix + "b",
										cs : [
											{
												c : prefix + "c",
												i : prefix + "items",
												f : (elem)=>{
													{// home
														appends(elem, createElem({
															c : prefix + "i" + (!hasHomeLink ? " w--disabled" : ""),
															i : prefix + "home",
															cs : [
																{
																	t : "a",
																	h : homepageUrl,
																	tt : blogTitle,
																	f : (elem)=>{
																		elem.innerHTML = `${icon_reply_left}<span class='${prefix + "ht"}'>${text_home}<\/span>`;
																	}
																}
															]
														}));
													}
													{ // tonum 
														if(hasToNumButton){
															let usedUrl = canonicalHomepageUrl;
															if(isHomepage || isSearchByPublished){
																usedUrl += "search";
															}
															else if(isSearchByLabel){
																usedUrl += "search/label/"+ encodeURIComponent(label);
															}
															
															
															usedUrl = setMaxResultsParam(usedUrl);
															usedUrl = urlSetParam(usedUrl, "page", 1);
															usedUrl = urlAppendMobileParam(usedUrl);
															appends(elem, createElem({
																c : prefix + "i",
																i : prefix + "tonum",
																cs : [
																	{
																		t : "a",
																		c : prefix + "j",
																		h : usedUrl,
																		tt : text_view_numeric_pagination,
																		n : icon_repeat_one
																	}
																]
															}));		
															obj.hasToNum = true;
														}
													}
													{ // newest
														if(hasNewestButton){
															appends(elem, createElem({
																c : prefix + "i",
																i : prefix + "newest",
																f : (elem)=>{
																	appends(elem, createElem({
																		t : hasNewestLink ? "a" : "span",
																		h : hasNewestLink ? usedNewestPageUrl : false,
																		c : prefix + "j",
																		f : (elem)=>{
																			if(usedNewestPageUrl){
																				elem.setAttribute("title", text_newest);
																			}
																			elem.innerHTML = icon_first_page;
																		}
																	}));
																}
															}));		
														}
													}
													{ // newer
														if(hasNewerButton){
															appends(elem, createElem({
																c : prefix + "i",
																i : prefix + "newer",
																f : (elem)=>{
																	appends(elem, createElem({
																		t : hasNewerLink ? "a" : "span",
																		h : hasNewerLink ? usedNewerPageUrl : false,
																		c : prefix + "j",
																		f : (elem)=>{
																			if(hasNewerLink){
																				elem.setAttribute("title", text_newer);
																			}
																			elem.innerHTML = icon_chevron_left;
																		}
																	}));
																}
															}));
														}
													}
													{ // older
														if(hasOlderButton){
															const elOlder = createElem({
																c : prefix + "i",
																i : prefix + "older",
																cs : [
																	{
																		t : hasOlderLink ? "a" : "span",
																		c : prefix + "j",
																		f : (elem)=>{
																			if(hasOlderLink){
																				elem.setAttribute("title", text_older);
																				elem.setAttribute("href", usedOlderPageUrl);
																			}
																			elem.innerHTML = icon_chevron_right;
																		}
																	}
																]
															});
															appends(elem, elOlder);
															
															// fix bug
															// proses hanya diperlukan pada halaman label saja karena bug hanya ada di type halaman ini
															// related: {{kagahhsitfhffnkfkjfkjfk}}
															if(isSearchByLabel){
																const runOnFinishProcess = (disabledOlderLink)=>{
																	if(disabledOlderLink){
																		addClasses(elOlder, "w--disabled");
																		
																		// disini, older link tidak tersedia. atau dengan kata lain, ini adalah halaman terakhir
																		// pada kasus ini, ada kemungkinan ini juga adalah halaman pertama
																		// pada keadaan dimana jumlah post yang tampil < posts_per_page, elToNum tersedia
																		// maka dari itu, element per didisable
																		if(!hasNewestLink && hasToNumButton){
																			const elToNum = getById(prefix + "tonum");
																			if(elToNum){
																				addClasses(elToNum, "w--disabled");
																			}
																		}
																	}
																	
																	
																	runOnFinish();
																};
									
																if(olderPageUrl){
																	const loadFeedObj = {
																		content,
																		contentType,
																		label,
																		startIndex : 1,
																		maxResults : 1
																	};
																	fwJSONFeed.load((json)=>{
																		const totalPosts = parseInt(json.feed.openSearch$totalResults.$t);
																		if(totalPosts){
																			if(totalPosts > 1){
																				loadFeedObj.startIndex = totalPosts; // update data startIndex sesuai totalPosts untuk meload posts terakhir
																				fwJSONFeed.load((json)=>{
																					const entry = json.feed.entry;
																					if(entry){
																						const post = json.feed.entry[0];
																						if(post){
																							let id = post.id.$t;
																							id = id.substring(id.lastIndexOf("-") + 1);
																							if(id === lastPostId){
																								runOnFinishProcess(true);
																							}
																							else{
																								runOnFinishProcess(false);
																							}
																						}
																						else{
																							runOnFinishProcess(true);
																						}
																					}
																					else{
																						runOnFinishProcess(true);
																					}
																				}, loadFeedObj, ()=>{
																					_returnErrorLoadJSON("can't load json (step_2) for checking oldest");
																					runOnFinishProcess(false);
																				});
																			}
																			else{
																				runOnFinishProcess(true);
																			}
																		}
																		else{
																			runOnFinishProcess(true);
																		}
																	}, loadFeedObj, ()=>{
																		_returnErrorLoadJSON("can't load json (step_1) for checking oldest");
																		runOnFinishProcess(false);
																	});																
																}
																else{
																	runOnFinishProcess(false);
																}
															}
														}
													}
													{ // number
														if(!isDefaultType){
															fwJSONFeed.load((json)=>{
																const totalPosts = parseInt(json.feed.openSearch$totalResults.$t);
																const totalPages = Math.floor(totalPosts / posts_per_page) + (totalPosts % posts_per_page == 0 ? 0 : 1);
																const page = isHomepage ? 1 : pageInUrl;
																const includedNums = (()=>{
																	let possible = maxIncludedNum;
																	let half = Math.floor(possible / 2);
																	const included = [];
																	let start;
																	let end;
																	if(totalPages <= possible){
																		start = 1;
																		end = totalPages;
																	}
																	else{
																		const possibleLeft = page - half >= 1;
																		const possibleRight = page + half <= totalPages;
																		if(possibleLeft && possibleRight){
																			start = page - half;
																			end = page + half;
																		}
																		else{
																			if(!possibleLeft){
																				start = 1;
																				end = possible;
																			}
																			else{
																				end = totalPages;
																				start = end - possible + 1;
																			}
																		}
																	}
																	
																	
																	for(let i=start;i<=end;i++){
																		included.push(i);
																	}
																	
																	included[0] = 1;
																	included[included.length - 1] = totalPages;
																	
																	return included;
																})();
																
																if(includedNums.length > 1){
																	const dom = createElem({
																		c : prefix + "k",
																		i : prefix + "pagenum",
																		cs : [
																			{
																				c : prefix + "l",
																				cs : [
																					{
																						c : prefix + "m",
																						f : (elem)=>{
																							const len = includedNums.length;
																							for(let i=0;i<len;i++){
																								const disPage = includedNums[i];												
																								appends(elem, createElem({
																									t : "span",
																									c : (disPage === page ? "w-active" : false),
																									n : includedNums[i],
																									f : (elem)=>{
																										elem.setAttribute("data-page", includedNums[i]);
																										elem.onclick = onClickNum;
																									}
																								}));
																							}
																						}
																					}								
																				]
																			}
																		]
																	});

																	appends(elem, dom);
																}
																
																obj.totalPosts = totalPosts;
																obj.totalPages = totalPages;
																obj.page = page;
																
																setTimeout(()=>{
																	runOnFinish();
																}, 50);	
															}, {
																content,
																contentType,
																label,
																query,
																startIndex : 1,
																maxResults : 1
															}, ()=>{
																// failed to load json pagination
																_returnErrorLoadJSON("failed to load json for generate number");
																runOnFinish();
															});
														}
													}
												}
											}
										]
									}
								]
							}
						]
					});
					
					elemReplace(elTarget, el);	
					obj.el = el;
					
					
					// RUN ON FINISH
					// TAMPILKAN PAGINATION
					if(isDefaultType){
						// disini, untuk search by label, proses dilakukan pada skope sebelumnya
						// untuk tipe default, {{runOnFinish}} dipanggil pada callback json pada kondisi dimana bug perlu difix
						// sesuaikan kondisi ini dengan {{kagahhsitfhffnkfkjfkjfk}}
						if(!isSearchByLabel){
							runOnFinish();
						}
						else{
							// proses pada skope sebelumnya hanya akan terpanggil ketika terdapat older
							// jika tidak, proses tidak akan terpanggil yang mengakibatkan runOnFinish tidak terpanggil
							// oleh karena itu, ketika tidak ada navigasi yang aktif sama sekali (seluruh artikel ditampilkan), runOnFinish harus dijalankan di skope ini
							if(!hasOlderLink){
								runOnFinish();
							}
						}
					}
					else{
						// untuk type number, {{runOnFinish}} dipanggil pada callback json
					}
				}
			};
			
			const _returnError = (msg)=>{
				// do suff here
				obj.errorMsg = msg;
				if(obj.elTarget){
					elemRemove(obj.elTarget);
				}
				return false; // akan direturn ke init sebagai identifikasi pada fungsi level atas
			};
			const _returnErrorLoadJSON = (msg)=>{
				obj.errorMsg = msg;
				if(obj.elTarget && obj.elTarget.parentNode){
					elemRemove(obj.elTarget);
				}
				else{
					if(obj.el && obj.el.parentNode){
						elemRemove(obj.el);
					}
				}
			};
			obj.prefix = prefix;
			obj.configsData = configsData;
			obj.getConfigs = getConfigs;
			obj.getData = getData;
			obj.init = init;
			obj.callback = ()=>{
				// isi dengan fungsi yang menunggu pagination selesai
				fwBreadcrumbs.definePageInfo(obj);
			};
			
			return obj;
		})();
		const FW_BlogMessage = (()=>{
			const configsCreateData = p_configsCreateData;
			const createElem = p_elemCreateElem;
			const createTextNode = p_elemCreateTextNode;
			const appends = p_elemAppends;
			const addClasses = p_elemAddClasses;
			const getById = p_elemGetById;
			const elemReplace = p_elemReplace;
			const elemRemove = p_elemRemove;
			
			const wijsConfigs = g_wijsConfigs;
			const wijsBlog = g_wijsBlog;
			const {
				isError,
				isSearchByQuery,
				homepageUrl
			} = wijsBlog;
			const blogTitle = wijsBlog.title;
			
			const wijsIcons = g_wijsIcons;
			const icon_flat_smile = wijsIcons.flat_smile;
			
			const fwButton = FW_Button;
			
			
			const configsData = configsCreateData([			
				["error_page_title", 1, Text_blogMessage_errorPageTitle],
				["error_page_message", 1, Text_blogMessage_errorPageMessage], 
				["search_no_results_title", 1, Text_blogMessage_searchNoResultsTitle], 
				["search_no_results_message", 1, Text_blogMessage_searchNoResultsMessage],
				["no_posts_title", 1, Text_blogMessage_noPostsTitle], 
				["no_posts_message", 1, Text_blogMessage_noPostsMessage],
				["go_to_homepage_title", 1, Text_blogMessage_goToHomepageTitle],
			]);
			const targetPlacementSelector = "w-jstarget-blog-message"; 
			const init = ()=>{
				const configs = wijsConfigs.blog_message;
				const elTarget = getById(targetPlacementSelector); // hanya tersedia ketika terdapat blog message
				if(elTarget){
					const {
						error_page_title,
						error_page_message,
						search_no_results_title,
						search_no_results_message,
						no_posts_title,
						no_posts_message,
						go_to_homepage_title,
					} = configs;
					let title = "";
					let message = "";
					if(isError){
						title = error_page_title;
						message = error_page_message;
					}
					else if(isSearchByQuery){
						title = search_no_results_title;
						message = search_no_results_message;
					}
					else{
						title = no_posts_title;
						message = no_posts_message;
					}
					
					const selectorPrefix = "w-blog-message-";
					const el = createElem({
						t : "section",
						c : selectorPrefix + "wrap",
						cs : [
							{
								c : "w-responsiver",
								cs : [
									{
										c : selectorPrefix + "content",
										cs : [
											{	// icon
												c : selectorPrefix + "icon",
												n : icon_flat_smile
											},
											{	// title
												c : "w-2a w--a2 w--l1 w--t1 w--s0",
												cs : [
													{
														c : "w-2b",
														cs : [
															{  
																t : "h2",
																c : "w-2c " + selectorPrefix + "title",
																cs : createTextNode(title)
															}
														]
													}
												]
											},
											{  // message
												c : selectorPrefix + "message",
												n : message
											}
										],
										f : (elem)=>{
											const elButton = fwButton.create({
												title 						: 	go_to_homepage_title,
												tag 						: 	"a",
												url 						: 	homepageUrl,
												full_width				:	false,
												size						:	"normal",
												/* not assigned use default
												skin 						: 	"main",
												box_type				:	"solid",
												rounded				:	false,
												*/
											});
											addClasses(elButton, selectorPrefix + "gotohomepage");
											appends(elem, elButton);
										}
									}
								]
								
							}
						]
					});
					
					elemReplace(elTarget, el);
				}
				
				// remove noscript
				const elNoScriptMessage = getById("w-noscript-message");
				if(elNoScriptMessage){
					elemRemove(elNoScriptMessage);
				}
				
			};
			return {
				configsData,
				init
			}
		})();

		const FW_Grid = (()=>{
			/*	PEMBUATAN
				const gridInstance = new fwGrid.create({
					configs : {
						maxCols							: 	3,
						itemBox							:	"none"										// "none", "border", "shadow", 
						firstRowItemBorder			:	true,
						lastRowItemBorder			:	true,
						slider								:	false,
						footerAlign						:	"center",     								// "left", "center", "right", "justify"
						moreLinkUrl						:	"",
						moreLinkTitle						:	"text view more as default"
					},
					elItems : array elements items
					elParen :
				});
				
				return instance
					configs
					configData
					elParent
					elItems
					cols
					el
					el2												:	disertakan karena hampir selalu dibutuhkan, {{kebutuhan penambahan class}}
					data												:	object slider
					
					prototypes
						init
							*	Proses pembuatan tidak langsung mengappend {{el}} ke el parent
								Lakukan proses init setelah el di append dan ready, {{fontLoadded}} misalnya
			*/
			/*  STATES CLASSES
				Class yang ditambahkan pada proses {{Create}}
					w--c[num]							:	jumlah kolom
					w--ib[num]						:	box type, start form 0
					
				Class yang ditambahkan pada proses init
					w--sl[01]							:	status slider
					w--frib0							:	no first row item border
					w--lrib0								:	no last row item border
					w--fr									:	first row, hanya ditambahkan ketika slider tidak aktive. Class ini ditambahkan pada {{grid item}}
					w--lr									:	last row, hanya ditambahkan ketika slider tidak aktive. Class ini ditambahkan pada {{grid item}}
			*/
		
			const configsCreateData = p_configsCreateData;
			const configsGetOptionIndex = p_configsGetOptionIndex;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const getByClass = p_elemGetByClass;
			const getById = p_elemGetById;
			const getChildren = p_elemGetChildren;
			const getBoundingClientRect = p_elemGetBoundingClientRect;
			const insertJsBasedCss = p_insertJsBasedCss;
			const eventAddTouch = p_eventAddTouch;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const hasClass = p_elemHasClass;
			
			const wijsIcons = g_wijsIcons;
			const icon_chevron_right = wijsIcons.chevron_right;
			const icon_chevron_left = wijsIcons.chevron_left;
			
			const fwDefaultValues = FW_DefaultValues;
			
			const prefix = "w-30";
			const configsData = configsCreateData([
				["max_cols", 3, 3, [3, 3]],
				["item_box", 1, "shadow", ["none", "border", "shadow"]],
				["first_row_item_top_border", 2, true],
				["last_row_item_bottom_border", 2, true],
				["slider", 2, false],
				["footer_align", 1, "center", ["left", "center", "right", "justify"]],
				["more_link_url", 1, ""],
				["more_link_title", 1, fwDefaultValues.more_link_title]
			]);
			
			const create = (()=>{
				const main = function(o){
					const {configs, elItems, elParent} = o;	
					const el = createElem({
						c : (()=>{
							const	arry = [prefix + "a"];
										arry.push("w--ib"+ configsGetOptionIndex(configsData, "item_box", configs.item_box, 0));
										
							return arry.join(" ");
						})(),
						cs : [
							{
								c : prefix + "b",
								f : (elem)=>{
									const len = elItems.length;
									for(let i=0;i<len;i++){
										const elItem = elItems[i];
										appends(elem, createElem({
											c : prefix + "i",
											cs : elItem
										}));
									}
								}
							}
						]
					});
					
					const dis = this;
					dis.configs = configs;
					dis.configsData = configsData;
					dis.elParent = elParent;
					dis.elItems = elItems;
					dis.el = el;
					dis.el2 = getByClass(el, prefix + "b", 0);
				};
				main.prototype.init = function(callback){
					const dis = this;
					const {el, elItems, configs, configsData, elParent} = dis;
					const {max_cols, item_box, slider, more_link_url, more_link_title, footer_align, first_row_item_top_border, last_row_item_bottom_border} = configs;
					const cols = (()=>{
						if(configs.cols){
							return configs.cols; // cols didefinisikan diluar ft grid
						}
						else{
							if(max_cols === 1){
								// {{FC_GRID_1_COL}}
							}
							else if(max_cols === 2){
								// {{FC_GRID_2_COL}}
							}
							else if(max_cols === 3){
								// Penentuan kolom dilihat dari lebar wrap
								const width = elParent.clientWidth;
								if(width >= 1089){ // w1
									return 3;
								}
								else if(width >= 640){
									return 2;
								}
								else{
									return 1;
								}
							}
						}
					})();
					dis.cols = cols;
					
					// Untuk kebutuhan item distance, class cols harus ditambahkan
					addClasses(el, "w--c" + cols);
				
					// Validasi slider
					// disini, meskipun configs slider === true, ada kemungkinan jumlah item tidak mencukupi minimal kebutuhan slider
					let hasSlider = slider;
					if(hasSlider){
						if(elItems.length <= cols){
							hasSlider = false;
						}
					}
					
					
					if(!hasSlider){
						// SAMPAI DISINI, SLIDER 100% TIDAK TERSEDIA
						dis.slider = false;
						
						{	// tambahkan class status slider
							addClasses(el, "w--sl0");
						}
						
						{ 	// tambahkan class yang me-enable border top item
							if(item_box === "border"){
								if(first_row_item_top_border){
									const elItemsLength = elItems.length;
									for(let i=0;i<elItemsLength;i++){
										if(i < cols){
											addClasses(elItems[i].parentNode, "w--tb1");
										}
									}
								}
							}
						}
						{ 	// tambahkan class mendisable border bottom dan mendefinisikan last row
							// ketika slider tidak aktif, class yang mengdentifikasikan item tersebut merupakan item pada baris terakhir diperlukan
							// class tersebut digunakan untuk mereset margin
							// class disable border bottom
							const doProcessLastRow = item_box === "border" && !last_row_item_bottom_border;
							const elItemsLength = elItems.length;
							let lastRowItemCount = elItemsLength % cols;
							if(lastRowItemCount === 0){
								lastRowItemCount = cols;
							}
							for(let i=0;i<elItemsLength;i++){
								if(i >= elItemsLength - lastRowItemCount){
									if(doProcessLastRow){
										addClasses(elItems[i].parentNode, "w--bb0");
									}
									addClasses(elItems[i].parentNode, "w--lr"); // class last row
								}
							}
						}
						
						
						{	// create moreLink
							// pembuatan mengikuti struktur pembuatan {{elControl}} pada scope slider == true dibawah
							if(more_link_url){
								const elFooter = createElem({
									c : (()=>{
										const 	classes = [prefix + "c"];
													classes.push("w--c1");
													classes.push("w--a"+ configsGetOptionIndex(configsData, "footer_align", footer_align, 1));
													
										return classes.join(" ");
									})(),
									cs : [
										{
											t : "a",
											c : prefix + "mr",
											h : more_link_url,
											n : `<span>${more_link_title}</span>`
										}
									]
								});
								
								appends(el, elFooter);
							}
						}
					}
					else{
						// SAMPAI DISINI, SLIDER 100% TERSEDIA
						dis.slider = true;
						
						// tambahkan class status slider
						addClasses(el, "w--sl1");
						
						{ // tambahkan class yang me-enable border top item
							if(item_box === "border"){
								if(first_row_item_top_border){
									for(const el of elItems){
										addClasses(el.parentNode, "w--tb1");
									}
								}
								if(!last_row_item_bottom_border){
									for(const el of elItems){
										addClasses(el.parentNode, "w--bb0");
									}
								}
							}
						}
						
						
						const elGridItem0 = elItems[0].parentNode;
						const elGridItem1 = elItems[1].parentNode;
						const elGridItem0Rects = getBoundingClientRect(elGridItem0);
						const elGridItem1Rects =  getBoundingClientRect(elGridItem1);
						
						const itemsHolder = getChildren(el, 0); 
						const itemsHolderWidth = itemsHolder.clientWidth;
						const items = getChildren(itemsHolder);
						const itemsLength = items.length;
						const itemsWidth = items[0].offsetWidth; 
						const item0Rects = getBoundingClientRect(items[0]);
						const item1Rects =  getBoundingClientRect(items[1]);
						const itemsDistance = item1Rects.left - (item0Rects.left + itemsWidth);
						
						// ADD ID TO SLIDER ELEM
						let elemId = el.id;
						if(!elemId){
							elemId = _createId();
							el.id = elemId;
						}
						
						
						// STEP: MEMBUAT JS CSS UNTUK TRANSISI
						// Transisi yang dikehendaki adalah 600ms per 380px, adapun 380 ini adalah merujuk pada lebar item + distance
						const marginChange = itemsWidth + itemsDistance; 
						const maxMargin =  (((marginChange * itemsLength) - itemsHolderWidth) * -1)+ itemsDistance;
									
						const transitionInMs = Math.floor((600 / marginChange) * 380); // ms
						const transitionInS = transitionInMs / 1000; // s
						insertJsBasedCss("#"+ elemId + " ."+ prefix + "b", "-webkit-transition:margin "+ transitionInS +"s;transition:margin "+ transitionInS +"s");		

						
						// MEMBUAT CONTROL
						// CONTROL DILETAKKAN PADA ELEMEN FOOTER
						// ELEMEN FOOTER SENDIRI HARUS SELALU DILETAKKAN SETELAH ELEMEN ITEMS WRAP
						const elControl = createElem({
							c : (()=>{
								const 	classes = [prefix + "c"];
											classes.push("w--c"+ (more_link_url ? "2" : "1"));
											classes.push("w--a"+ configsGetOptionIndex(configsData, "footer_align", footer_align, 1));
											
								return classes.join(" ");
							})(),
							cs : [
								{
									c : prefix + "d",
									cs : [
										{
											t : "button",
											c : prefix + "bv w-nostyle",
											n : icon_chevron_left, 
											f : (elem)=>{
												elem.onclick = (e)=>{
													e.preventDefault();
													_clickPagination(false, obj);
												}
											}
										},
										{
											t : "span",
											c : prefix + "e",
											cs :  (()=>{
												const csArry = [];
												for(let i=0;i<itemsLength;i++){
													csArry.push({t : "span"});
												}
												
												return csArry;
											})()
										},
										{
											t : "button",
											c : prefix +"bn w-nostyle",
											n : icon_chevron_right,
											f : (elem)=>{
												elem.onclick = (e)=>{
													e.preventDefault();
													_clickPagination(true, obj);
												}
											}
										}
									]
								}
							],
							f : (elem)=>{
								if(more_link_url){
									appends(elem, createElem({
										t : "a",
										c : prefix + "mr",
										h : more_link_url,
										n : `<span>${more_link_title}</span>`
									}));
								}
							}
						});
						appends(el, elControl);
						
						
						// PROCESS FOOTER
						_processFooter(elControl);
						
						// NEXT HERE ................................	
					
					
						const obj = {
							ontransition : false,
							itemsHolder : itemsHolder,
							transitionInMs : transitionInMs,
							activeItem : 0,
							startActive : 0,
							endActive : cols - 1,
							totalWidth : marginChange * itemsLength,
							itemsHolderWidth : itemsHolderWidth,
							itemsDistance : itemsDistance,
							itemsLength : itemsLength,
							indicators : getChildren(getByClass(elControl, prefix + "e", 0)),
							maxMargin : maxMargin,
							marginChange : marginChange,
							cols : cols,
							transitionType : 1,
							margin : 0,
							maxActiveIndex : 0
						};
						_processIndictors(obj);
						_addTouchEvents(obj);		
						dis.data = obj;			
					}
					
					
					if(callback){
						callback(dis);
					}
				};
				const _addTouchEvents = (() =>{	
					const addC = addClasses;
					const remC = removeClasses;
					
					return (obj)=>{
						const {itemsHolder, maxMargin, marginChange, itemsLength, cols} = obj;
						eventAddTouch(itemsHolder, (()=>{
							let MarginOrigin = 0;
							let CurrentMargin = 0;
							let InSession = false;
							return {
								start(Xstart, Ystart){
									if(!obj.ontransition){
										// Event ini akan terpanggil pada setiap touch, ini sama halnya dengan onclick,
										// Jadi, tidak banyak kegiatan yang dilakukan disini, hal ini mungkin aksi hanya berupa klik biasa
										// selain itu, karena itu akan selalu terpanggil, selalu lakukan pengecekan ontransition
										MarginOrigin = obj.margin;
										CurrentMargin = MarginOrigin;
									}
								},
								move(Xchange, Ychange){
									// fungsi ini hanya mungkin terpanggil ketika sebelumya onstart juga terpanggil
									// ya, ini adalah cara kerja event touch, namun,
									// ada kemungkinan user menghold touch, disini, walaupun event yang akan terpanggil adalah event cancelAnimationFrame
									// namun untuk lebih amannya, selalu cek ontransition.
									if(!obj.ontransition){
										// manipulasi class pertama kali
										if(!InSession){
											// pada keadaan awal move tereksekusi, itemsHolder mungkin memiliki class transisi 2
											// hal ini sangat besar kemungkinannya untuk mobile, 
											// hal ini karena event sebelumnya pasti merupakan event yang mengset active item
											if(obj.transitionType === 2){
												remC(itemsHolder, "w-transition2");
											}
											
											addC(itemsHolder, "w--notransition");
											obj.transitionType = 0;
											InSession = true;
										}
										
										let before = MarginOrigin;
										let next = before + Xchange;		
										let max = maxMargin;
										
										if(next > 0){							
											next = (next / 8);
											if(next > 40){
												next = 40;
											}
										}
										else if(next < max){
											next = max + ((next - max) / 8);
											if(next < (max - 40)){
												next = max - 40;
											}
											/*	Pembuktian rumus diatas: Misal,	next 		= -140, max = -100
												Awalnya next yang -140 akan menjadi, 	=	-100 + ((-140 - (-100) / 4))
																											=	-100 + (-40 / 4)
																											=	-100 + -10 
																											= -110 */
										}
										
										CurrentMargin = next;
										itemsHolder.style.marginLeft = next + "px";
										
										obj.margin = next;
										
										
										// TAMBAHAN ALGORITMA
										// KETIKA USER SWIPE VERTICAL SECARA CEPAT, MARGIN AKAN DIMANIPULASI OLEH EVENT MOVE INI NAMUN,
										// EVENT SWIPELEFT AND RIGHT TENTU TIDAK TERPANGGIL, HAL INI MENGAKIBATKAN POSISI YANG BELUM TERESET
										// UNTUK ITU, PADA KONDISI INI, ACTIVE ITEM AKAN DIRESET KE SEBELUMNYA									
										if(Math.abs(Xchange) < Math.abs(Ychange)){ 
											// overator (< harus sama dengan algoritma direction pada fungsi touch
											// adapun pada algoritma tersebut, x mengambil X >= Y
											_setActiveItemTo(obj.startActive, 2, obj);
										}
									}
								},
								moveend(startX, endX, startY, endY){
									// fungsi ini akan terpanggil tepat setelah fungsi move diatas,
									// oleh karena itu, tidak perlu dilakukan cek ontransisi,
									// dengan kata lain, ontransisi disini pasti bernilai false
									const {startActive} = obj;
									const last = CurrentMargin;
									let nextActive;
									if(last < 0 && last >= maxMargin){
										nextActive = Math.round((last * -1) / marginChange);
										
										// dengan math round diatas, untuk item yang memiliki lebar cukup besar (misal 320px),
										// hasil mat round perlu disesuaikan. 
										// Dalam hal ini, algoritma dibuat agar akan menampilkan item selanjutnya jika jarak scroll > 120
										// value ini sudah sangat cocok dengan kebanyakan kebiasaan (telah diuji sendiri)
										// algoritma ini hanya akan diberlakukan jika aksi move user tidak merubahan item yang aktive
										if(nextActive === startActive){										
											if(Math.abs(startX - endX) > 130){
												if(startX < endX){
													if(nextActive - 1 >= 0){
														nextActive = nextActive - 1;
													} // else, ini berarti next item sudah pada batasnya, tetap gunakan data awal
												}
												else{
													if(nextActive + 1 <= itemsLength - cols){
														nextActive = nextActive + 1;
													} // else, ini berarti next item sudah pada batasnya, tetap gunakan data awal
												}
											} // 
										}
									}
									else{
										if(last > 0){
											nextActive = 0;
										}
										else{
											nextActive = itemsLength - cols;
										}
									}
									
									_setActiveItemTo(nextActive, 3, obj);
									InSession = false;
								},
								swipeleft(Xchange){
									if(!obj.ontransition){
										InSession = false;
										// ketika event ini terpanggil, ini tentunya proses sebelumnya adalah event move
										// adapun hasil akhir event move adalah berupa transitionType 0, adapun proses penghapusan dan update type akan 
										// terjadi seperti biasa yaitu pada fungsi set item
										let nextActive = obj.startActive + 1;
										const max = itemsLength - cols;
										if(nextActive > max){
											nextActive =  max;
										}
										
					
										_setActiveItemTo(nextActive, 2, obj);
										
									}
								},
								swiperight(Xchange){
									if(!obj.ontransition){
										InSession = false;
										// ketika event ini terpanggil, ini tentunya proses sebelumnya adalah event move
										// adapun hasil akhir event move adalah berupa transitionType 0, adapun proses penghapusan dan update type akan 
										// terjadi seperti biasa yaitu pada fungsi set item
										let nextActive = obj.startActive - 1;
										if(nextActive < 0){
											nextActive = 0;
										}
										
										_setActiveItemTo(nextActive, 2, obj);
										
										// pada kenyataannya, check ontransition mungkin tidak perlu dilakukan, 
										// hal ini karena fungsi langsung memanggil set item tanpa manipula data apapun,
										// jadi, ontransisi sebenarnya akan diambil dari fungsi set item
										// namun, untuk lebih amannya, cukup biarkan saja.
									}
								}
							}
						})());
					}
				})();	
				const _setActiveItemTo = (()=>{
					const addC = addClasses;
					const remC = removeClasses;
					
					return (to, actionSource, obj) =>{
						if(!obj.ontransition){
							obj.ontransition = true;
							
							const {
								itemsHolder,
								marginChange,
								transitionInMs,
								transitionType,
								cols,
								indicators,
								startActive,
								endActive
							} = obj;
							
							const nextTransition = actionSource === 1 ? 1 : 2;				// i normal, 2 fast
							if(transitionType !== nextTransition){
								if(transitionType === 0){
									remC(itemsHolder, "w--notransition");
								}
								else{
									if(transitionType === 2){
										remC(itemsHolder, "w-transition2");
									}
								}
								
								if(nextTransition === 2){
									addC(itemsHolder, "w-transition2");
								}
								
								obj.transitionType = nextTransition;
							}
							
							const newMargin = ((marginChange * to) * -1);
							itemsHolder.style.marginLeft = newMargin + "px";
											
							
							setTimeout(()=>{
								obj.ontransition = false;
								obj.margin = newMargin;
								obj.startActive = to;
								obj.endActive = to + (cols - 1);
								
								_processIndictors(obj);
							}, nextTransition === 1 ? transitionInMs : nextTransition === 2 ? 220 : 20);
						}
					}
				})();
				const _clickPagination = (()=>{
					const addC = addClasses;
					const remC = removeClasses;
					
					return (isToLeft, obj)=>{
						if(!obj.ontransition){
							obj.ontransition = true;
							const {startActive, endActive, cols, itemsLength, itemsHolder, maxMargin, transitionType} = obj;
							let nextActiveItem;
							let setEffect = false;
							if(isToLeft){
								nextActiveItem = startActive + 1;
								// length = 6, cols = 2, batas base 0 = 4. jadi, aktif = 4, rumus = active + cols - 1 === length - 1
								// atau = active + cols === length. rumus, active + cols > length
								if(nextActiveItem + cols >  itemsLength){
									setEffect = true;
									nextActiveItem = startActive;
								}
							}
							else{
								nextActiveItem = startActive - 1;
								if(nextActiveItem < 0){
									setEffect = true;
									nextActiveItem = 0;
								}
							}
							
							if(setEffect){
								if(transitionType !== 2){
									addC(itemsHolder, "w-transition2");
									
									if(transitionType === 0){
										remC(itemsHolder, "w--notransition");
									}
									
									obj.transitionType = 2;
								}
								
								
								const effect_margin = !isToLeft ? 40 : maxMargin - 40;
								itemsHolder.style.marginLeft = effect_margin + "px";
								setTimeout(()=>{
									obj.ontransition = false;
									_setActiveItemTo(nextActiveItem, 2, obj);
								}, 220);
							}
							else{
								obj.ontransition = false;
								_setActiveItemTo(nextActiveItem, 1, obj);
							}
						}
					}
				})();							
				const _createId = (()=>{
					let usedNum = 0;
					const create = ()=>{
						usedNum += 1;
						const el = getById("w-slider"+ usedNum);
						if(!el){
							return "w-slider"+ usedNum;
						}
						else{
							return create();
						}
					};
					return create;
				})();	
				const _processFooter = (()=>{
					const main = (elControl)=>{
						// PROCESS OVER PADA CONTROL
						// Menyembunyikan indikator posisi jika tidak memungkinakan untuk ditampilkan
						const wrapWidth = elControl.clientWidth;
						let contentWidth = 0;
						
						const controlItems = elControl.children;
						const controlItemsLength = controlItems.length;
						for(let i=0;i<controlItemsLength;i++){
							const disItem = controlItems[i];
							contentWidth += disItem.offsetWidth;
						}
						
						if(wrapWidth < contentWidth + 30){
							// 30 adalah toleransi font,
							const indicatorsWrap = getByClass(elControl, prefix + "e", 0);
							if(indicatorsWrap){
								if(!hasClass(indicatorsWrap, "w--dnone")){
									addClasses(indicatorsWrap, "w--dnone");
								}
							}
						}
					};
					return main;
				})();			
				const _processIndictors = (()=>{
					const addC = addClasses;
					const remC = removeClasses;
					return (obj)=>{
						const {indicators, startActive, endActive, itemsLength} = obj;
						for(let i=0;i<itemsLength;i++){
							if(i>=startActive && i<=endActive){
								 addC(indicators[i], "w-active");
							}
							else{
								remC(indicators[i], "w-active");
							}
						}
					};
				})();
			
				return main;
			})();
			
			return {
				configsData,
				create
			};
		})();
		const FW_MiddleModal = (()=>{
			const body = g_body;
			const appends = p_elemAppends;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const createElem = p_elemCreateElem;
			const removeElem = p_elemRemove;
			
			const prefix = "w-200";
			const s_show = "w--show";
			const create = function(configs, content){
				const dis = this;
				dis.configs = configs;
				const {
					wrapClasses,
					closer
				} = configs;
				
				const elW1 = createElem({
					c : (()=>{
						const classes = [prefix + "a", "w--invisible"];
						if(wrapClasses){
							classes.push(wrapClasses);
						}
						return classes.join(" ");
					})(),
					f : (elem)=>{
						if(closer === "outside"){
							appends(elem, createElem({
								t : "span",
								c : prefix + "closer",
								f : (elem)=>{
									dis.elCloser = elem;
									elem.onclick = function(e){
										e.preventDefault();
										dis.close();
									};
								}
							}));
						}
						appends(elem, createElem({
							c : prefix + "b",
							cs : [
								{
									c : prefix + "c",
									f : (elem)=>{
										dis.elW3 = elem;
										
										if(content){
											appends(elem, content);
										}
									}
								}
							],
							f : (elem)=>{
								dis.elW2 = elem;
							}
						}));
					}
				});
				dis.elW1 = elW1;
			};
			create.prototype.open = function(callback){
				const dis = this;
				const {elW1,hasOpened,ontransition} = dis;
				if(!ontransition){
					dis.ontransition = true;
					if(!hasOpened){
						dis.hasOpened = true;
						appends(body, elW1);
						setTimeout(()=>{
							addClasses(elW1, s_show);
							setTimeout(()=>{
								dis.ontransition = false;
								if(callback){
									callback(dis);
								}
							}, 300);
						}, 20);	
					}
					else{
						dis.ontransition = false;
					}
				}
			};
			create.prototype.close = function(callback){
				const dis = this;
				const {elW1,hasOpened,ontransition,configs} = dis;
				const {onCloseCallback} = configs;
				if(!ontransition){
					dis.ontransition = true;
					if(hasOpened){
						removeClasses(elW1, s_show);
						setTimeout(()=>{
							removeElem(elW1);
							dis.hasOpened = false;
							dis.ontransition = false;
							if(callback){
								callback(dis);
							}
							if(onCloseCallback){
								onCloseCallback(dis);
							}
						}, 300);
					}
					else{
						dis.ontransition = false;
					}
				}
			};
			create.prototype.hideCloser = function(){
				const elCloser = this.elCloser;
				if(elCloser){
					addClasses(elCloser, "w--dnone");
				}
			};
			create.prototype.showCloser = function(){
				const elCloser = this.elCloser;
				if(elCloser){
					removeClasses(elCloser, "w--dnone");
				}
			};
			return {
				create
			}
		})();
		
		const FW_CookiePolicy = (()=>{
			/*	Fungsi memanfaatkan penyimpanan local dengan keys: "Wi_Local_CookiePolicy"
			User dapat melakukan konfigurasi seberapa lama (dalam hari) konfirmasi akan diingat
				
			Data terkait:
			-	b:skin variables configs
			-	bskin text variables
			-	main css
			-	w-script-data
			
			Return object
				showed 					:	status displayed (boolean)
				init()							:	akan dipanggil pada event on_ready 
				
			Penempatan
				*	Setelah FT_Button
			*/
			const configsCreateData = p_configsCreateData;
			const fwOverrideConfigs = FW_OverrideConfigs;
			const configsData = configsCreateData([
				["enable", 2, true],
				["expired_in", 3, 3, [0,null]],
				["text_message", 1, Text_cookiePolicy_textMessage],
				["text_learn_more", 1, Text_cookiePolicy_textLearnMore],
				["text_confirm", 1, Text_cookiePolicy_textConfirm],
			]);
			fwOverrideConfigs.pushData("cookie_policy", configsData , ["enable"]);
			
			const	obj = {};
						obj.configsData = configsData;
						obj.showed =false;
						obj.init = ()=>{
							window.cookieChoices = {};
							
							const _setTimeout = setTimeout;

							const createElem = p_elemCreateElem;
							const appends = p_elemAppends;
							const removeElem = p_elemRemove;
							const addClasses = p_elemAddClasses;
							const removeClasses = p_elemRemoveClasses;
							const insertJsBasedCss = p_insertJsBasedCss;
							const local = p_local;
							const screen = p_screen;
							
							const modalsContainer = g_modalsContainer;
						
							
							const wijsVars = g_wijsVars;
							const wijsConfigs = g_wijsConfigs;
							const wijsConfigsCookiePolicy = wijsConfigs.cookie_policy;
							const {enable, expired_in, text_message, text_learn_more, text_confirm} =  wijsConfigsCookiePolicy;
							
							const mainScrollbarSizes = g_mainScrollbarSizes;	
							const verScrollbarSize = mainScrollbarSizes[1];
							const fwButton = FW_Button;
							
							const localKey = local.createKey("Cookie_Policy");
							let isDoDisplay = false; // Boolean
							if(enable){
								if(!expired_in){
									isDoDisplay = true;
								}
								else{
									let localData = local.get(localKey); // Null or string date
									if(!localData){
										isDoDisplay = true;
									}
									else{
										// cek waktu sejak ditampilkan
										(()=>{
											const milisecond_in_second = 1000;
											const milisecond_in_minute = milisecond_in_second * 60; // jumlah milisecond dalam 1 menit
											const milisecond_in_hour = milisecond_in_minute * 60; // jumlah milisecond dalam 1 jam
											const milisecond_in_day = milisecond_in_hour * 24; // jumlah minisecond dalam 1 hari
											const milisecond_for_remember = milisecond_in_day * expired_in;
											
											const lastDisplayTime = parseInt(localData);
											const thisDatetime = new Date().getTime();
											const milisecond_from_last_display = thisDatetime - lastDisplayTime;
											if(milisecond_from_last_display > milisecond_for_remember){
												isDoDisplay = true;
											}
										
											/* Checking
											console.log({
												milisecond_from_last_display,
												milisecond_for_remember,
												"Sisa jam" : (milisecond_for_remember - milisecond_from_last_display) / milisecond_in_hour,
												"Sisa hari" : (milisecond_for_remember - milisecond_from_last_display) / milisecond_in_day
											}); */
										})();
									}
								}
							}
							
							if(isDoDisplay){
								const selectorPrefix = "w-cookiepolicy-";							
								
								let wrap;
								appends(modalsContainer, createElem({
									c : "w--invisible",
									i : selectorPrefix + "w1",
									cs : [
										{
											i : selectorPrefix + "w2",
											n : text_message + " ",
											f : (elem)=>{
												appends(elem, createElem({
													t : "a",
													h : "https://www.blogger.com/go/blogspot-cookies",
													n : text_learn_more,
													f : (elem)=>{
														elem.setAttribute("target", "_blank");
														elem.setAttribute("rel", "nofollow");
													}
												}));
												
												const elButton = fwButton.create({
													title : text_confirm,
													tag : "button",
													skin : "main",
													full_width : true,
													size : "normal"
												});
												
												
												elButton.onclick = (e)=>{
													e.preventDefault();
													local.set(localKey, new Date().getTime());
													this.onclick = null;
													addClasses(wrap, "w--hidden");
													obj.showed = false;
													_setTimeout(()=>{
														removeElem(wrap);
													}, 1000);
												};
												
												appends(elem, elButton);
											}
										}
									],
									f : (elem)=>{
										wrap = elem;
									}
								}));
								
								// Sampai disini, elemen telah terappend,
								// belum terdapat style yang mengatur posisi element, namun, elemen sedang ter hidden melalui class w-invisible
								// disini, lebar dan tinggi elem masih belum bisa diambil karena style berkaitan dengan dimensi belum dibuat.
								// definisikan style.
								
								const isSmallScreen = screen.max(549); // sesuai dengan breakpoin pada css
								const tolerance = 20;
								
								if(isSmallScreen){
									const width = "auto";
									const left = 5;
									const right = verScrollbarSize + 5;
									const bottom =  5;
									insertJsBasedCss("#" + selectorPrefix + "w1", "width:"+ width +";left:"+ left +"px;right:"+ right +"px;bottom:"+ bottom +"px");
									
									const eHeight = wrap.offsetHeight;
									const hideBottom = (eHeight) * -1; 
									insertJsBasedCss("#" + selectorPrefix + "w1.w--hidden", "bottom:" + hideBottom + "px");
								}
								else{
									const width = 400;
									const left = "auto";
									const right = verScrollbarSize + tolerance;
									const bottom =  tolerance;	
									insertJsBasedCss("#" + selectorPrefix + "w1", "width:"+width + "px;left:"+ left + ";right:" + right + "px;bottom:"+ bottom +"px");
									
									const hiddenRight = (width + verScrollbarSize + tolerance) * -1;
									insertJsBasedCss("#" + selectorPrefix + "w1.w--hidden", "right:" + hiddenRight + "px");
								}
								
								addClasses(wrap, "w--hidden");
								// sampai disini, transisi sedang berlangsung, 
								// karena timeout dibawah ini > dari transisi, jadi, efek tidak akan terlihat pada dom
								// selain itu, class invisible juga masih tersedia pada dom.
								
								_setTimeout(()=>{
									removeClasses(wrap, "w--invisible"); // show by remove class w-invisible
									_setTimeout(()=>{
										removeClasses(wrap, "w--hidden");
										obj.showed = true;
									}, 25);
								}, 6000);
							}
						
						};
						
						return obj;
		})();
		const FW_WindowResize = (()=>{
			/*	BEBERAPA CATATAN:
				*	Fungsi tidak memanfaatkan localStorage. Dengan kata lain, pesan akan selalu ditampilkan setiap session.
					Pada keadaan pesan sedang ditampilkan, jika user mereset window (mengembalikan ke semula), pesan akan dihapus. 
					Adapun event onresize tetap akan berjalan seperti keadaan awal.
				*	Pada keadaan user menutup pesan melalui tombol close, event onresize akan dihapus. 
					Disini, tidak ada data yang disimpan, dengan kata lain, pesan tetap akan tampil jika user melakukan resize untuk kunjungan selanjutnya (refresh)
					Hal ini seperti halnya user melakukan reload.
				*	Event hanya akan mengecek perubahan lebar window, disini, tinggi tidak akan dicek,
					Hal ini karena jika tinggi juga diikut sertakan sebagai parameter, ini dapat memicu event keyboard pada perangkat android terbuka
					Oleh karena itu, hanya diberlakukan perubahan lebar saja.
				
				Note: 
				Sesuaikan cssTransition dengan configurasi style pada CSS
				
				Data terkait:
				-	b:skin variables configs
				-	bskin text
				-	main css
				-	w-script-data 
				
				RETURN Object
					init				:	fungsi akan dipanggil pada event on_ready */
			const configsCreateData = p_configsCreateData;
			const configsData = configsCreateData([				
				["text_title", 1, Text_windowResized_textTitle],
				["text_message", 1, Text_windowResized_textMessage],
				["text_reload", 1, Text_windowResized_textReload],
				["text_ignore", 1, Text_windowResized_textIgnore]
			]);
			const init = ()=>{
				const win = g_win;
				const blog = g_bodyMirror;
				const mainScrollable = g_mainScrollable;
				const removeElem = p_elemRemove;
				const removeEvent = p_eventRemove;
				const addEvent = p_eventAdd;
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const removeClasses = p_elemRemoveClasses;
				const addClasses = p_elemAddClasses;
				const fwButton = FW_Button;
				
				const _setTimeout = setTimeout;
				const _clearTimeout = clearTimeout;
				const wijsBlog = g_wijsBlog;
				const wijsConfigs = g_wijsConfigs;
				const wijsConfigsWindowResize = wijsConfigs.window_resize;
				const {text_reload, text_ignore, text_title, text_message} = wijsConfigsWindowResize;

				const transitionTime = 400; // CSS Transition
				const usedTransitionTime = transitionTime + 20;
				const initialWidth = mainScrollable.clientWidth;
				
				let onDisplaying = false;
				let domElem = null; // null or dom. Variable yang menampung element w1. Peletakkan variable ini ke global scope adalah digunakan ketika user mengembalikan layar ke semula (Proses hapus pesan)
				let run = null;	// setTimeout yang akan terpanggil
				
				const set = ()=>{ // fungsi untuk mengenerate setTimeout baru
					return _setTimeout(()=>{
						const currentWidth = mainScrollable.clientWidth;
						if(currentWidth !== initialWidth){
							// ini adalah !isReset
							call(false);
						}
						else{
							call(true);
						}
					}, 1000);
				};
				const call = (isReset)=>{ // fungsi akhir yang akan dipanggil
					const doDisplay = !isReset && !onDisplaying;
					const doHide = isReset && onDisplaying;
					if(doDisplay){
						show();
					}
					else{
						if(doHide){
							hide(false);
							// pada keadaan ini, fungsi close tereksekusi karena event resize
							// jadi, tetap biarkan event
						}
					}
				};
				const show = (()=>{
					return ()=>{
						if(!domElem){
							const selectorPrefix = "w-windowresized-";
							
							domElem = createElem({
								i :  selectorPrefix + "w1",
								cs : [
									{
										i : selectorPrefix + "w2",
										cs : [
											{
												t : "h2",
												i : selectorPrefix + "title",
												n : text_title
											},
											{
												i : selectorPrefix + "msg",
												n : text_message
											},
											{
												i : selectorPrefix + "actions",
												f : (elem)=>{
													const elReload = fwButton.create({
														title : text_reload,
														tag : "a",
														url : wijsBlog.url,
														skin : "main",
														size : "small"
													});
				
													elReload.id = selectorPrefix + "reload";
													appends(elem, elReload);
													
													const elIgnore = createElem({
														t : "button",
														c : "w-nostyle",
														n : text_ignore
													});
									
													elIgnore.id = selectorPrefix + "ignore";
													elIgnore.onclick = (e)=>{
														e.preventDefault();
														e.stopPropagation();
														hide(true);		
													};
													appends(elem, elIgnore);
												}
											}
										]
									}
								]
							});
							
							appends(blog, domElem);
						}
						
						addClasses(domElem, "w--visible");
						// pada keadaan ini, elemen masih terhide karena opacity
						
						_setTimeout(()=>{
							addClasses(domElem, "w--show");
							onDisplaying = true;
						}, 25);
					}
				})();
				const hide = (removeAll)=>{
					/*	terdapat beberapa kondisi yang akan menghide elemen
					1. Reset
						biarkan event
					2. Klik pada close button
						hapus event.
						ketika user mengclose pesan, semua data akan direst, pesan tidak akan ditampilkan lagi pada session tersebut */
					
					removeClasses(domElem, "w--show");
					// pada keadaan ini, transisi sedang berlangsung antar hide dan visible
					// ini akan berlangsung sebesar transitionTime
					
					_setTimeout(()=>{
						removeClasses(domElem, "w--visible");
						onDisplaying = false;
					}, usedTransitionTime);
					
					if(removeAll){
						removeElem(domElem);
						removeEvent(win, "resize", eventFunc);
					}
				};
				const eventFunc = ()=>{
					if(run){
						_clearTimeout(run);
					}
					run = set();
				};
				addEvent(win, "resize", eventFunc);
			};
			
			return {
				configsData,
				init
			}
		})();		
		const FW_ViewMode = (()=>{
			const configsCreateData = p_configsCreateData;
			const configsElemToObj = p_configsElemToObj;
			
			const fwOverrideConfigs = FW_OverrideConfigs;
			const fwSkin = FW_Skin;
			const wijsConfigs = g_wijsConfigs;
			
			const configsData = configsCreateData([
				["enable", 2, true],
				["default_mode", 1, "light", ["light", "dark"]],
				["switch_to_light_button_title", 1, Text_viewMode_switchToLightButtonTitle],
				["switch_to_dark_button_title", 1, Text_viewMode_switchToDarkButtonTitle],
				["toggle_skin", 1, "", fwSkin.allItems] // untuk sekarang dinonaktifkan
			]);
			fwOverrideConfigs.pushData("view_mode", configsData, ["enable", "default_mode"], null);
			
			const getConfigs = ()=>{
				// digunakan pada proses extract configs widget
				wijsConfigs.view_mode = configsElemToObj("view-mode", configsData, null); // karena configs data terdefinisi, return selalu object
			};
			return {
				getConfigs
			};
		})();		
		const FW_JumperByHash = (()=>{
			const win = g_win;
			const getByClass = p_elemGetByClass;
			const getByTag = p_elemGetByTag;
			const urlGetCanonical = p_urlGetCanonical; 
			const urlGetHash = p_urlGetHash;
			const addEvent = p_eventAdd;
			const getById = p_elemGetById;
			
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const insertFirstChild = p_elemInsertFirstChild;
			const elemRemove = p_elemRemove;
			const seOnscrollStop = SE_OnscrollStop;
			
			const pageURL = win.location.href;
			
			const hasProcessed = [];
			const initUnder = (elInitedParent, preventLinks)=>{
				const preventItems = preventLinks ? preventLinks : [];
				const pageURLCanonical = urlGetCanonical(pageURL, true, true); // param(url, removeWww, removeProtocol)
				// get canonical pada window.location sebenarnya bisa menggunakan native js
				// (win.location.host + win.location.pathname).replace(/^www\./, "");
				// namun itu tidak digunakan disini agar lebih simple saja dan tidak perlu melakukan penghapusan www lagi
				
				const els = getByTag(elInitedParent ? elInitedParent : null, "a");
				if(els){
					// membuat fungsi pendukung
					for(const el of els){
						if(preventItems.indexOf(el) === -1){
							if(hasProcessed.indexOf(el) === -1){
								hasProcessed.push(el);
								
								const href = el.href || "";
								const hash = urlGetHash(href);
								
								
								if(hash){
									let isSelf = href[0] === "#";
									
									// pelajaran:
									// pada check chrome, url html yang diset ke # akan secara otomatis include url
									// misal: 
									// <a href='#id'></a>
									// a.href = url#id
									// tapi untuk amannya, tetap cek seperti diatas
									
									if(!isSelf){
										const hrefCanonical = urlGetCanonical(href, true, true); // param(url, removeWww, removeProtocol)
										isSelf = hrefCanonical === pageURLCanonical;
									}
									
									if(isSelf){
										addEvent(el, "click", (e)=>{
											e.preventDefault();
											_onclick(hash);
										});
									}
								}
							}
						}
					}
				}					
			};
			const initPageURL = ()=>{
				const hash = urlGetHash(pageURL);
				const el = getById(hash);
				if(el){
					_jump(el, 2000);
				}
			};
			const _onclick = (hash)=>{
				const el = getById(hash);
				if(el){
					_jump(el, null);
				}
			};
			const _jump = (()=>{					
				const scrollOptions = {behavior: "smooth", block: "start", inline: "nearest"};
				const main = (el, jumpDelay)=>{
					const elJumpTarget = createElem({t : "span", c : "w-jump-target"});
					const elJumpPositioner = createElem({t : "span"});
					appends(elJumpTarget, elJumpPositioner);
					insertFirstChild(el, elJumpTarget);
					
					const delay = jumpDelay ? jumpDelay : 20; // ini dibutuhkan karena untuk by url, butuh delay 2000
					setTimeout(()=>{
						// definisikan callback. hapus elemen jump target ketika scoll sudah selesai berjalan
						// penambahan even onscroolstop harus dilakukan tepat sebelum scrollIntoView biar aman
						const cb = ()=>{
							if(elJumpTarget.parentNode){
								elemRemove(elJumpTarget);
							}
							seOnscrollStop.remove(cb);
						};
						seOnscrollStop.push(cb);
						
						elJumpPositioner.scrollIntoView(scrollOptions);
					}, delay);	
				};
				return main;
			})();
			
			return {
				initUnder,
				initPageURL
			}
		})();
		
		
		
		
		
		const FT_StickyTop = (()=>{
			/*	ALUR PROGRAM
					-	{{FInit}}
							-	{{FCreateData}}
								Mendefinisikan data yang akan digunakan pada berbagai proses
								Pada tahap ini ada kemungkinan terjadi kesalahan (log)
								Adapun data yang dibuat adalah object data:
									enable															:	boolean, ketika ini adalah false, semua property selanjutnya (mulai dari isError) tidak diassign (undefined)	
									elem																:	tersedia jika tidak error, atau error berupa tanpa children
									isError															:
									minimize														:	dari config
									auto																:	dari config
									elemId															:	dari config
									on																:	0, pada keadaan awal, selalu 0
									lastScrollPosition											:	0, pada keadaan awal, selalu 0
									height															:
									right																:	to screen
									originalPadding												:	padding original elemen
									originalTop													:	jarak elemen to original terhadap document
									elSpacer														:
									startFixed														:
									minimizeCuttedHeight									:	undefined if {{!minimize}}
									minimizeHeight												:	-
									minimizePadding											:	
									startMinimize												:	-
									
							-	{{FRunOnDataCreated}}
								Memanggil fungsi tepat setelah data terdefinisi
								
							-	{{FProcess}}
								Memproses dom dengan data yang telah didefinisikan
								
							-	{{FAddOnScroll}}
								Mengassign event onscroll (jika dibutuhkan)
								
				RETURN OBJECT
					data														:
					init														:
					onDataDefined										:	array
					onStateChange										:	null || array 
					pushOnDataDefined								: 	(data)=>{}
					pushOnStateChange								:	(lastState, data)=>{}
									
					
				LOG
					FT_StickyTop_1										:	tdak ditemukan elemen dengan id bersangkutan
					FT_StickyTop_2										:	tdak ditemukan direct children pada elemen
			*/
			let wijsStickyTop;
			const headerMarginBottom = 25; // sesuaikan dengan css
			const zIndex = 950; // sesuaikan dengan z-index sebuah theme, pastikan ini < zindex window resize msg (450 winrESIZE, 940 (OV SIDEBAR))
			const hiddenTolerance = 5; // agar shadow tidak terlihat sama sekali saat di hide
			const minimizePadding = 5; // padding ketika minimalis, sesuaikan jika diperlukan
			
			const s_notransition = "w--notransition";
			const s_dnone = "w--dnone";
			const s_onstate = "w--onstate";
			const s_onstate1 = s_onstate + "1";
			const s_onstate2 = s_onstate + "2";
			const s_onstate3 = s_onstate + "3";
			
			const elMainScrollable = g_mainScrollable;
			const pushLog = p_pushLog;
			const getById = p_elemGetById;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const elemInsertBefore = p_elemInsertBefore;
			const elemGetBoundingClientRect = p_elemGetBoundingClientRect;
			const elemGetOffsetToDocument = p_elemGetOffsetToDocument;
			const insertJsBasedCss = p_insertJsBasedCss;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const eventAdd = p_eventAdd;
			const eventRemove = p_eventRemove;			
			
			
			
			const DObj = {};
			const FDisPushLog = (code)=>{
				pushLog("FT_StickyTop_" + code);
			};
			
			let DCallbacksOnStateChange = null;
			const DCallbacksOnDataDefined = [];
			const FInit = ()=>{
				const wijsConfigs = g_wijsConfigs;
				const wijsConfigsStickyTop = wijsConfigs.sticky_header;
				wijsStickyTop = {
					elemId : wijsConfigsStickyTop !== "none" ? "w-header-w1" : "none",
					auto : wijsConfigsStickyTop === "auto",
					minimize : wijsConfigsStickyTop === "minimize"
				};
			
				// BUAT DATA
				const data = FCreateData({});
				DObj.data = data;
				
				
				// PANGGIL ON DATA DEFINED
				for(const c of DCallbacksOnDataDefined){
					c(data);
				}
				
				// PROCESS DOM
				FProcess();
				
				FAddOnScroll();
			};
			const FCreateData = (data)=>{
				const {elemId} = wijsStickyTop;	
				if(elemId === "none"){
					data.enable = false;
				}
				else{
					const elem = getById(elemId);
					if(!elem){
						data.enable = false;
						data.isError = true;
						FDisPushLog("1");
					}
					else{
						const elDirectChildren = elem.children[0];
						if(!elDirectChildren){
							data.enable = false;
							data.isError = true;
							data.elem = elem;
							FDisPushLog("2");
						}
						else{
							const {minimize, auto} = wijsStickyTop;
							const elDirectChildrenHeight = elDirectChildren.offsetHeight; // tinggi direct children, digunakan untuk mengetahui {{originalPadding}}
							const rectsElemToScreen = elemGetBoundingClientRect(elem); 
							const rectsElemToDocument = elemGetOffsetToDocument(elem);
							const height = elem.offsetHeight;
							const distanceToRightOfScreen =  rectsElemToScreen.right;
							const distanceToTopOfDocument = rectsElemToDocument.top;
							const originalPadding = (height - elDirectChildrenHeight) / 2;
							const minimizeCuttedHeight = (originalPadding - minimizePadding) * 2;
							const minimizeHeight = height - minimizeCuttedHeight;
							const startFixed = distanceToTopOfDocument;
							const startMinimize = startFixed + minimizeCuttedHeight;
							const elSpacer = createElem({
								i : elemId + "-spacer", 
								c : s_dnone
							});
							
							
							
							data.enable = true;
							data.minimize = minimize;
							data.auto = auto;
							data.elemId = elemId;
							data.on = 0;
							data.lastScrollPosition = 0;
							data.elem = elem;
							data.height = height;
							data.right = distanceToRightOfScreen;
							data.originalPadding = originalPadding;
							data.originalTop = distanceToTopOfDocument;
							data.elSpacer = elSpacer;
							data.startFixed = startFixed;
							if(minimize){
								data.minimizeCuttedHeight = minimizeCuttedHeight;
								data.minimizeHeight = minimizeHeight;
								data.minimizePadding = minimizePadding;
								data.startMinimize = startMinimize;
							}
						}
					}
				}
				
				return data;
			};
			const FPushOnDataDefined = (func)=>{
				const data = DObj.data;
				if(!data){
					DCallbacksOnDataDefined.push(func);
				}
				else{
					func(data);
				}
			};
			const FProcess = ()=>{
				if(DObj.data.enable){
					(()=>{ // APPEND CSS
						const 	{height, elSpacer, right, minimize, auto, elemId, minimizePadding} = DObj.data;
						let		spacer = [];
									spacer.push("height:"+ height +"px");
									spacer.push("padding:0");
									spacer.push("margin:0");
									spacer.push("box-sizing:border-box");
									spacer.push("margin-bottom:" + headerMarginBottom + "px");
									spacer = spacer.join(";");
									insertJsBasedCss("#"+ elSpacer.id, spacer); // digunakan untuk mode fixed seluruhnya

						let	 	onFixedShowed = [];
									onFixedShowed.push("position:fixed");
									onFixedShowed.push("top:0");
									onFixedShowed.push("left:0");
									onFixedShowed.push("right:"+ right +"px");
									onFixedShowed.push("z-index:"+zIndex);
									onFixedShowed.push("-webkit-transition:top .5s, padding .5s"); // transisi padding ditambahkan untuk kebutuhan minimize saat class onstate minimize dihapus
									onFixedShowed.push("transition:top .5s, padding .5s");
									if(auto){
										onFixedShowed.push("-webkit-transition-delay:.3s");
										onFixedShowed.push("transition-delay:.3s");
									}
									onFixedShowed = onFixedShowed.join(";");
									insertJsBasedCss("#"+ elemId + "." + s_onstate1, onFixedShowed); // keadaan ini digunakan untuk mode fixed seluruhnya
									
						let	 	onFixedHidden = [];
									onFixedHidden.push("position:fixed");
									onFixedHidden.push("top:-"+ (height + hiddenTolerance) +"px");
									onFixedHidden.push("left:0");
									onFixedHidden.push("right:"+ right +"px");
									onFixedHidden.push("z-index:"+zIndex);
									onFixedHidden.push("-webkit-transition:all .5s");
									onFixedHidden.push("transition:all .5s");
									if(auto){
										onFixedHidden.push("-webkit-transition-delay:.3s");
										onFixedHidden.push("transition-delay:.3s");
									}
									onFixedHidden = onFixedHidden.join(";");
									insertJsBasedCss("#"+ elemId + "." + s_onstate2, onFixedHidden); // keadaan ini digunakan untuk mode fixed seluruhnya
									
						if(minimize){
							let	onMinimize = [];
									onMinimize.push("position:fixed");
									onMinimize.push("top:0");
									onMinimize.push("left:0");
									onMinimize.push("right:"+ right +"px");
									onMinimize.push("padding-top:"+ minimizePadding +"px");
									onMinimize.push("padding-bottom:"+ minimizePadding +"px");
									onMinimize.push("z-index:"+zIndex);
									onMinimize.push("-webkit-transition:padding .5s");
									onMinimize.push("transition:padding .5s");
									onMinimize = onMinimize.join(";");
									insertJsBasedCss("#"+ elemId + "." + s_onstate3, onMinimize); // keadaan ini digunakan untuk mode fixed seluruhnya
						}									
					})();
					(()=>{ // PROCESS INITIAL
						const data = DObj.data;
						const {elem, elSpacer, auto, minimize, startFixed, startMinimize, lastScrollPosition, height, minimizeHeight} = data;
						elemInsertBefore(elSpacer, elem);
						
						const scrollPosition = elMainScrollable.scrollTop;
						
						if(!auto && !minimize){ // STATIC FIXED
							if(scrollPosition >= startFixed){
								if(scrollPosition - startFixed < height + hiddenTolerance){
									/*	masih terdapat elemen header yang terlihat dilayar
									algoritma: 
									- tampilkan elSpacer
									- set no transition
									- show header
									
									prose diatas akan berjalan tanpa transisi
									selanjutnya, set margin ke minus
									- set margin ke minus
									
									Sampai disini, posisi header telah sesuai dengan keadaan awal,
									selanjutnya, remove margin untuk menurunkan header
									- remove notransition
									- remove style
									- update data */
									
									elSpacer.className = "";
									addClasses(elem, s_notransition);
									addClasses(elem, s_onstate1);
									elem.style.marginTop = "-" + (scrollPosition - startFixed) + "px";
									setTimeout(()=>{
										removeClasses(elem, s_notransition);
										elem.removeAttribute("style");
										data.lastScrollPosition = scrollPosition;
										data.on = 1;
										FRunOnStateChange(0);
									}, 20);
								}
								else{
									/*	sudah tidak terdapat elemen header yang terlihat dilayar
									algoritma: 
									- tampilkan elSpacer
									- set no transition
									- hide header
									
									prose diatas akan berjalan tanpa transisi.
									sampai disini, header telah berada dibalik layar atas.
									selanjutnya, show header
									- remove notransition
									- show header
									- update data */
									elSpacer.className = "";
									addClasses(elem, s_notransition);
									addClasses(elem, s_onstate2);
									setTimeout(()=>{
										removeClasses(elem, s_notransition);
										removeClasses(elem, s_onstate2);
										addClasses(elem, s_onstate1);
										data.lastScrollPosition = scrollPosition;
										data.on = 2;
										FRunOnStateChange(0);
									}, 20);
								}
							}
							// else,
							// karena ini adalah keadaan awal, no nothing
						}
						else if(minimize){								
							if(scrollPosition >= startMinimize){
								// ini artinya, target state selanjutnya adalah {{fixed-minimize}}
								if(scrollPosition - startMinimize < minimizeHeight + hiddenTolerance){ // elemen masih terlihat
									elSpacer.className = "";
									addClasses(elem, s_notransition);
									addClasses(elem, s_onstate1);
									elem.style.marginTop = "-" + (scrollPosition - startFixed) + "px";
									setTimeout(()=>{
										removeClasses(elem, s_notransition);
										removeClasses(elem, s_onstate1);
										elem.removeAttribute("style");
										addClasses(elem, s_onstate3);
										data.lastScrollPosition = scrollPosition;
										data.on = 3;
										FRunOnStateChange(0);
									}, 20);
								}
								else{ // elemen tidak terlihat
									elSpacer.className = "";
									addClasses(elem, s_notransition);
									addClasses(elem, s_onstate3);
									elem.style.marginTop = "-" + (minimizeHeight + hiddenTolerance) + "px";
									setTimeout(()=>{
										removeClasses(elem, s_notransition);
										elem.removeAttribute("style");
										data.lastScrollPosition = scrollPosition;
										data.on = 3;
										FRunOnStateChange(0);
									}, 20);
								}
							}
							else if(scrollPosition >= startFixed){
								// target selanjutnya adaah {{fixed-showed}}
								// sampai disini, dapat dipasikan bahwa elemen masih terlihat
								// hal ini karena jika elemen sudah tidak terlihat, kondisi ini tidak akan terpenuhi 
								elSpacer.className = "";
								addClasses(elem, s_notransition);
								addClasses(elem, s_onstate1);
								elem.style.marginTop = "-" + (scrollPosition - startFixed) + "px";
								setTimeout(()=>{
									removeClasses(elem, s_notransition);
									elem.removeAttribute("style");
									data.lastScrollPosition = scrollPosition;
									data.on = 1;
									FRunOnStateChange(0);
								}, 20);
							}
							// else,
							// do nothing
						}
					})();			
				}
			};
			const FAddOnScroll = ()=>{
				const data = DObj.data;
				if(data.enable){
					const {on, lastScrollPosition, minimize, auto, startFixed} = data;
					if(on !== 0){
						if(!minimize && !auto){
							// ketika mode adalah statis dan {{on}} sudah terfixed,event tidak perlu ditambahkan jika startFixed === 0
							if(startFixed === 0){
								return; 
							}
						}
					}	
					
					// add win scroll
					if(!minimize && !auto){ // statis
						eventAdd(elMainScrollable, "scroll", ()=>{
							const scrollPosition = elMainScrollable.scrollTop;
							const {on, elem, elSpacer, startFixed} = data;
							if(scrollPosition < startFixed){
								if(on !== 0){
									elSpacer.className = s_dnone;
									removeClasses(elem, s_onstate1);
									data.on = 0;
									FRunOnStateChange(on);
								}
							}
							else{
								if(on !== 1){
									elSpacer.className = "";
									addClasses(elem, s_onstate1);
									data.on = 1;
									FRunOnStateChange(on);
								}
							}
							
							data.lastScrollPosition = scrollPosition;
						});
					}
					else if(minimize){ // minimize
						eventAdd(elMainScrollable, "scroll", ()=>{
							const scrollPosition = elMainScrollable.scrollTop;
							const {on, elem, elSpacer, startMinimize, startFixed} = data;
							if(scrollPosition < startFixed){
								if(on !== 0){
									elSpacer.className = s_dnone;
									removeClasses(elem, (s_onstate + on));
									data.on = 0;
									FRunOnStateChange(on);
								}
							}
							else{
								if(scrollPosition < startMinimize){
									if(on === 0){
										elSpacer.className = "";
									}
									
									removeClasses(elem, (s_onstate + on));
									addClasses(elem, s_onstate1);
									data.on = 1;
									FRunOnStateChange(on);
								}
								else{
									if(on === 0){
										elSpacer.className = "";
									}
									removeClasses(elem, (s_onstate + on));
									addClasses(elem, s_onstate3);
									data.on = 3;
									FRunOnStateChange(on);
								}
							}
							data.lastScrollPosition = scrollPosition;
						});
					}
					else{ // auto
						eventAdd(elMainScrollable, "scroll", ()=>{
							const scrollPosition = elMainScrollable.scrollTop;
							const {on, elem, elSpacer, startFixed, lastScrollPosition, height} = data;
							const isScrollDown = scrollPosition > lastScrollPosition;
							if(isScrollDown){ // scroll down, do hide
								if(on === 0){
									// {{putnote1}}
									// elemen akan dibuat hide, 
									// ini agar pada proses scroll up selanjutnya, perpindahan tidak dari statis
									if(scrollPosition > startFixed + height){
										elSpacer.className = "";
										addClasses(elem, s_onstate2);
										data.on = 2;
										FRunOnStateChange(on);
									}
								}
								else if(on === 1){ // showed, do hide
									if(scrollPosition > startFixed + height){
										removeClasses(elem, s_onstate1);
										addClasses(elem, s_onstate2);
										data.on = 2;
										FRunOnStateChange(on);
									}									
								}
								// on === 2, hidden, do nothing					
							}
							else{ // scroll up, do show
								if(scrollPosition < startFixed){ // batas statis tidak terpenuhi, do statis
									if(on !== 0){
										elSpacer.className = s_dnone;
										removeClasses(elem, (s_onstate + on));
										data.on = 0;
										FRunOnStateChange(on);
									}
								}
								else{ // batas statis terpenuhi, do show
									if(on !== 1){ 
										if(on === 0){ // perubahan dari statis
											// state ini mungkin sangat jarang terjadi atau mungkin tidak akan terjadi
											// ini hanya untuk keamanan
											// hal ini karena {{putnote1}}
											elSpacer.className = "";
											addClasses(elem, s_onstate2); // ini akan terjadi tanpa transisi karena dari statis
											setTimeout(()=>{ // agar transisi perpindahan dari statis ke show bekerja
												addClasses(elem, s_onstate1);
												removeClasses(elem, s_onstate2);
												data.on = 1;
												FRunOnStateChange(on);
											}, 20);
										}
										else{ // perubahan dari hide
											addClasses(elem, s_onstate1);
											removeClasses(elem, s_onstate2);
											data.on = 1;
											FRunOnStateChange(on);
										}
									}
								}	
							}
							
							data.lastScrollPosition = scrollPosition;
						});
					}	
				}
			};
			const FPushOnStateChange = (func)=>{
				if(!DCallbacksOnStateChange){
					DCallbacksOnStateChange = [];
					DObj.onStateChange = DCallbacksOnStateChange;
				}
				DCallbacksOnStateChange.push(func);
			};
			const FRunOnStateChange = (latestState)=>{
				if(DCallbacksOnStateChange){
					for(const f of DCallbacksOnStateChange){
						f(latestState, DObj.data);
					}
				}
			};
			
			DObj.onDataDefined = DCallbacksOnDataDefined;
			DObj.pushOnDataDefined = FPushOnDataDefined;
			DObj.init = FInit;
			DObj.pushOnStateChange = FPushOnStateChange;
			DObj.pushOnDataDefined = FPushOnDataDefined;
			
			return DObj;
		})();		
		
		
		const FC_22 = (()=>{
			const addClasses = p_elemAddClasses;
			
			const init = (o)=>{
				const {
					el
				} = o;
				
				let cols;
				const elWidth = el.clientWidth;
				
				// 800 + 3
				// 700 2
				// 500 1
				
				if(elWidth >= 800){
					cols = 3;
				}
				else if(elWidth >= 500){
					cols = 2;
				}
				else{
					cols = 1;
				}
				
				addClasses(el, "w--c" + cols);
				addClasses(el, "w--done");
			};
			return {
				init
			}
		})();
		const FC_23 =(()=>{
			/* TENTANG
				*	Elemen membutuhkan penyesuaian berdasarkan responsiver
				*	Untuk sekarang, elemen sudah teruji ideal untuk wrap satu kolom dengan max lebar responsiver adalam 800px
					max lebar lain mungkin butuh penyesuaian
				*	DIMENSI ELEMEN SIAP DARI awal karena berbasis media query 
			*/
			const getById = p_elemGetById;
			const getByClass = p_elemGetByClass;
			const elemGetBoundingClientRect = p_elemGetBoundingClientRect;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const resizeImg = p_resizeImg;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const screen = p_screen;
			const elemReplace = p_elemReplace;
			const insertBefore = p_elemInsertBefore;
			const elemRemove = p_elemRemove;
			const fwImg = FW_Img;
			
			const prefix = "w-23";
			const init = (o)=>{	
				const el = o.el;
				const callback = o.callback;
				
				// PROCESS IMG
				{
					const elImgData = getByClass(el, "w-img-data", 0);
					const imageInstance = fwImg.createByImgData(elImgData);
					imageInstance.defineDom({
						wrapTag : "div",
						wrapClasses : null
					});
					insertBefore(imageInstance.elWrap, elImgData);
					elemRemove(elImgData);
					imageInstance.updateSrcByWrapDimension();
					imageInstance.appendImg();
				}
				
				// MENYESUAIKAN TINGGI ELEMENT SIDE2 W2 BERDASARKAN SUMMARY
				// ini dilakukan agar over content tidak terpotong di tengah-tengah baris text
				// ini hanya perlu diproses untuk layar >= 650
				if(screen.min(650)){
					const elAbsoluteClass = prefix + "g";
					const elSummaryClass = prefix + "l";
					const summaryFontSize = 16;
					const summaryLineHeight = 1.7;
					
					const heightPerLine = summaryFontSize * summaryLineHeight;
					const elAbsolute = getByClass(el, elAbsoluteClass, 0);
					const elAbsoluteRects = elemGetBoundingClientRect(elAbsolute);
					const elAbsoluteBottom = elAbsoluteRects.bottom;
					const elSummary = getByClass(el, elSummaryClass, 0);
					const elSummaryRects = elemGetBoundingClientRect(elSummary);
					const elSummaryBottom = elSummaryRects.bottom;
				
					if(elAbsoluteBottom > elSummaryBottom){
						const viewAbleSummaryHeight = elSummary.offsetHeight - (elAbsoluteBottom - elSummaryBottom);
						if(viewAbleSummaryHeight % heightPerLine !== 0){
							if(viewAbleSummaryHeight > 0){ // agar lebih aman
								elSummary.style.height = (viewAbleSummaryHeight - (viewAbleSummaryHeight % heightPerLine)) + "px";
							}
						}
					}
				}
				
				if(callback){
					callback();
				}
			};
			return {init};
		})();
		const FC_101 = (()=>{
			const getByClass = p_elemGetByClass;
			const addClasses = p_elemAddClasses;
			
			const prefix = "w-101";
			const init = (o)=>{
				const el = o.el;
				const elContent = getByClass(el, prefix + "c", 0);
				if(elContent){
					const contentWidth = elContent.clientWidth;
					if(contentWidth < 500){
						addClasses(el, "w--c1");
					}
				}
			};
			return {init}
		})();
		

		const FC_OverlayShareButtons = (()=>{
			/*	TAHAP PEMBUATAN,
				1. BUAT INSTANCE
					const overlayShareButtonsInstance = new FC_OverlayShareButtons.create({
						enable
						opener_title
					});
						
						return: {{overlayShareButtonsInstance}}
							enable
							configs
								--
									createOpener
									createModal
				
				2.	CREATE OPENER
					overlayShareButtonsInstance.createOpener();
						return				:	{{elOpener}}
						update isntance	: 	menambahkan property {{dis.elOpener}}
							
							*	Pada keadaan ini, belum ada {{modalInstance}} pada {{overlayShareButtonsInstance}},
								{{modalInstance}} sendiri akan terdefinisi ketika memanggil prototype atau {{createModal}} atau mengklik {{opener}}
								oleh karena itu, {{createModal}} tidak perlu dipanggil, cukup panggil {{createOpener}} untuk membuat {{opener}}
								secara otomatis modal akan dibuat ketika user membuka modal
								
				3.	APPEND OPENER SESUAI KEBUTUHAN
			*/
			/* INSTANCE
					enable
					configs
					modalInstance				:	FW_MiddleModal instance
					elOpener
			*/
			
			const configsCreateData = p_configsCreateData;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const wijsBlog = g_wijsBlog;
			const canonicalUrl = wijsBlog.canonicalUrl;
			const stringFirstLetterToUpperCase = p_stringFirstLetterToUpperCase;
			const copyTextToClipboard = p_copyTextToClipboard;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			
			const wijsIcons = g_wijsIcons;
			const icon_share = wijsIcons.share;
			const icon_facebook = wijsIcons.facebook;
			const icon_twitter = wijsIcons.twitter;
			const icon_telegram = wijsIcons.telegram;
			const icon_whatsapp = wijsIcons.whatsapp;
			const icon_link = wijsIcons.link;
			const icon_check = wijsIcons.check;
			
			const fwSkin = FW_Skin;
			const fwMiddleModal = FW_MiddleModal;
			const fwOverrideConfigs = FW_OverrideConfigs;
			const prefix = "w-97";
			
			const openerIcon = icon_share;
			

			
			const configsData = configsCreateData([
				["enable", 2, true],
				["opener_title", 1, Text_overlayShareButton_openerTitle],
				["content_title", 1, Text_overlayShareButton_contentTitle],
				["content_sub", 1, null],
				["opener_skin", 1, "", fwSkin.allItems], // belum digunakan
			]);
			fwOverrideConfigs.pushData("overlay_share_buttons", configsData, ["enable"]);
			
			const create = function(configs){
				const dis = this;
				dis.configs = configs;
				dis.enable = !wijsBlog.isError ? configs.enable : false;
			};
			create.prototype.createOpener = function(){
				const dis = this;
				if(dis.enable){
					const configs = dis.configs;
					const elOpener = createElem({
						t : "button",
						c : "w-nostyle " + prefix + "opener",
						n : `${openerIcon}<span>${configs.opener_title}</span>`,
						f : (elem)=>{
							const skin = configs.opener_skin;
							if(skin){
								addClasses(elem, fwSkin.createClassString(skin));
							}
							
							elem.onclick = (e)=>{
								e.preventDefault();
								// ontransition tidak perlu ditambahkan karena sudah terterap pada open dan close modal
								if(!dis.modalInstance){
									dis.createModal();
								}
								dis.modalInstance.open();
							};
						}
					});
					dis.elOpener = elOpener;
					return elOpener;					
				}
				else{
					return null;
				}
			};
			create.prototype.createModal = function(){
				const dis = this;
				const configs = dis.configs;
				const {content_title, content_sub} = configs;
				const elContent = createElem({
					c : prefix + "a",
					f : (elem)=>{
						// title
						if(content_title || content_sub){
							appends(elem, createElem({
								c : prefix + "b",
								f : (elem)=>{
									// icon and heading
									if(content_title){
										appends(elem, createElem({
											n : `${openerIcon}<span>${content_title}</span>`
										}));
									}
									
									// sub
									if(content_sub){
										appends(elem, createElem({
											t : "p",
											n : content_sub
										}));
									}
								}
							}));
						}	
						
						// content
						appends(elem, createElem({
							c : prefix + "c",
							f : (elem)=>{
								const items = [
									{
										name : "facebook",
										url : "https://www.facebook.com/sharer.php?u="+ canonicalUrl,
										icon : icon_facebook
									},
									{
										name : "twitter",
										url : "https://twitter.com/intent/tweet?url="+ canonicalUrl,
										icon : icon_twitter
									},
									{
										name : "whatsapp",
										url : "https://wa.me/?text="+ canonicalUrl,
										icon : icon_whatsapp
									},
									{
										name : "telegram",
										url : "https://t.me/share/url?url="+ canonicalUrl,
										icon : icon_telegram
									},
									{
										name : "copy url",
										url : "#",
										icon : `${icon_link}${icon_check}`
									}
								];
								for(const item of items){
									const elItem = createElem({
										t : "a",
										h : item.url,
										c : prefix + "i w-91a w--" + item.name.replace(/\s/g, "-").toLowerCase(),
										f : (elem)=>{
											elem.innerHTML = `<span>${item.icon}</span><span>${item.name}</span>`;
											elem.setAttribute("rel", "nofollow");
											elem.setAttribute("target", "_blank");
											elem.setAttribute("title", stringFirstLetterToUpperCase(item.name));
											
											if(item.name === "copy url"){
												let ontransition = false;
												elem.onclick = (e)=>{
													e.preventDefault();
													if(!ontransition){
														ontransition = true;
														copyTextToClipboard(canonicalUrl, ()=>{
															// success
															// tambahkan sedikit delay kemunculan icon check setelah diclick
															setTimeout(()=>{
																addClasses(elem, "w--copied");
																setTimeout(()=>{
																	removeClasses(elem, "w--copied");
																	ontransition = false;
																}, 2500);
															}, 200);
															
														}, ()=>{
															// error
															// tidak terjadi apa-apa, ini kasusnya jarang
															ontransition = false;
														});
													}
												};
											}
										}
									});
									appends(elem, elItem);
								}							
							}
						}));
					}
				});
				const modalInstance = new fwMiddleModal.create({
					wrapClasses : prefix + "-modal",
					closer : "outside"
				}, elContent);
				dis.modalInstance = modalInstance;
				return modalInstance;
			};
			return{
				configsData,
				create
			}
		})();
		const FC_OverlayContactUs = (()=>{
			const win = g_win;
			const doc = g_doc;
			const getByTag = p_elemGetByTag;
			const configsCreateData = p_configsCreateData;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const stringToArray = p_stringToArray;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const elemRemove = p_elemRemove;
			const arrayRemoveItem = p_arrayRemoveItem;
			
			const fwMiddleModal = FW_MiddleModal;
			const fwSkin = FW_Skin;
			const fwDefaultBloggerJS = FW_DefaultBloggerJS;
			const fwDefaultValues = FW_DefaultValues;
			
			const wijsBlog = g_wijsBlog; 
			// wijsBlog.blogId
			// wijsBlog.canonicalUrl
			
			const wijsConfigs = g_wijsConfigs;
			
			const wijsIcons = g_wijsIcons;
			const icon_close_circle_outline = wijsIcons.close_circle_outline;
			const icon_check_circle_outline = wijsIcons.check_circle_outline;
			const icon_whatsapp = wijsIcons.whatsapp;
			const icon_email = wijsIcons.email;
			const icon_message = wijsIcons.message;
			
			const errorMsgIcon = icon_close_circle_outline;
			const successMsgIcon = icon_check_circle_outline;
			const whatsappIcon = icon_whatsapp;
			const emailIcon = icon_email;
			const openerIcon = icon_message;
			
			const prefix = "w-98";
			const msgErrorClass = prefix + "-i-im w-color-error";
			const msgSuccessClass = prefix + "-i-im w-color-success";
			
			const configsData = configsCreateData([
				["opener_title", 1, "Hubungi kami"],
				["opener_skin", 1, "", fwSkin.allItems], // sementara dinonaktifkan
				["enable_by_email", 2, true],
				["enable_by_whatsapp", 2, true],
				["whatsapp_number", 1, ""],
				["subjects", 1, "Tanya"],
				["default_subject", 1, "Tanya"],
				["get_referrer", 2, true],
			
				["options_title", 1, "Hubungi kami"],
				["options_sub_title", 1, "Punya pertanyaan? jangan ragu untuk menghubungi kami!"],
				["email_form_sub_title", 1, "Tanya-tanya via Email"],
				["whatsapp_form_sub_title", 1, "Tanya-tanya via Whatsapp"],
				["submit_button_title", 1, "Kirim"],
				
				["input_subject_label", 1, "Subjek"],
				["input_email_label", 1, "Email"],
				["input_message_label", 1, "Pesan"],
				["input_message_placeholder", 1, "Tulis pesan..."],
				["input_email_placeholder", 1, "Email anda"],
				
				["invalid_email_msg", 1, "Email tidak benar!"],
				["empty_message_msg", 1, "Pesan tidak boleh kosong!"],
				["try_again_msg", 1, "Terjadi kesalahan, coba lagi!"],
				["sent_msg", 1, "Pesan sudah dikirim"],
			]);
			const errorInputs = []; // menampung inputs yang error. ini dibutuhkan untuk callback onclose yang akan mengahpus class error pada inputs
			const create = function(configs){
				const dis = this;
				dis.configs = configs;
				dis.ontransition = false;
				
				
				const {
					enable_by_email, 
					enable_by_whatsapp, 
					whatsapp_number
				} = configs;
				
				let usedWhatsappNumber = whatsapp_number;
				// allow only number or start with +
				if(!(/^(?:\+|\d)\d+$/.test(usedWhatsappNumber))){
					usedWhatsappNumber = null;
				}
				configs.whatsapp_number = usedWhatsappNumber;
					
				if(!enable_by_email && (!enable_by_whatsapp || !usedWhatsappNumber)){
					dis.enable = false;
					dis.configs.enable_by_whatsapp = false;
				}
				else{
					dis.enable = true;		
					if(enable_by_email && (enable_by_whatsapp && usedWhatsappNumber)){
						dis.hasOptions = true;
					}
				}
				
				if(enable_by_email){
					fwDefaultBloggerJS.load((loadedState)=>{
						// disini, callback tidak diisi apapun
					});
				}
			};
			create.prototype.createOpener = function(){
				const dis = this;
				if(dis.enable){
					const configs = dis.configs;
					const elOpener = createElem({
						t : "button",
						c : "w-nostyle " + prefix + "opener",
						n : `${openerIcon}<span>${configs.opener_title}</span>`,
						f : (elem)=>{
							const skin = configs.opener_skin;
							if(skin){
								addClasses(elem, fwSkin.createClassString(skin));
							}
							
							let originalContactFormHasInited = false;
							elem.onclick = (e)=>{
								e.preventDefault();
								if(!dis.modalInstance){								
									dis.createModal();
								}
								
								dis.open();
								
								// ketika tidak terdapat options, proses init default contact form harus dilakukan disini,
								// tepatnya adalah setelah elemen modal terappends 
								if(!originalContactFormHasInited){
									if(!dis.hasOptions){
										if(dis.configs.enable_by_email){
											const {sent_msg, try_again_msg, invalid_email_msg, empty_message_msg} =  configs;
											initOriginalContactForm(sent_msg, try_again_msg, invalid_email_msg, empty_message_msg);
										}
									}
									originalContactFormHasInited = true; // letakkan diluar agar tidak dicek berkali-kali
								}
								// sebaliknya, jika terdapat options, proses init akan dilakukan pada onclick tombol by email (hajhjgahghagfgsffdnpooue)
								// hal ini karena element default contact form akan diappend setelah user mengklik button by email tersebut
							};
						}
					});
					return elOpener;
				}
				else{
					return null;
				}
			};
			create.prototype.createModal = function(){
				const dis = this;
				if(!dis.enable){
					dis.modalInstance = null;
					return null;
				}
				else{
					const {
						opener_title,
						enable_by_email,
						enable_by_whatsapp,
						whatsapp_number,
						submit_button_title,
						options_title,
						options_sub_title,
						email_form_sub_title,
						whatsapp_form_sub_title,
						subjects,
						default_subject,
						input_subject_label,
						input_email_label,
						input_message_label,
						input_message_placeholder,
						input_email_placeholder,
						get_referrer,
						invalid_email_msg,
						empty_message_msg,
						sent_msg,
						try_again_msg
					} = dis.configs;
					const default_button_rounded  = fwDefaultValues.button_rounded; 
				
					const elLoadingBar = createElem({c : "w-loadingbar",cs : [{t : "span",cs : [{t : "span"}]}]});
					const elMsg = createElem({c : prefix + "-i-im"});
					const elWrapper = createElem({c : prefix + "a"});
					const elFormEmail = !enable_by_email ? null : (()=>{
						
						// MEMBUAT ORIGINAL FORM
						/*
						<div class='widget ContactForm' id='ContactForm1'>
							<div class='contact-form-widget'>
								<div class='form'>
									<form name='contact-form'>
										<p>Nama</p>
										<input class='contact-form-name' id='ContactForm1_contact-form-name' name='name' size='30' type='text' value=''/><br />
										<p>E-mail <span class='red-color'>*</span></p>
										<input placeholder=" Email balasan akan dikirim ke sini" class='contact-form-email' id='ContactForm1_contact-form-email' name='email' size='30' type='text' value=''/><br />
										<p>Pesan <span class='red-color'>*</span></p>
										<textarea class='contact-form-email-message' cols='25' id='ContactForm1_contact-form-email-message' name='email-message' rows='5'></textarea><br />
										<input class='contact-form-button contact-form-button-submit' id='ContactForm1_contact-form-submit' type='button' value='Kirim Pesan'/><br />
										<p class='contact-form-error-message' id='ContactForm1_contact-form-error-message'></p>
										<p class='contact-form-success-message' id='ContactForm1_contact-form-success-message'></p>
									</form>
								</div>
							</div>
						</div>
						*/

						let elOriginalFormSubmit;
						let elOriginalFormEmail;
						let elOriginalFormMessage;
						let elOriginalFormErrorMessage;
						let elOriginalFormSuccessMessage;
						
						const elOriginalForm = createElem({
							c : "widget ContactForm w--dnone",
							i : "ContactForm1",
							cs : [
								{
									c : "contact-form-widget",
									cs : [
										{
											t : "form",
											f : (elem)=>{
												elem.setAttribute("name", "contact-form");
												appends(elem, createElem({	// name
													t : "input",
													c : "contact-form-name",
													i :  "ContactForm1_contact-form-name",
													f : (elem)=>{
														elem.setAttribute("type", "text");
														elem.setAttribute("name", "name");
													}
												}));
												
												appends(elem, createElem({	// email
													t : "input",
													c : "contact-form-email",
													i : "ContactForm1_contact-form-email",
													f : (elem)=>{
														elem.setAttribute("type", "text");
														elem.setAttribute("name", "email");
														elOriginalFormEmail = elem;
													}
												}));
												
												appends(elem, createElem({ // message
													t : "textarea",
													c : "contact-form-email-message",
													i : "ContactForm1_contact-form-email-message",
													f : (elem)=>{
														elem.setAttribute("name", "email-message");
														elOriginalFormMessage = elem;
													}
												}));
												
												appends(elem, createElem({ // submit button
													t : "input",
													c : "contact-form-button contact-form-button-submit",
													i : "ContactForm1_contact-form-submit",
													f : (elem)=>{
														elem.setAttribute("type", "button");
														elem.value = "Send";
														elOriginalFormSubmit = elem;
													}
												}));
												
												appends(elem, createElem({ // error message
													t : "p",
													c : "contact-form-error-message",
													i : "ContactForm1_contact-form-error-message",
													f : (elem)=>{
														elOriginalFormErrorMessage = elem;
													}
												}));
												
												appends(elem, createElem({ // success message
													t : "p",
													c : "contact-form-success-message",
													i : "ContactForm1_contact-form-success-message",
													f : (elem)=>{
														elOriginalFormSuccessMessage = elem;
													}
												}));
											}
										}
									]
								}
							]
						});
						
						// MEMBUAT MIRROR FORM
						const formPrefix = prefix + "-fr-";
						const disFormMirror = createElem({
							c : prefix + "-fr w--em",
							cs : [
								{
									c : formPrefix + "header",
									f : (elem)=>{
										let secondInnerContent = "";
										let inner = "<div>Email</div>";
						
										if(email_form_sub_title){
											inner += `<p>${email_form_sub_title}</p>`;
										}
										secondInnerContent = `<div>${inner}</div>`;
										
										elem.innerHTML = emailIcon + secondInnerContent;
									}
								},
								{
									t : "form",
									c : formPrefix + "form",
									f : (elem)=>{								
										// input subject
										const elInputSubjects = createInputSubjects(subjects, default_subject, input_subject_label);
										if(elInputSubjects){
											appends(elem, elInputSubjects);
										}
										
										// input email
										const elInputEmailItem = createElem({c : prefix + "-i"});
										const elInputEmailLabel = createElem({c : prefix + "-i-label", n : input_email_label});
										const elInputEmailInputWrap = createElem({c : prefix + "-i-iw"});
										const elInputEmailInput = createElem({t : "input", c : prefix + "-i-i"});
										elInputEmailInput.type = "text";
										elInputEmailInput.setAttribute("placeholder", input_email_placeholder);
										elInputEmailInput.onfocus = (e)=>{
											if(errorInputs.indexOf(elInputEmailItem) !== -1){
												removeClasses(elInputEmailItem, "w--error");
												arrayRemoveItem(errorInputs, elInputEmailItem);
											}
										};
										
										appends(elInputEmailInputWrap, elInputEmailInput);
										appends(elInputEmailItem, elInputEmailLabel);
										appends(elInputEmailItem, elInputEmailInputWrap);
										appends(elem, elInputEmailItem);
										
										// input msg
										const elInputMsg = createInputMsg(input_message_label, input_message_placeholder);
										const elInputMsgItem = elInputMsg.elItem;
										const elInputMsgInput = elInputMsg.elInput;
										elInputMsgInput.onfocus = (e)=>{
											if(errorInputs.indexOf(elInputMsgItem) !== -1){
												removeClasses(elInputMsgItem, "w--error");
												arrayRemoveItem(errorInputs, elInputMsgItem);
											}
										};
										appends(elem, elInputMsgItem);
									
										
										// submit
										const elSubmit = createElem({
											t : "button",
											c : `w-nostyle ${prefix}-submit` + (default_button_rounded ? " w--r1" : ""),
											n : submit_button_title,
											f : (elem)=>{
												let onSending = false;
												const transferInputValue = ()=>{
													elOriginalFormEmail.value = elInputEmailInput.value.trim();
												
													let messageValue = elInputMsgInput.value.trim();
													if(messageValue){
														messageValue = "";
														if(get_referrer){
															messageValue += "REF:" + "\n" + wijsBlog.canonicalUrl + "\n\n";
														}
														messageValue += input_subject_label.toUpperCase() + ":" + "\n" + getByTag(elInputSubjects, "select", 0).value + "\n\n";
														messageValue += input_email_label.toUpperCase() + ":" + "\n" + elInputEmailInput.value.trim() + "\n\n";
														messageValue += input_message_label.toUpperCase() + ":" + "\n" + elInputMsgInput.value.trim();
														
													}
													// else 
													// ketika kosong, value kosong ini akan langsung ditranfer ke original dan pada akhirnya akan mereturn error ketika di submit
													elOriginalFormMessage.value = messageValue;
												};
												
												elem.onclick = (e)=>{
													e.preventDefault();
													if(!onSending){
														onSending = true;
														appends(elWrapper, elLoadingBar);
														elemRemove(disFormMirror);
														dis.modalInstance.hideCloser();
														setTimeout(()=>{
															elOriginalFormErrorMessage.innerHTML = "";
															elOriginalFormSuccessMessage.innerHTML = "";
															transferInputValue();
															elOriginalFormSubmit.click();
															
															setTimeout(()=>{
																// cek pesan hasil js original blogger
																// pengetahuan:
																// pesan {{error}} diprint pada elOriginalFormErrorMessage
																// pesan {{sedang mengirim dan sukses}} diprint pada elOriginalFormSuccessMessage
																// pesan {{coba lagi nanti}} belum diketahui
																const errorMsg = elOriginalFormErrorMessage.innerHTML;
																const successMsg = elOriginalFormSuccessMessage.innerHTML;
																let hasError = false;
																let usedErrorMsg;
																let errorInput;
																
																if(errorMsg.indexOf(invalid_email_msg) !== -1){
																	hasError = true;
																	usedErrorMsg = invalid_email_msg;
																	errorInput = elInputEmailItem;
																}
																else if(errorMsg.indexOf(empty_message_msg) !== -1){
																	hasError = true;
																	usedErrorMsg = empty_message_msg;
																	errorInput = elInputMsgItem;
																}
																else if(errorMsg.indexOf(try_again_msg) !== -1 || successMsg.indexOf(try_again_msg) !== -1){
																	hasError = true;
																	usedErrorMsg = try_again_msg;
																	errorInput = null;
																}
																
																
																
																if(hasError){
																	if(errorInput){
																		if(errorInputs.indexOf(errorInput) === -1){
																			addClasses(errorInput, "w--error");
																			errorInputs.push(errorInput);
																		}
																	}
																	elMsg.innerHTML = `${errorMsgIcon}<span>${usedErrorMsg}</span>`;
																	elMsg.className = msgErrorClass;
																	appends(elWrapper, elMsg);
																	elemRemove(elLoadingBar);
																	setTimeout(()=>{
																		elemRemove(elMsg);
																		appends(elWrapper, disFormMirror);
																		dis.modalInstance.showCloser();
																		onSending = false;
																	}, 2500);
																}
																else{
																	if(successMsg.indexOf("sending") !== -1){
																		let checkUpdateState = setInterval(()=>{
																			// pesan terkirim cendrung tampil sebentar,
																			// oleh karena itu, checking telah terkirim atau tidak tidak bisa dilakukan dengan cek {{sent_msg}}
																			// disini, kondisi dicheck dengan cara melihat apakah {{sending_msg}} masih tersedia atau tidak
																			const newErrorMsg = elOriginalFormErrorMessage.innerHTML;
																			const newSuccessMsg = elOriginalFormSuccessMessage.innerHTML;
																
																			if(newSuccessMsg.indexOf("sending") === -1){
																				if(newErrorMsg.indexOf(try_again_msg) !== -1 || newSuccessMsg.indexOf(try_again_msg) !== -1){
																					elMsg.innerHTML = try_again_msg;
																					elMsg.innerHTML = `${errorMsgIcon}<span>${try_again_msg}</span>`;
																					elMsg.className = msgErrorClass;
																					appends(elWrapper, elMsg);
																					elemRemove(elLoadingBar);
																					setTimeout(()=>{
																						elemRemove(elMsg);
																						appends(elWrapper, disFormMirror);
																						dis.modalInstance.showCloser();
																						onSending = false;
																					}, 3000);
																					clearInterval(checkUpdateState);
																				}
																				else{
																					// sukses
																					elMsg.innerHTML = `${successMsgIcon}<span>${sent_msg}</span>`;
																					addClasses(elMsg, "w--success");
																					elMsg.className = msgSuccessClass;
																					appends(elWrapper, elMsg);
																					elemRemove(elLoadingBar);
																					setTimeout(()=>{
																						elemRemove(elMsg);
																						appends(elWrapper, disFormMirror);
																						dis.modalInstance.showCloser();
																						dis.modalInstance.close();
																						
																						// reset inputs
																						elInputMsgInput.value = "";
																						elInputEmailInput.value = "";
																						onSending = false;
																					}, 3000);
																					clearInterval(checkUpdateState);
																				}
																			}
																			// else,
																			// run next interval
																		}, 1000);
																	}															
																}
															}, 50);
														}, 1000);
													}
												};
											}
										});
										appends(elem, elSubmit);
									}
								}
							]
						});
						
						if(!dis.hasOptions){
							// ketika tidak terdapat options, element akan langsung di appends
							appends(elWrapper, elOriginalForm);
							appends(elWrapper, disFormMirror);
						}
						
						return {
							mirror : disFormMirror,
							original : elOriginalForm
						};
					})();
					const elFormWhatsapp = !enable_by_whatsapp || !whatsapp_number ? null : (()=>{
						const disPrefix = prefix + "-wa-";
						const formPrefix = prefix + "-fr-";
						const disEl = createElem({
							c : prefix + "-fr w--wa",
							cs : [
								{
									c : formPrefix + "header",
									f : (elem)=>{
										let secondInnerContent = "";
										let inner = `<div>Whatsapp</div>`;
										if(whatsapp_form_sub_title){
											inner += `<p>${whatsapp_form_sub_title}</p>`;
										}
										secondInnerContent = `<div>${inner}</div>`;
										elem.innerHTML = whatsappIcon + secondInnerContent;
									}
								},
								{
									t : "form",
									c : formPrefix + "form",
									f : (elem)=>{
										// input subject
										const elInputSubjects = createInputSubjects(subjects, default_subject, input_subject_label);
										if(elInputSubjects){
											appends(elem, elInputSubjects);
										}
										
										// input msg
										const elInputMsg = createInputMsg(input_message_label, input_message_placeholder);
										const elInputMsgItem = elInputMsg.elItem;
										const elInputMsgInput = elInputMsg.elInput;
										appends(elem, elInputMsgItem);
										
										
										// submit
										const elSubmit = createElem({
											t : "button",
											c : `w-nostyle ${prefix}-submit` + (default_button_rounded ? " w--r1" : ""),
											n : submit_button_title,
											f : (elem)=>{
												const generateText = ()=>{
													const elSubject = getByTag(elInputSubjects, "select", 0);
													const elMessage = elInputMsgInput;
													
													let text = "";
													if(get_referrer){
														text += "*REF:*" + "\n" + wijsBlog.canonicalUrl + "\n\n";
													}
													text += "*"+ input_subject_label.toUpperCase() +":*\n";
													text += elSubject.value +"\n\n";
													text += "*"+ input_message_label.toUpperCase() +":*\n";
													text += elMessage.value;
													
													
													
													return encodeURIComponent(text);
												};
												elem.onclick = (e)=>{
													e.preventDefault();
													const text = generateText();
													win.location.href = "https://wa.me/"+ whatsapp_number + "?text=" + generateText();
													// generate message here..............
												};
											}
										});
										appends(elem, elSubmit);
									}
								}
							]
						});
					
						
						if(!dis.hasOptions){
							// ketika tidak terdapat options, element akan langsung di appends
							appends(elWrapper, disEl);
						}
						
						return disEl;
					})();
					const elMediaOptions = !dis.hasOptions ? null : (()=>{
						const moPrefix = prefix + "-mo-";
						const el = createElem({
							c : moPrefix + "a",
							f : (elem)=>{
								// title
								if(options_title){
									appends(elem, createElem({
										c : moPrefix + "b",
										f : (elem)=>{
											// icon and heading
											appends(elem, createElem({
												n : `${openerIcon}<span>${options_title}</span>`
											}));
											
											// sub
											if(options_sub_title){
												appends(elem, createElem({
													t : "p",
													n : options_sub_title
												}));
											}
										}
									}));
								}
								
								// content
								appends(elem, createElem({
									c : moPrefix + "c",
									f : (elem)=>{
										if(enable_by_email){
											appends(elem, createElem({
												t : "button",
												c : "w-91a w-nostyle w--em " + moPrefix + "btn",
												n : `<span>${emailIcon}</span><span>Email</span>`,
												f : (elem)=>{		
													let hasInited = false;
													elem.onclick = (e)=>{
														e.preventDefault();
														if(window._WidgetManager){
															// pastikan default script terload, jika tidak, click tidak akan mereturn apa2
															// seharusnya ini dibuatkan pesan yang menampilkan bahwa default js blogger tidak terload
															// namun untuk sekarang, biarkan saja
															
															if(!dis.ontransition){
																dis.ontransition = true;
																if(!hasInited){
																	hasInited = true;
																	appends(elWrapper, elFormEmail.original);
																	initOriginalContactForm(sent_msg, try_again_msg, invalid_email_msg, empty_message_msg); // hajhjgahghagfgsffdnpooue
																}
																
																// MENGGANTI CONTENT
																elemRemove(dis.elMediaOptions);
																appends(elWrapper, elLoadingBar);
																setTimeout(()=>{
																	elemRemove(elLoadingBar);
																	appends(elWrapper, elFormEmail.mirror);
																	dis.ontransition = false;
																}, 1000);
															}
														}
													}
												}
											}));
										}
										
										if(enable_by_whatsapp){
											appends(elem, createElem({
												t : "button",
												c : "w-91a w-nostyle w--wa "  + moPrefix + "btn",
												n : `<span>${whatsappIcon}</span><span>Whatsapp</span>`,
												f : (elem)=>{														
													elem.onclick = (e)=>{
														e.preventDefault();
														if(!dis.ontransition){
															dis.ontransition = true;
															
															// MENGGANTI CONTENT
															elemRemove(dis.elMediaOptions);
															appends(elWrapper, elLoadingBar);
															setTimeout(()=>{
																elemRemove(elLoadingBar);
																appends(elWrapper, elFormWhatsapp);
																dis.ontransition = false;
															}, 1000);
														}
													};
												}
											}));
										}
									}
								}));
							}
						});
						appends(elWrapper, el);								
						return el;
					})();	
					dis.elWrapper = elWrapper;
					dis.elMediaOptions = elMediaOptions;
					dis.elFormWhatsapp = elFormWhatsapp;
					dis.elFormEmail = elFormEmail;
					dis.elLoadingBar = elLoadingBar;
					dis.modalInstance =  new fwMiddleModal.create({
						wrapClasses : prefix + "-modal",
						closer : "outside",
						onCloseCallback : (modalInstance)=>{
							if(dis.hasOptions){
								if(!dis.elMediaOptions.parentNode){
									// menandakan kalau konten yang aktif bukan media options
									if(dis.elFormWhatsapp && dis.elFormWhatsapp.parentNode){
										elemRemove(dis.elFormWhatsapp);
									}
									if(dis.elFormEmail && dis.elFormEmail.mirror.parentNode){
										elemRemove(dis.elFormEmail.mirror);
									}	
									
									appends(dis.elWrapper, dis.elMediaOptions);
								}
							}
							
							// remove errorInputs
							for(const errorInput of errorInputs){
								removeClasses(errorInput, "w--error");
							}
							errorInputs.length = 0;
							
						}
					}, dis.elWrapper);

					return dis.modalInstance;
				}
			};
			create.prototype.open = function(callback){
				return this.modalInstance.open(callback);
			};
			const createInputSubjects = (subjects, default_subject, input_subject_label)=>{
				const subjectsItems = stringToArray(subjects);
				if(subjectsItems && subjectsItems.length !== 0){
					const elSubjectItem = createElem({c : prefix + "-i"});
					const elSubjectLabel = createElem({c : prefix + "-i-label", n : input_subject_label});
					const elSubjectInputWrap = createElem({c : prefix + "-i-iw"});
					appends(elSubjectItem, elSubjectLabel);
					appends(elSubjectItem, elSubjectInputWrap);
					
					const elSelect = createElem({t : "select", c : prefix + "-i-i"});
					appends(elSubjectInputWrap, elSelect);
					for(const subject of subjectsItems){
						const elOption = createElem({t : "option"});
						elOption.value = subject;
						elOption.innerHTML = subject;
						appends(elSelect, elOption);
					}
					
					elSelect.value = default_subject;
					
					return elSubjectItem;
				}
				else{
					return null;
				}
			};
			const createInputMsg = (input_message_label, input_message_placeholder)=>{
				const elMsgItem = createElem({c : prefix + "-i"});
				const elMsgLabel = createElem({c : prefix + "-i-label", n : input_message_label});
				const elMsgInputWrap = createElem({c : prefix + "-i-iw"});
				appends(elMsgItem, elMsgLabel);
				appends(elMsgItem, elMsgInputWrap);
				
				const elInputMsg = createElem({t : "textarea", c : prefix + "-i-i"});
				elInputMsg.setAttribute("placeholder", input_message_placeholder);
				appends(elMsgInputWrap, elInputMsg);
				
				return {
					elItem : elMsgItem,
					elInput : elInputMsg
				}
			};
			const initOriginalContactForm = (sent_msg, try_again_msg, invalid_email_msg, empty_message_msg)=>{
				if(window._WidgetManager){
					window._WidgetManager._RegisterWidget('_ContactFormView', new window._WidgetInfo('ContactForm1', 'w-main-section', document.getElementById('ContactForm1'), {
						'contactFormMessageSendingMsg': "sending",
						'contactFormMessageSentMsg': sent_msg,
						'contactFormMessageNotSentMsg': try_again_msg,
						'contactFormInvalidEmailMsg': invalid_email_msg, 
						'contactFormEmptyMessageMsg': empty_message_msg,
						'title': 'Formulir Kontak',
						'blogId': wijsBlog.blogId,
						'contactFormNameMsg': 'Nama',
						'contactFormEmailMsg': 'Email',
						'contactFormMessageMsg': 'Pesan',
						'contactFormSendMsg': 'Kirim',
						'submitUrl': 'https://www.blogger.com/contact-form.do'
					}, 'displayModeFull'));
				}
			};
			return {
				configsData,
				create
			}
		})();
		
		const FC_OverlayTOC = !g_wijsBlog.isSingleItem ? null : (()=>{
			/* DOKUMENTASI:
				ALUR PEMBUATAN:
					1. new create(elPostBody, configs, events)
						arguments:
							elPostBody								:
							configs										:	lihat configs data
							events										:	object 
																					onOpen = (dis)=>{}
																					onClose = (dis)=>{}
						return:
							instance
								configs									:	configs
								items									:	array included empty
																				object items:
																					el					:	element heading original
																					elLink			:	element link jumper
																					elTarget		:	element baru yang diappend ke {{el}} sebagai tujuan jumper
																					title				:	
																					targetId		:	id {{elTarget}}
																					
								elContent								:	hanya jika diaktifkan dan terdapat content dan terdapat items > min_items
								activeItem								:	
								ontransition							:	false
								opened									:	false
								events									:
										
								
					2. instance.createOpener()
							menambahkan property
								elOpener								:
								
					3. instance.createModal()
							akan secara otomatis terpanggil ketika click pada opener pertama kali
							menambahkan property
								elModal								:
							
					4. instance.open()
					5. instance.close()
					
				FORMAT HTML DAFTAR ISI MANUAL
					Ketika terdapat daftar isi yang dibuat secara manual oleh user dengan format yang telah ditentukan dibawah. Konten overlay akan mengambil konten ini.
					disini, HTML original akan tetap ada pada post body.
					
						format pembuatan:
							<div class='w-toc'>
								<div class='w-toc-title'>
								</div>
								<div class='w-toc-content'>
									<ol>
										<li><a href='#id1'>Item 1</a></li>
										<li><a href='#id1'>Item 1</a></li>
									<ol>
								</div>
							</div>
							
					format diatas akan diclone dan diletakkan pada overlay. adapun html toc title akan sedikit dimanipulasi dengan menerapkan struktur widget title,
					kurang lebih seperti berikut:
						<div class='w-toc'>
							<div class='w-heading w-toc-title'>
								title
							</div>
							....
						</div>
						
						
				BERBAGAI INFORMASI:
					*	untuk menonaktifkan overlay toc pada post tertentu, user dapat menambahkan command {{data-overlay-toc='no'}}
					*	untuk mencegah element heading di scan, user dapat menambahkan atribut {{data-overlay-toc='no'}} pada heading yang bersangkutan.
					
				
			*/
			const configsCreateData = p_configsCreateData;
			const getById = p_elemGetById;
			const getByClass = p_elemGetByClass;
			const getByTag = p_elemGetByTag;
			const hasClass = p_elemHasClass;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const elemRemove = p_elemRemove;
			const insertFirstChild = p_elemInsertFirstChild;
			const insertBefore = p_elemInsertBefore;
			const elemGetBoundingClientRect = p_elemGetBoundingClientRect;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			const urlGetAnchor = p_urlGetAnchor;
			const urlRemoveProtocol = p_urlRemoveProtocol;
			const bodyMirror = g_bodyMirror;
			
			const fwSkin = FW_Skin;
			const fwOverrideConfigs = FW_OverrideConfigs;
			
			const wijsIcons = g_wijsIcons;
			const icon_list = wijsIcons.list;
			
			const wijsBlog = g_wijsBlog;
			const {canonicalUrl} = wijsBlog;
			
			const prefix = "w-99";
			const openerIcon = icon_list;
			
			const configsData = configsCreateData([
				["enable", 2, true],
				["auto_scan", 2, true],
				["scan_tags", 1, "h2,h3,h4"],
				["nested", 2, true],
				["min_items", 3, 2, [1, null]],
				["opener_title", 1, "Daftar isi"],
				["opener_skin", 1, "", fwSkin.allItems] // untuk sekarang dinonaktifkan
			]);			
			fwOverrideConfigs.pushData("overlay_toc", configsData, ["enable", "nested"], null);
			
			const create = function(elPostBody, configs, events){
				const dis = this;
				dis.configs = configs;
				dis.ontransition = false;
				dis.opened = false;
				dis.events = events;
				dis.items = [
					/* item object
						elLink 
						originalAnchor
						newAnchor
						elHeading 				:	element heding target || null;
						elJumpTarget			:	element target jump yang digenerate baru || null;
						title							:	hanya tersedia jika didapat melalui scan
					*/
				];
				/*	Property lainnya:
					dis.source				:	"manual" || "scan"
					dis.enable				:	boolean		(juga false jika tidak terdapat items)
					dis.elContent			:	dom 			(hanya jika terdapat items)
				*/
				
				
				const {enable, auto_scan, scan_tags, min_items, opener_title, nested} = configs;			
				if(enable){
					const items = dis.items;		
					let hasItems = false;
					
					// MENENTUKAN KONTEN
					// tentang pembuatan konten daftar isi
					// konten daftar isi akan mengutamakan daftar isi manual oleh user yang diformat dengan id {{w-toc}}
					// ketika elemen manual ini tidak tersedia, fitur akan menscan heading hanya jika auto scan dienable
					// element toc dibuat dengan struktur
					/* <div class='w-toc'>
							<div class='w-toc-title'>
								Daftar isi MANUAL
							</div>
							<div class='w-toc-content'>
								<ol>
									<li><a href='#target_id1'>Heading 1</a></li>
									<li>
										<a href='#target_id2'>Heading 2</a>
										<ol>
											<li><a href='#target_id1'>Heading 1</a></li>
											<li>
												<a href='#target_id2'>Heading 2</a>
											</li>
										</ol>
									</li>
								</ol>
							</div>
						</div>
					*/
					let elContent = getByClass(elPostBody, "w-toc", 0);
					if(elContent){
						dis.source = "manual";
						const elClone = elContent.cloneNode(true);
						const elOriginal = elContent;
						elContent = elClone;
						
						
						// update opener title dengan mengambil title pada daftar isi
						// yang dilakukan adalah:
						// 1. override configs opener_title
						// 2. membuat element judul baru lengkap dengan icon, dan mengganti judul pada element yang diclone dengan yang baru
						const elTocTitle = getByClass(elClone, "w-toc-title", 0);
						const newOpenerTitle = elTocTitle ? elTocTitle.textContent : null;
						if(newOpenerTitle){
							dis.configs.opener_title = newOpenerTitle;
							
							const newElTitle = createElem({
								c : "w-heading w--l1 w--s0 w--a1 w--t1 " + prefix + "heading",
								cs : [
									{
										c : "w-heading-icon " + prefix + "heading-icon",
										n : openerIcon
									},
									{
										c : "w-heading-title w-toc-title",
										n : newOpenerTitle
									}
								]
							});
							insertBefore(newElTitle, elTocTitle);
							elemRemove(elTocTitle);
						}
						
						
						// mulai memproses items
						const canonicalUrlNoProtocol = urlRemoveProtocol(canonicalUrl);
						const elLinks = getByTag(elClone, "a");
						if(elLinks){
							const len = elLinks.length;
							for(let i=0;i<len;i++){
								const elLink = elLinks[i];								
								const item = {};
								item.elLink = elLink;
								
								const href = (elLink.href || "").trim();
								
								// disini, ada kemungkinan href adalah menuju halaman lain,
								// oleh karena itu, perlu dipastikan bahwa url bukan eksternal
								// ketika eksternal, banyak proses akan yang terskip
								let externalTarget = false;
								if(href[0] !== "#"){
									/*	info
										pada proses checking di chrome, href akan tetap menyertakan url meski html dibuat tanpa url
										misal:
											-	url					: #id
											-	href 					: aktif_url#id
											
										namun untuk lebih amannya, lakukan chek !== "#" seperti diatas*/
									
									
									const hrefNoProtocol = urlRemoveProtocol(href);
									if(hrefNoProtocol.indexOf(canonicalUrlNoProtocol) !== 0){
										externalTarget = true;
									}
								}
								
								const originalAnchor = externalTarget ? null : urlGetAnchor(href); // anchor or null
								if(!originalAnchor){
									// pada keadaan ini, anchor tidak terdefinisi
									// ini kemungkinan:
									// 1. link mengarah ke halaman lain
									// 2. memang tidak terdapat anchor
									
									// disini, beberapa data tidak akan didefinisikan (tidak dapat didefinisikan)
									// 1. elHeading
									// 2. originalAnchor
									// 3. newAnchor
									// 4. elJumpTarget
								}
								else{
									item.originalAnchor = originalAnchor;
									const elHeading = getById(originalAnchor);
									if(!elHeading){
										// element dengan id anchor tidak ditemukan
										// tidak perlu pusing memmikirkan fallback
									}
									else{
										item.elHeading = elHeading;
										const newAnchor = _generateRandomId();
										const elJumpTarget = createElem({
											t : "span",
											i : newAnchor,
											c : "w-toc-target"
										});
										item.newAnchor = newAnchor;
										item.elJumpTarget = elJumpTarget;
									}
								}
								
								items.push(item);
							}
						}
						
						if(items.length >= min_items){
							hasItems = true;
						}
					}
					else{
						if(auto_scan){
							dis.source = "scan";
							const elFrag = createElem({});
							const tagsString = scan_tags.toLowerCase().replace(/\s/g, "").trim();
							const validTags = tagsString.split(",");
							const elHeadings = elPostBody.querySelectorAll(tagsString);
							let itemsCounter = 0; // jumlah items, perhitungan adalah keseluruhan termasuk sub
							let lastestHeading;
							for(const elHeading of elHeadings){
								const dataToC = getDataAttrTypeBoolean(elHeading, "overlay-toc", false, true);
								if(dataToC){
									const newAnchor = _generateRandomId();
									const elJumpTarget = createElem({
										t : "span",
										i : newAnchor,
										c : "w-toc-target"
									});
									const item = {};
									item.originalAnchor = null;
									item.newAnchor = newAnchor;
									item.elHeading = elHeading;
									item.elJumpTarget =elJumpTarget;
									item.title = elHeading.textContent || ( "#" + newAnchor);
									item.sub = [];	// hanya diperlukan untuk proses pembuatan dom, pada akhirnya property  ini akan dihapus
						
									const elTemp = createElem({});
									elTemp.dataItem = item;
									
									let targetParent;
									if(!nested){
										targetParent = elFrag;
										lastestHeading = elTemp;
									}
									else{
										if(!lastestHeading){
											targetParent = elFrag;
										}
										else{
											const lastestTagIndex = validTags.indexOf(lastestHeading.dataItem.elHeading.tagName.toLowerCase());
											const currentTagIndex = validTags.indexOf(item.elHeading.tagName.toLowerCase());
											if(lastestTagIndex === currentTagIndex){
												targetParent = lastestHeading.parentNode;
											}
											else if(lastestTagIndex < currentTagIndex){
												targetParent = lastestHeading;
											}
											else{
												let lastParent = lastestHeading.parentNode;
												let disTag = item.elHeading.tagName;
												while(lastParent !== elFrag && disTag !== lastParent.dataItem.elHeading.tagName){
													lastParent = lastParent.parentNode;
												}
												
												if(lastParent === elFrag){
													targetParent = elFrag;
												}
												else{
													targetParent = lastParent.parentNode;
													
													// pada fungsi while diatas, fungsi akan terhenti pada kedaan dimana tag parent === tag item
													// ini artinya, level current heading sama dengan level parent,
													// oleh karena itu, targetParent = lastParent.parentNode;
												}
											}
										}
										
										lastestHeading = elTemp;
									}
									
									appends(targetParent, lastestHeading);
									itemsCounter += 1;
								}
							}
							
							
							
							// mulai mendefinisikan items
							if(itemsCounter >= min_items){
								{ 	// push items berdasarkan elFrag
									// items akan tetap dipush tanpa sub
									const main = (itemsDomParent)=>{
										const children = itemsDomParent.children;
										for(const child of children){
											const item = child.dataItem;
											if(item){
												items.push(item);
												main(child);
											}
										}
									};
									main(elFrag);
									
									// hapus sub pada item
									for(const item of items){
										if(item.sub){
											delete item.sub;
										}
									}
								}
								{	// definisikan elContent berdasarkan elFrag (karena butuh informasi sub)
									// sampai disini, dis.items mungkin kosong
									// konten hanya akan dibuat ketika tedapat items dan min terpenuhi
									if(items.length >= min_items){
										// mulai membuat dom
										elContent = createElem({
											c : "w-toc",
											cs : [
												{
													c : "w-heading w--l1 w--s0 w--t1 w--a1 " + prefix + "heading",
													cs : [
														{
															c : "w-heading-icon " + prefix + "heading-icon",
															n : openerIcon
														},
														{
															c : "w-heading-title w-toc-title",
															n : opener_title
														}
													]
												},
												{
													c : "w-toc-content",
													f : (elem)=>{
														appends(elem, 	createElem({
															t : "ol",
															f : (elem)=>{
																let newItemsCounter = 0;
																const createItemDom = (itemDomFrag)=>{
																	const item = itemDomFrag.dataItem;
																	if(item){
																		const elLi = createElem({t : "li"});
																		const elLink = createElem({
																			t : "a",
																			n : item.title,
																			h : "#" + item.newAnchor,
																			f : (elem)=>{
																				// untuk konten dari scan, elLink belum terdefinisi
																				// definisikan
																				item.elLink = elem;
																			}
																		});
																		
																		let hasSub = false;
																		const subChilds = itemDomFrag.children;
																		if(subChilds){
																			const elInner = createElem({t : "span"});
																			const elOl = createElem({t : "ol"});
																			for(const subFrag of subChilds){
																				const subDom = createItemDom(subFrag);
																				if(subDom){
																					appends(elOl, subDom);
																					newItemsCounter += 1;
																					hasSub = true; // dilakukan disini karena jika diluar ini, masih ada kemungkinan tidak terdaat sub
																				}
																			}
																			
																			if(hasSub){
																				appends(elInner, elLink);
																				appends(elInner, elOl);
																				appends(elLi, elInner);
																			}
																		}
																		
																		if(!hasSub){
																			appends(elLi, elLink);
																		}
																		
																		newItemsCounter += 1;
																		return elLi;
																	}
																	
																	return null;
																};
																
																// mulai append
																const fragChilds = elFrag.children;
																if(fragChilds){
																	for(const frg of fragChilds){
																		const elLi = createItemDom(frg);
																		if(elLi){
																			appends(elem, elLi);
																		}
																	}
																}
																
																// check lagi counter
																if(newItemsCounter >= min_items){
																	hasItems = true;
																}
															}
														}));
													}
												}
											]
										});
									}								
								}
							}
						}
					}
					
					
					
					
					// sampai disini, ada kemungkinan tidak terdapat items
					// proses hanya akan dilanjutkan jika terdapat items
					if(hasItems){
						dis.enable = true;
						dis.elContent = elContent;
						
						// MULAI MELAKUKAN BERBAGAI KEPERLUAN LAINNYA
						{	// insert elJumpTarget ke elHeading
							for(const item of items){
								if(item.elHeading && item.elJumpTarget){
									insertFirstChild(item.elHeading, item.elJumpTarget);
								}
							}
						}
						{	// add onclick link
							_assignOnclicksItem(dis);
						}
					}					
				}
			};
			create.prototype.createOpener = function(){
				const dis = this;
				if(dis.enable){
					const configs = dis.configs;
					const elOpener = createElem({
						t : "button",
						c : "w-nostyle " + prefix + "opener",
						n : `${openerIcon}<span>${configs.opener_title}</span>`,
						f : (elem)=>{
							const skin = configs.opener_skin;
							if(skin){
								addClasses(elem, fwSkin.createClassString(skin));
							}
							
							elem.onclick = (e)=>{
								e.preventDefault();
								dis.open();
							};
						}
					});
					dis.elOpener = elOpener;
					return elOpener;
				}
				else{
					return null;
				}
			};
			create.prototype.createModal = function(){
				const dis = this;
				const {configs, enable, elContent} = dis;
				if(enable){
					const elModal = createElem({
						c : prefix + "a",
						cs : [
							{
								c : prefix + "b",
								cs : [
									{
										c : prefix + "c",
										f : (elem)=>{
											appends(elem, elContent);
										}
									}
								]
							},
							{
								t : "button",
								c : "w-nostyle "+ prefix + "closer",
								n : "",
								f : (elem)=>{
									elem.onclick = (e)=>{
										e.preventDefault();
										dis.close();
									};
								}
							}
						]
					});
					elModal.onclick = (e)=>{
						if(e.target === elModal){
							dis.close();
						}
					};
					dis.elModal = elModal;
					return elModal;
				}
				
				return null;
			};
			create.prototype.open = function(){
				const dis = this;
				if(!dis.opened){
					if(!dis.ontransition){
						dis.ontransition = true;
						if(!dis.elModal){
							dis.elModal = dis.createModal();
						}	
						
						// definisikan aktif items
						const lastActiveItem = dis.activeItem;
						const nextActiveItem = _getActiveItem(dis);
						if(nextActiveItem !== lastActiveItem){
							if(lastActiveItem){
								removeClasses(lastActiveItem.elLink, "w--active");
							}
							
							if(nextActiveItem){
								addClasses(nextActiveItem.elLink, "w--active");
								dis.activeItem = nextActiveItem;
							}
						}
						
						
						appends(bodyMirror, dis.elModal);
						setTimeout(()=>{
							addClasses(dis.elModal, "w--show");
							dis.opened = true;
							setTimeout(()=>{
								dis.ontransition = false;
								if(dis.events.onShow){
									dis.events.onShow(dis);
								}
							}, 300);
						}, 20);	
					}
				}
			};
			create.prototype.close = function(){
				const dis = this;
				if(dis.opened){
					if(!dis.ontransition){
						dis.ontransition = true;
						
						const elModal = dis.elModal;
						removeClasses(elModal, "w--show");
						dis.opened = false;
						setTimeout(()=>{
							elemRemove(elModal);
							dis.ontransition = false;
							if(dis.events.onClose){
								dis.events.onClose(dis);
							}
						}, 300);
					}
				}
			};
			
			const _generateRandomId = (()=>{
				const ids = [];
				const prefix = "w-toc-i";
				let currentNumber = 0;
				const main = ()=>{
					const newId = prefix + currentNumber;
					if(ids.indexOf(newId) === -1){
						ids.push(newId);
						currentNumber += 1;
						return newId;
					}
					else{
						currentNumber += 1;
						return main();
					}
				};
				return main;
			})();
			const _getActiveItem = (()=>{
				const main = (dis)=>{
					const lastActiveItem = dis.activeItem;
					if(lastActiveItem && lastActiveItem.elHeading){
						const rects = elemGetBoundingClientRect(lastActiveItem.elHeading);
						if(rects.top >= -1 && rects.bottom >= -1){
							// dibuat min 1 karena pada tahap cheking, ketika user mengklik link toc manual (mengandalkan aksi default browser dalam melompat ke target),
							// ketika modal lansung dibuka, yang aktif tidak sesuai dengan item yang baru saja diklik
							// malah item selanjutnya yang aktif, -1 untuk memfix keadaan tersebut
							return lastActiveItem;
						}
					}
					
					// hanya akan tereksekusi ketika return diatas tidak terpenuhi
					for(const item of dis.items){
						const elHeading = item.elHeading;
						if(elHeading){
							const rects = elemGetBoundingClientRect(elHeading);
							if(rects.top >= -1 && rects.bottom >= -1){
								return item;
							}
						}
					}
					
					return null;
				};
				return main;
			})();
			const _assignOnclicksItem = (()=>{
				const scrollOptions = {behavior: "smooth", block: "start", inline: "nearest"};
				const main = (dis)=>{
					const items = dis.items;
					for(const item of items){
						const {elLink} = item;
						if(elLink){ 
							elLink.onclick = (e)=>{
								onclickItem(e, item, dis);
							};
						}
					}
				};
				const onclickItem = (e, item, dis)=>{
					// disini, untuk kontent toc manual, ada kemungkinan {{elJumpTarget}} tidak terdefinisi
					// pada kondisi tersebut, aksi hanya akan menutup modal (tanpa scroll) dan dilanjutkan dengan aksi default browser
					// kasus ini misal untuk link ke eksternal page
					const elJumpTarget = item.elJumpTarget;
					if(elJumpTarget){
						e.preventDefault();
					}
					
					// manipulasi last active item
					// meskipun mungkin tidak diperlukan ketika click pada daftar isi manual, proses ini akan diberlakukan untuk semua
					const lastActiveItem = dis.activeItem;
					if(lastActiveItem){
						removeClasses(lastActiveItem.elLink, "w--active");
					}
					
					dis.activeItem = item;
					addClasses(item.elLink, "w--active");
					
					dis.close();
					
					// mulai melakukan scroll
					if(elJumpTarget){
						elJumpTarget.scrollIntoView(scrollOptions);
					}
				};
				
				return main;
			})();

			return {
				create,
				configsData
			}
		})();
		
		
		const FC_PostsWidget_SmallThumbnail = (()=>{
			const createElem = p_elemCreateElem;
			const createTextNode = p_elemCreateTextNode;
			const addClasses = p_elemAddClasses;
			const urlAssignRel = p_urlAssignRel;
			const urlAssignTarget = p_urlAssignTarget;
			const appends = p_elemAppends;
			const configsCreateData = p_configsCreateData;
			const configsCloneProperties = p_configsCloneProperties;
			const configsGetOptionIndex = p_configsGetOptionIndex;
			const stringIsFalsy = p_stringIsFalsy;
			const getByClass = p_elemGetByClass;
			
			const fwGrid = FW_Grid;
			const fwOneRow = FW_OneRow;
			const fwEllipsisOverRow = FW_EllipsisOverRow;
			const fwImg = FW_Img;
			const fwSkin = FW_Skin;
			
			const prefix = "w-21";
			const configsData = (()=>{
				const obj = configsCreateData([
					["max_title_rows", 3, 2, [1, 3]],
					["image_shape", 1, "square", ["square", "circle"]],
					["top_info_label", 1, ""],
					["bottom_info_label", 1, ""]
				]);
				configsCloneProperties(obj, fwGrid.configsData, null, ["max_cols"], null);
				
				return obj;
				
				/* ALL AVAILABLES CONFIGS 
					["max_title_rows", 3, 2, [1, 3]],
					["img_shape", 1, "square", ["square", "circle"]],
					["top_info_label", 1, ""],
					["bottom_info_label", 1, ""],
					["item_box", 1, "none", ["none", "border", "shadow"]],
					["first_row_item_top_border", 2, true],
					["last_row_item_bottom_border", 2, true],
					["slider", 2, false],
					["footer_align", 1, "center", ["left", "center", "right", "justify"]],
					["more_link_title", 1, wijsVars.textViewMore] 
					["labels_max_results", 3, 1, [1, null]],
					["date_format", 1, null] */
			})();
			const create = (()=>{
				const main = function(configs, items, elParent){
					/*	arguments
							items	:	array object item
											topInfo					:	null || none || array object item {title, url}
											bottomInfo 			:	null || none || array object item {title, url}
					*/
					const elItems = (()=>{
						const arry = [];
						for(const item of items){
							const elItem = createElem({
								c : prefix + "c",
								cs : [
									{
										c : prefix + "d",
										cs : [
											{
												c : prefix + "e"
												/*cs : w-img prefix +"m", akan terappend pada tahap pemrosesan img di proses init*/
											},
											{
												c : prefix + "f",
												f : (elem)=>{
													// TOP CONTENT
													const {topInfo, bottomInfo} = item;
													if(!stringIsFalsy(topInfo)){
														// {{null}} kondisi ketika configs top_info adalah none
														// {{none}} kondisi ketika configs top_info bukan none namun konten sendiri tidak tersedia, misal content adalah label namun post tidak memiliki label
														const elContent = createElem({
															t : "span",
															c : prefix + "g",
															f : (elem)=>{
																const label = configs.top_info_label;
																if(label){
																	appends(elem, createElem({
																		t : "span",
																		c : prefix + "j",
																		n : label
																	}));
																}
																
																appends(elem, createElem({
																	t : "span",
																	c : prefix + "k",
																	f : (elem)=>{
																		const len = topInfo.length;
																		for(let i=0;i<len;i++){
																			const c = topInfo[i];
																			const url = c.url;
																			const isLast = i === len - 1;
																			appends(elem, createElem({
																				t : url ? "a" : "span",
																				n : c.title,
																				h : url ? url : false,
																				tt : url ? c.title : false,
																				f : (elem)=>{
																					if(url){
																						urlAssignRel(elem);
																						urlAssignTarget(elem);
																					}
																				}
																			}));
																			
																			if(!isLast){
																				appends(elem, createTextNode(","));
																			}
																		}
																	}
																}));
															}
														});
														
														const elOneRow = fwOneRow.create({}, elContent);
														appends(elem, elOneRow);
													}
													
													// TITLE
													appends(elem, createElem({
														c : prefix + "h "+ fwEllipsisOverRow.classes.elem,
														cs : [
															{
																t : "a",
																h : item.link ? item.link : item.url,
																c :  fwEllipsisOverRow.classes.content,
																cs : createTextNode(item.title),
																tt : item.title
															}
														]
													}));
													
													// BOTTOM CONTENT
													if(!stringIsFalsy(bottomInfo)){
														const elContent = createElem({
															t : "span",
															c : prefix + "l",
															f : (elem)=>{
																const label = configs.bottom_info_label;
																if(label){
																	appends(elem, createElem({
																		t : "span",
																		c : prefix + "n",
																		n : label
																	}));
																}
																
																appends(elem, createElem({
																	t : "span",
																	c : prefix + "o",
																	f : (elem)=>{
																		const len = bottomInfo.length;
																		for(let i=0;i<len;i++){
																			const c = bottomInfo[i];
																			const url = c.url;
																			const isLast = i === len - 1;
																			appends(elem, createElem({
																				t : url ? "a" : "span",
																				n : c.title,
																				h : url ? url : false,
																				tt : url ? c.title : false,
																				f : (elem)=>{
																					if(url){
																						urlAssignRel(elem);
																						urlAssignTarget(elem);
																					}
																				}
																			}));
																			
																			if(!isLast){
																				appends(elem, createTextNode(","));
																			}
																		}
																	}
																}));
															}
														});
														
														const elOneRow = fwOneRow.create({}, elContent);
														appends(elem, elOneRow);
													}
												}
											}
										]
									}
								]
							});
							arry.push(elItem);
						}
						
						return arry.length > 0 ? arry : null;
					})();
					
		
					// Sampai disini, elItems telah siap
					// set locked configs for grid
					configs.max_cols = 3;
			
					const gridInstance = new fwGrid.create({configs, elItems, elParent});
					
					// disini, class wrap perlu ditambahkan
					// class states lainnya juga langsung ditambahkan disini
					(()=>{
						const w1 = gridInstance.el;
						const w2 = gridInstance.el2;
						addClasses(w1, prefix + "a");
						addClasses(w2, prefix + "b");
						
						const {
							image_shape,
							max_title_rows,
						} = configs;
						
						const classes = [];
						classes.push("w--imb" + (configsGetOptionIndex(configsData, "image_shape", image_shape, 1))); // img box
						classes.push("w--imc1"); // img content
						classes.push("w--t" + max_title_rows); // title rows
						
						// height
						classes.push("w--h" + (()=>{
							let hasTopContent;
							let hasBottomContent;
							for(const item of items){
								if(!hasTopContent){
									if(!stringIsFalsy(item.topInfo)){
										hasTopContent = true;
									}
								}
								if(!hasBottomContent){
									if(!stringIsFalsy(items[0].bottomInfo)){
										hasBottomContent = true;
									}
								}
							}
							
							let heightNum;
							if(max_title_rows === 1){
								/*	1 baris title tanpa secondry content			: 		25							1
									1 baris title dengan top only						:		25 + 22 = 47				1
									1 baris title dengan bottom only					:		25 + 22 = 47				1
									1 baris title dengan both							:		25 + 44 = 69				2 */
								if(hasTopContent && hasBottomContent){
									heightNum = 2;
								}
								else{
									heightNum = 1;
								}
							}
							else if(max_title_rows === 2){
								/* 2 baris title tanpa secondry content			: 		25 + 25 = 50				1
								2 baris title dengan top only						:		50 + 22 = 72				3
								2 baris title dengan bottom only					:		50 + 22 = 72				3
								2 baris title dengan both							:		50 + 44 = 94				4 */
								
								if(!hasTopContent && !hasBottomContent){
									heightNum = 1;
								}
								else{
									if(hasTopContent && hasBottomContent){
										heightNum = 4;
									}
									else{
										heightNum = 3;
									}
								}
							}
							else{
								/* 3 baris title tanpa secondry content			: 		75							3
								3 baris title dengan top only						:		75 + 22 = 97				5
								3 baris title dengan bottom only					:		75 + 22 = 97				5
								3 baris title dengan both							:		75 + 44 = 119			6 */
								if(!hasTopContent && !hasBottomContent){
									heightNum = 3;
								}
								else{
									if(hasTopContent && hasBottomContent){
										heightNum = 6;
									}
									else{
										heightNum = 5;
									}
								}
							}
										
							return heightNum;												
						})()); 	
						
						w1.className += " " + classes.join(" ");
					})();
					
					
					const dis = this;
					dis.configs = configs;
					dis.configsData = configsData;
					dis.el = gridInstance.el;	
					dis.items = items;
					dis.instance = {
						grid : gridInstance
					};
				};
				main.prototype.init = function(callback){
					const dis = this;
					const {configs, items, el} = dis;
					const {img_content, img_skins} = configs;
					
					dis.instance.grid.init((gridInstance)=>{
						// 1. PROCESS IMG
						{
							const elTargets = getByClass(el, prefix + "e");
							if(elTargets){
								const imagesObj = [];
								for(const item of items){
									imagesObj.push(new fwImg.create(item.img, item.link || item.url, item.title));
								}
								
								if(elTargets.length === imagesObj.length){
									const len = imagesObj.length;
									for(let i=0;i<len;i++){
										const imageObj = imagesObj[i];
										const elTarget = elTargets[i];
										imageObj.defineDom({
											wrapTag : "div",
											wrapClasses : prefix +"m"
										});
										appends(elTarget, imageObj.elWrap);
										imageObj.updateSrcByWrapDimension();
										imageObj.appendImg();
									}


									// new update,
									// no img fallback
									{
										const length = imagesObj.length;
										const randomSkin = fwSkin.getRandomItems(["regular"], length);
										if(randomSkin){
											for(let i=0;i<length;i++){
												const o = imagesObj[i];
												const {elWrap, elImg, title} = o;
												if(!elImg){
													const elNoImgFallback = createElem({c : fwSkin.createClassString(randomSkin[i]), n : title ? title[0] : "i"});
													appends(elWrap, elNoImgFallback);
												}
											}
										}
									}									
								}
							}
						}		

						// 2. PROCESS ONEROWS
						fwOneRow.initParent(el);
						
						// 3. PROCESS TITLE
						fwEllipsisOverRow.init(el);
						
						if(callback){
							callback();
						}						
					});
				};
				
				return main;
			})();
			
			return {
				prefix,
				configsData,
				create
			};
		})();
		const FC_PostsWidget_BigThumbnail = (()=>{
			const configsCreateData = p_configsCreateData;
			const configsCloneProperties = p_configsCloneProperties;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const addClasses = p_elemAddClasses;
			const urlAssignRel = p_urlAssignRel;
			const urlAssignTarget = p_urlAssignTarget;
			const createTextNode = p_elemCreateTextNode;
			const getByClass = p_elemGetByClass;
			const getById = p_elemGetById;
			const insertJsBasedCss = p_insertJsBasedCss;
			const arrayMax = p_arrayMax;
			const arrayMin = p_arrayMin;
			const stringIsFalsy = p_stringIsFalsy;
			
			const fwGrid = FW_Grid;
			const fwOneRow = FW_OneRow;
			const fwImg = FW_Img;
			const fwSkin = FW_Skin;
			
			const prefix = "w-22";
			const configsData = (()=>{
				const obj = configsCreateData([
					["image_ratio", 1, "16:9"],
					["top_info_label", 1, null],
					["bottom_info_label", 1, null],
				]);
				configsCloneProperties(obj, fwGrid.configsData, null, ["max_cols"], null);
				return obj;
			})();
			const create = (()=>{
				const main = function(configs, items, elParent){
					/* arguments:
						items
						Berupa array dengan property berikut:
							topInfo						:	null || none ||	array[{title, url}]
							bottomInfo				:	null || none ||	array[{title, url}]
							link							:	url, akan diutamakan ketimbang {{url}}
							url							:	url
							title							:	title
							
							
					*/
					// define cols
					configs.cols = (()=>{
						const width = elParent.clientWidth;
						if(width <= 440){
							return 1;
						}
						else if(width <= 679){
							return 2;
						}
						else{
							return 3;
						}
					})();
			
			
					const elItems = (()=>{
						const arry = [];
						for(const item of items){
							const elItem = createElem({
								c : prefix + "c",
								cs : [
									{
										c : prefix + "d",
										/*cs : prefix + "m " + "w-img w--s0" ditambahkan pada pemrosesan img*/
									},
									{
										c : prefix + "e",
										f : (elem)=>{
											const {topInfo, bottomInfo} = item;
											if(!stringIsFalsy(topInfo)){
												// {{null}} kondisi ketika configs top_info adalah none
												// {{none}} kondisi ketika configs top_info bukan none namun konten sendiri tidak tersedia, misal content adalah label namun post tidak memiliki label
												const elContent = createElem({
													t : "span",
													c : prefix + "f",
													f : (elem)=>{
														const label = configs.top_info_label;
														if(label){
															appends(elem, createElem({
																t : "span",
																c : prefix + "g",
																n : label
															}));
														}
														
														appends(elem, createElem({
															t : "span",
															c : prefix + "h",
															f : (elem)=>{
																const len = topInfo.length;
																for(let i=0;i<len;i++){
																	const c = topInfo[i];
																	const url = c.url;
																	const isLast = i === len - 1;
																	appends(elem, createElem({
																		t : url ? "a" : "span",
																		n : c.title,
																		h : url ? url : false,
																		tt : url ? c.title : false,
																		f : (elem)=>{
																			if(url){
																				urlAssignRel(elem);
																				urlAssignTarget(elem);
																			}
																		}
																	}));
																	
																	if(!isLast){
																		appends(elem, createTextNode(","));
																	}
																}
															}
														}));
													}
												});
												
												const elOneRow = fwOneRow.create({
													wrapClasses : prefix + "o"
												}, elContent);
												appends(elem, elOneRow);
											}		
											
											// TITLE
											appends(elem, createElem({
												c : prefix + "i",
												cs : [
													{
														t : "a",
														h : item.link ? item.link : item.url,
														c :  prefix + "j",
														cs : createTextNode(item.title),
														tt : item.title
													}
												]
											}));
											
											// BOTTOM CONTENT
											if(!stringIsFalsy(bottomInfo)){
												const elContent = createElem({
													t : "span",
													c : prefix + "k",
													f : (elem)=>{
														const label = configs.bottom_info_label;
														if(label){
															appends(elem, createElem({
																t : "span",
																c : prefix + "l",
																n : label
															}));
														}
														
														appends(elem, createElem({
															t : "span",
															c : prefix + "n",
															f : (elem)=>{
																const len = bottomInfo.length;
																for(let i=0;i<len;i++){
																	const c = bottomInfo[i];
																	const url = c.url;
																	const isLast = i === len - 1;
																	appends(elem, createElem({
																		t : url ? "a" : "span",
																		n : c.title,
																		h : url ? url : false,
																		tt : url ? c.title : false,
																		f : (elem)=>{
																			if(url){
																				urlAssignRel(elem);
																				urlAssignTarget(elem);
																			}
																		}
																	}));
																	
																	if(!isLast){
																		appends(elem, createTextNode(","));
																	}
																}
															}
														}));
													}
												});
												
												const elOneRow = fwOneRow.create({
													wrapClasses : prefix + "p"
												}, elContent);
												appends(elem, elOneRow);
											}
										}
									}
								]
							});
							arry.push(elItem);
						}
						return arry.length > 0 ? arry : null;
					})();
					
					const gridInstance = new fwGrid.create({configs, elItems, elParent});
					// disini, class wrap perlu ditambahkan
					// class states lainnya juga langsung ditambahkan disini
					(()=>{
						const w1 = gridInstance.el;
						const w2 = gridInstance.el2;
						addClasses(w1, prefix + "a");
						addClasses(w2, prefix + "b");
					})();
					
					const dis = this;
					dis.configs = configs;
					dis.configsData = configsData;
					dis.el = gridInstance.el;	
					dis.items = items;
					dis.instance = {
						grid : gridInstance
					};
				};
				main.prototype.init = function(callback){
					const dis = this;
					const {configs, items, el} = dis;
					const {image_ratio} = configs;
					dis.instance.grid.init();
					
					const usedId = el.id || createId();
					el.id = usedId;
					
					
					// PROCESS IMG					
					{
						const elTargets = getByClass(el, prefix + "d");
						if(elTargets){
							const imagesObj = [];
							for(const item of items){
								imagesObj.push(new fwImg.create(item.img, item.link || item.url, item.title));
							}
							
							if(elTargets.length === imagesObj.length){
								const len = imagesObj.length;
								for(let i=0;i<len;i++){
									const imageObj = imagesObj[i];
									const elTarget = elTargets[i];
									
									// imageObj.src akan bernilai falsy jika tidak terdapat property src pada {{objectPost}} atau property src pada {{objectPost}} bernilai falsy
									// pada kasus imageObj.src bernilai falsy, ini artinya image tidak tersedia
									imageObj.defineDom({
										wrapTag : "div",
										wrapClasses : prefix +"m"
									});
									appends(elTarget, imageObj.elWrap);
								}	

								// sampai disini, baru image wrap yang terappends,
								// selanjutnya definisikan ration melalui css
								
								// define img ratio
								const ratio = (()=>{
									const widthString = image_ratio.substring(0, image_ratio.indexOf(":"));
									const heightString = image_ratio.substring(image_ratio.indexOf(":") + 1, image_ratio.length);
									const widthNumber = parseInt(widthString);
									const heightNumber = parseInt(heightString);
									if(!widthNumber || !heightNumber){
										return [16, 9];
									}
									else{
										return [widthNumber, heightNumber];
									}
								})();
					
								const elImg0 = getByClass(el, "w-img", 0);
								const imgWidth = elImg0.clientWidth;
								const imgHeight = Math.round((imgWidth / ratio[0]) * ratio[1]);
								insertJsBasedCss("#" + usedId + " .w-img", "height:"+ imgHeight + "px");
								
								// sekarang dimensi img telah diketahui
								// selanjutnya, updateImg dimension by wrap and appends
								for(const imageObj of imagesObj){
									imageObj.updateSrcByWrapDimension();
									imageObj.appendImg();
								}
								
								
								// new update,
								// no img fallback
								{
									const length = imagesObj.length;
									const randomSkin = fwSkin.getRandomItems(["regular"], length);
									if(randomSkin){
										for(let i=0;i<length;i++){
											const o = imagesObj[i];
											const {elWrap, elImg, title} = o;
											if(!elImg){
												const elNoImgFallback = createElem({c : fwSkin.createClassString(randomSkin[i]), n : title ? title[0] : "i"});
												appends(elWrap, elNoImgFallback);
											}
										}
									}
								}
							}
						}
					}
					
					
					// 2. PROCESS ONEROWS
					fwOneRow.initParent(el);
					
					// 3. SAMAKAN TINGGI
					{	
						const gridInstance = dis.instance.grid;
						const hasSlider = gridInstance.slider;
						const elItems = gridInstance.elItems;
						const cols = gridInstance.cols; // hanya tersedia ketika grid sudah terinit	
						if(!hasSlider){
							const els = (()=>{
								const elItemsLength = elItems.length;
								let rows = Math.floor(elItemsLength / cols);
								if(elItemsLength % cols !== 0){
									rows += 1;
								}
								
								const arry = [];
								for(let i=0;i<rows;i++){
									arry.push([]);
								}
								
								let putToRow = 0;
								let currentPositionAtCol = 0;
								for(let i=0;i<elItemsLength;i++){
									arry[putToRow].push(elItems[i]);
									currentPositionAtCol += 1;
									if(currentPositionAtCol === cols){
										putToRow += 1;
										currentPositionAtCol = 0;
									}
								}
								
								return arry;
							})();
							
							for(const row of els){
								const heights = [];
								for(const i of row){
									heights.push(i.clientHeight);
								}
								const max = arrayMax(heights);
								const min = arrayMin(heights);
								if(max !== min){
									for(const i of row){
										i.style.height = max + "px";
									}
								}
							}
						}
						else{
							const heights = [];
							for(const i of elItems){
								heights.push(i.clientHeight);
							}
							const max = arrayMax(heights);
							const min = arrayMin(heights);
							if(max !== min){
								for(const i of elItems){
									i.style.height = max + "px";
								}
							}
						}
					}
					
					if(callback){
						callback();
					}
				};
				
				const createId = (()=>{
					let usedNum = 0;
					const create = ()=>{
						usedNum += 1;
						const el = getById(prefix + "-" + usedNum);
						if(!el){
							return prefix + "-" + usedNum;
						}
						else{
							return create();
						}
					};
					return create;
				})();	
				return main;
			})();
			
			
			return {
				prefix,
				configsData,
				create
			};
		})();
		
		
		const FW_PostsWidget = (()=>{
			const addClasses = p_elemAddClasses;
			const fwDate = FW_Date;
			const fwLabels = FW_Labels;
			
			const itemsByStyle = {
				small_thumbnail : FC_PostsWidget_SmallThumbnail,
				big_thumbnail : FC_PostsWidget_BigThumbnail,
			};
			const styles = Object.keys(itemsByStyle);
			const assignSecondaryContent = (()=>{				
				const main = (configs, posts)=>{
					const {top_info, bottom_info, labels_max_results, date_format} = configs;
					assigns({
						content : top_info,
						property : "topInfo",
						posts,
						labels_max_results,
						date_format
					});
					assigns({
						content : bottom_info,
						property : "bottomInfo",
						posts,
						labels_max_results,
						date_format
					});
				};
				const assigns = (obj)=>{
					const {content} = obj;
					if(content === "date"){
						assignFromDate(obj);
					}
					else if(content === "label"){
						assignFromLabels(obj);
					}
					else if(content === "author"){
						assignFromAuthor(obj);
					}
					else{
						assignFromNull(obj);
					}
				};		
				const assignFromAuthor = (obj)=>{
					const {property, posts} = obj;
					for(const p of posts){
						const name = p.authorName;
						const url = p.authorProfileUrl;
						p[property] = [{
							title : p.authorName,
							url : url && url !== "null" && url !== "none" ? url : false
						}];
					}
				};
				const assignFromDate = (obj)=>{
					const {property, posts, date_format} = obj;
					for(const p of posts){
						p[property] = [{
							title : fwDate.ISOToString(p.published, date_format)
						}];
					}
				};
				const assignFromNull = (obj)=>{
					const {property, posts} = obj;
					for(const p of posts){
						p[property] = null;
					}
				};
				const assignFromLabels = (obj)=>{
					const {property, posts, labels_max_results} = obj;
					for(const p of posts){
						const labels = p.labels;
						const hasLabels = labels && labels.length > 0;
						let value = null;
						if(!hasLabels){
							value = "none";
						}
						else{
							const filteredLabels = fwLabels.getFiltered({
								labels,
								maxResults : labels_max_results,
								reverse	: false,
								skipGroups : ""
							});
							if(!filteredLabels){
								value = "none";
							}
							else{
								value = [];
								for(const l of filteredLabels){
									value.push({
										title : l,
										url : fwLabels.createURL(l)
									});
								}
							}
						}
						p[property] = value;
					}
				};
			
				return main;
			})();
			
			return {
				items : itemsByStyle,
				styles : styles,
				assignSecondaryContent
			}
		})();
		


		
		// FORMATTING
		const Formatting_heading = (()=>{
			const getByClass = p_elemGetByClass;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const hasProcessed = [];
			const initParent = (elParent)=>{
				const elHeadings = getByClass(elParent, "w-heading");
				if(elHeadings){
					const aligns = ["left", "center", "right"];
					for(const el of elHeadings){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							
							const line = getDataAttrTypeBoolean(el, "line", false, true);
							const align = getDataAttrTypeOptions(el, "align", false, "left", aligns);
		
							const hasTitle = getByClass(el, "w-heading-title", 0) !== null;
							const hasSub = getByClass(el, "w-heading-sub", 0) !== null;
							const classes = [];
							classes.push("w--l" + (!line ? "0" : "1"));
							classes.push("w--a" + (aligns.indexOf(align) + 1));
							classes.push("w--t" + (hasTitle ? "1" : "0"));
							classes.push("w--s" + (hasSub ? "1" : "0"));
							el.className += (" " + classes.join(" "));
						}
					}
				}
			};
			return {
				initParent
			}
		})();
		const Formatting_button = (()=>{
			const getByTag = p_elemGetByTag;
			const getByClass = p_elemGetByClass;
			const fwButton = FW_Button;
			const fwButtonInit = fwButton.init;
			const hasProcessed = [];
			const initParent = (elParent)=>{				
				const elsLink = getByClass(elParent, "w-button") || [];
				const elsButton = getByTag(elParent, "button") || [];
				const elAll = elsLink.concat(elsButton);
				for(const el of elAll){
					if(hasProcessed.indexOf(el) === -1){
						hasProcessed.push(el);
						fwButtonInit(el);
					}
				}
			}; 
			return {
				initParent
			};
		})();
		const Formatting_mark = (()=>{
			/* KONFIGURASI
				data-skin
			*/
			const getByClass = p_elemGetByClass;
			const getByTag = p_elemGetByTag;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const addClasses = p_elemAddClasses;
			const fwSkin = FW_Skin;
			const validSkins = fwSkin.allItems;
			const fwSkinCreateClassString = fwSkin.createClassString;
			
			const hasProcessed = [];
			const initParent =(elParent)=>{
				const els = [];
				const elWithClass = getByClass(elParent, "w-mark");
				if(elWithClass){
					for(const el of elWithClass){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							if(els.indexOf(el) === -1){
								els.push(el);
							}
						}
					}
				}
				
				const elWithTag = getByTag(elParent, "mark");
				if(elWithTag){
					for(const el of elWithTag){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							if(els.indexOf(el) === -1){
								els.push(el);
							}
						}
					}
				}
				
				for(const el of els){
					const dataSkin = getDataAttrTypeOptions(el, "skin", false, "none", validSkins);
					if(dataSkin !== "none"){
						addClasses(el, fwSkinCreateClassString(dataSkin));
					}
				}
			};
			return{
				initParent
			}
		})();		
		const Formatting_list = (()=>{
			const getByClass = p_elemGetByClass;
			const getByTag = p_elemGetByTag;
			const addClasses = p_elemAddClasses;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			
			const fwSkin = FW_Skin;
			const fwSkin_allItems = fwSkin.allItems;
			const validMarkerBoxs = ["none", "square", "circle"];
			const validMarkerIcons = ["bullet", "arrow", "plus", "minus", "check", "x"];
			const hadProcessed = [];
			let tocItems = null;
				
			const initParent = (elInitedParent)=>{
				if(tocItems === null){
					tocItems = (()=>{
						const items = [];
						const tocContent = getByClass(null, "w-toc-content");
						if(tocContent){
							for(const elParent of  tocContent){
								const ol =  getByTag(elParent, "ol");
								if(ol){
									for(const el of ol){
										items.push(el);
									}
								}
								
								const ul =  getByTag(elParent, "ul");
								if(ul){
									for(const el of ul){
										items.push(el);
									}
								}
							}
						}
						
						return items;
					})();
				}
				
				
				const elsUl = getByTag(elInitedParent, "ul") || [];
				const elsOl = getByTag(elInitedParent, "ol") || [];
				const els = elsUl.concat(elsOl);
				
				
				
				for(const el of els){
					if(tocItems.indexOf(el) === -1){
						if(hadProcessed.indexOf(el) === -1){
							hadProcessed.push(el);
							
							const dataFormatting = getDataAttrTypeBoolean(el, "formatting", false, true);
							if(dataFormatting){
								const tag = el.tagName.toLowerCase();
								addClasses(el, "w-" + tag);
								
								const isUl = tag === "ul";
								
								const dataMarkerIcon = isUl ? getDataAttrTypeOptions(el, "marker-icon", false, "bullet", validMarkerIcons) : null;
								const dataMarkerSkin = getDataAttrTypeOptions(el, "marker-skin", false, "none", fwSkin_allItems);
								const dataMarkerBox = getDataAttrTypeOptions(el, "marker-box", false, "none", validMarkerBoxs);
								
								// icon
								if(isUl){
									addClasses(el, "w--i-" + dataMarkerIcon);	
								}
								
								// skin
								if(dataMarkerSkin !== "none"){
									addClasses(el, fwSkin.createClassString(dataMarkerSkin));
								}
								
								// box
								let usedBox = dataMarkerBox;
								if(isUl){
									// untuk tag ul, ketika data-marker-box bukan none dan data-marker-icon adalah bullet, box akan direset ke none
									if(dataMarkerIcon === "bullet"){
										usedBox = "none";
									}
								}
								addClasses(el, "w--ib" + (validMarkerBoxs.indexOf(usedBox)));
								
								// hasbox or nobox
								addClasses(el, "w--" + (usedBox === "none" ? "n" : "h") + "b");
								
								// padding class untuk ol
								if(!isUl){
									const itemsLength = el.children.length;
									let usedPaddingLeft = 1;
									if(dataMarkerBox === "none"){
										if(itemsLength <= 9){
											usedPaddingLeft = 1;
										}
										else if(itemsLength <= 99){
											usedPaddingLeft = 2;
										}
										else{
											usedPaddingLeft = 3;
										}
									}
									else{
										if(itemsLength <= 9){
											usedPaddingLeft = 4;
										}
										else if(itemsLength <= 99){
											usedPaddingLeft = 5;
										}
										else{
											usedPaddingLeft = 6;
										}
									}
									
									addClasses(el, "w--pl" + usedPaddingLeft);
								}
							}
						}
					}
				}
			};
			return {
				initParent
			}
		})();
		const Formatting_manualToC = (()=>{
			const getByClass = p_elemGetByClass;
			const initParent = (elInitedParent)=>{
				const regOpenList = new RegExp("<li>", "g");
				const regCloseList = new RegExp("</li>", "g");
				
				const elContents = getByClass(elInitedParent, "w-toc-content");
				if(elContents){
					for(const elContent of elContents){
						const oldInner = elContent.innerHTML;
						const newInner = oldInner.replace(regOpenList , "<li><span>").replace(regCloseList, "<\/span><\/li>");
						elContent.innerHTML = newInner;
					}
				}
			};
			return {
				initParent
			}
		})();
		const Formatting_message = (()=>{ 
			/*	KONFIGURASI:
				data-type									general, info, warn, error, success			general
				data-shadow								boolean												default-values
			*/
			
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_messageShadow  =  fwDefaultValues.message_shadow;
			
			const getByClass = p_elemGetByClass;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const removeClasses = p_elemRemoveClasses;
			const addClasses = p_elemAddClasses;
			const insertBefore = p_elemInsertBefore;
			
			const s_w_message = "w-message";
			const hasProcessed = [];
			const initParent = (elParent)=>{
				const els = getByClass(elParent, s_w_message);
				if(els){
					const validTypes = ["general", "info", "warn", "error", "success"];
					for(const el of els){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
						
							
							// create w2
							// w2 akan menggunakan el agar tidak perlu menggunakan innerHTML
							const newWrap = createElem({c : s_w_message + " " + s_w_message + "-w1"}); // w-message w-message-w1
							insertBefore(newWrap, el);
							addClasses(el, s_w_message + "-w2");
							removeClasses(el, s_w_message);
							appends(newWrap, el);
							
							
							const dataShadow = getDataAttrTypeBoolean(el, "shadow", true, fwDefaultValues_messageShadow);						
							const dataType = getDataAttrTypeOptions(el, "type", true, "general", validTypes);
						
							const classes = [];
							classes.push("w--box" + (dataShadow ? "2" : "0"));
							classes.push("w--t" + (validTypes.indexOf(dataType) + 1));
							newWrap.className += (newWrap.className ? " " : "") + classes.join(" ");
						}
					}
				}
			};
			return {
				initParent
			}
		})();
		const Formatting_details = (()=>{
			/* KONFIGURASI
					data-border					:		boolean						true
					
				PENGOLAHAN HTML
					semula:
						details
						details
					
					menjadi
						w-details
							details
							details
							
					semula
						details
						br
						details
						
					menjadi
						w-details
							details
							details
						br
						w-details
							details
							details
			*/
			const getByTag = p_elemGetByTag;
			const getByClass = p_elemGetByClass;
			const getChildrenByTag = p_elemGetChildrenByTag;
			const hasClass = p_elemHasClass;
			const addClasses = p_elemAddClasses;
			
			const getNextSibling =  p_elemGetNextSibling;
			const createElem = p_elemCreateElem;
			const insertBefore = p_elemInsertBefore;
			const appends = p_elemAppends;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			
			const hasProcessedDetails = [];
			const initParent = (elParent)=>{
				const elDetails = getByTag(elParent, "details");
				if(elDetails){
					for(const el of elDetails){
						if(hasProcessedDetails.indexOf(el) === -1){
							// ini artinya elemen belum perna diproses
							// selanjutnya, lihat next sibling untuk membuat grup
							const elInDisGroup = [el];
							let currentEl  = el;
							let nextSibling = getNextSibling(currentEl);
							hasProcessedDetails.push(currentEl);
							while(nextSibling && nextSibling.tagName === "DETAILS"){
								currentEl = nextSibling;
								elInDisGroup.push(currentEl);
								hasProcessedDetails.push(currentEl);
								nextSibling = getNextSibling(currentEl);
							}
							
							// sampai disini, grup telah terdefinisi
							// bisa tunggal (satu), bisa lebih items
							// selanjutnya, cek apakan parent memiliki class w-accordion atau tidak,
							// jika aya, ambil configs pada w-accordion, sebaliknya, ambil pada details pertama dan creates wrap
							const disParent = elInDisGroup[0].parentNode;
							const parentIsAccordion = hasClass(disParent, "w-details");
								
							
							// buat wrap
							const elConfigsHolder = parentIsAccordion ? disParent : elInDisGroup[0];
							const dataBorder = getDataAttrTypeBoolean(elConfigsHolder, "border", true, true);
							const elWrap = parentIsAccordion ? disParent : createElem({c : "w-details"});
							addClasses(elWrap, "w--br" + (dataBorder ? "1" : "0"));
							
							if(!parentIsAccordion){
								insertBefore(elWrap, elInDisGroup[0]);
								for(const elChild of elInDisGroup){
									appends(elWrap, elChild);
								}
							}
						}
					}
				}		
			};
			return {
				initParent
			}
		})();
		const Formatting_tab = (()=>{
			/* DATA KONFIGURASI
				data-box
			*/
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const getByClass = p_elemGetByClass;
			const getChildrenByTag = p_elemGetChildrenByTag;
			
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const createFragment = p_elemCreateFragment;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const stringToNumber = p_stringToNumber;
			
			const fwOneRow = FW_OneRow;
			const fwFonts = FW_Fonts;
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_tabBox = fwDefaultValues.tab_box;
			const validBoxs = g_arrayItemBoxs;
			
			const hasProcessed  = [];
			const initParent = (elInitedParent)=>{
				const els = getByClass(elInitedParent, "w-tab");
				if(els){
					for(const el of els){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							const elItems = getChildrenByTag(el, "div");
							if(elItems){
								const items = [];
								for(const elItem of elItems){
									const attrTitle = (elItem.getAttribute("title") || "").trim();
									if(attrTitle){
										const disItem = {
											title : attrTitle,
											elContent : elItem
										};
										const elTab = createElem({t : "button", c : "w-nostyle", n : attrTitle});
										disItem.elTab = elTab;
										elTab.onclick = (e)=>{
											e.preventDefault();
											onclickTab(disItem, items);
										};
										addClasses(elItem, "w-tab-item");
										items.push(disItem);
									}
								}
								
								if(items.length === 0){
									// tidak ada item dengan atribut data-tab='tab'
									continue;
								}
								
															
								// create tabs
								const elTabsFrag = createFragment();
								for(const item of items){
									appends(elTabsFrag, item.elTab);
								}
								
								const elOneRow = fwOneRow.create({
									wrapClasses : "w-tab-opener"
								},  elTabsFrag);
								
								// create w2
								const elw2 = createElem({c : "w-tab-w2"});
								appends(elw2, elOneRow);
								for(const item of items){
									appends(elw2, item.elContent);
								}
								appends(el, elw2);
								addClasses(el, "w-tab-w1");
								
								
								
								
								// add active class to initial content and tab
								let initialOpenedTab;
								const dataInitialOpened = getDataAttrTypeString(el, "initial-opened", true, null);
								if(dataInitialOpened){
									for(const item of items){
										if(item.title === dataInitialOpened){
											initialOpenedTab = item;
											break;
										}
									}
									
									if(!initialOpenedTab){
										// disini, mungkin user meng-set dengan index bukan title
										const dataInitialOpenedToNum = stringToNumber(dataInitialOpened, 1);
										if(dataInitialOpenedToNum <= items.length && dataInitialOpenedToNum > 0){
											// 1: karena basis adalah 1
											initialOpenedTab = items[dataInitialOpenedToNum - 1];
										}
									}
								}
								
								
								if(!initialOpenedTab){
									initialOpenedTab = items[0];
								}
								
							
								
								// set active to initial opened
								addClasses(initialOpenedTab.elTab, "w--active");
								addClasses(initialOpenedTab.elContent, "w--active");
								initialOpenedTab.isActive = true;
								
								// init onerows
								fwFonts.onReady("all", (state)=>{
									fwOneRow.init(elOneRow);
								});
								
								
								// add configurasi
								const dataBox = getDataAttrTypeOptions(el, "box", true, fwDefaultValues_tabBox, validBoxs);
								addClasses(el, "w--box" + (validBoxs.indexOf(dataBox)));
							}
						}
					}
				}
			};
			const onclickTab = (item, items)=>{
				let activeTab;
				for(const i of items){
					if(i.isActive){
						activeTab = i;
						break;
					}
				}
				
				if(activeTab === item){
					return;
				}
				

				removeClasses(activeTab.elTab, "w--active");
				removeClasses(activeTab.elContent, "w--active");
				activeTab.isActive = false;
				
				addClasses(item.elTab, "w--active");
				addClasses(item.elContent, "w--active");
				item.isActive = true;
			};
			return {
				initParent
			}
		})();
		const Formatting_indent = (()=>{
			/*	KONFIGURASI:
				data-border-type								none, solid, dashed								dashed
			*/
			const getByClass = p_elemGetByClass;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_indentBorderType = fwDefaultValues.indent_border_type;
			const hasProcessed = [];
			const validBorders = ["none", "solid", "dashed"]; // samakan urutan opsi dengan fwDefaultValues
			const initParent = (elParent)=>{
				const els = getByClass(elParent, "w-indent");
				if(els){
					for(const el of els){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							const dataBorderType = getDataAttrTypeOptions(el, "border-type", true, fwDefaultValues_indentBorderType, validBorders);
							const classes = [];
							classes.push("w--br" + (validBorders.indexOf(dataBorderType)));
							el.className += (el.className ? " " : "") + classes.join(" ");
						}
					}
				}
			};
			return {
				initParent
			}
		})();		
		const Formatting_qAndA = (()=>{
			/* KONFIGURASI: 
					data-box
			*/
			const getByClass = p_elemGetByClass;
			const hasClass = p_elemHasClass;
			const insertBefore = p_elemInsertBefore;
			const appends = p_elemAppends;
			const createElem = p_elemCreateElem;
			const getChildren = p_elemGetChildren;
			const getChildrenByClass = p_elemGetChildrenByClass;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const addClasses = p_elemAddClasses;
			
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_qnaBox = fwDefaultValues.qna_box;
			const validBoxs = g_arrayItemBoxs;
			
			const hasProcessed = [];
			const s_w_qna = "w-qna";
			const initParent = (elInitedParent)=>{
				/* proses ini hanya menambahkan wrap pada masing-masing (q&a)
				wrap tidak diintruksikan pada penulisan short kode untuk kemudahan user*/
				const els = getByClass(elInitedParent, s_w_qna);
				if(els){
					for(const el of els){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							
							const elQ = getChildrenByClass(el, "w-question");
							if(elQ){
								for(const q of elQ){
									const elParent = createElem({c : s_w_qna + "-q-w"});
									insertBefore(elParent, q);
									appends(elParent, q);
									addClasses(q, s_w_qna + "-q");
								}
							}
							
							const elA = getChildrenByClass(el, "w-answer");
							if(elA){
								for(const a of elA){
									const elParent = createElem({c : s_w_qna + "-a-w"});
									insertBefore(elParent, a);
									appends(elParent, a);
									addClasses(a, s_w_qna + "-a");
								}
							}
							
							// create w2
							const w2 = createElem({c : s_w_qna + "-w2"});
							
							// move childs to w2
							const childs = getChildren(el); // item harus diconvert ke array (tidak bisa menggunakan .children)
							if(childs){
								for(const c of childs){
									appends(w2, c);
								}
							}
							
							// harus dilakukan diakhir karena jika sebelum loop, akan error kaena akan ikt diambil sebagai childs pada loop
							appends(el, w2);
							
							
							const dataBox = getDataAttrTypeOptions(el, "box", true, fwDefaultValues_qnaBox, validBoxs);
							addClasses(el, "w--box" + (validBoxs.indexOf(dataBox)));
						}
					}
				}
			};
			return {
				initParent
			}
		})();
		const Formatting_youtubeVideo = (()=>{
			/* KONFIGURASI
					data-box		:	
			*/
			
			const getByTag = p_elemGetByTag;
			const hasClass = p_elemHasClass;
			const appends = p_elemAppends;
			const createElem = p_elemCreateElem;
			const insertBefore = p_elemInsertBefore;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_youtubeVideoBox = fwDefaultValues.youtube_video_box;
			
			const validBoxs = g_arrayItemBoxs;
			const s_w_youtube_video_ = "w-youtube-video-";
			const w1Class = s_w_youtube_video_ + "w1";
			const w2Class = s_w_youtube_video_ + "w2";
			const w3Class = s_w_youtube_video_ + "w3";
			const youtubeSrc = "https://www.youtube.com/embed/";
			
			const hasProcessed = [];
			const initParent = (elInitedParent)=>{
				// elemens tanpa wrapper
				const elsIframe = getByTag(elInitedParent, "IFRAME");
				if(elsIframe){
					for(const el of elsIframe){
						if(hasProcessed.indexOf(el) === -1){
							hasProcessed.push(el);
							
							const src = el.src;
							if(src){
								if(src.indexOf(youtubeSrc) !== -1){
									const dataFormatting = getDataAttrTypeBoolean(el, "formatting", true, true);
									if(dataFormatting){
										const dataBox = getDataAttrTypeOptions(el, "box", true, fwDefaultValues_youtubeVideoBox, validBoxs);
										const elW1 = createElem({c : w1Class + (" w--box" + (validBoxs.indexOf(dataBox)))});
										const elW2 = createElem({c : w2Class});
										const elW3 = createElem({c : w3Class});
										appends(elW2, elW3);
										appends(elW1, elW2);
										insertBefore(elW1, el);
										appends(elW3, el);
									}
								}
							}
						}
					}
				}
			};
			return {
				initParent
			}
		})();		
		const Formatting_table = (()=>{
			/* KONFIGURASI:
				data-skin									skin										default values
				data-shadow								boolean								default values
				data-align																				default values
				data-header-align																	default values
				data-caption-side						top, bottom							default values
				data-caption-align						left, center, right, justify			default values
				data-caption-weight					normal, medium, bold			default values
			*/
			const getByTag = p_elemGetByTag;
			const addClasses = p_elemAddClasses;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const insertBefore = p_elemInsertBefore;
			const stringToBoolean = p_stringToBoolean;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			const hasClass = p_elemHasClass;
			
			const fwSkin = FW_Skin;
			const fwSkinCreateClassString = fwSkin.createClassString;
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_tableSkin = fwDefaultValues.table_skin;
			const fwDefaultValues_tableShadow = fwDefaultValues.table_shadow;
			const fwDefaultValues_tableAlign = fwDefaultValues.table_align;
			const fwDefaultValues_tableCaptionSide = fwDefaultValues.table_caption_side;
			const fwDefaultValues_tableCaptionWeight = fwDefaultValues.table_caption_weight;
			const fwDefaultValues_tableCaptionAlign = fwDefaultValues.table_caption_align;
			const fwDefaultValues_tableHeaderAlign = fwDefaultValues.table_header_align;
			
			const arrayAlignsHasJustify = g_arrayAlignsHasJustify;
			const validSkins = fwSkin.allItems;
			const validCaptionSides = ["top", "bottom"];
			const validCaptionAligns = arrayAlignsHasJustify;
			const validCaptionWeights = ["normal", "medium", "bold"];
			const hasProcessed = [];
			const initParent = (elInitedParent)=>{
				// Menambahkan wrap pembungkus table dan class kongurasi
				const els = (()=>{
					// elTable terbasuk juga element gambar dengan caption
					// adapun element table sebagai wrap gambar memiliki class {{tr-caption-container}}
					const realTable = [];
					const elTable = getByTag(elInitedParent, "table");
					if(elTable){
						for(const el of elTable){
							if(hasProcessed.indexOf(el) === -1){
								hasProcessed.push(el);
								
								const doFormatting = getDataAttrTypeBoolean(el, "formatting", true, true);
								if(doFormatting){
									if(!hasClass(el, "tr-caption-container")){
										realTable.push(el);
									}
								}
							}
						}
					}
					
					return realTable.length === 0 ? null : realTable;
				})();
				
				
				if(els){
					for(const el of els){
						const elw1 =  createElem({c : "w-tb-w1"});
						const elw2 =  createElem({c : "w-tb-w2"});
						const elw3 =  createElem({c : "w-tb-w3"});
						appends(elw2, elw3);
						appends(elw1, elw2);
						insertBefore(elw1, el);
						appends(elw3, el);
						
						
						// skin
						const skin = getDataAttrTypeOptions(el, "skin", true, fwDefaultValues_tableSkin, validSkins);
						const hasSkin = skin !== null;
						if(hasSkin){
							addClasses(elw1, fwSkinCreateClassString(skin));
						}
						
						// shadow
						const shadow = getDataAttrTypeBoolean(el, "shadow", true, fwDefaultValues_tableShadow);
						addClasses(elw1, "w--box" + (shadow ? "2" : "0"));
						
						// caption side
						const captionSide = getDataAttrTypeOptions(el, "caption-side", true, fwDefaultValues_tableCaptionSide, validCaptionSides);
						addClasses(elw1, "w--cs" + (validCaptionSides.indexOf(captionSide) + 1));
						
						// caption align
						const captionAlign = getDataAttrTypeOptions(el, "caption-align", true, fwDefaultValues_tableCaptionAlign, validCaptionAligns);
						addClasses(elw1, "w--ca" + (validCaptionAligns.indexOf(captionAlign) + 1));
						
						// caption weight
						const captionWeight = getDataAttrTypeOptions(el, "caption-weight", true, fwDefaultValues_tableCaptionWeight, validCaptionWeights);
						addClasses(elw1, "w--cw" + (validCaptionWeights.indexOf(captionWeight) + 1));
						
						// align
						const align = getDataAttrTypeOptions(el, "align", true, fwDefaultValues_tableAlign, validCaptionAligns);
						addClasses(elw1, "w--tca" + (validCaptionAligns.indexOf(align) + 1));
						
						// th align
						const thAlign = getDataAttrTypeOptions(el, "header-align", true, fwDefaultValues_tableHeaderAlign, validCaptionAligns);
						addClasses(elw1, "w--tha" + (validCaptionAligns.indexOf(thAlign) + 1));
						
						
						// insert div sebagai background pada th
						// karena jika menggunakan pseudo tidak bisa mengakses css variable
						if(hasSkin){
							const elTh = getByTag(el, "th");
							if(elTh){
								for(const el of elTh){
									el.innerHTML = "<span class='w-th-bg'></span><span class='w-th-ct'>" + el.innerHTML + "</span>";
								}
							}
						}
					}
				}
			};
			return {
				initParent
			}
		})();		
		const Formatting_img = (()=>{
			/* DENGAN FORMAT HTML
					1.	tag gambar biasa <img/>, atau 
					2.	dengan wrap <div class='w-img'><img/></div>
					3.	dengan wrap dan link <div class='w-img'><a><img/></a></div>
						catatan!! class wrap tidak boleh diletakkan pada element link
					
				KONFIGURASI
				Konfigurasi didefinisikan pada kontainer (jika ada) atau img
					data-border
						
			*/
			const getByTag = p_elemGetByTag;
			const getByClass = p_elemGetByClass;
			const createElem = p_elemCreateElem;
			const insertBefore = p_elemInsertBefore;
			const removeClasses = p_elemRemoveClasses;
			const appends = p_elemAppends;
			const elemRemove = p_elemRemove;
			const hasClass = p_elemHasClass;
			const getDataAttrTypeOptions = p_getDataAttrTypeOptions;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const getDataAttrTypeBoolean = p_getDataAttrTypeBoolean;
			
			const addClasses = p_elemAddClasses;
			const resizeImg = p_resizeImg;
			
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_imageBox = fwDefaultValues.image_box;
			const validBoxs = g_arrayItemBoxs;
			const validAligns = g_arrayAlignsNoJustify;
			
			const s_selector = "w-img-t1";
			
			const hasProcessed = [];
			const initParent = (elInitedParent)=>{
				/*FORMAT HTML GAMBAR BLOGGER:
				
				Dengan caption:
				<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;">
					<tbody>
						<tr>
							<td style="text-align: center;">
								<a href="#" style="display: block; margin-left: auto; margin-right: auto; padding: 1em 0px; text-align: center;">
									<img alt="" border="0" data-original-height="620" data-original-width="1345" src="#" width="320" />
								</a>
							</td>
						</tr>
						<tr>
							<td class="tr-caption" style="text-align: center;">Image caption</td>
						</tr>
					</tbody>
				</table>*/
				
				const items = [/*{
					elContainer 				:	figure, tr-caption, separator, link, null
					elLink						:
					elImg						:
					caption						:	mungkin tersedia jika elContainer adalah type {{figure}} atau {{tr-caption}}
				}*/];
				
				{	// STEP1: AMBIL IMAGE DEFAULT BLOGGER DENGAN CAPTION
					const elContainers = getByClass(elInitedParent, "tr-caption-container");
					if(elContainers){
						for(const elContainer of elContainers){
							const elImg = getByTag(elContainer, "img", 0);
							if(elImg){
								if(hasProcessed.indexOf(elImg) === -1){
									hasProcessed.push(elImg);
									const dataFormatting = getDataAttrTypeBoolean(elImg, "formatting", false, true);
									if(dataFormatting){
										const elParent =  elImg.parentNode;
										const elLink = elParent.tagName === "A" ? elParent : null;
										const elCaption = getByClass(elContainer, "tr-caption", 0);
										let caption;
										if(elCaption){
											caption = elCaption.innerHTML;
										}
										
										items.push({
											elContainer : elContainer,
											elImg : elImg,
											elLink : elLink,
											caption : caption || ""
										});
									}
								}
							}
						}
					}
				}
				{	// STEP2: AMBIL GENERAL IMG
					const parentIsFigure = (el)=>{
						return el.parentNode.tagName === "FIGURE";
					};
					const elImgs = getByTag(elInitedParent, "img");
					if(elImgs){
						for(const elImg of elImgs){	
							if(hasProcessed.indexOf(elImg) === -1){
								hasProcessed.push(elImg);
								const dataFormatting = getDataAttrTypeBoolean(elImg, "formatting", false, true);
								if(dataFormatting){
									const elParent =  elImg.parentNode;
									const elParentIsLink = elParent.tagName === "A";
									const elParentIsSeparator = hasClass(elParent, "separator");
									const elLink = elParentIsLink ? elParent : null;
									let elSeparator = null;
									if(elParentIsSeparator){
										elSeparator = elParent;
									}
									else{
										if(elParentIsLink){
											if(hasClass(elLink.parentNode, "separator")){
												elSeparator = elLink.parentNode;
											}
										}
									}
									
									let elFigure = null;
									if(elSeparator){
										if(parentIsFigure(elSeparator)){
											elFigure = elSeparator.parentNode;
										}
									}
									else{
										if(elLink){
											if(parentIsFigure(elLink)){
												elFigure = elLink.parentNode;
											}
										}
										else{
											if(parentIsFigure(elImg)){
												elFigure = elImg.parentNode;
											}
										}
									}
									
						
									
									let elContainer;
									if(elFigure){
										elContainer = elFigure;
									}
									else{
										if(elSeparator){
											elContainer = elSeparator;
										}
										else{
											if(elLink){
												elContainer = elLink;
											}
											else{
												elContainer = null;
											}
										}
									}
		
	
									let caption = null;
									if(elFigure){
										const elCaption = getByTag(elFigure, "figcaption", 0);
										if(elCaption){
											caption = elCaption.innerHTML;
										}
									}
									
									
									items.push({
										elContainer : elContainer,
										elLink : elLink,
										elImg : elImg,
										caption : caption || ""
									});
								}
							}
						}
					}
				}
				{	// SETP3: MELAI MENGUPDATE HTML
					for(const item of items){
						const {elImg, elContainer, elLink, caption} = item;
						const w1 = createElem({c : s_selector + "-w1 w--s0"}); // w--s0 adalah loading class
						const w2 = createElem({c : s_selector + "-w2"});
						const w3 = createElem({c : s_selector + "-w3"});
						appends(w2, w3);
						appends(w1, w2);
						
						const isFigure = elContainer && elContainer.tagName === "FIGURE";
						const isTRCaptionContainer = elContainer && hasClass(elContainer, "tr-caption-container");
						{	/*	TAMBAHKAN ATRIBUTE LOADING PADA TAHAP AWAL */
							elImg.setAttribute("loading", "lazy");
						}
						{	/* MENGAPPEND WRAPPER */
							if(!elContainer){
								insertBefore(w1, elImg);
							}
							else{
								insertBefore(w1, elContainer);
							}
						}
						{	/* MENGAPPEND CONTENT KE WRAPPER */
							if(isFigure){
								appends(w3, elContainer); // elContainer disini adalah element figure
							}
							else{
								const elNewFigure = createElem({t : "figure"});
								appends(w3, elNewFigure);
								
								/* MENGAPPEND KONTEN KE ELEMEN FIGURE */
								let elContent;
								if(elContainer){
									if(isTRCaptionContainer){
										// pada format html ini, harusnya tidak akan ada el separator
										if(elLink){
											elContent = elLink;
										}
										else{
											elContent = elImg;
										}
									}
									else{
										elContent = elContainer;
									}
								}
								else{
									elContent = elImg;
								}
								
								appends(elNewFigure, elContent);
								
								
								/* MEMBUAT ELEMEN CAPTION */
								if(caption){
									const elCaption = createElem({t : "figcaption", n : caption});
									appends(elNewFigure, elCaption);
								}
							}
						}
						{	/* MENAMBAHKAN WRAPPER IMAGE HOLDER */
							const newParent = elImg.parentNode; // update
							if(newParent.tagName !== "FIGURE"){
								addClasses(newParent, s_selector + "-holder");
							}
							else{
								const newHolder = createElem({c : s_selector + "-holder"});
								insertBefore(newHolder, elImg);
								appends(newHolder, elImg);
							}
						}	
						{	/* MENAMBAHKAN KONFIGURASI 
								karena keragaman struktur html img, konfigurasi dibuat untuk hanya mendukung penambahan pada elemen img saja */
							const dataBox = getDataAttrTypeOptions(elImg, "box", false, fwDefaultValues_imageBox, validBoxs);
							const dataAlign = getDataAttrTypeOptions(elImg, "align", false, "center", validAligns);
							addClasses(w2, "w--box" + (validBoxs.indexOf(dataBox)));
							addClasses(w1, "w--a" + (validAligns.indexOf(dataAlign) + 1));
						}
						{	/* MENDEFINISIKAN LEBAR DAN TINGGI DIRECT PARENT
							pada keadaan awal dimana img belum terload sama sekali, meskipun semua atribute dimensi terdefinisi, kenyataannya pada chrome dimensi masih nol.
							hal ini akan menyebabkan placeholder w2 akan kecil sekali karena w2 sendiri yang memiliki display inline-block.
							oleh karena itu, dibutuhkan pendefinisian dimensi pada {{imgHolder}}. 
							
							pendefinisian dimensi akan menggunakan metode seperti responsive youtube video yaitu berbasis padding.*/
							const imgHolder = elImg.parentNode; // parent terbaru sudah pasti img holder
							
							const attrWidth = parseInt(elImg.getAttribute("width") || "0");
							const attrHeight = parseInt(elImg.getAttribute("height") || "0");
							const attrDataOriginalWidth = parseInt(elImg.getAttribute("data-original-width") || "0");
							const attrDataOriginalHeight = parseInt(elImg.getAttribute("data-original-height") || "0");
							
							let usedHeightPercentage = null;
							
							// pertama-tama, ambil berdasarkan data original jika tersedia
							if(attrDataOriginalWidth && attrDataOriginalHeight){
								usedHeightPercentage = (attrDataOriginalHeight / attrDataOriginalWidth) * 100;
							}
							
							// next, ketika dimensi tersedia, ambil berdasarkan dimensi
							if(attrWidth && attrHeight){
								usedHeightPercentage = (attrHeight / attrWidth) * 100;
							}
							
							// dengan prosedur penentuan diatas, ketika hanya width yang terdefinisi, rasio akan menggunakan data-original jika tersedia
							// height sendiri tidak terdefinisi ketika user menggunakan toolbar blogger dalam menentukan ukuran gambar, hanya atribute width yang tersedia
							

							const usedWidth = attrWidth || attrDataOriginalWidth;
							const haveDimensions = usedHeightPercentage !== null;
							if(haveDimensions){
								imgHolder.style.width = usedWidth + "px";
								imgHolder.style.setProperty("padding-bottom", usedHeightPercentage + "%", "important");
								addClasses(imgHolder, "w--d1"); // has dimension, akan dicek pada proses fixSize selanjutnya
							}
						}
						{	/* MENGHAPUS DEFAULT BLOGGER IMG DENGAN CAPTION */ 
							if(isTRCaptionContainer){
								elemRemove(elContainer);
							}
						}	
					}
				}
			};
			const fixSize = (elInitedParent)=>{
				const elWraps = getByClass(elInitedParent, s_selector + "-w1");
				if(elWraps){
					const devicePixelRatio = window.devicePixelRatio || 1;
					for(const elWrap of elWraps){
						const elImg =  getByTag(elWrap, "img", 0);
						if(elImg){
							const imageHolder = elImg.parentNode;
							const haveDimensions = hasClass(imageHolder, "w--d1");
							if(haveDimensions){
								const width = Math.round(imageHolder.clientWidth * devicePixelRatio);
								const height = Math.round(imageHolder.clientHeight * devicePixelRatio);
								const loadSrc = resizeImg(elImg.src || " ", "w"+ width + "-h"+ height + "-c", true);
								elImg.src = loadSrc;
							}
							// else 
							// ketika dimensi tidak terdefinisi
							// ini artinya dimensi tidak dapat ditentukan.
							// ini bisa disebabkan karena tidak adanya attr dimensi atau attr data-original
							// pada kasus ini, proses resize dan manipulasi diskip
						}
					}
				}
			};
			const assignEvents = (elInitedParent)=>{
				const elWraps = getByClass(elInitedParent, s_selector + "-w1");
				if(elWraps){
					for(const elWrap of elWraps){
						const elImg = getByTag(elWrap, "img", 0);
						if(elImg){
							if(!elImg.complete){
								elImg.onload = (e)=>{
									_onload(elWrap, elImg);
								};
								elImg.onerror = (e)=>{
									 _onerror(elWrap, elImg);
								};
							}
							else{
								_onload(elWrap, elImg);
							}
						}
					}
				}
			};
			const _onload = (elWrap, elImg)=>{
				removeClasses(elWrap, "w--s0");
			};
			const _onerror = (elWrap, elImg)=>{
				addClasses(elWrap, "w--error");
			};
			
			return {
				initParent,
				fixSize,
				assignEvents
			}
		})();
	
		
		const Formatting_postBody_init = (elPostBody)=>{
			const fws = [
				Formatting_manualToC,
			];
			for(const fw of fws){
				fw.initParent(elPostBody);
			}
		};
		const Formatting_general_init = (elParent)=>{
			const fws = [
				Formatting_mark,
				Formatting_heading,
				Formatting_img,
				Formatting_list,
				Formatting_table,
				Formatting_message, 
				Formatting_button,
				Formatting_indent,
				Formatting_details,
				Formatting_tab,
				Formatting_qAndA,
				Formatting_youtubeVideo,
			];
			for(const fw of fws){
				fw.initParent(elParent);
			}
			
			// pemanggilan harus dilakukan terakhir karena agar dimensi wrap img sudah final
			Formatting_img.fixSize(elParent);
			Formatting_img.assignEvents(elParent);
		};
	

		
		const FW_Widgets = (()=>{
			/*	DOKUMENTASI
				class
					w--d0 	:	ditambahkan pada keadaan initial (display none)
					w--v0	:	ditambahkan ketika widget akan di init (visibility 0). pada keadaan ini, w--d0 dihapus
			*/
			const getByClass = p_elemGetByClass;
			const getByTag = p_elemGetByTag;
			const getDataAttrTypeString = p_getDataAttrTypeString;
			const elemRemove = p_elemRemove;
			const configsElemToObj = p_configsElemToObj;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const hasClass = p_elemHasClass;
			
			const wijsWidgets = g_wijs.widgets;
			const seOnAllWidgetsInited = SE_OnAllWidgetsInited;
			const pushData = (()=>{
				const widgetsObj = wijsWidgets.items;				
				const main = (obj)=>{
					const oldInit = obj.init;
					const newInit = (widgetObj)=>{
						const {el, index, errorMsg} = widgetObj;
						const nextWidgetObj = widgetsObj[index + 1];
						
						const callback = !nextWidgetObj ? ()=>{
							// semua widget selesai terinit
							removeClasses(el, "w--v0"); 
							runOnFinish();
						} : ()=>{
							// masih ada widget selanjutnya yang belum terinit
							removeClasses(el, "w--v0");
							nextWidgetObj.data.init(nextWidgetObj);
						};
						
						if(errorMsg){
							runCallbackAndRemoveWidget(widgetObj, callback, errorMsg);
						}
						else{
							addClasses(el, "w--v0"); // baca dokumentasi diatas tentang class ini
							removeClasses(el, "w--d0");
							oldInit(widgetObj, callback);
						}
					};
					obj.init = newInit;
					obj.count = 0;
					wijsWidgets.data[obj.name] = obj;
				};
				return main;
			})();
			const scan = ()=>{
				const elWidgets = getByClass(null, "w-widget");
				if(elWidgets){
					const len = elWidgets.length;
					let pushedWidgetCounter = 0;
					for(let i=0;i<len;i++){
						const elWidget = elWidgets[i];
						const elSection = getByTag(elWidget, "section", 0);
						const widgetObj = {};
						const dataName = getDataAttrTypeString(elWidget, "name", true, "unnamed");						
						const widgetData = wijsWidgets.data[dataName];
						if(widgetData){
							let errorMsg = "";
							const maxCount = widgetData.maxCount;
							if(maxCount){
								if(widgetData.count === maxCount){
									errorMsg = "max widget is " + maxCount;
								}
							}
							
							widgetObj.el = elWidget;
							widgetObj.elWidget = elWidget;
							widgetObj.elSection = elSection;
							widgetObj.data = widgetData;
							widgetObj.index = pushedWidgetCounter; pushedWidgetCounter += 1;
							widgetObj.errorMsg = errorMsg || null;
							
							
							wijsWidgets.items.push(widgetObj);
							widgetData.count += 1;
							
							if(errorMsg){
								addClasses(elWidget, "w--error");
							}
						}
					}
				}
			};
			const init = ()=>{
				scan();
				
				// start init
				const wijsWidgets = g_wijsWidgets;
				const widgets = wijsWidgets.items;
				if(widgets.length !== 0){
					const widgetObj = widgets[0];
					const {data} = widgetObj;
					data.init(widgetObj);
				}			
			};
			const runOnFinish = ()=>{
				// fungsi yang akan dipanggil ketika semua widget telah diinit
				
				{	// menghapus element widget dengan {{errorMsg}} dan {{removeOnFinish}}
					const widgetsObj = wijsWidgets.items;
					for(const widgetObj of widgetsObj){
						if(widgetObj.data){
							// menghapus element widget {{removeOnFinish}}
							const data = widgetObj.data;
							const elWidget = widgetObj.elWidget;
							let doRemove = false;
							if(data.removeOnFinish){
								doRemove = true;
							}
							
							// menghapus element widget dengan errorMsg
							if(widgetObj.errorMsg){
								doRemove = true;
							}
							
							if(doRemove){
								if(elWidget.parentNode){
									elemRemove(elWidget);
								}
							}
						}
					}
				}
				
				// sampai disini, hanya widget dengan class w-widget yang telah selesai dihapus
				// untuk widget yang {{notavailable}} dan {{nocontents}}, widget tidak memiliki class "w--widget", melainkan hanya widget saja
				// widget tersebut akan dihapus pada proses {{SE_OnFinish}}
				// widget tersebut tidak bisa dihapus disini karena masih banyak proses yang belum selesai setelah proses init widge
				seOnAllWidgetsInited.execute();
			};
			const runCallbackAndRemoveWidget = (()=>{
				const elemRemove = p_elemRemove;
				const errorWidgets = g_wijsWidgets.error;
				return (widgetObj, callback = null, errorMsg = null)=>{
					widgetObj.errorMsg = errorMsg;
					if(widgetObj.el.parentNode){
						elemRemove(widgetObj.el);
					}
					errorWidgets.push(widgetObj);
					if(callback){
						callback();
					}
				};
			})();
			return {
				pushData,
				init,
				runCallbackAndRemoveWidget
			};
		})();
		
		
		// Blog header tidak diproses melalui widget. 
		// pembuatan  {{Widget_BlogHeader}} agar dapat melakukan push override configs
		const Widget_BlogHeader = (()=>{
			/*	PROSES
				1.	Mendefinisikan gambar jika mode adalah gambar
					proses ini akan mereplace elemen dengan id "w-jstarget-bloglogo" dengan konten
					konten bisa berupa gambar atau text (jika error)
				2.	remove prefix sub expanded
				3.	Remove prefix sub collapsible
				3.	Remove disabled items
				5. Memproses Nav
					*	Proses akan menghapus konten header jika over
						penghapusan hanya dilakukan pada {{w-navexpanded}} dan {{w-navbutton}}
						
					proses akan memberitahukan apakah terdapat item yang dihapus atau tidak */
					
			const getById = p_elemGetById;
			const getByClass = p_elemGetByClass;
			const getByTag = p_elemGetByTag;
			const getChildren = p_elemGetChildren;
			const configsCreateData = p_configsCreateData;
			const configsElemToObj = p_configsElemToObj;
			const typeIsNumber = p_typeIsNumber;
			const addClasses = p_elemAddClasses;
			const removeClasses = p_elemRemoveClasses;
			const hasClass = p_elemHasClass;
			const resizeImg = p_resizeImg;
			const createElem = p_elemCreateElem;
			const appends = p_elemAppends;
			const elemReplace = p_elemReplace;
			const elemRemove = p_elemRemove;
			const getBoundingClientRect = p_elemGetBoundingClientRect;
			const createFragment = p_elemCreateFragment;
			const insertFirstChild = p_elemInsertFirstChild;
			const stringTrim = p_stringTrim;
			
			const fwOverrideConfigs = FW_OverrideConfigs;
			
			const elBody = g_body;
			const blogTitle = g_wijsBlog.title;
			
			const wijsEvents = g_wijsEvents;
			// wijsEvents.changeViewMode
			
			const wijsConfigs = g_wijsConfigs;
			// wijsConfigs.view_mode.enable
			//wijsConfigsViewMode.enable
			
			const wijsIcons = g_wijsIcons;
			const icon_arrow_right = wijsIcons.arrow_right;
			const icon_align_right = wijsIcons.align_right;
			
			const fwFonts = FW_Fonts;
			const fwButton = FW_Button;
			const fwSkin = FW_Skin;
			const fwSkin_allItems = fwSkin.allItems;
			const fwDefaultValues = FW_DefaultValues;
			const fwDefaultValues_buttonRounded = fwDefaultValues.button_rounded;
			const fwDefaultValues_buttonBoxType = fwDefaultValues.button_box_type;
			const fwDefaultValues_buttonSkin = fwDefaultValues.button_skin;
			
			const configsDataForBlogName = configsCreateData([
				["name", 1, ""],
				["logo_light", 1, ""],
				["logo_dark", 1, ""],
				["logo_dimensions", 1, "150x50"],
				["logo_display_height", 3, 50, [30, 50]],
				["display", 1, "name"],
			]);
			const configsDataForNavButton = configsCreateData([
				["enable", 2, true],
				["title", 1, ""],
				["url", 1, "#"],
				["rounded", 2, fwDefaultValues_buttonRounded],
				["box_type", 1, fwDefaultValues_buttonBoxType, ["solid", "outline"]],
				["skin", 1, fwDefaultValues_buttonSkin, fwSkin_allItems]
			]);
			const configsDataForNavExpanded = configsCreateData([
				["enable", 2, true],
			]);
			const configsDataForNavCollapsible = configsCreateData([
				["enable", 2, true],
			]);
			const configsDataForNavSearch = configsCreateData([
				["enable", 2, true],
			]);
			fwOverrideConfigs.pushData("blog_name", configsDataForBlogName, null, null);
			fwOverrideConfigs.pushData("nav_button", configsDataForNavButton, null, null);
			fwOverrideConfigs.pushData("nav_expanded", configsDataForNavExpanded, null, null);
			fwOverrideConfigs.pushData("nav_collapsible", configsDataForNavExpanded, null, null);
			fwOverrideConfigs.pushData("nav_search", configsDataForNavSearch, null, null);
			const init = ()=>{
				const s_targetId_headerSection = "w-header-section"; 			// id wrap yang menampung konten header (flex)
				const s_targetId_headerWrap = "w-header-w1";
				const s_targetId_bloglogo = "w-jstarget-bloglogo";
				const s_targetId_blogName = "w-blogname";
				const s_targetId_navExpanded = "w-navexpanded";
				const s_targetId_navButton = "w-navbutton";
				const s_targetId_navSearch = "w-navsearch";
				const s_targetId_navCollapsible = "w-navcollapsible";
			
				const elHeaderSection = getById(s_targetId_headerSection);
				const elHeaderWrap = getById(s_targetId_headerWrap);
				let elNavExpanded = getById(s_targetId_navExpanded);
				let elCollapsible = getById(s_targetId_navCollapsible);
				let elNavSearch = getById(s_targetId_navSearch);
				let elNavButton = getById(s_targetId_navButton);
				
				
				// {{license_integrations}}
				if(g_alphabetByLicenseKey[0] !== "w"){
					return;
				}
				
				{ /*STEP0: Tambahkan class w--v0 dan hapus class w--d0 (disesuaikan berdasarkan prosedur init widget) */
				  if(elHeaderWrap){
					  addClasses(elHeaderWrap, "w--v0");
					  removeClasses(elHeaderWrap, "w--d0");
				  }
				}
				{ /* STEP1: PROCESS BLOGNAME
					// Pada XML, blogname baru dibuat seadanya dengan memprint text konten 
					// hal ini untuk kepentingan SEO awal.
					// pada js ini, konten final akan didefinisikan*/
					const elBlogName = getById("w-blogname");
					const elLink = elBlogName ? getByTag(elBlogName, "a", 0) : null;
					if(elBlogName && elLink){
						const configs = configsElemToObj("blog-name", configsDataForBlogName, null);
						fwOverrideConfigs.apply(configs, "blog_name");
						
						const {
							name,
							logo_light,
							logo_dark,
							logo_dimensions,
							logo_display_height,
							display,
						} = configs;
						
						let doDisplayLogo = false;
						if(display === "logo"){
							if(logo_light && logo_dark){
								doDisplayLogo = true;
							}
						}
						
						if(!doDisplayLogo){
							// ketika konten yang akan ditampilkan adalah name, html sudah selesai sepenuhnya pada XML
							// jadi tidak diperlukan manipulasi lagi
						}
						else{
							const defaultDimensionWidth = 150;
							const defaultDimensionHeight = 50;
							
							let dimensions = logo_dimensions.toLowerCase().trim().replace(/\s/g, "").split("x");
							if(dimensions.length !== 2){
								dimensions = [defaultDimensionWidth + "", defaultDimensionHeight + ""];
							}
							let dimensionWidth = parseInt(dimensions[0]);
							if(!typeIsNumber(dimensionWidth)){
								dimensionWidth = defaultDimensionWidth;
							}
							let dimensionHeight = parseInt(dimensions[1]);
							if(!typeIsNumber(dimensionHeight)){
								dimensionHeight = defaultDimensionHeight;
							}

							const displayHeight = logo_display_height;
							const usedName = name ? name : blogTitle;
										
							// mengetahui percentase lebar berdasarkan tinggi 
							const widthPercentageOfHeight = dimensionWidth / dimensionHeight; // persentase lebar berdasarkan tinggi diambil dari data original
							const usedDisplayHeight = displayHeight;
							const usedDisplayWidth = usedDisplayHeight * widthPercentageOfHeight;
							
							// sampai disini sudah diketahui lebar gambar
							// lebar ini akan digunakan untuk mengatur style blog_name
							// ini dilakukan agar tidak perlu menunggu onload emng untuk memastikan dimensi siap
							elLink.style.width = Math.round(usedDisplayWidth) + "px"; // sama dengan sistem resize yang meggunakan Math.round
							
							
							
							// mulai meload gambar
							let hasForcedToText = false; // keadaan dimana salah satu gambar error. ini digunakan untuk mereset content ke text
							let lightLogo;
							let darkLogo;
							const changeContentToText = ()=>{
								if(!hasForcedToText){
									addClasses(elLink, "w--text");
									removeClasses(elLink, "w--img");
									removeClasses(elLink, "w--invisible");
									elLink.innerHTML = usedName;
									hasForcedToText = true;
								}
							};
							const doImgErrorCallback = ()=>{
								changeContentToText();
							};
							const doImgOnLoadCallback = ()=>{
								addClasses(elLink, "w--img");
								removeClasses(elLink, "w--text");
								removeClasses(elLink, "w--invisible");
							};
							
							const isLightMode = hasClass(elBody, "w--lightmode");
							const usedSrc = isLightMode ? logo_light : logo_dark;
							const srcs = [logo_light, logo_dark];
							const elImgs = [];
							for(const src of srcs){
								const newSrc = resizeImg(src, [usedDisplayWidth, usedDisplayHeight]);
								const elImg = createElem({t:"img", c : "w--" + (src === logo_light ? "light" : "dark")});
								elImg.height = usedDisplayHeight;
								elImg.width = usedDisplayWidth;
								elImg.alt = blogTitle;
								elImg.title = blogTitle;
								elImg.src = newSrc;
								elImg.onload = doImgOnLoadCallback;
								elImg.onerror = doImgErrorCallback;
								elImgs.push(elImg);
							}			

							lightLogo = elImgs[0];
							darkLogo = elImgs[1];
							
							
							elLink.innerHTML = "";
							removeClasses(elLink, "w--text");
							addClasses(elLink, "w--img");
							addClasses(elLink, "w--invisible");
							appends(elLink, isLightMode ? lightLogo : darkLogo);
							
							// push wijsEvents.changeViewMode
							const wijsConfigsViewMode = wijsConfigs.view_mode; // harus dideklarasikan pada proses init karena jika diluar belum terdefinisi
							if(wijsConfigsViewMode.enable){
								wijsEvents.changeViewMode.add((currentMode)=>{
									if(!hasForcedToText){
										if(currentMode === "dark"){
											if(lightLogo.parentNode){
												elemReplace(lightLogo, darkLogo);
											}
										}
										else{
											if(darkLogo.parentNode){
												elemReplace(darkLogo, lightLogo);
											}
										}
									}
								});		
							}						
						}
					}
				}
				{ /* STEP2: INIT NAV BUTTON*/
					if(!elNavButton){
						// ini atinya widget tidak dibuat sama sekali pada xml,
						// bisa karena tidak diaktifkan atau tag konditional tidak terpenuhi,
						// do nothing
					}
					else{
						// ketika elNavButton tersedia, elConfigs harusnya pasti tersedia
						// jadi, langsung get by id
						const configs = configsElemToObj("nav-button", configsDataForNavButton, null);
						fwOverrideConfigs.apply(configs, "nav_button");
						
						const {
							enable,
							title,
							url,
							rounded,
							box_type,
							skin
						} = configs;
						
						if(!enable || !title){
							addClasses(elNavButton, "w--disabled");
						}
						else{
							const elButton = fwButton.create({
								title : title,
								url : url,
								rounded : rounded,
								box_type : box_type,
								skin : skin,
								size : "small",
								tag : "a",
							});
							appends(elNavButton, elButton);
						}
					}
				}
				{ /* STEP3: INIT NAV EXPANDED
					Tidak peduli configs enable true atau false, item akan selalu dibuat via XML
					disini, ketika enable adalah false, akan ditambahkan class {{w--disabled}} yang nantinya akan dihapus pada proses selanjutnya*/
					if(!elNavExpanded){
						// elemen tidak dibuat sama sekali karena widget tidak diaktifkan atau tag kondisi tidak terpenuhi
						// do nothing
					}
					else{
						// terdapat elemen, seharusnya elemen configs pasti tersedia
						const configs = configsElemToObj("nav-expanded", configsDataForNavExpanded, null);
						fwOverrideConfigs.apply(configs, "nav_expanded");
						
						const {enable} = configs;
						if(!enable){
							addClasses(elNavExpanded, "w--disabled");
						}
						else{
							/* WIDGET DIAKTIFKAN. REMOVE PREFIX AT EXPANDED ITEMS 
							*	Sub didefinisikan dengan format [parent]_sub
							*	untuk kebutuhan ini, title link hanya mengizinkan text (tanpa html) */
							let hasItems = false;
							const elItems = getByTag(elNavExpanded, "a");
							if(elItems){
								hasItems = true;
							}
							
							if(!hasItems){
								addClasses(elNavExpanded, "w--nocontents");
							}
							else{
								const elSubs = getByClass(elNavExpanded, "w-sub-w1");
								if(elSubs){
									for(const elSub of elSubs){
										const elA = getByTag(elSub, "a");
										if(elA){
											for(const el of elA){
												const elTitle = getByClass(el, "w-title", 0);
												if(elTitle){
													const inner = elTitle.textContent;
													const _index = inner.indexOf("_");
													if(_index !== -1){
														const newInner = inner.substring(_index + 1).trim();
														elTitle.innerHTML = newInner;
														el.title = newInner;
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
				{ /* STEP4. INIT NAV COLLAPSED
					Tidak peduli configs enable true atau false, item akan selalu dibuat via XML
					disini, ketika enable adalah false, akan ditambahkan class {{w--disabled}} yang nantinya akan dihapus pada proses selanjutnya*/
					if(!elCollapsible){
						// element tidak tersedia, ini artinya widget visibility tidak diaktifkan atau tag konditional tidak terpenuhi
						// do nothing
					}
					else{
						// element tersedia. harusnya element configs pasti tersedia
						const configs = configsElemToObj("nav-collapsible", configsDataForNavCollapsible, null);
						fwOverrideConfigs.apply(configs, "nav_collapsible");
						const {enable} = configs;
						
						if(!enable){
							addClasses(elCollapsible, "w--disabled");
						}
						else{
							/* WIDGET DIAKTIFKAN. REMOVE PREFIX AT COLLAPSIBLE ITEMS 
							*	Sub didefinisikan dengan format [parent]_sub
							*	untuk kebutuhan ini, title link hanya mengizinkan text (tanpa html) */
							let hasItems = false;
							const elCollapsibleContent = getById("w-navcollapsible-content");
							if(elCollapsibleContent){
								const elItems = getByTag(elCollapsibleContent, "a");
								if(elItems){
									hasItems = true;
								}
							}
							
							if(!hasItems){
								addClasses(elCollapsible, "w--nocontents");
							}
							else{
								const elSubs = getByClass(elCollapsible, "w-sub-w1");
								if(elSubs){
									for(const elSub of elSubs){
										const elA = getByTag(elSub, "a");
										if(elA){
											for(const el of elA){
												const elTitle = getByClass(el, "w-title", 0);
												if(elTitle){
													const inner = elTitle.textContent;
													const _index = inner.indexOf("_");
													if(_index !== -1){
														const newInner = inner.substring(_index + 1).trim();
														elTitle.innerHTML = newInner;
														el.title = newInner;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				
		
					if(elCollapsible){
						const elSubs = getByClass(elCollapsible, "w-sub-w1");
						if(elSubs){
							for(const elSub of elSubs){
								const elA = getByTag(elSub, "a");
								if(elA){
									for(const el of elA){
										const elTitle = getByClass(el, "w-title", 0);
										if(elTitle){
											const inner = elTitle.textContent;
											const _index = inner.indexOf("_");
											if(_index !== -1){
												const newInner = inner.substring(_index + 1).trim();
												elTitle.innerHTML = newInner;
												el.title = newInner;
											}
										}
									}
								}
							}
						}
					}
				}
				{ /* STEP5: INIT NAV SEARCH
					Tidak peduli configs enable true atau false, item akan selalu dibuat via XML
					disini, ketika enable adalah false, akan ditambahkan class {{w--disabled}} yang nantinya akan dihapus pada proses selanjutnya*/
					if(elNavSearch){
						const configs = configsElemToObj("nav-search", configsDataForNavSearch, null);
						fwOverrideConfigs.apply(configs, "nav_search");
						
						const {enable} = configs;
						if(!enable){
							addClasses(elNavSearch, "w--disabled");
						}
					}
				}
				{ /* STEP5. REMOVE DISABLED ITEMS DAN NOCONTENTS
					*	karena sistem widget linklist bogger, ini hanya berlaku untuk widget yang tidak valid
						untuk widget yang tidak diaktifkan, wrapper widget tidak akan digenerate sama sekali oleh blogger
					*	Untuk sekarang, ini hanya mungkin berlaku untuK:
						1. {{navButton}} yang tidak valid (title tidak valid) elemen ini memiliki class {{w--disabled}}
						2. {{navCollapsible}} dengan configs enable == false*/
						
					if(elHeaderSection){
						const childs = getChildren(elHeaderSection);
						if(childs){
							for(const c of childs){
								// disabled
								// 1. {{navButton}} yang tidak valid (title tidak valid) atau enable = false
								// 2. {{navcollapsible}} dengan configs enable == false
								// 3. {{navexpanded}} dengan configs enable == false
								
								// nocontents
								// 1. {{navcollapsible}} dan {{navexpanded}} yang tidak memiliki items
								
								
								const willRemoved = hasClass(c, "w--disabled") || hasClass(c, "w--nocontents");
								if(willRemoved){
									elemRemove(c);
									
									// elemen yang dihapus perlu direset kenull karena terdapat proses selanjutnya yang mengecek ketersediaan element
									if(c === elCollapsible){
										elCollapsible = null;
									}
									else if(c === elNavExpanded){
										elNavExpanded = null;
									}
									else if(c === elNavSearch){
										elNavSearch = null;
									}
									else if(c === elNavButton){
										elNavButton = null;
									}
								}
							}
						}
					}
				}
				{ /* STEP6. FIX NAV
					// PADA PEMBUATAN LOGO DIATAS, PROSES DILAKUKAN SECARA SEKETIKA
					// DISINI, DALAM MELAKUKAN FIX NAV, PROSES AKAN MENUNGGU FONT DAN ONLOAD IMG LOGO*/			
					fwFonts.onReady("poppins_500_normal", (f500State)=>{
						const process = ()=>{
							const elWrap = elHeaderSection;
							if(elWrap){
								// FIX POSITION
								const wrapToRight = getBoundingClientRect(elWrap).right;
								const removedItems = [];
								const doRemove = ()=>{
									const elChildren = getChildren(elWrap);
									if(elChildren){
										const elLast = elChildren[elChildren.length - 1];
										const lastToRight = getBoundingClientRect(elLast).right;
										if(lastToRight < wrapToRight){
											const elTargetToRemove = elChildren[1];
											if(elTargetToRemove && (hasClass(elTargetToRemove, s_targetId_navExpanded) || hasClass(elTargetToRemove, s_targetId_navButton))){
												elemRemove(elTargetToRemove);
												removedItems.push(elTargetToRemove);
												doRemove();
											}
										}
									}
								};
								doRemove();
								
								// SAMPAI DISINI, {{removedItems}} TIDAK KOSONG JIKA TERDAPAT ITEM YANG DIHAPUS
								const hasRemoved = removedItems.length !== 0;
								if(hasRemoved){
									const s_w_content_ = "w-content-";
									if(!elCollapsible){
										// ini artinya tidak terdapat satupun item pada collapsible sehingga elemen belum dibuat sama sekali
										// disini, elemen akan dibuat serupa dengan elemen yang dibuat pada XML
										// elemen ini juga akan merubah lagi lebar konten, oleh karena itu, fix perlu dilakukan lagi
										elCollapsible = createElem({
											c : s_targetId_navCollapsible,
											i : s_targetId_navCollapsible,
											cs : [
												{
													i : s_targetId_navCollapsible + "-toggle",
													c : "w-toggle",
													cs : [
														{
															t : "a",
															h : "#",
															n : icon_align_right
														}
													]
												},
												{
													c : s_w_content_ + "w1",
													i : s_targetId_navCollapsible + "-content",
													cs : [
														{
															c : s_w_content_ + "w2",
															cs : [
																{
																	c : "w-header",
																	cs : [
																		{
																			t : "button",
																			c : "w-nostyle w-closer",
																			i : s_targetId_navCollapsible + "-closer",
																			n : icon_arrow_right
																		}
																	]
																},
																{
																	c : s_w_content_ + "w3",
																	cs : [
																		{
																			t : "nav",
																			c : s_w_content_ + "w4"
																		}
																	]
																}
															]
														}
													]
												}
											]
										});
										
										appends(elWrap, elCollapsible);
										
										// LAKUKAN PROCESS LAGI
										doRemove();
									}
									
									
									// SAMPAI DISINI, ITEMS PADA {[removedItems}} mungkin sudah bertambah
									// APPEND ITEM YANG DIHAPUS KEDALAM COLLAPSIBLE
									const elCollapsibleItemsWrap = getByClass(elCollapsible, s_w_content_ + "w4", 0);
									if(elCollapsibleItemsWrap){
										for(const removedGroup of removedItems){
											if(removedGroup.id === s_targetId_navExpanded){
												const elNavExpanded = getByTag(removedGroup, "nav", 0);
												if(elNavExpanded){
													const childs = getChildren(elNavExpanded);
													if(childs){
														const frag = createFragment();
														for(const c of childs){
															appends(frag, c);
														}
														insertFirstChild(elCollapsibleItemsWrap, frag);
													}
												}
											}
											else if(removedGroup.id === s_targetId_navButton){
												const elButton = getByClass(removedGroup, "w-button", 0);
												if(elButton){
													const elItem = createElem({
														t : "span",
														c : "w-item w-item-type-button",
														cs : elButton
													});
													addClasses(elButton, "w--w1");
													insertFirstChild(elCollapsibleItemsWrap, elItem);
												}
											}
										}
									}
								}
								
								
								// TAMPILKAN
								const elChildren = getChildren(elWrap);
								if(elChildren){
									for(const c of elChildren){
										removeClasses(c, "w--invisible");
									}
								}
								
								// AKTIFKAN SHADOW
								removeClasses(elHeaderWrap, "w--nosd");
								
								// TAMPILKAN HEADER
								removeClasses(elHeaderWrap, "w--v0");
								
								
								// UNTUK KEPENTINGAN PERFORMA, BEBERAPA PROSES BERIKUT DILAKUKAN SETELAH ELEMEN DITAMPILKAN
																
								{	// tambahkan event onclick pada toogle sub at collapsible
									const s_w__expanded = "w--expanded";
									if(elCollapsible){
										const elWithSub = getByClass(elCollapsible, "w--hassub");
										if(elWithSub){
											for(const elItem of elWithSub){
												const elToggleSub = getByClass(elItem, "w-togglesub", 0);
												const elSub =  getByClass(elItem, "w-sub-w1", 0);
												if(elToggleSub && elSub){
													(()=>{
														let ontransition = false;
														elToggleSub.onclick = (e)=>{
															e.preventDefault();
															if(!ontransition){
																ontransition = true;
																const hiddenHeight = elToggleSub.offsetHeight;
																const expandedHeight = hiddenHeight + elSub.offsetHeight;
																
																const isExpanded = hasClass(elItem, s_w__expanded);
																if(!isExpanded){
																	elItem.style.height = hiddenHeight + "px";
																	addClasses(elItem, s_w__expanded);
																	
																	setTimeout(()=>{
																		elItem.style.height = expandedHeight + "px";
																		setTimeout(()=>{
																			elItem.style.height = "";
																			ontransition = false;
																		}, 420);
																	}, 20);
																}
																else{
																	elItem.style.height = expandedHeight + "px";
																	setTimeout(()=>{
																		elItem.style.height = hiddenHeight + "px";
																		setTimeout(()=>{
																			removeClasses(elItem, s_w__expanded);
																			elItem.style.height = "";
																			ontransition = false;
																		}, 420);
																	}, 20);
																}
															}
														};
													})();
												}
											}
										}
									}
								}
								{	// prevent default for sub toggle
									if(elNavExpanded){
										const fn = (e)=>{
											e.preventDefault();
										};
										const elToggles = getByClass(elNavExpanded, "w-togglesub");
										if(elToggles){
											for(const el of elToggles){
												el.onclick = fn;
											}
										}
									}
								}					
								{	// onlick collapsible toggle
									const s_w_navcollapsible_ = "w-navcollapsible-";
									const s_w__showed = "w--showed";
									const elToggle = getById(s_w_navcollapsible_ + "toggle");
									if(elToggle){
										const elToggleLink = getByTag(elToggle, "a", 0);
										if(elToggleLink){
											const elContent = getById(s_w_navcollapsible_ + "content");
											if(elContent){
												elToggleLink.onclick = (e)=>{
													e.preventDefault();
													addClasses(elContent, s_w__showed);
												};
											}
											
											// ONCLICK CLOSER
											const elCloser = getById(s_w_navcollapsible_ + "closer");
											if(elCloser){
												elCloser.onclick = (e)=>{
													e.preventDefault();
													removeClasses(elContent, s_w__showed);
												};
											}
											
											// ONCLICK OUTSIDE
											elContent.onclick = (e)=>{
												if(e.target === elContent){
													removeClasses(elContent, s_w__showed);
												}
											};
										}
									}
								}
								{	// onclick search
									if(elNavSearch){
										const s_w__expanded = "w--expanded";
										
										const elInput = getByTag(elNavSearch, "input", 0);
										const elToggle = getByClass(elNavSearch, "w-toggle", 0);
										const elCloser = getByClass(elNavSearch, "w-closer", 0);
										const elSubmit = getByClass(elNavSearch, "w-submit", 0);
										const elForm = getByTag(elNavSearch, "form", 0);
										if(elToggle && elInput && elCloser && elSubmit && elForm){
											elToggle.onclick = (e)=>{
												e.preventDefault();
												addClasses(elNavSearch, s_w__expanded);
												setTimeout(()=>{
													elInput.focus();
												}, 1000);
											};
											elCloser.onclick = (e)=>{
												e.preventDefault();
												removeClasses(elNavSearch, s_w__expanded);
												elInput.blur();
											};
											elSubmit.onclick = (e)=>{
												e.preventDefault();
												const inputValue = elInput.value;
												const trimmedValue = stringTrim(inputValue);
												if(trimmedValue){
													if(inputValue !== trimmedValue){
														elInput.value = trimmedValue;
													}
													
													elForm.submit();
												}
											};
										}
									}
								}
							
							}
						};
						process();
					});
				}					
			};
			return {
				init
			};
		})();
		
		// PUSH WIDGET DATA
		(()=>{
			const fwWidgets = FW_Widgets;
			const fwWidgets_pushData = fwWidgets.pushData;
			const fwWidgets_runCallbackAndRemoveWidget = fwWidgets.runCallbackAndRemoveWidget;
			
			const configsCreateData = p_configsCreateData;
			const configsElemToObj = p_configsElemToObj;
			const configsCloneProperties = p_configsCloneProperties;
			
			const cannotLoadJSONCallback = (widgetObj)=>{
				fwWidgets_runCallbackAndRemoveWidget(widgetObj, null, "can't load json");
			};
			const joinPostWidgetClassWithStyle = (widgetObj, style)=>{
				const {elWidget, data} = widgetObj;
				if(data){
					elWidget.className = elWidget.className.replace("w_" + data.name, "w_" + data.name + "_" + style);
				}
			};
			{	// #featured_post
				const getByClass = p_elemGetByClass;
				const prefix = "w-23";
				
				fwWidgets_pushData({
					name : "featured_post",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const elFeaturedPost = getByClass(widgetObj.el, prefix + "a", 0); 
						if(elFeaturedPost){
							FC_23.init({
								el : elFeaturedPost,
								callback : callback
							});
						}
						else{
							// tidak terdapat element
							// ini artinya terdapat data yang tidak valid sehingga HTML element tidak digerenare via xml
							if(callback){
								callback();
							}
						}
					}
				});
			}
			{	// #footer_about
				const getByClass = p_elemGetByClass;
				const getByTag = p_elemGetByTag;
				const addClasses = p_elemAddClasses;
				const hasClass = p_elemHasClass;
				const prefix = "w-101";
				fwWidgets_pushData({
					name : "footer_about",
					maxCount : 1,
					init : (widgetObj, callback)=>{					
						const elWidgetContent = getByClass(widgetObj.el, prefix + "a", 0);
						if(!elWidgetContent){
							fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "element not found");
						}
						else{
							const hasLink = hasClass(elWidgetContent, "w--l1");
							if(hasLink){
								// replace link inner (remove link_ prefix)
								const elLinksWrap = getByClass(elWidgetContent, prefix + "e", 0);
								if(elLinksWrap){
									const elLinks = getByTag(elLinksWrap, "a");
									if(elLinks){
										for(const elLink of elLinks){
											const title = elLink.innerHTML.trim().replace(/^link_/, "");
											elLink.innerHTML = title;
											elLink.setAttribute("title", title);
										}
									}
								}
							}
							
							// init
							// ketika tidak terdapat link, kolom kontent dibuat sanya 1 dengan class w--c1
							// sebaliknya, cek lebar kontent untuk menentukan kolom
							const elContent = getByClass(elWidgetContent, prefix + "c", 0);
							if(elContent){
								let oneCol = false;
								if(!hasLink){
									oneCol = true;
								}
								else{
									const contentWidth = elContent.clientWidth;
									if(contentWidth < 500){
										oneCol = true;
									}
								}
								addClasses(elWidgetContent, oneCol ? "w--c1" : "w--c2");
							}
							
							// do next here................................
							
							
							if(callback){
								callback();
							}
						}
					}
				});
			}
			{	// #custom_posts				
				const getByTag = p_elemGetByTag;
				const stringIsFalsy = p_stringIsFalsy;
				const runEval = p_runEval;
				const getDataAttrTypeString = p_getDataAttrTypeString;
				const appends = p_elemAppends;
				const createElem = p_elemCreateElem;
				
				const fwPostsWidget = FW_PostsWidget;
				const fwPostsWidget_styles = fwPostsWidget.styles;
				const fwFonts = FW_Fonts;
				
				fwWidgets_pushData({
					name : "custom_posts",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const {el, elSection} = widgetObj;
						const elWidget = el;
						
						// get items
						// AMBIL ITEMS
						const configsString = configsElemToObj(elWidget.id, null);
						const items = (()=>{
							if(configsString){
								const itemsString = configsString.items;
								if(itemsString){
									const itemsObj = runEval(itemsString);
									if(itemsObj){
										if(itemsObj.length && itemsObj.length !== 0){
											// generate final items
											const finalItems = [];
											for(const item of itemsObj){
												const {title, url, image, top_info_title, top_info_url, bottom_info_title, bottom_info_url} = item;
												if(title && url && image){
													if(!stringIsFalsy(title) && !stringIsFalsy(url) && !stringIsFalsy(image)){
														const obj = {};
														obj.title = title;
														obj.url = url;
														obj.img = image;
														
														// demi kesederhanaan input user
														// topInfo dan bottomInfo hanya dibuat mendukung 1 item saja
														// dengan begini, user cukup melengkapi data yang dapat diisi dengan value string (bukan array object sebagaimana format property topInfo dan bottomInfo sesungguhnya)
														if(top_info_title){
															if(!stringIsFalsy(top_info_title)){
																obj.topInfo = [{
																	title : top_info_title,
																	url : !stringIsFalsy(top_info_url) ? top_info_url : null
																}];
															}
														}
														if(bottom_info_title){
															if(!stringIsFalsy(bottom_info_title)){
																obj.bottomInfo = [{
																	title : bottom_info_title,
																	url : !stringIsFalsy(bottom_info_url) ? bottom_info_url : null
																}];
															}
														}
														
														finalItems.push(obj);
													}
												}
											}
											
											return finalItems.length > 0 ? finalItems : null;
										}
									}
								}
							}
							
							return null;
						})();
						
						if(!items){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no items");
						}
						
						// define styles
						const style = (()=>{
							const fromAttr = getDataAttrTypeString(el, "style", true, null);
							return fwPostsWidget_styles.indexOf(fromAttr) !== -1 ? fromAttr : fwPostsWidget_styles[0];
						})();
						
						joinPostWidgetClassWithStyle(widgetObj, style);
						
						// Untuk widget ini, karena penentuan configs data berdasarkan style, configsData dan configs akan didefinisikan pada proses init
						const configsData = (()=>{
							const obj = configsCreateData([]);
							configsCloneProperties(obj, fwPostsWidget.items[style].configsData, null, null, null);
							
							/* ALL CONFIGS DATA
								big_thumbnail
									["img_ratio", 1, "16:9"],
									["top_info_label", 1, null],
									["bottom_info_label", 1, null],
									
									["item_box", 1, "none", ["none", "border", "shadow"]],
									["first_row_item_top_border", 2, true],
									["last_row_item_bottom_border", 2, true],
									["slider", 2, false],
									["footer_align", 1, "center", ["left", "center", "right", "justify"]],
									["more_link_url", 1, ""],
									["more_link_title", 1, "Selengkapnya"]
									
									
								small_thumbnail
									["max_title_rows", 3, 2, [1, 3]],
									["img_shape", 1, "square", ["square", "circle"]],
									["top_info_label", 1, ""],
									["bottom_info_label", 1, ""]
								
									["item_box", 1, "none", ["none", "border", "shadow"]],
									["first_row_item_top_border", 2, true],
									["last_row_item_bottom_border", 2, true],
									["slider", 2, false],
									["footer_align", 1, "center", ["left", "center", "right", "justify"]],
									["more_link_url", 1, ""],
									["more_link_title", 1, "Selengkapnya"]
									
							*/
							return obj;
						})();
						const configs = configsElemToObj(el.id, configsData);
						
						// MULAI MEMBUAT ELEMENT
						// disini, perlu ditambahkan terlebih dahulu element wrap untuk kebutuhan grid
						// element wrap harus dalam keadaan terappend
						const elResponsiver = createElem({c : "w-responsiver"});
						const elWrapper = createElem({});
						appends(elResponsiver, elWrapper);
						appends(elSection, elResponsiver);
						
						const instance = new fwPostsWidget.items[style].create(configs, items, elWrapper);
						appends(elWrapper, instance.el);
			
						fwFonts.onReady("all", (fontState)=>{
							instance.init(callback);
						});
					}
				});
			}
			{	// #popular_posts
				const getDataAttrTypeString = p_getDataAttrTypeString;
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const getById = p_elemGetById;
				const getByClass = p_elemGetByClass;
				const getByTag = p_elemGetByTag;
				const elemExtrackJSData = p_elemExtrackJSData;
			
				const fwPostsWidget = FW_PostsWidget;
				const fwPostsWidget_styles = fwPostsWidget.styles;
				const fwFonts = FW_Fonts;
				
				fwWidgets_pushData({
					name : "popular_posts",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const {el, elSection} = widgetObj;
						const elWidget = el;
						
						// define style
						const styleFromAttr = getDataAttrTypeString(elWidget, "style", true, null);
						const style = fwPostsWidget_styles.indexOf(styleFromAttr) !== -1 ? styleFromAttr : fwPostsWidget_styles[0];
						
						joinPostWidgetClassWithStyle(widgetObj, style);
						
						const configsData = (()=>{
							const obj = configsCreateData([
								["range", 1, "all_time", ["all_time", "last_year", "last_month", "last_week"]],
								["max_results", 3, 6, [1, 10]],
								["top_info", 1, "none", ["none", "label", "date", "author"]],
								["bottom_info", 1, "none", ["none", "label", "date", "author"]],
								["labels_max_results", 3, 1, [1, null]],
								["date_format", 1, null]
							]);
							configsCloneProperties(obj, fwPostsWidget.items[style].configsData, null, ["more_link_url"], null);
							return obj;
						})();
						
						const configs = configsElemToObj(elWidget.id, configsData);
						
						const range = configs.range;
						const dataPostsWrapperId = "w-data-popular-posts-" + (range.replace(/_/g, "-"));
						const elDataPostsWrapper = getById(dataPostsWrapperId);			
						
						if(!elDataPostsWrapper){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "data posts not found");
						}
						
						const dataPosts = elemExtrackJSData(elDataPostsWrapper, false);
						if(!dataPosts){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "invalid data posts");
						}
						
						if(dataPosts.length === 0){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "empty data posts");
						}
						
						// DEFINE  FINAL POSTS
						if(dataPosts.length > configs.max_results){
							dataPosts.length = configs.max_results;
						}
						
						
						// Langkah tambahan pengolahan posts sesuai style
						fwPostsWidget.assignSecondaryContent(configs, dataPosts);
					
						
						
						// MULAI MEMBUAT ELEMENT
						// disini, perlu ditambahkan terlebih dahulu element wrap untuk kebutuhan grid
						// element wrap harus dalam keadaan terappend
						const elResponsiver = createElem({c : "w-responsiver"});
						const elWrapper = createElem({});
						appends(elResponsiver, elWrapper);
						appends(elSection, elResponsiver);
						
						const instance = new fwPostsWidget.items[style].create(configs, dataPosts, elWrapper);
						appends(elWrapper, instance.el);
						
						fwFonts.onReady("all", (fontState)=>{
							instance.init(callback);
						});
					}
				});
			}
			{	// #recent_posts
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const getDataAttrTypeString = p_getDataAttrTypeString;
				const getById = p_elemGetById;
				const getByClass = p_elemGetByClass;
				const getByTag = p_elemGetByTag;
				const elemExtrackJSData = p_elemExtrackJSData;
				const urlSetParam = p_urlSetParam;
				const urlAppendMobileParam = p_urlAppendMobileParam;
				const elemRemove = p_elemRemove;
				
				
				const wijsConfigs = g_wijsConfigs;
				const wijsBlog = g_wijsBlog;
				const canonicalHomepageUrl = wijsBlog.canonicalHomepageUrl;
				
				const fwPostsWidget = FW_PostsWidget;
				const fwPostsWidget_styles = fwPostsWidget.styles;
				const fwFonts = FW_Fonts;				
				const fwJSONFeed = FW_JSONFeed;
				const fwDefaultValues = FW_DefaultValues;
				
				fwWidgets_pushData({
					name : "recent_posts",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const {el, elSection} = widgetObj;
						const elWidget = el;
						
						
						// KETAUHI STYLE
						const style = (()=>{
							const fromAttr = getDataAttrTypeString(elWidget, "style", true, null);
							return fwPostsWidget_styles.indexOf(fromAttr) !== -1 ? fromAttr : fwPostsWidget_styles[0];
						})();
						joinPostWidgetClassWithStyle(widgetObj, style);
						
						const configsData = (()=>{
							const obj = configsCreateData([
								["max_results", 3, 6, [1, 10]],
								["top_info", 1, "none", ["none", "label", "date", "author"]],
								["bottom_info", 1, "none", ["none", "label", "date", "author"]],
								["labels_max_results", 3, 1, [1, null]],
								["date_format", 1, null],
								["enable_more_link", 2, true],
								["more_link_title", 1, fwDefaultValues.more_link_title]
							]);
							configsCloneProperties(obj, fwPostsWidget.items[style].configsData, null, null, null);
							return obj;
						})();
						const configs = configsElemToObj(elWidget.id, configsData);
						const {
							max_results,
							enable_more_link,
							more_link_title
						} = configs;
						const loadJSONObj = {
							content : "posts",		
							contentType : "summary",	
							label : null,
							query : null,
							startIndex : 1,
							maxResults : configs.max_results + 1 // untuk mengetahui apakah tersedia morelink url atau tidak
						};
						fwJSONFeed.load((json)=>{
							const dataPosts = fwJSONFeed.JSONToPostsArray(json); // null or more then one
							if(!dataPosts){
								fwWidgets_runCallbackAndRemoveWidget(widgetObj, null, "no posts");
							}
							else{
								if(dataPosts.length > max_results){
									// SESUAIKAN DENGAN ORIGINAL MAX_RESULTS
									dataPosts.length = max_results;
									
									// DEFINE MORE LINK URL
									if(enable_more_link){
										let url = urlSetParam(canonicalHomepageUrl + "search", "page", "1");
										url = urlSetParam(url, "max-results", wijsConfigs.posts_per_page);
										url = urlAppendMobileParam(url);
										configs.more_link_url = url;
										configs.more_link_title = more_link_title;
									}
								}
								
								// Langkah tambahan pengolahan posts sesuai style
								fwPostsWidget.assignSecondaryContent(configs, dataPosts);
								
								
								
								// MULAI MEMBUAT ELEMENT
								// disini, perlu ditambahkan terlebih dahulu element wrap untuk kebutuhan grid
								// element wrap harus dalam keadaan terappend
								const elResponsiver = createElem({c : "w-responsiver"});
								const elWrapper = createElem({});
								appends(elResponsiver, elWrapper);
								appends(elSection, elResponsiver);
						
								const instance = new fwPostsWidget.items[style].create(configs, dataPosts, elWrapper);
								appends(elWrapper, instance.el);
								
								fwFonts.onReady("all", (fontState)=>{
									instance.init();
								});
							}
						}, loadJSONObj, ()=>{
							cannotLoadJSONCallback(widgetObj);
						});
			
						if(callback){
							callback();
						}
					}
				});
			}
			{	// #posts_by_label
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const getDataAttrTypeString = p_getDataAttrTypeString;
				const getById = p_elemGetById;
				const getByClass = p_elemGetByClass;
				const elemExtrackJSData = p_elemExtrackJSData;
				const urlSetParam = p_urlSetParam;
				const urlAppendMobileParam = p_urlAppendMobileParam;
				const elemRemove = p_elemRemove;
				
				const wijsConfigs = g_wijsConfigs;
				const wijsBlog = g_wijsBlog;
				const canonicalHomepageUrl = wijsBlog.canonicalHomepageUrl;
				
				const fwPostsWidget = FW_PostsWidget;
				const fwPostsWidget_styles = fwPostsWidget.styles;
				
				const fwFonts = FW_Fonts;				
				const fwJSONFeed = FW_JSONFeed;
				const fwLabels = FW_Labels;
				const fwDefaultValues = FW_DefaultValues;
				
				fwWidgets_pushData({
					name : "posts_by_label",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const {el, elSection} = widgetObj;
						const elWidget = el;

						// KETAUHI STYLE
						const style = (()=>{
							const fromAttr = getDataAttrTypeString(elWidget, "style", true, null);
							return fwPostsWidget_styles.indexOf(fromAttr) !== -1 ? fromAttr : fwPostsWidget_styles[0];
						})();
						joinPostWidgetClassWithStyle(widgetObj, style);
						
						const configsData = (()=>{
							const obj = configsCreateData([
								["label", 1, null],
								["max_results", 3, 6, [1, 10]],
								["top_info", 1, "none", ["none", "label", "date", "author"]],
								["bottom_info", 1, "none", ["none", "label", "date", "author"]],
								["labels_max_results", 3, 1, [1, null]],
								["date_format", 1, null],
								["enable_more_link", 2, true],
								["more_link_title", 1, fwDefaultValues.more_link_title]
							]);
							configsCloneProperties(obj, fwPostsWidget.items[style].configsData, null, null, null);
							return obj;
						})();
						
						const configs = configsElemToObj(elWidget.id, configsData, 0);
						const {
							label,
							max_results,
							enable_more_link,
							more_link_title
						} = configs;
						
						if(!label){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "label not defined");
						}
						
						const loadJSONObj = {
							content : "posts",		
							contentType : "summary",	
							label : label,
							query : null,
							startIndex : 1,
							maxResults : max_results + 1 // untuk mengetahui apakah tersedia morelink url atau tidak
						};
						fwJSONFeed.load((json)=>{
							const dataPosts = fwJSONFeed.JSONToPostsArray(json); // null or more then one
							if(!dataPosts){
								fwWidgets_runCallbackAndRemoveWidget(widgetObj, null, "no posts");
							}
							else{
								if(dataPosts.length > max_results){
									// SESUAIKAN DENGAN ORIGINAL MAX_RESULTS
									dataPosts.length = max_results;
									
									// DEFINE MORE LINK URL
									if(enable_more_link){
										configs.more_link_url = fwLabels.createURL(label);
										configs.more_link_title = more_link_title;
									}
								}
								
								// Langkah tambahan pengolahan posts sesuai style
								fwPostsWidget.assignSecondaryContent(configs, dataPosts);
								
								
								
								// MULAI MEMBUAT ELEMENT
								// disini, perlu ditambahkan terlebih dahulu element wrap untuk kebutuhan grid
								// element wrap harus dalam keadaan terappend
								const elResponsiver = createElem({c : "w-responsiver"});
								const elWrapper = createElem({});
								appends(elResponsiver, elWrapper);
								appends(elSection, elResponsiver);
						
								const instance = new fwPostsWidget.items[style].create(configs, dataPosts, elWrapper);
								appends(elWrapper, instance.el);
								
								fwFonts.onReady("all", (fontState)=>{
									instance.init();
								});
							}
						}, loadJSONObj, ()=>{
							cannotLoadJSONCallback(widgetObj);
						});
						
						if(callback){
							callback();
						}
					}
				});
			}
			{	// #related_posts
				if(g_wijsBlog.isSingleItem){
					fwWidgets_pushData({
						name : "related_posts",
						maxCount : 1,
						init : (widgetObj, callback)=>{
							const configsCreateData = p_configsCreateData;
							const configsCloneProperties = p_configsCloneProperties;
							const configsElemToObj = p_configsElemToObj;
							const createElem = p_elemCreateElem;
							const appends = p_elemAppends;
							const getDataAttrTypeString = p_getDataAttrTypeString;
							const getById = p_elemGetById;
							const getByClass = p_elemGetByClass;
							const elemRemove = p_elemRemove;
							const elemExtrackJSData = p_elemExtrackJSData;
							const urlSetParam = p_urlSetParam;
							const urlAppendMobileParam = p_urlAppendMobileParam;
							const runEval = p_runEval;
							const removeComment = p_removeComment;
							const arrayGetRandomIndexs = p_arrayGetRandomIndexs;
							const arrayGetRandomItems = p_arrayGetRandomItems;
							const arrayRemoveItem = p_arrayRemoveItem;
							
							const wijsConfigs = g_wijsConfigs;
							const wijsBlog = g_wijsBlog;
							const canonicalHomepageUrl = wijsBlog.canonicalHomepageUrl;
							const canonicalUrl = wijsBlog.canonicalUrl;
							
							const fwPostsWidget = FW_PostsWidget;
							const fwPostsWidget_styles = fwPostsWidget.styles;
							
							const fwFonts = FW_Fonts;
							const fwJSONFeed = FW_JSONFeed;
							
							const {el, elSection} = widgetObj;
							const elWidget = el;
							
							// KETAUHI STYLE
							const style = (()=>{
								const fromAttr = getDataAttrTypeString(elWidget, "style", true, null);
								return fwPostsWidget_styles.indexOf(fromAttr) !== -1 ? fromAttr : fwPostsWidget_styles[0];
							})();
							joinPostWidgetClassWithStyle(widgetObj, style);
							
							const configsData = (()=>{
								const obj = configsCreateData([
									["max_results", 3, 6, [1, 10]],
									["top_info", 1, "none", ["none", "label", "date", "author"]],
									["bottom_info", 1, "none", ["none", "label", "date", "author"]],
									["labels_max_results", 3, 1, [1, null]],
									["date_format", 1, null]
								]);
								configsCloneProperties(obj, fwPostsWidget.items[style].configsData, null, null, null);
								return obj;
							})();
							
							
							const elData = getById("w-data-related-posts");
							if(!elData){
								return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "data not found");
							}
							
							const labels = (()=>{
								const arrayString = removeComment(elData.innerHTML);
								return runEval(arrayString);
							})();
							
							if(!labels){
								return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "invalid data");
							}
							
							if(labels.length === 0){
								return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no labels");
							}
							
							const configs = configsElemToObj(elWidget.id, configsData, 0);
							const {
								max_results
							} = configs;
							
							// buat fungsi pendukung yang akan dipanggil setelah entry json terload semua
							const createFinalPosts = (dataPosts)=>{
								// REMOVE DUPLICATE
								const finalPosts = [];
								const usedUrls = [];
								for(const item of dataPosts){
									if(finalPosts.length <= max_results + 1){
										const url = item.url;
										if(usedUrls.indexOf(url) === -1){
											finalPosts.push(item);
											usedUrls.push(url);
										}
									}
									else{
										break;
									}
								}
								
								// REMOVE SELF
								for(const item of finalPosts){
									if(item.url === canonicalUrl){
										arrayRemoveItem(finalPosts, item);
									}
								}
								
								
								// PASTIKAN LENGTH SESUAI MAX_RESULTS (AGAR LEBIH YAKIN SAJA)
								if(finalPosts.length > max_results){
									finalPosts.length = max_results;
								}
								
								// SAMPAI DISINI, MASIH ADA KEMUNGKINAN POST KOSONG KARENA HANYA BERISI SELFT
								return finalPosts;
							};
							const createWidget = (dataPosts)=>{
								if(dataPosts && dataPosts.length !== 0){
									if(dataPosts.length > max_results){
										// SESUAIKAN DENGAN ORIGINAL MAX_RESULTS
										dataPosts.length = max_results;
									}
									// Langkah tambahan pengolahan posts sesuai style
									fwPostsWidget.assignSecondaryContent(configs, dataPosts);
									
									// MULAI MEMBUAT ELEMENT
									// disini, perlu ditambahkan terlebih dahulu element wrap untuk kebutuhan grid
									// element wrap harus dalam keadaan terappend
									const elResponsiver = createElem({c : "w-responsiver"});
									const elWrapper = createElem({});
									appends(elResponsiver, elWrapper);
									appends(elSection, elResponsiver);
							
									const instance = new fwPostsWidget.items[style].create(configs, dataPosts, elWrapper);
									appends(elWrapper, instance.el);
									
									fwFonts.onReady("all", (fontState)=>{
										instance.init();
									});
								}
								else{
									// callback di set null karena callback sendiri sudah dipanggil sebelum memuat json
									// jika tidak, callback akan terpanggil 2x
									// dengan begini, proses hanya akan menghapus widget dan mempush widget pada error widget
									fwWidgets_runCallbackAndRemoveWidget(widgetObj, null, "no items");
								}
							};
							
							// Mulai memuat JSON
							const usedLabels = arrayGetRandomItems(labels, 3);
							let entries = [];
							let loadedStates = [];
							for(const label of labels){
								loadedStates.push(null);
							}
							const labelsLength = usedLabels.length;
							let errorHasTrigger = false;
							for(let i=0;i<labelsLength;i++){
								const label = usedLabels[i];
								const loadJSONObj = {
									content : "posts",		
									contentType : "summary",	
									label : label,
									query : null,
									startIndex : 1,
									maxResults : max_results + 1 // ada kemungkinan post terdapat pada items yang diambil dengan json
								};
								fwJSONFeed.load((json)=>{
									const dataPosts = fwJSONFeed.JSONToPostsArray(json); // null or more then one
									if(dataPosts){
										entries = entries.concat(dataPosts);
									}
									
									
									loadedStates[i] = true;
									if(loadedStates.indexOf(null) === -1){
										const finalPosts = createFinalPosts(entries);
										createWidget(finalPosts);
									}
									// else
									// menunggu loading label lainnya
								}, loadJSONObj, ()=>{
									if(!errorHasTrigger){
										// ini artinya error terjadi pertama kali 
										cannotLoadJSONCallback(widgetObj);
										errorHasTrigger = true;
									}
									// else,
									// ini artinya error sudah ditindak lanjuti
								});
							}
							
							if(callback){
								callback();
							}	
						}
					});
				}
			}
			{	// #related_labels
				const runEval = p_runEval;
				const getById = p_elemGetById;
				const getByTag = p_elemGetByTag;
				const removeComment = p_removeComment;
				const elemReplace = p_elemReplace;
				const elemRemove = p_elemRemove;
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const addClasses = p_elemAddClasses;
				
				const fwLabels = FW_Labels;		
				const fwDefaultValues = FW_DefaultValues;
				const fwSkin = FW_Skin;
				const fwButton = FW_Button;
				
				fwWidgets_pushData({
					name : "related_labels",
					maxCount : null,
					init : (widgetObj, callback)=>{						
						const prefix = "w-96";
						const elWidget = widgetObj.el; 
						const elSection = getByTag(elWidget, "section", 0);
						
						const configsData = configsCreateData([
							["max_results", 3, 1000, [0, null]],
							["item_skin", 1, fwDefaultValues.button_skin, fwSkin.allItems],
							["item_box_type", 1, fwDefaultValues.button_box_type, ["solid", "outline"]],
							["item_rounded", 2, fwDefaultValues.button_rounded],
							["align", 1, "center", ["left", "center", "right"]]
						]);
						const elData = getById("w-data-related-labels");
						if(!elData){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "data not found");
						}
						else{
							const dataString = removeComment(elData.innerHTML);
							const data = runEval(dataString);
							if(!data){
								return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "can't extract data");
							}
							else{
								const configs = configsElemToObj(elWidget.id, configsData);
								const filteredLabels = fwLabels.getFiltered({
									labels					:	data,
									maxResults			:	configs.max_results,
									reverse					:	false,
									skipGroups			:	""
								});
								if(!filteredLabels){
									// tidak terdapat labels yang ditampilkan, hapus widget
									return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no items");
								}
								else{
									const el = createElem({
										c : (()=>{
											const classes = [prefix + "a"];
											classes.push("w--a" + (configsData.align.option.indexOf(configs.align) + 1));
											return classes.join(" ");
										})(),
										cs : [
											{
												c : prefix + "b w-responsiver",
												cs : [
													{
														c : prefix + "c",
														f : (elem)=>{
															const {item_skin, item_box_type, item_rounded} = configs;
															for(const label of filteredLabels){
																const elButton = fwButton.create({
																	title 						: 	label,
																	tag 						: 	"a",
																	url 						: 	fwLabels.createURL(label),
																	skin 						: 	item_skin,
																	box_type				:	item_box_type,
																	rounded				:	item_rounded,
																	full_width				:	false,
																	size						:	"normal"
																});
																addClasses(elButton, prefix + "i");
																elButton.setAttribute("title", label);
																appends(elem, elButton);
															}
														}
													}
												]
											}
										]
									});
									appends(elSection, el);
									
									if(callback){
										callback();
									}
								}
							}
						}
					}
				});
			}		
			{	// #blog_posts
				if(g_wijsBlog.isMultipleItems){
					fwWidgets_pushData({
						name : "blog_posts",
						maxCount : 1,
						init : (widgetObj, callback)=>{
							const configsCreateData = p_configsCreateData;
							const configsElemToObj = p_configsElemToObj;
							const createElem = p_elemCreateElem;
							const createFragment = p_elemCreateFragment;
							const appends = p_elemAppends;
							const addClasses = p_elemAddClasses;
							const removeClasses = p_elemRemoveClasses;
							const elemRemove = p_elemRemove;
							const elemReplace = p_elemReplace;
							const getByClass = p_elemGetByClass;
							const getById = p_elemGetById;
							const insertBefore = p_elemInsertBefore;					
							
							const wijsConfigs =g_wijsConfigs;
							const wijsBlog = g_wijsBlog;
							const {isHomepage} = wijsBlog;
							
							const fwDefaultValues = FW_DefaultValues;
							const fwBreadcrumbs = FW_Breadcrumbs;
							const fwBlogPagination = FW_BlogPagination;
							const fwImg = FW_Img;
							const fwOneRow = FW_OneRow;
							const fwDate = FW_Date;
							const fwLabels = FW_Labels;
							const fwLabelsIsByGroup = fwLabels.data.groups !== null;
							
							const prefix = "w-24";
							const s_jstarget = "w-jstarget-";
							const selectorJsTargetHeader = s_jstarget + "header";
							const selectorJsTargetImg = s_jstarget + "img";
							const selectorJsTargetLabels = s_jstarget + "labels";
							const selectorJsTargetFooter = s_jstarget + "footer";
			
							const configsData = configsCreateData([
								["show_author", 2, true],						// string splited by koma, all || page, post, posts
								["show_published", 2, true],					// string splited by koma, all || posts, post
								["show_updated", 2, true],						// string splited by koma, all || posts, post
								["show_location", 2, true],			
								["show_more_link", 2, true],
								["show_thumbnail", 2, true],
								["show_at_homepage", 2, true],
								["max_labels", 3, 3, [0, null]],				// label pada halaman posts
								["text_author", 1, Text_blogPosts_textAuthor],
								["text_published", 1, Text_blogPosts_textPublished],
								["text_updated", 1, Text_blogPosts_textUpdated],
								["text_location", 1, Text_blogPosts_textLocation],
								["more_link_title", 1, fwDefaultValues.more_link_title]
							]);
							const configs = configsElemToObj("blog-posts", configsData);
							widgetObj.configs = configs; // nanti diakses oleh pagination untuk show_at_homepage
							const {
								show_author,
								show_published,
								show_updated,
								show_location,
								show_more_link,
								show_thumbnail,
								show_at_homepage,
								max_labels,
								text_author,
								text_published,
								text_updated,
								text_location,
								more_link_title
							} = configs;
							const posts_per_page = wijsConfigs.posts_per_page;
							const {elWidget} = widgetObj;
							if(!show_at_homepage){
								if(isHomepage){
									return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "not available for homepage");
								}
							}
										

							{ // process breadcrumbs
								const elTarget = getById("w-jstarget-breadcrumbs");
								if(elTarget){
									const elBreadcrumbs = fwBreadcrumbs.create();
									if(elBreadcrumbs){
										elemReplace(elTarget, elBreadcrumbs);
										
										// init breadcrumbs jika single item atau homepage
										// jika sebaliknya, proses init akan dilakukan pada proses {{definePageInfo}} yang akan terpanggil pada pagination 
										// disini, halaman sudah pasti bukan single item
										if(isHomepage){
											fwBreadcrumbs.init();
										}
									}
								}
							}
							{ // init blog_posts
								const elWrap = getByClass(elWidget, prefix + "a", 0);
								if(!elWrap){
									return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "element not found");
								}
								
								// FOR HEADER
								const availableValueForState = ["true", "yes", "all", "posts"];
								const showAuthor = show_author;
								const showPublished = show_published;
								const showUpdated =  show_updated;
								const showLocation = show_location;
								
								// GET DATA ITEMS
								const datas = [];
								const elItems = getByClass(elWrap, prefix + "i");
								if(elItems){
									for(const elItem of elItems){
										const elData = getByClass(elItem, "w-data-blog-posts-item", 0);
										if(elData){
											const dataObj = configsElemToObj(elData);
											if(dataObj){
												datas.push(dataObj);
											}
										}
									}
									
									// validasi jumlah datas
									if(datas.length !== elItems.length){
										return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "invalid_data");
									}
								}
								else{
									return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no_items");
								}
								
								// PROCESS ITEMS 
								const len = elItems.length;
								for(let i=0;i<len;i++){
									const elItem = elItems[i];
									const data = datas[i];
									{ // process labels
										const elLabelTarget = getByClass(elItem, selectorJsTargetLabels, 0);
										if(elLabelTarget){
											const labelsArray = data.labels;
											let doRemoveWrap = true;
											if(max_labels > 0){
												if(labelsArray){
													if(labelsArray.length > 0){
														const filteredLabels = fwLabels.getFiltered({
															labels : labelsArray,
															maxResults : max_labels,
															reverse : false,
															skipGroups : ""
														});
														if(filteredLabels.length !== 0){
															doRemoveWrap = false;
															for(const label of filteredLabels){
																appends(elLabelTarget, createElem({
																	t : "a",
																	h : fwLabels.createURL(label),
																	n : label
																}));
															}
															
															if(!fwLabelsIsByGroup){
																addClasses(elLabelTarget, "w--st1");
															}
															removeClasses(elLabelTarget, selectorJsTargetLabels);
														}
													}
												}
											}
											
											if(doRemoveWrap){
												elemRemove(elLabelTarget);
											}
										}
									}
									{ // process img 
										const elImgTarget = getByClass(elItem, selectorJsTargetImg, 0);
										const src = data.img;
										if(!elImgTarget || !show_thumbnail || src === "null"){							
											addClasses(elItem, "w--i0");
											if(elImgTarget){
												elemRemove(elImgTarget);
											}
										}
										else{
											const imageInstance = new fwImg.create(src, data.url, data.title);
											imageInstance.defineDom({
												wrapTag : "span",
												wrapClasses : null
											});
											appends(elImgTarget, imageInstance.elWrap);
											imageInstance.updateSrcByWrapDimension();
											imageInstance.appendImg();
											removeClasses(elImgTarget, selectorJsTargetImg);
											addClasses(elItem, "w--i1");
										}
									}
									{ // process posts header
										const elHeaderTarget = getByClass(elItem, selectorJsTargetHeader, 0);
										if(elHeaderTarget){						
											if(!showAuthor && !showPublished & !showUpdated & !showLocation){
												elemRemove(elHeaderTarget);
											}
											else{
												const elFrag = createFragment();
												if(showAuthor){
													appends(elFrag, createElem({
														t : "span",
														c : "w-author",
														f : (elem)=>{
															appends(elem, createElem({
																t : "span",
																n : text_author + ":"
															}));
															
															const authorName = data.authorName;
															const authorUrl = data.authorProfileUrl;
															if(authorUrl === "null"){
																appends(elem, createElem({
																	t : "span",
																	n : authorName
																}));
															}
															else{
																appends(elem, createElem({
																	t : "a",
																	h : authorUrl,
																	n : authorName,
																	tt : authorName
																}));
															}
														}
													}));
												}
												const publishedString = fwDate.ISOToString(data.published);
												const updatedDtring = fwDate.ISOToString(data.lastUpdated);
												if(showPublished){
													appends(elFrag, createElem({
														t : "span",
														c : "w-published",
														cs : [
															{
																t : "span",
																n : text_published + ":"
															},
															{
																t : "time",
																n : publishedString,
																f : (elem)=>{
																	elem.setAttribute("datetime", data.published)
																}
															}
														]
													}));
												}
												if(showUpdated && publishedString !== updatedDtring){
													appends(elFrag, createElem({
														t : "span",
														c : "w-updated",
														cs : [
															{
																t : "span",
																n : text_updated + ":"
															},
															{
																t : "time",
																n : updatedDtring,
																f : (elem)=>{
																	elem.setAttribute("datetime", data.lastUpdated)
																}
															}
														]
													}));
												}
												
												const locationName = data.locationName;
												if(showLocation && locationName !== "null"){
													appends(elFrag, createElem({
														t : "span",
														c : "w-location",
														cs : [
															{
																t : "span",
																n : text_location + ":"
															},
															{
																t : "a",
																n : locationName,
																h : data.locationUrl,
																tt : locationName
															}
														]
													}));
												}
												const elOneRow = fwOneRow.create({
													wrapClasses : prefix + "j" // sama dengan class {{elHeaderTarget}}
												}, elFrag);
												elemReplace(elHeaderTarget, elOneRow);
											}
										}
									}
									{ // process morelink
										const elFooterTarget = getByClass(elItem, selectorJsTargetFooter, 0); 
										if(elFooterTarget){
											if(show_more_link){
												appends(elFooterTarget, createElem({
													t : "a",
													h : data.url,
													n : more_link_title,
													tt : data.title
												}));
												
												removeClasses(elFooterTarget, selectorJsTargetFooter);
											}
											else{
												elemRemove(elFooterTarget);
											}
										}
									}
								}
								fwOneRow.initParent(elWrap);
							}
							{ // process blog pagination
								if(fwBlogPagination){
									const initResults = fwBlogPagination.init();
									if(initResults === false){
										// terjadi error namun bukan pada proses load json
										// pada keadaan ini, error akan diabaikan dan element pagination telah terhapus
									}
									else{
										
									}
								}
							}
							
							if(callback){
								callback();
							}
						}
					});
				}
			}		
			{	// #blog_post
				if(g_wijsBlog.isSingleItem){
					fwWidgets_pushData({
						name : "blog_post",
						maxCount : 1,
						init : (widgetObj, callback)=>{
							const getById = p_elemGetById;
							const configsCreateData = p_configsCreateData;
							const configsElemToObj = p_configsElemToObj;
							const wijsBlog = g_wijsBlog;
							const isPost = wijsBlog.isPost;
							const pushError = p_pushError;
							const addClasses = p_elemAddClasses;
							const appends = p_elemAppends;
							const createElem = p_elemCreateElem;
							const elemReplace = p_elemReplace;
							const createTextNode = p_elemCreateTextNode;
							const getDataAttrTypeString = p_getDataAttrTypeString;
							const removeElem = p_elemRemove;
							
							const fwDate = FW_Date;
							const fwOneRow = FW_OneRow;
							const fwBreadcrumbs = FW_Breadcrumbs;
						
							
							const wijsEvents = g_wijsEvents;
							
							const {elWidget} = widgetObj;
							const elPostBody = getById("w-post-body");	
							
							// GET CONFIGS
							// configs ini yang digunakan pada widget
							// configs ini sama dengan {{FN.initBlogPosts}}
							const configsData = configsCreateData([
								["show_author", 1, "yes", ["no", "yes", "page", "post"]],						// string splited by koma, all || page, post, posts
								["show_published", 1, "yes", ["no", "yes", "page", "post"]],					// string splited by koma, all || posts, post
								["show_updated", 1, "yes", ["no", "yes", "page", "post"]],						// string splited by koma, all || posts, post
								["show_location", 1, "yes", ["no", "yes"]],			
								// ["show_morelink", 2, true],
								// ["show_thumbnail", 2, true],
								// ["show_at_homepage", 2, true],
								// ["max_labels", 3, 3],								// label pada halaman posts
								["text_author", 1, Text_blogPost_textAuthor],
								["text_published", 1, Text_blogPost_textPublished],
								["text_updated", 1, Text_blogPost_textUpdated],
								["text_location", 1, Text_blogPost_textLocation],
								["text_description", 1, Text_blogPost_textDescription], // belum digunakan
								// ["text_view_more", 1, "Selengkapnya"]
							]);
							const configs = configsElemToObj("blog-posts", configsData, 1); // 1 menghapus widget
							configs.show_description = false; // locked
							const {
								show_author,
								show_published,
								show_updated,
								show_location,
								show_description,
								text_author,
								text_published,
								text_updated,
								text_location,
								text_description
							} = configs;
							
							// FOR HEADER
							const availableValueForState = ["true", "yes", isPost ? "post" : "page"];
							const showAuthor = availableValueForState.indexOf(show_author) !== -1;
							const showPublished = availableValueForState.indexOf(show_published) !== -1;
							const showUpdated =  availableValueForState.indexOf(show_updated) !== -1;
							const showLocation = availableValueForState.indexOf(show_location) !== -1;
							const showDescription = show_description;
							
							// GET DATA
							let data;
							const elData = getById("w-data-blog-post");
							if(elData){
								const dataObj = configsElemToObj(elData, null, 0);
								if(dataObj){
									data = dataObj;
								}
							}
							
							if(!data){
								return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "undefined_blog_post_data");
							}			

							
							// SAMPAI DISINI, PASTIKAN SEMUANYA VALID
							
							
							{ // process bredcrumbs
								const elTarget = getById("w-jstarget-breadcrumbs");
								if(elTarget){
									const elBreadcrumbs = fwBreadcrumbs.create();
									if(elBreadcrumbs){
										elemReplace(elTarget, elBreadcrumbs);
										
										// init one row jika single item atau homepage
										// jika sebaliknya, proses init akan dilakukan pada proses {{definePageInfo}} yang akan terpanggil pada pagination 
										// disini, halaman sudah pasti single
										fwBreadcrumbs.init();
									}
								}
							}
							
							
							const {
								title,
								url,
								description,
								img,
								labels,
								authorName,
								authorProfileUrl,
								published,
								lastUpdated,
								locationName,
								locationUrl
							} = data;
							
							{ // createPostHeaderInfo
								const elTarget = getById("w-jstarget-post-header-info");
								const prefix = "w-94";
								if(elTarget){
									const elPostHeader = elTarget.parentNode;
									const hasAuthor = showAuthor;
									const hasPublished = showPublished;
									const hasUpdated = showUpdated;
									const hasLocation = showLocation && locationName !== "null";
									const hasItems = hasAuthor || hasPublished || hasUpdated || hasLocation;
									const hasDescription = showDescription && description !== "null";
									
									
									addClasses(elPostHeader, "w--i" + (hasItems ? "1" : "0"));
									addClasses(elPostHeader, "w--d" + (hasDescription ? "1" : "0"));
									
									if(hasItems || hasDescription){
										const elContent = createElem({
											c : prefix + "c",
											f : (elem)=>{
												if(hasItems){
													const elItems = createElem({
														c : prefix + "d",
														f : (elem)=>{
															{ // author
																if(hasAuthor){
																	appends(elem, createElem({
																		t : "span",
																		c : prefix + "i " + prefix + "author",
																		f : (elem)=>{
																			appends(elem, createElem({
																				t : "span",
																				c : prefix + "l",
																				n : text_author + ":"
																			})); 
																			appends(elem, createElem({
																				t : "span",
																				c : prefix + "v",
																				f : (elem)=>{
																					if(authorProfileUrl === "null"){
																						appends(elem, createElem({
																							t : "span",
																							n : authorName
																						}));
																					}
																					else{
																						appends(elem, createElem({
																							t : "a",
																							h : authorProfileUrl,
																							n : authorName,
																							tt : authorName
																						}));
																					}
																				}
																			})); 
																		}
																	}));
																}
															}
															const publishedString =  fwDate.ISOToString(published);
															const updatedString = fwDate.ISOToString(lastUpdated);
															{ // published
																if(hasPublished){
																	appends(elem, createElem({
																		t : "span",
																		c : prefix + "i " + prefix + "published",
																		f : (elem)=>{
																			appends(elem, createElem({
																				t : "span",
																				c : prefix + "l",
																				n : text_published + ":"
																			})); 
																			appends(elem, createElem({
																				t : "span",
																				c : prefix + "v",
																				f : (elem)=>{
																					appends(elem, createElem({
																						t : "time",
																						c : "w-datetime",
																						n : publishedString,
																						f : (elem)=>{
																							elem.setAttribute("datetime", published);
																						}
																					}));
																				}
																			})); 
																		}
																	}));												
																}
															}
															{ // updated
																if(hasUpdated){
																	if(publishedString !== updatedString){
																		appends(elem, createElem({
																			t : "span",
																			c : prefix + "i " + prefix + "updated",
																			f : (elem)=>{
																				appends(elem, createElem({
																					t : "span",
																					c : prefix + "l",
																					n : text_updated + ":"
																				})); 
																				appends(elem, createElem({
																					t : "span",
																					c : prefix + "v",
																					f : (elem)=>{
																						appends(elem, createElem({
																							t : "time",
																							c : "w-datetime",
																							n : updatedString,
																							f : (elem)=>{
																								elem.setAttribute("datetime", lastUpdated);
																							}
																						}));
																					}
																				})); 
																			}
																		}));
																	}												
																}
															}
															{ // location
																if(hasLocation){
																	appends(elem, createElem({
																		t : "span",
																		c : prefix + "i " + prefix + "location",
																		f : (elem)=>{
																			appends(elem, createElem({
																				t : "span",
																				c : prefix + "l",
																				n : text_location + ":"
																			})); 
																			appends(elem, createElem({
																				t : "span",
																				c : prefix + "v",
																				f : (elem)=>{
																					if(locationUrl === "null"){
																						appends(elem, createElem({
																							t : "span",
																							n : locationName
																						}));
																					}
																					else{
																						appends(elem, createElem({
																							t : "a",
																							h : locationUrl,
																							n : locationName,
																							tt : locationName
																						}));
																					}
																				}
																			})); 
																		}
																	}));													
																}
															}
														}
													});
													const elOneRow = fwOneRow.create({}, elItems);
													appends(elem, elOneRow);
												}
												
												if(hasDescription){
													appends(elem, createElem({
														c : prefix + "e " + prefix + "description",
														f : (elem)=>{
															if(text_description){
																appends(elem, createElem({
																	t : "span",
																	c : prefix + "f",
																	n : text_description
																}));
																appends(elem, createElem({
																	t : "span",
																	c : prefix + "g",
																	cs : createTextNode(description)
																}));
															}
														}
													}));
												}
											}
										});
										
										elemReplace(elTarget, elContent);
										fwOneRow.initParent(elContent);
									}
								}
							}
							
							
							// INIT POST BODY			
							if(elPostBody){
								// panggil beforePostBodyInitial
								// {{wijsEvents.beforePostBodyInitial.execution}}
								{
									const fns = wijsEvents.beforePostBodyInitial.items;
									for(const fn of fns){
										fn();
									}
								}
								
							
								
								// FORMATTING
								Formatting_postBody_init(elPostBody);
								Formatting_general_init(elPostBody);								
								
								// PROCESS ADS
								FW_PostBodyAds.init(elPostBody);
								
								
								// panggil afterPostBodyInitial
								// {{wijsEvents.afterPostBodyInitial.execution}}
								{
									const fns = wijsEvents.afterPostBodyInitial.items;
									for(const fn of fns){
										fn();
									}
								}
							}
		
							if(callback){
								callback();
							}
						}
					});
				}
			}
			{	// #blog_footer
				const getById = p_elemGetById;
				const blogw2 = g_blogw2;
				const prefix = "w-102";
				const createElem = p_elemCreateElem;
				const insertFirstChild = p_elemInsertFirstChild;
				fwWidgets_pushData({
					name : "blog_footer",
					maxCount : 1,
					init : (widgetObj, callback)=>{
						{	// onclick go to top
							const el = getById(prefix + "gototop");
							if(el){
								const elTarget = createElem({i : "w-gototoptarget"});
								insertFirstChild(blogw2, elTarget);
								el.onclick = (e)=>{
									elTarget.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
								};
							}
						}
						
						if(callback){
							callback();
						}
					}
				});
			}
			{	// #post_comments
				fwWidgets_pushData({
					name : "post_comments",
					maxCount : 1,
					init : (widgetObj, callback)=>{
						const win = g_win;
						const elHead = g_head;
						const typeIsArray = p_typeIsArray;
						const runEval = p_runEval;
						const pushError = p_pushError;
						const getById = p_elemGetById;
						const getByTag = p_elemGetByTag;
						const getByClass = p_elemGetByClass;
						const elemRemove = p_elemRemove;
						const removeComment = p_removeComment;
						const arrayRemoveItem = p_arrayRemoveItem;
						const createElem = p_elemCreateElem;
						const appends = p_elemAppends;
						const removeElem = p_elemRemove;
						const addClasses = p_elemAddClasses;
						const removeClasses = p_elemRemoveClasses;
						const local = p_local;
						const stringFirstLetterToUpperCase = p_stringFirstLetterToUpperCase;
						const eventAdd = p_eventAdd; 
						const eventRemove = p_eventRemove;
						const resizeImg = p_resizeImg;
						const elemReplace = p_elemReplace;
						const elemGetBoundingClientRect = p_elemGetBoundingClientRect;
						
						
						const addEvent = eventAdd;
						const removeEvent = eventRemove;
						const insertBefore = p_elemInsertBefore;
						
						const configsCreateData = p_configsCreateData;
						const configsStringValueToRealValue =  p_configsStringValueToRealValue;
						const configsElemToObj = p_configsElemToObj;
						const insertJsBasedCss = p_insertJsBasedCss;
						
						
						const wijsBlog = g_wijsBlog;
						const blogId = wijsBlog.blogId;
						const canonicalUrl = wijsBlog.canonicalUrl;
						const homepageUrl = wijsBlog.homepageUrl;
						const canonicalHomepageUrl = wijsBlog.canonicalHomepageUrl;
						const isPost = wijsBlog.isPost;
						
						const wijsConfigs = g_wijsConfigs;
						
						const wijsIcons = g_wijsIcons;
						const icon_expand_vertical = wijsIcons.expand_vertical;
						
						const fwTextsWithData = FW_TextsWithData;
						const fwDate = FW_Date;
						const fwImg = FW_Img;
						const fwButton = FW_Button;
						const fwDefaultValues = FW_DefaultValues;
						const {button_box_type, button_rounded, button_skin} = fwDefaultValues;
						const defaultDateFormat = wijsConfigs.date_format; 
						
						const dataPostCommentsId = "w-data-comments";
						const configsPostCommentsId = "w-configs-comments";
						
						const dev_localKey_lastSort = local.createKey("Post_Comments_Last_Sort");
						const dev_localKey_lastActions = local.createKey("Post_Comments_Last_Action");
						const dev_closerTopHeight = 0; // element yang terfixed yang menutupi area layar, ini akan digunakan untuk fungsi {{scrollToIframe}}
																		// elemen disini, misal elemen {{fixedHeader}}
						const dev_closerBottomHeight = 0;  // element yang terfixed yang menutupi area layar, ini akan digunakan untuk fungsi {{scrollToIframe}}
																			// elemen disini, misal elemen {{fixedBottom}}
						
						const prefix = "w-9";
						const configsData = configsCreateData([
							["enable_blogger", 2, true],
							["enable_disqus", 2, false],
							["disqus_short_name", 1, "none"],
							["counter_base", 1, "all", ["all", "parent"]],
							["link_to_span", 2, true],
							["date_format", 1, defaultDateFormat],
							["form_message", 1, "none"],
							["no_published_message", 1, Text_postComments_noPublishedMessage],
							["closed_message", 1, Text_postComments_closedMessage],
							["text_number_of_comments", 1, Text_postComments_textNumberOfComments],
							["text_number_of_replies", 1, Text_postComments_textNumberOfReplies],
							["text_add_comment", 1, Text_postComments_textAddComment],
							["text_add_new_comment", 1, Text_postComments_textAddNewComment],
							["text_add_reply", 1, Text_postComments_textAddReply],
							["text_reply", 1, Text_postComments_textReply],
							["text_delete", 1, Text_postComments_textDelete],
							["text_newest", 1, Text_postComments_textNewest],
							["text_oldest", 1, Text_postComments_textOldest],
							["text_author_label", 1, Text_postComments_textAuthorLabel],
						]);	
						const {el, elSection} = widgetObj;
						const elWidget = el;
						const elDataPostComments = getById(dataPostCommentsId);
						// elemen {{elDataPostComments}} hanya akan tersedia jika elemen komentar setidaknya memiliki 1 konten yang akan ditampilkan
						// konten disini adalah apakah itu form atau items komentar
						// ketika {{allowNewComments}} == false dan {{numberOfComments}} == 0, elemen ini tidak akan tersedia
						if(!elDataPostComments){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no items");
						}
						
						
						// sampai disini, sudah dipastikan terdapat elemen
						// selanjutnya, ambil data yang dibuat berdasarkan data post
						const dataFromPost = configsElemToObj(elDataPostComments, null);
						if(!dataFromPost){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "invalid data"); // tidak dapat run evel inner elemen {{w-data-post-comments}}
						}
						
						
						// sampai disini, data tersedia
						// selanjutnya, validasi semua data
						// ....................
						// disini, data tidak akan divalidasi karena sangat banyak
						// ini juga termasuk data comment items
						// jadi, pastikan saja untuk mengingatkan userr tidak melakukan editing 
						
						
						// sampai disini, data tersedia,
						// selanjutnya, ambil configs yang didapat berdasarkan {{items linklinks}}
						const elConfigsPostComments = getById(configsPostCommentsId);
						const configs = configsElemToObj(elConfigsPostComments, configsData, 0);
						if(!configs){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "configs not found"); // tidak dapat mengambil configs berdasarkan {{linklist items}}
						}
						
						
						// sampai disini, configs tersedia dan sudah tervalidasi
						
						
						// SAMPAI DISINI, PEMBUTAN DOM SUDAH BISA DILAKUKAN
						const {
							allowNewComments,
							numberOfComments,
							postId,
							postAuthorUrl,
							comments
						} = dataFromPost;
						
						const {
							enable_blogger,
							enable_disqus,
							disqus_short_name,
							link_to_span,
							date_format,
							counter_base,
							form_message,
							no_published_message,
							closed_message,
							text_number_of_comments,
							text_number_of_replies,
							
							text_add_comment,
							text_add_new_comment,
							text_add_reply,
							text_delete,
							text_reply,
							text_author_label,
							text_newest,
							text_oldest,
						} = configs;
						
						
						const hasBloggerForm = enable_blogger && allowNewComments;
						const hasBloggerItems = enable_blogger && numberOfComments !== 0;
						const hasBlogger = enable_blogger && (hasBloggerForm || hasBloggerItems);
						const hasDisqus = enable_disqus && disqus_short_name;	
						
						if(!hasBlogger && !hasDisqus){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no active stystem");
						}
						
						const Systems = [];
						const CreateSystems = function(name, init){
							const dis = this;
							dis.name = name;
							dis.contentState = 0;
							dis.isActive = false;
							dis.elTabLink = createElem({
								t : "button",
								c : "w-nostyle",
								n : stringFirstLetterToUpperCase(name),
								f : (elem)=>{
									elem.onclick = ()=>{
										dis.open();
									};
								}
							});
							dis.elContent = createElem({
								c : prefix + "d w--s0"
							});
							dis.elMainLoadingBar = createElem({
								c : "w-loadingbar",
								cs : [
									{
										t : "span",
										cs : [
											{
												t : "span"
											}
										]
									}
								]
							});
							dis.init = ()=>{
								dis.beforeInit();
								init(dis, ()=>{
									// callback harus dibuat berupa fungsi seperti ini (tidak bisa langsung dengan {{dis.afterIit}}
									// hal ini karena jika dibuat langsung, {{this}} pada runAfter init akan {{undefined}}
									dis.afterInit();
								});
							};
						};
						CreateSystems.prototype.open = function(callback){
							const dis = this;
							const {isActive, contentState} = dis;
							/*	0	Konten tab belum diproses sama sekali
								1	Konten tab sedang diproses dan ditampilkan
								2	Konten tab sedang diproses dan tersembunyi
								3	Konten tab selesai dan tersembunyi
								4	Konten tab selesai dan ditampilkan */
																
							if(!isActive){
								const lastestActiveTab = _getActiveTab();
								if(lastestActiveTab){
									const lastestActiveTabContentState = lastestActiveTab.contentState;
									const lastestActiveTabContent = lastestActiveTab.elContent;
									const lastestActiveTabTabLink = lastestActiveTab.elTabLink;
									
									/*	disini, keadaan lastestActiveTab pasti sedang ditampilkan (1 or 4)
									*	1	:	keadaan selanjutnya adalah 2
									*	4	:	keadaan selanjutnya adalah 3 */
								
									// hapus w--active pada tab
									// karena tab pasti sedang ditampilkan, proses ini selalu dibutuhkan
									if(lastestActiveTabTabLink){
										removeClasses(lastestActiveTabTabLink, "w--active");
									}
									
									let nextContentState;
									if(lastestActiveTabContentState === 1){
										removeClasses(lastestActiveTabContent, "w--s1");
										addClasses(lastestActiveTabContent, "w--s2");
										nextContentState = 2;
									}
									else{
										removeClasses(lastestActiveTabContent, "w--s4");
										addClasses(lastestActiveTabContent, "w--s3");
										nextContentState = 3;
									}
									
									lastestActiveTab.contentState = nextContentState;
									lastestActiveTab.isActive = false;
								}
								
								// PROCESS TAB NEXT ACTIVE
								const {elTabLink, elContent, contentState} = dis;
								if(elTabLink.parentNode){
									addClasses(elTabLink, "w--active");
								}
								
								if(contentState === 0){
									// PROSES INIT BELUM DIPANGGIL SAMA SEKALI
									// RUN INIT
									dis.init();
								}
								else{
									// disini, keadaan sebelumnya hanya 2 dan 3,
									// hal ini karena tidak mungkin script dipanggil ketika elemen ditampilkan (1, 4)
									let nextContentState;
									if(contentState === 2){
										nextContentState = 1;
									}
									else{
										nextContentState = 4;
									}
									
									removeClasses(elContent, "w--s" + contentState);
									addClasses(elContent, "w--s" + nextContentState);
									
									dis.contentState = nextContentState;
								}
								dis.isActive = true;
							}
						};
						CreateSystems.prototype.beforeInit = function(){
							// SET CONTENT STATE KE 1
							const dis = this;
							const {elContent, elMainLoadingBar} = dis;
							dis.contentState = 1;
							removeClasses(elContent, "w--s0");
							addClasses(elContent, "w--s1");
				
							// APPEND MAIN LOADING LOADING
							appends(elContent, elMainLoadingBar);	
						};
						CreateSystems.prototype.afterInit = function(){
							const dis = this;
							const {contentState, elContent, elMainLoadingBar} = dis;						
								// pada keadaan ini, keadaan kontent pasti belum selesai (1 dan 2)
								let nextContentState;
								if(contentState === 1){
									nextContentState = 4;
								}
								else{
									nextContentState = 3;
								}
								
								removeClasses(elContent, "w--s" + contentState);
								addClasses(elContent, "w--s" + nextContentState);
								dis.contentState = nextContentState;
								elemRemove(elMainLoadingBar);					
						};
						
						const _getActiveTab = ()=>{
							for(const system of Systems){
								if(system.isActive){
									return system;
								}
							}
							
							return null;
						};
					
						if(hasBlogger){
							const systemObj = new CreateSystems("blogger", (()=>{
								let items = comments;											// array semua items, alasan dibuat let karena mungkin akan di cancat
								const itemsById = {};												// object semua items by id
								const finalItems = [];												//	array item yang sudah siap 
								const authorImages = [];										// array instance imageInstance, diperlukan untuk menginit img
								
								const main = (system, callback)=>{
									getAllItems(()=>{
										defineItemsById(()=>{
											defineFinalItems(()=>{
												createDom(()=>{
													if(iframe){
														iframe.appendInitialIframe();
													}
													if(callback){
														callback();
													}
												});
											});
										});
									});
								};
								const getAllItems = (callback)=>{
									if(numberOfComments <= 200){
										callback();
									}
									else{
										let maxPageNum = Math.floor(numberOfComments / 200);
										if(numberOfComments % 200 !== 0){
											maxPageNum += 1;
										}
										
										let nextLoadPage = 2;
										const postUrl = canonicalUrl;
										const loadAllComments = ()=>{
											const xhttp = win.XMLHttpRequest ? new XMLHttpRequest() :  new ActiveXObject("Microsoft.XMLHTTP");		
											xhttp.onreadystatechange = function(){
												if(this.readyState === 4 && this.status === 200){
													const s_wdi = "wdi";
													const resultsText = this.responseText;
													const start = s_wdi + "_post_comments_items_start";
													const end = s_wdi +"_post_comments_items_end";
													const startIndex = resultsText.indexOf(start);
													const endIndex = resultsText.indexOf(end);
													
													if(startIndex !== -1 && endIndex !== -1){
														if(startIndex < endIndex){
															const string = resultsText.substring(startIndex + start.length, endIndex);
															const obj = runEval(string);
															if(!typeIsArray(obj)){
																widgetObj.warn = "can't get items from ajax";
																
																// disini, proses pengambilan akan dihentikan,
																// jika dilanjutnya, ini dapat menyebabkan error karena mungkin replies tidak memiliki parent
																return callback();
															}
															else{
																items = items.concat(obj);
																
																if(nextLoadPage === maxPageNum){																																		
																	return callback();
																}
																else{
																	nextLoadPage += 1;
																	return loadAllComments();
																}
															}
														}
													}
													
													// kode hanya akan tereksekusi jika startIndex dan endIndex tidak benar
													callback();
												}
											};	
											xhttp.open("GET", postUrl + "?commentPage=" + nextLoadPage, true);
											xhttp.send();													
										};
										loadAllComments();
									}
								};
								const defineItemsById = (callback)=>{
									// TEPAT SETELAH SEMUA ITEMS DIAMBIL
									// ARRAY ITEMS AKAN DIUBAH KE OBJECT DENGAN ID SEBAGAI PROPERTY
									// SETELAH FUNGSI INI TERPANGGIL , {{itemsById}} telah terdefinisi
									for(const item of items){
										const publishedISO = new Date(item.timestampAbs).toISOString();
										item.publishedISO = publishedISO;
										item.published = fwDate.ISOToString(publishedISO, date_format);
										itemsById[item.id] = item;
										itemsById[item.id].replies = [];
									}
									
									callback();
								};
								const defineFinalItems = (callback)=>{
									// DEFIISIKAN FINAL Items
									// LETAKKAN SUB (REPLIES) PADA TEMPATNYA
									const main = ()=>{
										for(const item of items){
											if(!item.inReplyTo){
												finalItems.push(item);
											}
											else{
												const parentItem = fineParent(item); // null || parent obj
												if(!parentItem){
													item.inReplyTo = null;
													finalItems.push(item);
												}
												else{
													parentItem.replies.push(item);
												}
											}
										}
										
										// Sampai disini, finalItems telah mengandung semua items dengan replies yang telah terdefinisi,
										// Selanjutnya, hapus comment yang didelete
										for(const item of finalItems){
											if(item.isDeleted){
												arrayRemoveItem(finalItems, item);
											}
											else{
												const replies = item.replies;
												if(replies.length !== 0){
													for(const reply of replies){
														if(reply.isDeleted){
															arrayRemoveItem(replies, reply);
														}
													}
												}
											}
										}
										
										
										callback();
									};								
									const fineParent = (item)=>{ // return item parent
										const parentId = item.inReplyTo;
										const parentItem = itemsById[parentId];
										if(!parentItem){
											return null;
										}
										else{
											if(!parentItem.inReplyTo){
												return parentItem;
											}
											else{
												return fineParent(parentItem);
											}
										}
									};
									main();	
								};
								const createDom = (callback)=>{
									let lastSort = (()=>{
										const localKey = dev_localKey_lastSort;
										let localData = local.get(localKey);
										if(localData){
											localData = JSON.parse(localData);
											if(localData === "oldest"){
												return "oldest";
											}
										}
										
										return "newest";
									})();
								
									// EL FORM
									const elFromWrap = createElem({c : prefix + "e"});
									if(!allowNewComments){
										appends(elFromWrap, createElem({
											c : prefix + "m2",
											n : closed_message
										}));
									}
									else{
										appends(elFromWrap, createElem({
											c : prefix + "f",
											f : (elem)=>{
												// elScrollTarget
												appends(elem, createElem({
													i : prefix + "scrolltarget",
													f : (elem)=>{
														// definisikan style untuk scrollView target
														// ini akan disesuaikan dengan closer top screen {{dev_closerTopHeight}}
														// 50 disesuaikan saja seideal mungkin
														insertJsBasedCss("#"+ prefix + "scrolltarget", "top:-" + (50 + dev_closerTopHeight) + "px");
													}
												}));
												
												// HEADER
												appends(elem, createElem({
													c : prefix + "g",
													f : (elem)=>{
														appends(elem, createElem({
															t : "span",
															c : prefix + "fh",
															n : text_add_comment
														}));
													}
												}));
												
												// KONTEN
												appends(elem, createElem({
													c : prefix + "ifw",
													cs : [
														{
															c : prefix + "h w--i0"
														}
													]
												}));
												
												// SHORTCODE HERE
												/*appends(elem, createElem({
													n : "shortcodes"
												}));*/
												
												// FORM MSG
												if(form_message){
													appends(elem, createElem({
														c : prefix + "k",
														n : form_message
													}));
												}		
											}
										}));
									}
									
									const {elContent} = systemObj;
									appends(elContent, elFromWrap);
									
								
									const elItems = (()=>{
										let doReturn = false;
										const itemsLength = finalItems.length;
									
										if(itemsLength === 0){
											/*	KASUS
											kondisi ini dapat disebabkan oleh banyak kasus
												1.	Items memang tidak ada
												2.	Terdapat 1 items dan telah dihapus
											Pada kondisi ini, ketika terdapat form, pesan no publised akan ditampilkan
											sebaliknya, hanya form yang akan ditampilkan, (tidak ada elemen items) */
											if(allowNewComments){
												return createElem({
													c : prefix + "m1",
													n : no_published_message
												});
											}
											else{
												doReturn = true;
											}
										}
										
										
										if(doReturn){
											return null;
										}
										else{
											return createElem({
												c : prefix + "l",
												f : (elem)=>{
													// ITEMS HEADER
													appends(elem, createElem({
														c : prefix + "m",
														f : (elem)=>{
															// comment num info
															let len = itemsLength;
															if(counter_base === "all"){
																let numberOfReplies = 0;
																for(const item of finalItems){
																	numberOfReplies += item.replies.length;
																}
																
																len += numberOfReplies;
															}
															
															appends(elem, createElem({
																t : "span",
																c : prefix + "cmi",
																n : fwTextsWithData.translateText(text_number_of_comments, ["number_of_comments"], [len])
															}));
															
															// {{PostCommentsAppendSort}}
															appends(elem, createElem({
																t : "span",
																c : prefix + "si",
																cs : [
																	{
																		t : "span",
																		f : (elem)=>{
																			// append title
																			const elSortTitle = createElem({
																				t : "span",
																				n : lastSort === "newest" ? text_newest : text_oldest
																			});
																			appends(elem, elSortTitle);
																			
																			// appends icon
																			// icon tidak langsung diappend dengan {{innerHTML}}
																			// hal ini karena jika menggunkan innerHTML, variable {{elSortTitle}} akan akan error
																			// penjelasan,
																			// ketika variable diatas diassign, variable akan mengarah ke elemen yang dibuat
																			// saat fungsi set innerHTML dijalankan, elemen yang sudah dibuat tersebut akan dichace browser
																			// ketika browser merender kembali set innerHTML, elemen yang terender selanjutnya itu tidak lagi direference oleh {{elSortTitle}}
																			// disini, browser akan mengupdate elemen
																			// oleh karena itu, harus dibungkus dengan span agar tidak menimbulkan reparse element title
																			appends(elem, createElem({
																				t : "span",
																				n : icon_expand_vertical
																			}));
																			
																			// add onclick
																			{
																				let elWrapper;
																				elem.onclick = ()=>{
																					if(!elWrapper){
																						elWrapper = getByClass(null, prefix + "n", 0);
																					}
																					
																					if(elWrapper){
																						const isActiveNewest = lastSort === "newest";
																						addClasses(elWrapper, (isActiveNewest ? "w--s2" : "w--s1"));
																						removeClasses(elWrapper, (isActiveNewest ? "w--s1" : "w--s2"));
																						elSortTitle.innerHTML = isActiveNewest ? text_oldest : text_newest;
																						lastSort = isActiveNewest ? "oldest" : "newest";
																						local.set(dev_localKey_lastSort, JSON.stringify(lastSort));
																					}
																				};
																			}
																		}
																	}
																]
															}));
														}
													}));
													
													// ITEMS CONTENT
													// SEBELUM MELAKUKAN PROSES, PERLU DIDEFINISIKAN TERLEBIH DAHULU DATA-DATA PENDUKUNG
													const postAuthorUrlId = !postAuthorUrl ? null : (()=>{
														// data ini dibutuhkan karena url prefix profile mungkin berbeda, kadang draf kadang www
														// jadi, harus ektrack id untuk compare
														const lastSlash = postAuthorUrl.lastIndexOf("/");
														const id = postAuthorUrl.substring(lastSlash + 1);
														return id;
													})();
													
													const createItem = (parentDom, itemsHolder, isParent)=>{
														for(const item of itemsHolder){
															const {authorType, authorName, authorUrl, authorPhotoUrl, published, publishedISO, extraIconClass} = item;
															const authorIsPostAuthor = (extraIconClass === "blog-author") || (authorUrl && authorUrl.indexOf(postAuthorUrlId) !== -1);
															const authorIsBlogContributor = false;
															
															
															appends(parentDom, createElem({
																c : prefix + "i",
																i : "c" + item.id,
																cs : [
																	{
																		c : prefix + "j",
																		f : (elem)=>{
																			
																			let imgUrl = authorPhotoUrl;
																			if(imgUrl){
																				const imageInstance = new fwImg.create(imgUrl, null, authorName);
																				imageInstance.defineDom({
																					wrapTag : "div",
																					wrapClasses : null
																				});
																				appends(elem, imageInstance.elWrap);
																				authorImages.push(imageInstance);
																			}
																			else{
																				// Tampilkan text inisial untuk author tanpa gambar
																				const elInisial = createElem({
																					t : "span",
																					n : authorName[0].toUpperCase()
																				});
																				appends(elem, elInisial);
																			}
																		}
																	},
																	{
																		c : prefix + "p",
																		cs : [
																			{ // header
																				c : prefix + "q",
																				f : (elem)=>{
																					// NAME
																					if(!authorUrl){
																						appends(elem, createElem({
																							t : "span",
																							c : prefix + "an",
																							n : authorName
																						}));
																					}
																					else{
																						const usedUrl = authorUrl;
																						if(!link_to_span){
																							appends(elem, createElem({
																								t : "a",
																								c : prefix + "an",
																								h : usedUrl,
																								n : authorName,
																								f : (elem)=>{
																									elem.setAttribute("rel", "nofollow");
																								}
																							}));
																						}
																						else{
																							appends(elem, createElem({
																								t : "span",
																								c : prefix + "an w-linkmirror",
																								n : authorName,
																								f : (elem)=>{
																									elem.setAttribute("data-href", usedUrl);
																								}
																							}));
																						}
																					}
																					
																					// AUTHOR AND CONTRIBUTOR LABEL
																					if(authorIsPostAuthor || authorIsBlogContributor){
																						appends(elem, createElem({
																							t : "span",
																							c : prefix + "al",
																							n : "(" + text_author_label +")"
																						}));
																					}
																					
																					// DATE
																					{
																						const elDate = createElem({
																							t : "time",
																							c : prefix + "dd",
																							n : published
																						});
																						elDate.setAttribute("datetime", publishedISO);
																						appends(elem, elDate);
																					}
																				}
																			},
																			{ // body
																				c : prefix + "r",
																				n : (()=>{
																					// DISINI, BODY ADALAH VERSI JS ESCAPED
																					// UNTUK MENGAMBIL VERSI ORIGINAL, APPEND KE DOM DAN AMBIL INNER
																					const tempDom = createElem({n : item.body});
																					
																					// Process link yang dibuat dengan tag
																					// Process link yang dibuat dengan tag
																					if(!link_to_span){
																						// Ketika fitur mirroring dinonaktifkan
																						// skript hanya akan memproses atribute rel dan target
																						const links = getByTag(tempDom, "A");
																						if(links){
																							for(const a of links){
																								const href = a.href;
																								if(href){
																									a.setAttribute("rel", "nofollow");
																									a.setAttribute("target", "_blank");
																								}
																							}
																						}
																					}
																					else{
																						const links = getByTag(tempDom, "A");
																						if(links){
																							for(const a of links){
																								const span = createElem({
																									t : "span",
																									c : "w-linkmirror",
																									n : a.innerHTML,
																									f : (elem)=>{
																										elem.setAttribute("data-href", a.href);
																									}
																								});
																								
																								elemReplace(a, span);
																							}
																						}
																					}
				
																					// translate string disini jika nanti mendukung shortcode
																					// ganti dengan fungsi _translateText
																					const translatedString = tempDom.innerHTML;
																					return translatedString;
																				})()
																			},
																			{ // footer
																				c : prefix + "s",
																				f : (elem)=>{
																					// delete button
																					appends(elem, createElem({
																						t : "button",
																						c : "w-nostyle " + prefix + "t",
																						n : text_delete,
																						f : (elem)=>{
																							elem.onclick = (e)=>{
																								win.location.href = "https://www.blogger.com/delete-comment.g?blogID=" + blogId + "&postID=" + item.id;
																							}
																						}
																					}));
																					
																					if(allowNewComments && isParent){
																						appends(elem, createElem({
																							t : "button",
																							c : "w-nostyle " + prefix + "u",
																							n : text_reply,
																							f : (elem)=>{
																								elem.onclick = (e)=>{
																									e.preventDefault();
																									iframe.move(item.id);
																								}
																							}
																						}));
																					}
																				}
																			}
																		],
																		f : (elem)=>{
																			const replies = item.replies;
																			const len = replies.length;
																		
																			if(len !== 0){
																				appends(elem, createElem({
																					c : prefix + "v",
																					cs : [
																						{
																							c : prefix + "w",
																							n : fwTextsWithData.translateText(text_number_of_replies, ["number_of_replies"], ["<span class='w-number'>"+ len +"<\/span>"])
																						},
																						{
																							c : prefix + "x",
																							f : (elem)=>{
																								createItem(elem, replies, false);
																							}
																						}
																					]
																				}));
																			}
																		}
																	}	
																]
															}));
														}
													};
													
													// JALANKAN FUNGSI
													appends(elem, createElem({
														c : prefix + "n",
														f : (elem)=>{
															createItem(elem, finalItems, true);
															addClasses(elem, (lastSort === "oldest" ? "w--s2" : "w--s1"));
														}
													}));
												}
											});
										}
									})();
									
									if(elItems){
										appends(elContent, elItems);
										
										// definisikan lebar content
										// ini dibutuhkan untuk menentukan apakah margin-left untuk form akan diapply atau tidak
										// setting margin-left:-xxx bertujuan membuat form menjadi full pada layar kecil
										// jika tidak, text pada form (tambahkan komentar anda) akan menjadi 2 kolom dan tiak bagus
										{
											const contentWidth = elContent.clientWidth;
											if(contentWidth < 400){ // nilai 400 telah ideal karena ini based parent
												const elWrap1 = getByClass(null, prefix + "a", 0);
												addClasses(elWrap1, "w--smallscreen"); 
											}
										}
										
										// init authorImages
										{ 
											const imagesInstance = authorImages;
											for(const imageInstance of imagesInstance){
												imageInstance.updateSrcByWrapDimension();
												imageInstance.appendImg();
											}
										}
										// disini, elItems sendiri mungkin hanya mengandung message no publiahsed
										// Proses lainnya.................
									}
									
									// PROSES SELESAI	
									callback();
								};					
								const iframe = !allowNewComments ? null : (()=>{
									let elContainer; // elemen yang menampung semua elemen iframe, termasuk header text dan msg
									let elWrap; // elemen iframe wrap, kontent mungkin erisi add new comment, loading, dan iframe
									let elHeaderText; // element header text, bisa tambahkan komentar atau tambahkan reply
									let elAddNewCommentButttonWrap; // element wrapper untuk tombol add new comment
									let elIframeLoadingBar = createElem({
										c : "w-loadingbar",
										cs : [
											{
												t : "span",
												cs : [
													{
														t : "span"
													}
												]
											}
										]
									});
									let elScrollTarget;
									let elIframe = null;
									let activeParentId = null;
									let lastIframeLoaded = false;
									
									const defineInitialIframe = ()=>{
										const {elContent} = systemObj;
										elContainer  = getByClass(elContent, prefix + "f", 0); 
										elWrap = getByClass(elContainer, prefix + "h", 0); 
										elHeaderText = getByClass(elContainer, prefix + "fh", 0);
										elAddNewCommentButttonWrap = createElem({
											cs : [
												{
													c : prefix + "addnew",
													f : (elem)=>{
														const elButton = fwButton.create({
															title 						: 	text_add_new_comment,
															tag 						: 	"button",
															skin 						: 	button_skin,
															box_type				:	button_box_type,
															rounded				:	button_rounded,
															full_width				:	false,
															size						:	"normal"
														});
														elButton.onclick = ()=>{
															move(null);
														};
														appends(elem, elButton);
													}
												}
											]
										});
										elIframe = createIframe();
										elScrollTarget = getById(prefix + "scrolltarget");
									};
									const appendInitialIframe = ()=>{
										defineInitialIframe();
										appends(elWrap, elIframeLoadingBar);
										onLoadIframe.reg();
										appends(elWrap, elIframe);
									};
									const createIframe = ()=>{ // return dom iframe
										let src = "https://www.blogger.com/comment-iframe.g?blogID="+ blogId + "&";
										if(isPost){
											src += "postID=";
										}
										else{
											src += "pageID=";
										}
										
										src += postId + "&skin=emporio";
										
										if(activeParentId){
											src += "&parentID=" + activeParentId;
										}
										
										const dom = createElem({
											t : "iframe",
											c : "w--p0",
											s : src,
											tt : text_add_comment,
											f : (elem)=>{
												elem.setAttribute("allowtransparency", "true");
											}
										});
										if(elIframe === null){
											// menandakan ini adalah pembuatan pertama
											dom.setAttribute("loading", "lazy");
										}
										return dom;
									};
									const onLoadIframe = (()=>{
										let msgCounter = 0;
										let loadCounter = 1;
										const fn = (e)=>{
											// Setiap kali proses load iframe, 
											// fungsi ini akan terpanggil sebanyak 5x
											if(e.origin === "https://www.blogger.com"){
												msgCounter += 1;
												if(msgCounter === 5){
													const msg = e.data;
													
													const numberPx = parseInt(msg.substring(msg.indexOf(" ") + 1));
													if(numberPx > 88){
														// kondisi dimana terdapat msg
														// pada kondisi ini, iframe akan diupdate untuk menghapus msg
														// kondisi ini adalah dimana loadCounter === 1
														if(loadCounter === 1){
															msgCounter = 0;
															loadCounter = 2;
															refreshIframe();
														}
														else{
															finish(numberPx);
														}
													}
													else{
														finish(numberPx);
													}
												}
											}
										};
										const reg = ()=>{
											addEvent(win, "message", fn);
										};
										const remove = ()=>{
											removeEvent(win, "message", fn);
										};
										const finish = (iframeHeight)=>{
											msgCounter = 0;
											loadCounter = 1;
											elWrap.style.height = iframeHeight + "px";
											removeClasses(elIframe, "w--p0");
											remove();
											removeClasses(elWrap, "w--i0");
											onReadyIframe.reg();	
											lastIframeLoaded = true;
											elemRemove(elIframeLoadingBar);
										};
										return {
											reg, remove
										}
									})();
									const onReadyIframe = (()=>{
										let latestMsg = null;
										let hasActiveEvent = false;
										const fn = (e)=>{
											if(e.origin === "https://www.blogger.com"){
												const msg = e.data;
												if(msg !== latestMsg){
													latestMsg = msg;
													const numberPx = parseInt(msg.substring(msg.indexOf(" ") + 1));																				
													elWrap.style.height = numberPx + "px";
												}
											}
										};
										const reg = ()=>{
											setTimeout(()=>{
												if(!hasActiveEvent){
													addEvent(win, "message", fn); // ketika tanpa timeout, jika loaded memiliki msg, tinggi iframew tereset ke 88px
													hasActiveEvent = true;
												}
											}, 300);	
										};
										const remove = ()=>{
											if(hasActiveEvent){
												latestMsg = null;
												removeEvent(win, "message", fn);
												hasActiveEvent = false;
											}
										};
										
										return {reg, remove}
									})();
									const refreshIframe = ()=>{
										if(!lastIframeLoaded){
											onLoadIframe.remove();
										}
										else{
											addClasses(elWrap, "w--i0");
											onReadyIframe.remove();
										}
										lastIframeLoaded = false;
										
										appends(elWrap, elIframeLoadingBar);
										elemRemove(elIframe);
										elIframe = createIframe();
										onLoadIframe.reg();
										appends(elWrap, elIframe);
									};
									const move = (parentId)=>{
										if(parentId !== activeParentId){
											// activeParentId kemungkinan adalah id item komen atau null
											// ketika parentId === null, activeParentId tidak mungkin === null
											// hal ini karena iframe pasti berada di reply
											// jadi, kondisi diatas sudah cukup untuk memprevent double click reply
											const lastParentId = activeParentId;
											if(parentId){
												// move to reply
												if(lastParentId === null){
													// form new to reply
													// karena elContainer yang menampung semua element form akan dipindahkan
													// ini berarti konten tombol add new harus diletakkan pada level yang sama dengan elContainer
													insertBefore(elAddNewCommentButttonWrap, elContainer);
													
													const elDisComment = getById("c" + parentId);
													const elActions = getByClass(elDisComment, prefix + "s", 0);
													elHeaderText.innerHTML = text_add_reply;
													
													// konten ini sama dengan bagian {{refreshIframe}}
													// namun, terdapat proses reassign activeParentId
													activeParentId = parentId;
													refreshIframe();
													appends(elActions, elContainer);
													scrollToIframe();
												}
												else{
													// from reply to reply
													// disini, tidak perlu menambahkan add new karena sudah ditambahkan
													const elDisComment = getById("c" + parentId);
													const elActions = getByClass(elDisComment, prefix + "s", 0);
													// elHeaderText.innerHTML = text_add_reply; tidak perlu karena sudah berasal dari reply
													activeParentId = parentId;
													refreshIframe();
													appends(elActions, elContainer);
													scrollToIframe();
												}
											}
											else{
												// from reply to new
												elHeaderText.innerHTML = text_add_new_comment;
												activeParentId = null;
												refreshIframe();
												elemReplace(elAddNewCommentButttonWrap, elContainer);
												scrollToIframe();
											}
										}
									};
									const scrollToIframe = (()=>{
										const scrollOptions = {behavior: "smooth", block: "start", inline: "nearest"};
										return ()=>{
											const scrollTargetToTop = elemGetBoundingClientRect(elScrollTarget).top;
											const containerToBottom = elemGetBoundingClientRect(elContainer).bottom;
											if(scrollTargetToTop >= dev_closerTopHeight && containerToBottom >= dev_closerBottomHeight){
												// sudah terlihat semua,
												// do nothing
											}
											else{
												elScrollTarget.scrollIntoView(scrollOptions);
											}
										}
									})();
									
									
									return {
										appendInitialIframe,
										move
									}
								})();
								
								return main;
							})());
							Systems.push(systemObj);
						} 
						
						if(hasDisqus){
							const systemObj = new CreateSystems("disqus", (()=>{
								let runCallback;
								let elCommentBlock;
								const main = (system, callback)=>{
									// AKAN DIJALANKAN KETIKA ROSES SELESAI			
									if(callback){
										runCallback = callback;
									}
									
									// DEFINISIKAN REQUIRED GLOBAL VARIABLE FOR DISQUS */
									win.disqus_shortname = disqus_short_name;
									win.disqus_blogger_current_url = canonicalUrl;
									win.disqus_blogger_homepage_url = homepageUrl;
									win.disqus_blogger_canonical_homepage_url = canonicalHomepageUrl;
									
									// APPENDS REQUIRED HTML
									const elContent = system.elContent;
									elCommentBlock = createElem({
										c : "w--invisible",
										i : "disqus-blogger-comment-block",
										n : "discus content showed"
									});
									appends(elContent, elCommentBlock);
									
									// LOAD JS
									const js = createElem({t:"script"});
									js.async = true;
									js.src = "//" + win.disqus_shortname + ".disqus.com/blogger_item.js";		
						
									eventAdd(win, "message", _onMessage);
									appends(elHead, js); 
									
									
				
									// Disqus theme switching
									// https://thisdevbrain.com/disqus-auto-theme-switching/
									// disqus_hakhdkjfhjfhjbbhsbh	(search for related)
									(()=>{
										const disqus_config = function () {
											this.page.url = canonicalUrl;  // Replace PAGE_URL with your page's canonical URL variable
											this.page.identifier = canonicalUrl; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
										};
				
										document.addEventListener('themeChanged', function (e) { 
											if (document.readyState == 'complete') {
												DISQUS.reset({ reload: true, config: disqus_config });
											}
										});
									})();
								};
								const _onMessage = (e)=>{
									if(e.origin === "https://disqus.com"){
										eventRemove(win,  "message", _onMessage);
										setTimeout(()=>{
											// settimout dibuat agar tidak perlu melihat logo discus.
											// logo discus ini akan tampil sesaat sebelum from tampil
											// proses ini sepertinya tidak tergantung kecepatan loading
											// dengan kata lain, proses ini sama saja lamanya dengan jaringan cepat maupun tidak
											// adapun browser berlangsung tidak sampai 500ms
											removeClasses(elCommentBlock, "w--invisible");
											if(runCallback){
												runCallback();
											}
										}, 500);
									}
								};		
								return main;
							})());
							Systems.push(systemObj);
						}
						
						
						{	// CREATE AND APPEND DOM
							const elWrap = createElem({c : prefix + "a"});
							const elResponsiver = createElem({c : "w-responsiver"});					
							const elTabs = Systems.length <= 1 ? null : createElem({
								c : prefix + "b",
								f : (elem)=>{
									for(const system of Systems){
										appends(elem, system.elTabLink);
									}
								}
							});
							const elContent = createElem({
								c : prefix + "c",
								f : (elem)=>{
									for(const system of Systems){
										appends(elem, system.elContent);
									}
								}
							});
						
							if(elTabs){
								appends(elResponsiver, elTabs);
								addClasses(elWrap, "w--t1");
							}
							else{
								addClasses(elWrap, "w--t0");
							}
							appends(elResponsiver, elContent);
							
							appends(elWrap, elResponsiver);
							appends(elSection, elWrap);
						} 
						
						{	// INIT CONTENT 0
							Systems[0].open(()=>{
							});
						}
						
						if(callback){
							callback();
						}
					}
				});				
			}
			{	// #html
				fwWidgets_pushData({
					name : "html",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const elSection = widgetObj.elSection;
						Formatting_general_init(elSection);
						
						if(callback){
							callback();
						}
					}
				});
			}
			{	// #ad
				const createElem = p_elemCreateElem;
				const appends = p_elemAppends;
				const configsElemToObj = p_configsElemToObj;
				const fwAdsense = FW_Adsense;
				const elemRemove = p_elemRemove;
				const addClasses = p_elemAddClasses;
				
				const createOnFilledCallback = (widgetObj)=>{
					return ()=>{
						// no stuff
					};
				};
				const createOnUnFilledCallback = (widgetObj)=>{
					return ()=>{
						elemRemove(widgetObj.elWidget);
					};
				};
				fwWidgets_pushData({
					name : "ad",
					maxCount : null,
					init : (widgetObj, callback)=>{
						const {elWidget, elSection} = widgetObj;
						const configs = configsElemToObj(elWidget.id, null);
						if(!configs){
							return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "configs not found");
						}
						else{
							const adCode = configs.ad_code;
							if(!adCode){
								return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "no ad code");
							}
							else{
								const adsenseInsObj = fwAdsense.extractIns(adCode);
								if(!adsenseInsObj){
									// error or other advertiser
									return fwWidgets_runCallbackAndRemoveWidget(widgetObj, callback, "advertiser not supported");
								}
								else{
									addClasses(elWidget, "w--adsense");
									
									const elIns = fwAdsense.createIns(adsenseInsObj, createOnFilledCallback(widgetObj), createOnUnFilledCallback(widgetObj));
									const elResponsiver = createElem({c : "w-responsiver"});
									const elWrapper = createElem({c : "w-adsense-wrapper"});
									appends(elWrapper, elIns);
									appends(elResponsiver, elWrapper);
									appends(elSection, elResponsiver);
									fwAdsense.loadStaticJS();
								}
							}
						}
						
						
						if(callback){
							callback();
						} 
					}
				});
			}
			/*{
				fwWidgets_pushData({
					name : "footer",
					maxCount : 1,
					init : (widgetObj, callback)=>{
					}
				});
			}*/
		})();		
		
	

		// MULAI MENJALANKAN SCRIPT
		{ // ekstrak configs or data
			const configsElemToObj = p_configsElemToObj;
			const configsCreateData = p_configsCreateData;
			const objAssign = p_objAssign;
			const objLoop = p_objLoop;
			const elemRemove = p_elemRemove;
			const getById = p_elemGetById;
			const wijsConfigs = g_wijsConfigs;
			const wijsTexts = g_wijsTexts;
			const fwSkin = FW_Skin;
			const fwOverrideConfigs = FW_OverrideConfigs;
			
			{	// init override configs
				FW_OverrideConfigs.init();
			}
			{	// #configs_license_key
				const s_license_key = g_s_license_key;
				const configsData = configsCreateData([
					[s_license_key, 1, ""],
				]);
				const configs = configsElemToObj(s_license_key.replace("_", "-"), configsData, null); // karena configs data terdefinisi, return selalu onject
				objAssign(wijsConfigs, configs);
			}
			{	// #configs_blog_settings
				const configsData = configsCreateData([
					["posts_per_page", 3, 6, [1,20]],
				]);
				const configs = configsElemToObj("blog-data", configsData, null); // karena configs data terdefinisi, return selalu onject
				objAssign(wijsConfigs, configs);
			}
			{  // #configs_general
				const configsName = "general";
				const configs = configsElemToObj(configsName, FW_ConfigsGeneral.configsData, null); // karena configs data terdefinisi, return selalu onject
				fwOverrideConfigs.apply(configs, configsName);
				objAssign(wijsConfigs, configs);
			}
			{	// #configs_view_mode
				FW_ViewMode.getConfigs();
			}
			{	// #configs_blog_message
				const fwBlogMessage = FW_BlogMessage;
				if(fwBlogMessage){
					wijsConfigs.blog_message = configsElemToObj("blog-message", fwBlogMessage.configsData, null); // karena configs data terdefinisi, return selalu object
				}
			}
			{	// #configs_overlay_share_buttons
				const originalConfigs = configsElemToObj("overlay-share-buttons",  FC_OverlayShareButtons.configsData, null); // karena configs data terdefinisi, return selalu object
				FW_OverrideConfigs.apply(originalConfigs, "overlay_share_buttons");
				wijsConfigs.overlay_share_buttons = originalConfigs;
			}
			{	// #configs_overlay_contact_us
				wijsConfigs.overlay_contact_us = configsElemToObj("overlay-contact-us", FC_OverlayContactUs.configsData, null); // karena configs data terdefinisi, return selalu object
			}
			{	// #configs_window_resize
				wijsConfigs.window_resize = configsElemToObj("window-resized", FW_WindowResize.configsData, null); // karena configs data terdefinisi, return selalu object
			}
			{	// #configs_cookie_policy
				const originalConfigs = configsElemToObj("cookie-policy", FW_CookiePolicy.configsData, null); // karena configs data terdefinisi, return selalu object
				FW_OverrideConfigs.apply(originalConfigs, "cookie_policy");
				wijsConfigs.cookie_policy = originalConfigs;
			}
			{	// #configs_overlay_toc
				if(g_wijsBlog.isSingleItem){
					// karena fitur mendukungn konfigurasi page conditional,
					// fitur akan aktif hanya jika terdapat elemtnt configs 
					// ketika page conditional tidak terpenuhi, element configs tidak tersedia karena widget notavailable
					const elConfigs = getById("w-configs-overlay-toc");
					const usedConfigs =  !elConfigs ? null : configsElemToObj(elConfigs, FC_OverlayTOC.configsData, null); // karena configs data terdefinisi, return selalu object
					if(usedConfigs){
						FW_OverrideConfigs.apply(usedConfigs, "overlay_toc");
					}
					wijsConfigs.overlay_toc =usedConfigs;
				}
			}
			{	// #configs_breadcrumbs
				wijsConfigs.breadcrumbs = configsElemToObj("breadcrumbs", FW_Breadcrumbs.configsData, null); // karena configs data terdefinisi, return selalu object
			}
			{	// #configs_pagination
				if(g_wijsBlog.isMultipleItems){
					if(FW_BlogPagination){
						FW_BlogPagination.getConfigs();
						FW_BlogPagination.getData();
					}
				}
			}
		}
		{ // {{license_checker}} 
			const wijsConfigs = g_wijsConfigs;
			const s_wibloggerCom = g_s_wiBloggerCom;
			
			const fwLicenseValidator = FW_LisenceValidator;
			const key = wijsConfigs[g_s_license_key];
			if(key && fwLicenseValidator(key)){
				g_alphabetByLicenseKey = s_wibloggerCom+g_alphabet;
			}
		}
		{ // initialInit
			{ // appendCSS variable
				const getById = p_elemGetById;
				const getByClass = p_elemGetByClass;
				const appends = p_elemAppends;
				const elemRemove = p_elemRemove;
				const createTextNode = p_elemCreateTextNode;
				const mainScrollbarSizes = g_mainScrollbarSizes;
				const getBoundingClientRect = p_elemGetBoundingClientRect;
				const alphabetByLicenseKey = g_alphabetByLicenseKey;
				const elBlog = g_blog;
				
				// {{license_integrations}}
				// gunakan {{NEOS_LISENSE_ALPHABETBYKEY_GENERATOR}}
				const s_page_skin_1 = alphabetByLicenseKey[28]+alphabetByLicenseKey[13]+alphabetByLicenseKey[5]+alphabetByLicenseKey[7]+"-"+alphabetByLicenseKey[31]+alphabetByLicenseKey[23]+alphabetByLicenseKey[1]+alphabetByLicenseKey[26]+"-"+"1";
				const elPageSkin1 = getById(s_page_skin_1);
	
				
				// scrollbar size
				const newRules = "--scrollbar-size:" + mainScrollbarSizes[0] + "px";
				const newNode = createTextNode("body{" + newRules + "}");
				appends(elPageSkin1, newNode);
				
				// responsiver offset
				// elresponsiver harus dibuat bau karena kemungkinan yang dibuat diblog tidak tersedia atau dalam keadaan tersembunyi
				{
					const elResponsiver = createElem({c : "w-responsiver"});
					appends(elBlog, elResponsiver); // append harus pada blog karena jika alasan scrollbar yng diterapkan pada elblog bukan body
					const rects = getBoundingClientRect(elReponsiver);
					const leftOffsetRules = "--responsiver-offset-left:" + rects.left + "px";
					const rightOffsetRules = "--responsiver-offset-right:" + rects.right + "px";
					const newNode = createTextNode("body{" + leftOffsetRules + ";" + rightOffsetRules + "}");
					appends(elPageSkin1, newNode);
					
					g_responsiverOffsetLeft = rects.left;
					g_responsiverOffsetRight = rects.right;
					
					elemRemove(elResponsiver);
				}
			}
			{ // ad body classes
				const addClasses = p_elemAddClasses;
				const body = g_body;
				const isTouch = g_isTouch;
				const classes = [];
				classes.push("w--" + (isTouch ? "" : "non") + "touch");
				body.className += " " + classes.join(" ");
			}
			{ // define view mode
				const win = g_win;
				const body = g_body;
				const local = p_local;
				const fwOverrideConfigs = FW_OverrideConfigs;
				
				const wijsConfigs = g_wijsConfigs;
				const configs = wijsConfigs.view_mode;
				fwOverrideConfigs.apply(configs, "view_mode");
				
				const localKey = local.createKey("View_Mode"); // sesuaikan dengan onclick change
				const localData = local.get(localKey);
				
				const s_light = "light";
				const s_dark = "dark";
				const s_auto = "auto";
				
				const {
					enable,
					default_mode,
				} = configs;
				
				let usedMode = default_mode;
				if(localData && [s_light, s_dark].indexOf(localData) !== -1){
					if(enable){
						usedMode = localData;
					}
					else{
						// ketika terdapat local dan valid, local hanya akan dibaca jika fitur diaktifkan
						// ketika fitur switch dinonaktifkan, data local tidak akan dibaca
						// hal ini karena mode terpilih bukan dari kehendak pengunjung melainkan dari setting admin blog
						// tetap gunakan default
					}
				}
				else{
					// tidak terdapat local atau data local tidak valid (value bukan light and dark)
					// tetap gunakan default
				}
				
				// add class to body
				const oldClasses = body.className;
				let newClasses = oldClasses.replace(/\s*w--noscript/, "");
				newClasses += " w--" + usedMode + "mode";
				newClasses = newClasses.trim();
				body.className = newClasses;
				
				// local hanya perlu disimpan jika fitur diaktifkan
				if(enable){
					local.set(localKey, usedMode);
				}				
			}
			{ // execute event initial
				// {{wijsEvents.initial.execution}}
				const wijsEvents = g_wijsEvents;
				const fns = wijsEvents.initial.items;
				for(const fn of fns){
					fn();
				}
			}
		}
		{ // initFonts
			FW_Fonts.init();
		}
		{ // load_fontawesome
			// D:\WEB DEVELOPER\THEMES PROJECT\ASSETS\JS\FontAwesomeLoader.js
			const appends = p_elemAppends;
			const createElem = p_elemCreateElem;
			const head = g_head;
			const fontAwesomeUrl = Dev_fontAwesomeUrl;
			
			const link_tag = createElem({t:"link"});
			link_tag.rel = "stylesheet";
			link_tag.media = "only x";
			link_tag.href = fontAwesomeUrl;
			appends(head, link_tag);
			setTimeout(()=>{link_tag.media="all"});
		}
		{ // load static js adsense
		}
		
		
		// MEMPROSES HEADER
		// HEADER TIDAK DIPROSES MELALUI INIT WIDGETS, JADI HARUS DILAKUKAN MANUAL DISINI
		Widget_BlogHeader.init();
		
		
		// MEMPROSES BLOG MESSAGE
		// BLOG TIDAK DIPROSES MELALUI INIT WIDGETS, JADI HARUS DILAKUKAN MANUAL DISINI
		(()=>{
			const fwBlogMessage = FW_BlogMessage;
			if(fwBlogMessage){
				fwBlogMessage.init();
			}
		})();
		
		{ // push SE_OnAllWidgetsInited
			const seOnFinish = SE_OnFinish;
			const seOnAllWidgetsInited = SE_OnAllWidgetsInited;
			const seOnAllWidgetsInited_push = seOnAllWidgetsInited.push;
			
			seOnAllWidgetsInited_push(()=>{ // {{add_nofollow_for_external_link}}
				const getByTag = p_elemGetByTag;
				const urlAssignRel = p_urlAssignRel;
				const els = getByTag(null, "A");
				if(els){
					for(const el of els){
						urlAssignRel(el);
					}
				}
			});
			seOnAllWidgetsInited_push(()=>{ // {{open_external_link_in_new_tab}}
				const getByTag = p_elemGetByTag;
				const urlAssignTarget = p_urlAssignTarget;
				const els = getByTag(null, "A");
				if(els){
					for(const el of els){
						urlAssignTarget(el);
					}
				}
			});
			seOnAllWidgetsInited_push(()=>{ // {{force footer to bottom side}}
				// algoritma
				// posisi footer akan diganti ke absolute jika offset bottom > 0
				// ini akan membuat footer mepet ke layar
				const getById = p_elemGetById;
				const addClasses = p_elemAddClasses;
				const elemGetOffsetToDocument = p_elemGetOffsetToDocument;
				const elBlogFooterContainer = getById("w-footer-w1");
				if(elBlogFooterContainer){
					const offsets = elemGetOffsetToDocument(elBlogFooterContainer);
					if(offsets){
						if(offsets.bottom > 0){
							addClasses(elBlogFooterContainer, "w--p2");
						}
					}
				}
				
				/*const elBlogFooter = getById("w-blog-footer");
				if(elBlogFooter){
					const offsets = elemGetOffsetToDocument(elBlogFooter);
					if(offsets){
						if(offsets.bottom > 0){
							addClasses(elBlogFooter, "w--p2");
						}
					}
				}*/
			});
			seOnAllWidgetsInited_push(()=>{ // {{initStickyButtonsLeft}}
				const getById = p_elemGetById;
				const insertJsBasedCss = p_insertJsBasedCss;
				const appends = p_elemAppends;
				const getBoundingClientRect = p_elemGetBoundingClientRect;
				const addClasses = p_elemAddClasses;
				const removeClasses = p_elemRemoveClasses;
				const elemRemove = p_elemRemove;
				
				const blogw1 = g_blogw1;
				const blogw2 = g_blogw2;
			
				
				const seOnscrollStop = SE_OnscrollStop;
				const responsiverOffsetLeft = g_responsiverOffsetLeft;
				
				const fwOverrideConfigs = FW_OverrideConfigs;
				
				const elFooterId = "w-blog-footer";
				const elPanelId = "w-100left";
				const elPanel = getById(elPanelId);
				
				if(!elPanel){
					return;
				}
				
				const elPostBody = getById("w-post-body");
				let hasButtons = false;
				
				{ // TOC
					if(g_wijsBlog.isSingleItem){
						if(elPostBody){
							const configs = g_wijsConfigs.overlay_toc; // null || configs
							if(!configs){
								// element configs tidak tersedia kemungkinan karena page conditional tidak terpenuhi
								// do nothing!!!!
							}
							else{					
								const overlayTocInstance = new FC_OverlayTOC.create(elPostBody, configs, {});
								if(overlayTocInstance.enable){
									hasButtons = true;
									const elOpener = overlayTocInstance.createOpener();
									appends(elPanel, elOpener);
								}
							}
						}
					}
				}
				{	// DEFINE ELPANEL CSS
					// samakan dengan panel right, namun disini variable yang dibutuhkan adalah responsiverOffsetLeft (bukan right)
					// selain itu, scrollbarSize tidak dibutuhkan seperti halnya untuk panel right
					if(hasButtons){
						const buttonWidth = 32;
						let left;
						if(60 + buttonWidth + 20 < responsiverOffsetLeft){
							left = responsiverOffsetLeft - 60 - buttonWidth;
						}
						else if(40 + buttonWidth + 20 < responsiverOffsetLeft){
							left = responsiverOffsetLeft - 40 - buttonWidth;
						}
						else if(30 + buttonWidth + 20 < responsiverOffsetLeft){
							left = responsiverOffsetLeft - 30 - buttonWidth;
						}
						else if(20 + buttonWidth + 20 < responsiverOffsetLeft){
							left = responsiverOffsetLeft - 20 - buttonWidth;
						}
						else if(15 + buttonWidth + 15 < responsiverOffsetLeft){
							left = responsiverOffsetLeft - 15 - buttonWidth;
						}
						else{
							left = responsiverOffsetLeft;
						}
						
						if(left){
							insertJsBasedCss("#"+ elPanelId, "left:"+ left + "px");
						}
					}
				}
				{	//	ADD ONSCROLLTOP
					// AGAR TOMBOL TIDAK MEPET DENGAN TOMBOL BACK TO TOP FOOTER
					if(hasButtons){
						const elFooter = getById(elFooterId);
						if(elFooter){
							// INITIAL POSITION
							// pada keadaan awal, ada ketika konten blog > layar, tombol akan mepet ke bawah
							// tombol tidak akan bergerak keatas karena event onscroll tidak pernah terpanggil
							// ini mengakibatkan tombol mepet dengan tombol go to top footer
							// oleh karena ini, perlu pendefinisian awal
							{
								const hasScrollbar = blogw1.clientHeight < blogw2.offsetHeight;
								if(!hasScrollbar){
									removeClasses(elPanel, "w--p1");
									addClasses(elPanel, "w--p2");
								}
							}
							
							seOnscrollStop.push((e)=>{
								const footerRects = getBoundingClientRect(elFooter);
								const footerToBottom = footerRects.bottom;
								if(footerToBottom > -10){
									removeClasses(elPanel, "w--p1");
									addClasses(elPanel, "w--p2");
								}
								else{
									addClasses(elPanel, "w--p1");
									removeClasses(elPanel, "w--p2");
								}
							});
						}
					}
				}
				{	// REMOVE IF NO BUTTONS
					if(!hasButtons){
						elemRemove(elPanel);
					}
				}
			});
			seOnAllWidgetsInited_push(()=>{ // {{initStickyButtonsRight}}
				const body = g_body;
				const getById = p_elemGetById;
				const getByClass = p_elemGetByClass;
				const getByTag = p_elemGetByTag;
				const createElem = p_elemCreateElem;
				const stringFirstLetterToUpperCase = p_stringFirstLetterToUpperCase;
				const getBoundingClientRect = p_elemGetBoundingClientRect;
				const appends = p_elemAppends;
				const addClasses = p_elemAddClasses;
				const removeClasses = p_elemRemoveClasses;
				const elemRemove = p_elemRemove;
				const stringToArray = p_stringToArray;
				const insertJsBasedCss = p_insertJsBasedCss;
				const hasClass = p_elemHasClass;
				const local = p_local;
				
				const blogw1 = g_blogw1;
				const blogw2 = g_blogw2;
				
				const wijsConfigs = g_wijsConfigs;
				const wijsConfigsStickyShareButtons = wijsConfigs.sticky_share_buttons;
				const wijsBlog = g_wijsBlog;
				const canonicalUrl = wijsBlog.canonicalUrl;
				const wijsEvents = g_wijsEvents;
				// wijsEvents.changeViewMode
				
				const responsiverOffsetRight = g_responsiverOffsetRight;
				const scrollbarSize = g_mainScrollbarSizes[0];
				
				const fwMiddleModal = FW_MiddleModal;
				const fcOverlayShareButtons = FC_OverlayShareButtons;
				const fcOverlayContactUs = FC_OverlayContactUs;
				const fwSkin = FW_Skin;
				
				const seOnscrollStop = SE_OnscrollStop;
				
				
				
				const elFooterId = "w-blog-footer";
				const elPanelId = "w-100right";
				const elPanel = getById(elPanelId);
				
				if(!elPanel){
					return;
				}
				
				let hasShareButton = false;
				let hasContactUsButton = false;
				let hasViewModeButton = false;
				
			
				{	// SHARE BUTTONS
					const configs = wijsConfigs.overlay_share_buttons;
					const shareButtonsInstance = new fcOverlayShareButtons.create(configs);
					if(shareButtonsInstance.enable){
						hasShareButton = true;
						const elOpener = shareButtonsInstance.createOpener();
						appends(elPanel, elOpener);
					}
				}
				{	// CONTACT US
					const configs = wijsConfigs.overlay_contact_us;
					const contactUsInstance = new fcOverlayContactUs.create(configs);
					if(contactUsInstance.enable){
						hasContactUsButton = true;
						const elOpener = contactUsInstance.createOpener();
						appends(elPanel, elOpener);
					}
				}
				{	// TOGGLE VIEW MODE
					const icon_moon = g_wijsIcons.moon;
					const icon_sun = g_wijsIcons.sun;
					const configs = wijsConfigs.view_mode;
					const {enable, default_mode, switch_to_light_button_title, switch_to_dark_button_title, toggle_skin} = configs;
					const s__lightmode = "w--lightmode";
					const s__darkmode = "w--darkmode";
					
					if(enable){
						hasViewModeButton = true;
						const elButton = createElem({
							t : "button",
							c : "w-nostyle w-toggleview",
							f : (elem)=>{
								if(toggle_skin){
									addClasses(elem, fwSkin.createClassString(toggle_skin));
								}
								
								elem.innerHTML = `${icon_moon}${icon_sun}<span>
									<span class='w-dark-label'>${switch_to_dark_button_title}</span>
									<span class='w-light-label'>${switch_to_light_button_title}</span>
								</span>`;
							}
						});
						appends(elPanel, elButton);
						
						// onclick
						const localKey = local.createKey("View_Mode");  // sesuaikan dengan initial at xml
						elButton.onclick = (e)=>{
							e.preventDefault();
							const currentIsDark = hasClass(body, s__darkmode);
							if(currentIsDark){
								removeClasses(body, s__darkmode);
								addClasses(body, s__lightmode);
							}
							else{
								removeClasses(body, s__lightmode);
								addClasses(body, s__darkmode);
							}
							
							local.set(localKey, currentIsDark ? "light" : "dark");
							
							
							// Create and send event for disqus
							// https://thisdevbrain.com/disqus-auto-theme-switching/
							// disqus_hakhdkjfhjfhjbbhsbh
							{
								const event = new Event('themeChanged');
								document.dispatchEvent(event);
							}
							
							{	// panggil on change view mode
								// {{wijsEvents.changeViewMode.execution}}
								const fns = wijsEvents.changeViewMode.items;
								for(const fn of fns){
									fn(currentIsDark ? "light" : "dark");
								}
							}
						};				
					}
				}
				{	// DEFINE ELPANELRIGHT CSS
					if(hasShareButton || hasContactUsButton || hasViewModeButton){
						const buttonWidth = 32;
						let right;
						if(60 + buttonWidth + 20 + scrollbarSize < responsiverOffsetRight){
							right = responsiverOffsetRight - 60 - buttonWidth;
						}
						else if(40 + buttonWidth + 20 + scrollbarSize < responsiverOffsetRight){
							right = responsiverOffsetRight - 40 - buttonWidth;
						}
						else if(30 + buttonWidth + 20 + scrollbarSize < responsiverOffsetRight){
							right = responsiverOffsetRight - 30 - buttonWidth;
						}
						else if(20 + buttonWidth + 20 + scrollbarSize < responsiverOffsetRight){
							right = responsiverOffsetRight - 20 - buttonWidth;
						}
						else if(15 + buttonWidth + 15 + scrollbarSize < responsiverOffsetRight){
							right = responsiverOffsetRight - 15 - buttonWidth;
						}
						else{
							right = responsiverOffsetRight;
						}
						
						if(right){
							insertJsBasedCss("#"+ elPanelId, "right:"+ right + "px");
						}
					}
				}
				{	//	ADD ONSCROLLTOP AND DEFINE INITIAL POSTION
					// AGAR TOMBOL TIDAK MEPET DENGAN TOMBOL BACK TO TOP FOOTER
					if(hasShareButton || hasContactUsButton || hasViewModeButton){
						const elFooter = getById(elFooterId);
						if(elFooter){
							// INITIAL POSITION
							// pada keadaan awal, ada ketika konten blog > layar, tombol akan mepet ke bawah
							// tombol tidak akan bergerak keatas karena event onscroll tidak pernah terpanggil
							// ini mengakibatkan tombol mepet dengan tombol go to top footer
							// oleh karena ini, perlu pendefinisian awal
							{
								const hasScrollbar = blogw1.clientHeight < blogw2.offsetHeight;
								if(!hasScrollbar){
									removeClasses(elPanel, "w--p1");
									addClasses(elPanel, "w--p2");
								}
							}
							
							// ADD ON SCROLL
							seOnscrollStop.push((e)=>{
								const footerRects = getBoundingClientRect(elFooter);
								const footerToBottom = footerRects.bottom;
								if(footerToBottom > -10){
									removeClasses(elPanel, "w--p1");
									addClasses(elPanel, "w--p2");
								}
								else{
									addClasses(elPanel, "w--p1");
									removeClasses(elPanel, "w--p2");
								}
							});
						}
					}
				}
				{	// REMOVE IF NO BUTTONS
					if(!hasShareButton && !hasContactUsButton && !hasViewModeButton){
						elemRemove(elPanel);
					}
				}
			});
			seOnAllWidgetsInited_push(()=>{ // {{init formatting}}
				// sementara tidak didukung karena akan memproses berbagai elemen yang sudah dibuat oleh dev sebelumnya
				// bisa dilakukan terakhir karena sebagian besar mungkin sudah diproses pada pemanggil postbody dan html

			});
			seOnAllWidgetsInited_push(()=>{ // {{process link with anchor}}
				// KUMPULAN ITEM YANG TIDAK AKAN DIPROSES
				// untuk sekarang, link yang akan diabaikan adalah link overlay toc (dalam modal)
				// sedangkan untuk link toc manul, ini tetap akan diproses
				const getByClass = p_elemGetByClass;
				const getByTag = p_elemGetByTag;
				
				const tocModalWrapperClass = "w-99a";
				const preventedLinks = (()=>{
					const items = [];
					const elToc = getByClass(null, tocModalWrapperClass, 0);
					if(elToc){
						const tocItems = getByTag(elToc, "a");
						if(tocItems){
							for(const item of tocItems){
								items.push(item);
							}
						}
					}
					
					return items;
				})();
				FW_JumperByHash.initUnder(null, preventedLinks); // param(elInitedParent, preventLinks), null pada elInitedParent adalah document				
			});
			// next here ........................
			// next here ........................
			
			
			// {{license_integrations}}
			if(g_alphabetByLicenseKey[1] === "i"){
				seOnAllWidgetsInited_push(seOnFinish.execute); // onFinish
			}
		}
		{ // push SE_OnFinish
			const seOnFinish = SE_OnFinish;
			const seOnFinish_push = SE_OnFinish.push;
			
			seOnFinish_push(()=>{ // remove {{notavailabel}} and {{nocontents}} widgets
				// proses remove {{notavailabel}} dan {{nocontents} widget dilakukan pada onFinish
				// ini tidak dilakukan pada {{OnAllWidgetsInited}} karena ada kemungkinan masih dibutuhkan oleh proses lain yang datang setelahnya
				const getByClass = p_elemGetByClass;
				const hasClass = p_elemHasClass;
				const elemRemove = p_elemRemove;
				const removeClasses = p_elemRemoveClasses;
				
				const els = [];
				const elWidgetsW = getByClass(null, "w-widget");
				const elWidgets = getByClass(null, "widget");
				if(elWidgetsW){
					for(const el of elWidgetsW){
						if(hasClass(el, "w--notavailable") || hasClass(el, "w--nocontents")){
							if(els.indexOf(el) === -1){
								els.push(el);
							}
						}
					}
				}
				if(elWidgets){
					for(const el of elWidgets){
						if(hasClass(el, "w--notavailable") || hasClass(el, "w--nocontents")){
							if(els.indexOf(el) === -1){
								els.push(el);
							}
						}
					}
				}
				for(const el of els){
					//elemRemove(el);
				}
			});
			seOnFinish_push(()=>{ // init stickyTop
				FW_Fonts.onReady("all", (fState)=>{
					FT_StickyTop.init();
				});
			});
			seOnFinish_push(FW_CookiePolicy.init);
			seOnFinish_push(FW_WindowResize.init);
			seOnFinish_push(SE_OnscrollStop.init);
			seOnFinish_push(()=>{ // remove w-configs dan w-data
				const getByClass = p_elemGetByClass;
				const elemRemove = p_elemRemove;
				
				const els = [];
				const elConfigs = getByClass(null, "w-configs");
				const elDatas = getByClass(null, "w-data");
				if(elConfigs){
					for(const el of elConfigs){
						if(els.indexOf(el) === -1){
							els.push(el);
						}
					}
				}
				if(elDatas){
					for(const el of elDatas){
						if(els.indexOf(el) === -1){
							els.push(el);
						}
					}
				}
				
				for(const el of els){
					elemRemove(el);
				}
			});		
			seOnFinish_push(()=>{ // jump to anchor
				FW_JumperByHash.initPageURL();
			});			
			
			// next here ........................
		}
		{ // push onload
			const seOnLoad = SE_OnLoad;
			const seOnLoad_push = seOnLoad.push;
			
			// items here..............
		}
		
		
		{	// init widgets
			FW_Widgets.init();
		}
		{	// onloaded
			p_eventAdd(g_win, "load", ()=>{
				SE_OnLoad.execute();
			});
		}
	};
	
	
	// EXCUTE {{MAIN}} ON READY AND ON CSS APPLIED
	(()=>{
		const win = window;
		const doc = document;
		const runMain = ()=>{
			const body = doc.getElementsByTagName("body")[0];
			const elCssAppliedChecker = doc.createElement("div");
			elCssAppliedChecker.id = "w-check-is-css-applied";
			body.appendChild(elCssAppliedChecker);
			
			const intervalFn = ()=>{
				if(elCssAppliedChecker.clientWidth === 20){
					clearInterval(interval);
					body.removeChild(elCssAppliedChecker);
					MAIN();
				}
			};
			let interval = setInterval(intervalFn, 100);
		};
		
		if(doc.readyState === "loading"){ // cek status content loaded (https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)		
			win.addEventListener("DOMContentLoaded", (e)=>{
				runMain();
			});
		}
		else{
			runMain();
		}	
	})();
})();
/*]]>*/	
