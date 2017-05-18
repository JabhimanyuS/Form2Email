'use strict';

(function () {
    var template = Handlebars.template,
        templates = Handlebars.templates = Handlebars.templates || {};
    templates['footer1'] = template({ 'compiler': [7, '>= 4.0.0'], 'main': function main(container, depth0, helpers, partials, data) {
            return '	\r\n   	<td align="center" style="\r\n    background: #636363;\r\n    padding: 5% 0% 4%;\r\n    text-align: center;\r\n    ">\r\n    <img src="https://gallery.mailchimp.com/15f90710427d06c035802eb09/images/061dab56-6aaa-43b3-9d51-d426148bb7dc.png" style="\r\n    width: 170px;\r\n    ">\r\n    </td>';
        }, 'useData': true });
    templates['footer1_2'] = template({ 'compiler': [7, '>= 4.0.0'], 'main': function main(container, depth0, helpers, partials, data) {
            return '<td align="center" style="font-size: 0.9rem;line-height:22px;color: #ffffff;letter-spacing:0.5px;padding: 0 7% 15px;text-align: center;font-family: \'Roboto\',\'Helvetica\',\'Arial\',sans-serif;background: #636363;text-decoration: none !important;color: #ffffff !important;">\r\n        <a href="https://nowfloats.com" style="\r\n        text-decoration: none !important;\r\n        color: #ffffff !important;\r\n        ">https://nowfloats.com </a><span>| </span><a href="mailto:ria@nowfloats.com" style="\r\n        text-decoration: none !important;\r\n        color: #ffffff !important;\r\n        ">ria@nowfloats.com </a><span>|</span>\r\n        <a href="tel:18601231233" style="\r\n        text-decoration: none !important;\r\n        color: #ffffff !important;\r\n        "> 18601231233</a>\r\n    </td>';
        }, 'useData': true });
    templates['footer2'] = template({ 'compiler': [7, '>= 4.0.0'], 'main': function main(container, depth0, helpers, partials, data) {
            return '<td align="center" style="width:100%;margin:0">\r\n<img src="https://gallery.mailchimp.com/15f90710427d06c035802eb09/images/94fd807b-f672-4af2-98df-262c8ba8abec.png" style="outline:none;text-decoration:none;display:block;color:#fff!important;border:0;width: 50%;" class="CToWUd">\r\n</td>';
        }, 'useData': true });
    templates['footer2_2'] = template({ 'compiler': [7, '>= 4.0.0'], 'main': function main(container, depth0, helpers, partials, data) {
            return '<td valign="middle" align="center" style="height: 15px;width:100%;margin:0;padding:0;" bgcolor="#FFB900">\r\n</td>';
        }, 'useData': true });
})();