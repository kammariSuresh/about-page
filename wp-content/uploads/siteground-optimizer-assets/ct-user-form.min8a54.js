jQuery(document).ready(function(b){"use strict";b(document).find('.ct-user-form-login .login-group').on('keypress','input',function(a){var d=a.keyCode?a.keyCode:a.which;d=='13'&&c(b(this))}),b(document).find('.ct-user-form-login .login-group').on('keypress','input',function(c){a(b(this),'','hide')}),b(document).find('.ct-user-form').on('click','.button-login',function(a){a.preventDefault(),c(b(this))}),b(document).find('.ct-user-form-register').on('click','.btn-up-register',function(a){a.preventDefault(),f(b(this))}),b(document).find('.ct-user-form-register').on('keypress','input',function(c){a(b(this),'','hide')}),b(document).find('.ct-user-form').on('keypress','input',function(a){var c=a.keyCode?a.keyCode:a.which;c=='13'&&f(b(this))});function f(l){var c=l.parents('.ct-user-form-register'),f=c.find('input#res_user'),j=c.find('input#res_pass1'),k=c.find('input#res_pass2'),h=c.find('input#res_email'),i=g(f,j,k,h);i!==!1&&(d(c),b.post(casethemesuser.ajax,{action:'form_ajax_register',data:i,_ajax_nonce:casethemesuser.nonce},function(b){b.error==!0?(b.user_null!=void 0&&a(f,b.user_null),b.pass_null!=void 0&&a(j,b.pass_null),b.email_null!=void 0&&a(h,b.email_null),b.passconfirm!=void 0&&a(k,b.passconfirm),b.user_invalid!=void 0&&a(f,b.user_invalid),b.user_exists!=void 0&&a(f,b.user_exists),b.email_exists!=void 0&&a(h,b.email_exists)):location.reload()}),e(c))}function g(c,d,i,e){var b=!0,j=c.val().trim(),g=d.val().trim(),l=i.val().trim(),k=e.val().trim(),f;return!!(j==''?(a(c,c.data('validate')),b=!1):4>j.length&&(a(c,c.data('user-length')),b=!1),g==''?(a(d,d.data('validate')),b=!1):5>g.length?(a(d,d.data('pass-length')),b=!1):g!=l&&(a(i,i.data('pass-confirm')),b=!1),k==''?(a(e,e.data('validate')),b=!1):h(k)===!1&&(a(e,e.data('email-format')),b=!1),b===!0)&&(f={},f.user=j,f.pass=g,f.email=k,f.passconfirm=l,f)}function c(k){var c={},f=k.parents('.ct-user-form'),g=f.find('input.user_name'),h=f.find('input.password'),j=g.val(),i=h.val();j==''&&a(g,g.data('validate')),i==''&&a(h,h.data('validate')),c.user=j,c.pass=i,c.rememberme=f.find('input.rememberme').val(),c.user&&c.pass&&(d(f),b.post(casethemesuser.ajax,{action:'user_press_login',data:c,_ajax_nonce:casethemesuser.nonce},function(b){b.error==!0?(b.user!=void 0&&a(g,b.user),b.pass!=void 0&&a(h,b.pass)):location.reload(),e(f)}))}function d(a){a.find('input, button, select').each(function(){b(this).prop('disabled',!0)})}function e(a){a.find('input, button, select').each(function(){b(this).prop('disabled',!1)})}function h(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)}function a(a,c,b){b=b||'show',b=='show'?a.next().hasClass('wpcf7-not-valid-tip')===!1?(a.after('<span role="alert" class="wpcf7-not-valid-tip" style="display:none">'+c+'</span>'),a.next().fadeIn('slow')):a.parent().find('.wpcf7-not-valid-tip').length>0&&(a.parent().find('.wpcf7-not-valid-tip').remove(),a.after('<span role="alert" class="wpcf7-not-valid-tip" style="display:none">'+c+'</span>'),a.next().fadeIn('slow')):a.parent().find('.wpcf7-not-valid-tip').length>0&&a.parent().find('.wpcf7-not-valid-tip').fadeOut('slow')}})