(function(a){"use strict";a(document).ready(function(){a('.widget_product_search .search-field').find("input[type='text']").each(function(b){a(this).val()||a(this).attr("placeholder","Search and Press Enter")}),a('.product-layout-list').parents('ul.products').addClass('products-list'),a('.single_variation_wrap').addClass('clearfix'),a('.woocommerce-variation-add-to-cart').addClass('clearfix'),a('.cart-total-wrap').on('click',function(){a('.widget-cart-sidebar').toggleClass('open'),a(this).toggleClass('cart-open'),a('.site-overlay').toggleClass('open')}),a('.site-overlay').on('click',function(){a(this).removeClass('open'),a(this).parents('#page').find('.widget-cart-sidebar').removeClass('open')}),a('.woocommerce-tab-heading').on('click',function(){a(this).toggleClass('open'),a(this).parent().find('.woocommerce-tab-content').slideToggle('')}),a('.site-menu-right .h-btn-cart, .mobile-menu-cart .h-btn-cart').on('click',function(b){b.preventDefault(),a(this).parents('#ct-header-wrap').find('.widget_shopping_cart').toggleClass('open'),a('.ct-hidden-sidebar').removeClass('open'),a('.ct-search-popup').removeClass('open')})})})(jQuery)