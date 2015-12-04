angular.module('fabric.constants', [])

.service('Constants', [function() {

	var objectDefaults = {
		rotatingPointOffset: 20,
		padding: 0,
		borderColor: 'EEF6FC',
		cornerColor: 'rgba(64, 159, 221, 1)',
		cornerSize: 10,
		transparentCorners: false,
		hasRotatingPoint: true,
		centerTransform: true
	};

	return {

		presetSizes: [
			{
				name: 'Banner 1m',
				height: 700,
				width: 1000
			},
			{
				name: 'Banner 1,5m',
				height: 700,
				width: 1500
			},
			{
				name: 'Banner 2m',
				height: 700,
				width: 2000
			},
			{
				name: 'Banner 2,5m',
				height: 700,
				width: 2500
			},
			{
				name: 'Banner 3m',
				height: 700,
				width: 3000
			},
			{
				name: 'Banner 3,5m',
				height: 700,
				width: 3500
			},
			{
				name: 'Banner 4m',
				height: 700,
				width: 4000
			},
			{
				name: 'Banner 4,5m',
				height: 700,
				width: 4500
			},
			{
				name: 'Banner 5m',
				height: 700,
				width: 5000
			},
			{
				name: 'Banner 5,5m',
				height: 700,
				width: 5500
			},
			{
				name: 'Banner 6m',
				height: 700,
				width: 6000
			}
		],

		fonts: [
			{ name: 'Arial' },
			{ name: 'Arial black' },
			{ name: 'Futura' },
			{ name: 'Calibri' },
			{ name: 'Ballpark' },
			{ name: 'Chopin Script' },
			{ name: 'Times New Roman' },
			{ name: 'Chunk Five' },
			{ name: 'Bauhaus' },
			{ name: 'Harlow' }
		],

		shapeCategories: [
			{
				name: 'Popular Shapes',
				shapes: [
					'arrow6',
					'bubble4',
					'circle1',
					'rectangle1',
					'star1',
					'triangle1'
				]
			},
			{
				name: 'Simple Shapes',
				shapes: [
					'circle1',
					'heart1',
					'rectangle1',
					'triangle1',
					'star1',
					'star2',
					'star3',
					'square1'
				]
			},
			{
				name: 'Arrows & Pointers',
				shapes: [
					'arrow1',
					'arrow9',
					'arrow3',
					'arrow6',
				]
			},
			{
				name: 'Bubbles & Balloons',
				shapes: [
					'bubble5',
					'bubble4'
				]
			},
			{
				name: 'Check Marks',
				shapes: [

				]
			},
			{
				name: 'Badges',
				shapes: [
					'badge1',
					'badge2',
					'badge4',
					'badge5',
					'badge6'
				]
			}
		],

		JSONExportProperties: [
			'height',
			'width',
			'background',
			'objects',

			'originalHeight',
			'originalWidth',
			'originalScaleX',
			'originalScaleY',
			'originalLeft',
			'originalTop',

			'lineHeight',
			'lockMovementX',
			'lockMovementY',
			'lockScalingX',
			'lockScalingY',
			'lockUniScaling',
			'lockRotation',
			'lockObject',
			'id',
			'isTinted',
			'filters'
		],

		shapeDefaults: angular.extend({
			fill: '#0088cc'
		}, objectDefaults),

		textDefaults: angular.extend({
			originX: 'left',
			scaleX: 1,
			scaleY: 1,
			fontFamily: 'Arial Black',
			fontSize: 40,
			fill: '#454545',
			textAlign: 'left'
		}, objectDefaults)

	};

}]);
