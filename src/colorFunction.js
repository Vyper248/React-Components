//Find the best text color based on background color
//https://gomakethings.com/dynamically-changing-the-text-color-based-on-background-color-contrast-with-vanilla-js/
const getContrastYIQ = (hexcolor) => {
    //check if normal color name used
    hexcolor = convertColorToHex(hexcolor);

    //remove # if included
    if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

    //convert from 3 to 6 hex length
    if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	const r = parseInt(hexcolor.substr(0,2),16);
	const g = parseInt(hexcolor.substr(2,2),16);
	const b = parseInt(hexcolor.substr(4,2),16);
	const yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? 'black' : 'white';
}

const convertColorToHex = (color) => {
    const colors = {
        aliceblue: {hex:'F0F8FF'},
        antiquewhite: {hex:'FAEBD7'},
        aqua: {hex:'00FFFF'},
        aquamarine: {hex:'7FFFD4'},
        azure: {hex:'F0FFFF'},
        beige: {hex:'F5F5DC'},
        bisque: {hex:'FFE4C4'},
        black: {hex:'000000'},
        blanchedalmond: {hex:'FFEBCD'},
        blue: {hex:'0000FF'},
        blueviolet: {hex:'8A2BE2'},
        brown: {hex:'A52A2A'},
        burlywood: {hex:'DEB887'},
        cadetblue: {hex:'5F9EA0'},
        chartreuse: {hex:'7FFF00'},
        chocolate: {hex:'D2691E'},
        coral: {hex:'FF7F50'},
        cornflowerblue: {hex:'6495ED'},
        cornsilk: {hex:'FFF8DC'},
        crimson: {hex:'DC143C'},
        cyan: {hex:'00FFFF'},
        darkblue: {hex:'00008B'},
        darkcyan: {hex:'008B8B'},
        darkgoldenrod: {hex:'B8860B'},
        darkgray: {hex:'A9A9A9'},
        darkgrey: {hex:'A9A9A9'},
        darkgreen: {hex:'006400'},
        darkkhaki: {hex:'BDB76B'},
        darkmagenta: {hex:'8B008B'},
        darkolivegreen: {hex:'556B2F'},
        darkorange: {hex:'FF8C00'},
        darkorchid: {hex:'9932CC'},
        darkred: {hex:'8B0000'},
        darksalmon: {hex:'E9967A'},
        darkseagreen: {hex:'8FBC8F'},
        darkslateblue: {hex:'483D8B'},
        darkslategray: {hex:'2F4F4F'},
        darkslategrey: {hex:'2F4F4F'},
        darkturquoise: {hex:'00CED1'},
        darkviolet: {hex:'9400D3'},
        deeppink: {hex:'FF1493'},
        deepskyblue: {hex:'00BFFF'},
        dimgray: {hex:'696969'},
        dimgrey: {hex:'696969'},
        dodgerblue: {hex:'1E90FF'},
        firebrick: {hex:'B22222'},
        floralwhite: {hex:'FFFAF0'},
        forestgreen: {hex:'228B22'},
        fuchsia: {hex:'FF00FF'},
        gainsboro: {hex:'DCDCDC'},
        ghostwhite: {hex:'F8F8FF'},
        gold: {hex:'FFD700'},
        goldenrod: {hex:'DAA520'},
        gray: {hex:'808080'},
        grey: {hex:'808080'},
        green: {hex:'008000'},
        greenyellow: {hex:'ADFF2F'},
        honeydew: {hex:'F0FFF0'},
        hotpink: {hex:'FF69B4'},
        indianred: {hex:'CD5C5C'},
        indigo: {hex:'4B0082'},
        ivory: {hex:'FFFFF0'},
        khaki: {hex:'F0E68C'},
        lavender: {hex:'E6E6FA'},
        lavenderblush: {hex:'FFF0F5'},
        lawngreen: {hex:'7CFC00'},
        lemonchiffon: {hex:'FFFACD'},
        lightblue: {hex:'ADD8E6'},
        lightcoral: {hex:'F08080'},
        lightcyan: {hex:'E0FFFF'},
        lightgoldenrodyellow: {hex:'FAFAD2'},
        lightgray: {hex:'D3D3D3'},
        lightgrey: {hex:'D3D3D3'},
        lightgreen: {hex:'90EE90'},
        lightpink: {hex:'FFB6C1'},
        lightsalmon: {hex:'FFA07A'},
        lightseagreen: {hex:'20B2AA'},
        lightskyblue: {hex:'87CEFA'},
        lightslategray: {hex:'778899'},
        lightslategrey: {hex:'778899'},
        lightsteelblue: {hex:'B0C4DE'},
        lightyellow: {hex:'FFFFE0'},
        lime: {hex:'00FF00'},
        limegreen: {hex:'32CD32'},
        linen: {hex:'FAF0E6'},
        magenta: {hex:'FF00FF'},
        maroon: {hex:'800000'},
        mediumaquamarine: {hex:'66CDAA'},
        mediumblue: {hex:'0000CD'},
        mediumorchid: {hex:'BA55D3'},
        mediumpurple: {hex:'9370DB'},
        mediumseagreen: {hex:'3CB371'},
        mediumslateblue: {hex:'7B68EE'},
        mediumspringgreen: {hex:'00FA9A'},
        mediumturquoise: {hex:'48D1CC'},
        mediumvioletred: {hex:'C71585'},
        midnightblue: {hex:'191970'},
        mintcream: {hex:'F5FFFA'},
        mistyrose: {hex:'FFE4E1'},
        moccasin: {hex:'FFE4B5'},
        navajowhite: {hex:'FFDEAD'},
        navy: {hex:'000080'},
        oldlace: {hex:'FDF5E6'},
        olive: {hex:'808000'},
        olivedrab: {hex:'6B8E23'},
        orange: {hex:'FFA500'},
        orangered: {hex:'FF4500'},
        orchid: {hex:'DA70D6'},
        palegoldenrod: {hex:'EEE8AA'},
        palegreen: {hex:'98FB98'},
        paleturquoise: {hex:'AFEEEE'},
        palevioletred: {hex:'DB7093'},
        papayawhip: {hex:'FFEFD5'},
        peachpuff: {hex:'FFDAB9'},
        peru: {hex:'CD853F'},
        pink: {hex:'FFC0CB'},
        plum: {hex:'DDA0DD'},
        powderblue: {hex:'B0E0E6'},
        purple: {hex:'800080'},
        rebeccapurple: {hex:'663399'},
        red: {hex:'FF0000'},
        rosybrown: {hex:'BC8F8F'},
        royalblue: {hex:'4169E1'},
        saddlebrown: {hex:'8B4513'},
        salmon: {hex:'FA8072'},
        sandybrown: {hex:'F4A460'},
        seagreen: {hex:'2E8B57'},
        seashell: {hex:'FFF5EE'},
        sienna: {hex:'A0522D'},
        silver: {hex:'C0C0C0'},
        skyblue: {hex:'87CEEB'},
        slateblue: {hex:'6A5ACD'},
        slategray: {hex:'708090'},
        slategrey: {hex:'708090'},
        snow: {hex:'FFFAFA'},
        springgreen: {hex:'00FF7F'},
        steelblue: {hex:'4682B4'},
        tan: {hex:'D2B48C'},
        teal: {hex:'008080'},
        thistle: {hex:'D8BFD8'},
        tomato: {hex:'FF6347'},
        turquoise: {hex:'40E0D0'},
        violet: {hex:'EE82EE'},
        wheat: {hex:'F5DEB3'},
        white: {hex:'FFFFFF'},
        whitesmoke: {hex:'F5F5F5'},
        yellow: {hex:'FFFF00'},
        yellowgreen: {hex:'9ACD32'}
    };

    if (colors[color.toLowerCase()] !== undefined) return colors[color.toLowerCase()].hex;
    else return color;
}

export default getContrastYIQ;