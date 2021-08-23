export const categories = [
  {
    _id: 1,
    name: 'Cover',
    checked: false,
    defects: [
      {
        _id: 1,
        name: 'Abrasion / Cover wear',
        checked: false,
        defects: [
          {
            name: 'Glossy, smooth; no abrasion',
            value: 100,
            image: '/assets/images/abrasion/100.jpg',
          },
          {
            name: 'Just noticeable abrasion',
            value: 94,
            image: '/assets/images/abrasion/94.jpg',
          },
          {
            name: 'Small Area of Scuffing',
            value: 75,
            image: '/assets/images/abrasion/75.jpg',
          },
          {
            name: 'Colour Breaking Abrasions',
            value: 70,
            image: '/assets/images/abrasion/70.jpg',
          },
          {
            name: 'Large Areas of Visible Abrasion',
            value: 65,
            image: '/assets/images/abrasion/65.jpg',
          },
          {
            name: 'Deep Abrasions/Spine Wear',
            value: 50,
            image: '/assets/images/abrasion/50.jpg',
          },
        ],
      },
      {
        _id: 2,
        name: 'Centration / Miswrap',
        checked: false,
        defects: [
          {
            name: 'Perfect Centration',
            value: 100,
            image: '/assets/images/centration/100.jpg',
          },
          {
            name: 'Off centre 1-3mm',
            value: 99,
            image: '/assets/images/centration/99.jpg',
          },
          {
            name: 'Noticeable miswrap',
            value: 96,
            image: '/assets/images/centration/96.jpg',
          },
          {
            name: 'Severe miswrap',
            value: 90,
            image: '/assets/images/centration/90.jpg',
          },
          {
            name: 'Wild miswrap',
            value: 85,
            image: '/assets/images/centration/85.jpg',
          },
        ],
      },
      {
        _id: 3,
        name: 'Colour lift',
        checked: false,
        defects: [
          {
            name: 'None- Flat & Smooth',
            value: 100,
            image: '/assets/images/colourlift/100.jpg',
          },
          {
            name: '3mm area removed',
            value: 70,
            image: '/assets/images/colourlift/70.jpg',
          },
          {
            name: '3-10 mm area removed',
            value: 65,
            image: '/assets/images/colourlift/65.jpg',
          },
          {
            name: '10-20 mm Patch Removed',
            value: 40,
            image: '/assets/images/colourlift/40.jpg',
          },
          {
            name: '> 10mm Patch Removed',
            value: 30,
            image: '/assets/images/colourlift/30.jpg',
          },
        ],
      },
      {
        _id: 4,
        name: 'Colour spots',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/colourspots/100.jpg',
          },
          {
            name: 'Tiny flecks',
            value: 99,
            image: '/assets/images/colourspots/99.jpg',
          },
          {
            name: 'Several Flecks/large donuts',
            value: 96,
            image: '/assets/images/colourspots/96.jpg',
          },
        ],
      },
      {
        _id: 7,
        name: 'Cover gloss',
        checked: false,
        defects: [
          {
            name: 'As New',
            value: 100,
            image: '/assets/images/covergloss/100.jpg',
          },
          {
            name: 'High Gloss',
            value: 96,
            image: '/assets/images/covergloss/96.jpg',
          },
          {
            name: 'Moderate Gloss Remaining',
            value: 90,
            image: '/assets/images/covergloss/90.jpg',
          },
          {
            name: 'Dull',
            value: 80,
            image: '/assets/images/covergloss/80.jpg',
          },
          {
            name: 'Matt',
            value: 60,
            image: '/assets/images/covergloss/60.jpg',
          },
        ],
      },
      {
        _id: 8,
        name: 'Cover page missing',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/coverpagemissing/100.jpg',
          },
          {
            name: 'Back Cover Missing- Front Taped On',
            value: 10,
            image: '/assets/images/coverpagemissing/10.jpg',
          },
          {
            name: 'Entire Cover Missing',
            value: 1,
            image: '/assets/images/coverpagemissing/01.jpg',
          },
        ],
      },
      {
        _id: 9,
        name: 'Cover whiteness',
        checked: false,
        defects: [
          {
            name: 'White',
            value: 100,
            image: '/assets/images/coverwhiteness/100.jpg',
          },
          {
            name: 'Off-White/White',
            value: 99,
            image: '/assets/images/coverwhiteness/99.jpg',
          },
          {
            name: 'Off-White',
            value: 96,
            image: '/assets/images/coverwhiteness/96.jpg',
          },
          {
            name: 'Cream/Off-white',
            value: 94,
            image: '/assets/images/coverwhiteness/94.jpg',
          },
          {
            name: 'Cream',
            value: 90,
            image: '/assets/images/coverwhiteness/90.jpg',
          },
          {
            name: 'Tan',
            value: 50,
            image: '/assets/images/coverwhiteness/80.jpg',
          },
          {
            name: 'Brown',
            value: 30,
            image: '/assets/images/coverwhiteness/15.jpg',
          },
        ],
      },
      {
        _id: 11,
        name: 'Digs & Gouges',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/spinecreases/100.jpg',
          },
          {
            name: '2mm Non-Colour Breaking',
            value: 94,
            image: '/assets/images/digsgouges/94.jpg',
          },
          {
            name: 'Long Non-Color Breaking',
            value: 90,
            image: '/assets/images/digsgouges/90.jpg',
          },
          {
            name: '5mm Dent/Bale Marks',
            value: 75,
            image: '/assets/images/digsgouges/75.jpg',
          },
          {
            name: 'Page thickness Gouge',
            value: 30,
            image: '/assets/images/digsgouges/30.jpg',
          },
          {
            name: 'Long Drag Marks',
            value: 25,
            image: '/assets/images/digsgouges/25.jpg',
          },
          {
            name: 'Pieces out from Several Pages',
            value: 20,
            image: '/assets/images/digsgouges/20.jpg',
          },
        ],
      },
      {
        _id: 12,
        name: 'Edge wear and Chipping',
        checked: false,
        defects: [
          {
            name: 'Sharp, straight edge',
            value: 100,
            image: '/assets/images/edgewearchipping/100.jpg',
          },
          {
            name: 'Slightabrasion to extreme edge',
            value: 96,
            image: '/assets/images/edgewearchipping/96.jpg',
          },
          {
            name: 'Perceptible Dings',
            value: 94,
            image: '/assets/images/edgewearchipping/94.jpg',
          },
          {
            name: 'Rolled Overhang/Creases',
            value: 85,
            image: '/assets/images/edgewearchipping/85.jpg',
          },
          {
            name: 'Slight Creasing/Breaks',
            value: 75,
            image: '/assets/images/edgewearchipping/75.jpg',
          },
          {
            name: 'Single large chip/general breaks',
            value: 55,
            image: '/assets/images/edgewearchipping/55.jpg',
          },
          {
            name: 'Heavily Worn Overflash',
            value: 45,
            image: '/assets/images/edgewearchipping/45.jpg',
          },
          {
            name: 'Multiple Creases / Minor Tears',
            value: 25,
            image: '/assets/images/edgewearchipping/25.jpg',
          },
          {
            name: 'Multiple Chips Out',
            value: 10,
            image: '/assets/images/edgewearchipping/10.jpg',
          },
          {
            name: 'Brittle',
            value: 5,
            image: '/assets/images/edgewearchipping/05.jpg',
          },
        ],
      },
      {
        _id: 20,
        name: 'Scratches',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/scratching/100.jpg',
          },
          {
            name: 'Just Perceptible Colour Break',
            value: 96,
            image: '/assets/images/scratching/96.jpg',
          },
          {
            name: '3mm Scratch & flaking',
            value: 94,
            image: '/assets/images/scratching/94.jpg',
          },
          {
            name: 'Deep 10mm Scratch',
            value: 65,
            image: '/assets/images/scratching/65.jpg',
          },
          {
            name: 'Large Superficial Scratches',
            value: 50,
            image: '/assets/images/scratching/50.jpg',
          },
          {
            name: 'Page-Thickness Scratches',
            value: 40,
            image: '/assets/images/scratching/40.jpg',
          },
          {
            name: 'Large Noticeable Scratch',
            value: 30,
            image: '/assets/images/scratching/30.jpg',
          },
        ],
      },
      {
        _id: 21,
        name: 'Soiling',
        checked: false,
        defects: [
          {
            name: 'Totally Clean',
            value: 100,
            image: '/assets/images/coverwhiteness/100.jpg',
          },
          {
            name: 'Tiny Fingerprint < 5mm',
            value: 90,
            image: '/assets/images/soiling/90.jpg',
          },
          {
            name: 'Soiling Tracks',
            value: 85,
            image: '/assets/images/soiling/85.jpg',
          },
          {
            name: 'General light Soiling',
            value: 80,
            image: '/assets/images/soiling/80.jpg',
          },
          {
            name: 'Moderate Contact Soiling/Dirt',
            value: 60,
            image: '/assets/images/soiling/60.jpg',
          },
        ],
      },
      {
        _id: 27,
        name: 'Stamps',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/stamps/100.jpg',
          },
          {
            name: 'Small Date Stamp',
            value: 94,
            image: '/assets/images/stamps/94.jpg',
          },
          {
            name: 'Cover Stamp &lt; 20mm',
            value: 92,
            image: '/assets/images/stamps/92.jpg',
          },
          {
            name: 'Bookshop Stamp',
            value: 90,
            image: '/assets/images/coverwhiteness/90.jpg',
          },
          {
            name: 'Multiple Large Stamps',
            value: 80,
            image: '/assets/images/stamps/80.jpg',
          },
        ],
      },
      {
        _id: 32,
        name: 'Sun Shadow',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/coverwhiteness/100.jpg',
          },
          {
            name: 'Just Perceptible',
            value: 99,
            image: '/assets/images/sunshadow/99.jpg',
          },
          {
            name: 'Slight Tanning',
            value: 98,
            image: '/assets/images/sunshadow/98.jpg',
          },
          {
            name: 'Unobtrusive Sun Shadow',
            value: 96,
            image: '/assets/images/sunshadow/96.jpg',
          },
          {
            name: 'Noticeable Sun Shadow',
            value: 85,
            image: '/assets/images/sunshadow/85.jpg',
          },
          {
            name: 'Obvious Sun Shadow',
            value: 80,
            image: '/assets/images/sunshadow/80.jpg',
          },
        ],
      },
      {
        _id: 34,
        name: 'Tears',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/tape/100.jpg',
          },
          {
            name: 'Single tear <5mm',
            value: 100,
            image: '/assets/images/spinetears/94.jpg',
          },
          {
            name: 'Multiple <3mm tears',
            value: 80,
            image: '/assets/images/tears/80.jpg',
          },
          {
            name: 'Several 3-5mm Tears',
            value: 55,
            image: '/assets/images/tears/55.jpg',
          },
          {
            name: '5-10mm Tear',
            value: 50,
            image: '/assets/images/tears/50.jpg',
          },
          {
            name: '10-20mm Tear',
            value: 40,
            image: '/assets/images/tears/40.jpg',
          },
          {
            name: '20-30 mm Tear',
            value: 35,
            image: '/assets/images/tears/35.jpg',
          },
          {
            name: 'Large Tear',
            value: 25,
            image: '/assets/images/tears/25.jpg',
          },
        ],
      },
      {
        _id: 35,
        name: 'Warping',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/lyingflat/100.jpg',
          },
          {
            name: 'Just Noticable',
            value: 94,
            image: '/assets/images/warping/94.jpg',
          },
          {
            name: 'Bumpy',
            value: 55,
            image: '/assets/images/warping/55.jpg',
          },
          {
            name: 'Noticeable Warping',
            value: 40,
            image: '/assets/images/warping/40.jpg',
          },
          {
            name: 'Water Damage',
            value: 30,
            image: '/assets/images/warping/30.jpg',
          },
          {
            name: 'Heavy Wrinkling',
            value: 25,
            image: '/assets/images/warping/25.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 2,
    name: 'Corners',
    checked: false,
    defects: [
      {
        _id: 5,
        name: 'Corner creases',
        checked: false,
        defects: [
          {
            name: 'Sharp Corners',
            value: 100,
            image: '/assets/images/cornercreases/100.jpg',
          },
          {
            name: 'Just Noticeable',
            value: 99,
            image: '/assets/images/cornercreases/99.jpg',
          },
          {
            name: 'Blunting',
            value: 96,
            image: '/assets/images/cornercreases/96.jpg',
          },
          {
            name: '5mm Crease',
            value: 92,
            image: '/assets/images/cornercreases/92.jpg',
          },
          {
            name: 'Several Minor Creases',
            value: 85,
            image: '/assets/images/cornercreases/85.jpg',
          },
          {
            name: 'Multiple Light Creases',
            value: 75,
            image: '/assets/images/cornercreases/75.jpg',
          },
          {
            name: 'Small General Atritions',
            value: 70,
            image: '/assets/images/cornercreases/70.jpg',
          },
          {
            name: '40 mm Colour Breaking Creases',
            value: 65,
            image: '/assets/images/cornercreases/65.jpg',
          },
          {
            name: 'Large Corner Crease',
            value: 40,
            image: '/assets/images/cornercreases/40.jpg',
          },
          {
            name: 'Corner Attrition',
            value: 20,
            image: '/assets/images/cornercreases/20.jpg',
          },
        ],
      },
      {
        _id: 6,
        name: 'Corner rounding',
        checked: false,
        defects: [
          {
            name: 'Sharp Corner',
            value: 100,
            image: '/assets/images/cornerrounding/100.jpg',
          },
          {
            name: 'Just Perceptibly blunted',
            value: 99,
            image: '/assets/images/cornerrounding/99.jpg',
          },
          {
            name: 'Blunted',
            value: 96,
            image: '/assets/images/cornerrounding/96.jpg',
          },
          {
            name: 'Fibres Showing',
            value: 90,
            image: '/assets/images/cornerrounding/90.jpg',
          },
          {
            name: 'Deformation with Colour Breaks',
            value: 85,
            image: '/assets/images/cornerrounding/85.jpg',
          },
          {
            name: 'Rounded; radius < 3mm',
            value: 70,
            image: '/assets/images/cornerrounding/70.jpg',
          },
          {
            name: 'Rounded; Radius &gt;3mm',
            value: 65,
            image: '/assets/images/cornerrounding/65.jpg',
          },
          {
            name: 'No Corner',
            value: 20,
            image: '/assets/images/cornerrounding/20.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 3,
    name: 'Interior and Exterior',
    checked: false,
    defects: [
      {
        _id: 10,
        name: 'Cutouts (Interior/Exterior)',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/cutouts/100.jpg',
          },
          {
            name: '5mm sq. Piece out',
            value: 75,
            image: '/assets/images/pieceout/80.jpg',
          },
          {
            name: '20mm Piece out of Cover',
            value: 40,
            image: '/assets/images/cutouts/15.jpg',
          },
          {
            name: 'Coupon Cut; Non-Story Page',
            value: 30,
            image: '/assets/images/couponcut/30.jpg',
          },
          {
            name: 'Coupon Cut- Story Page',
            value: 25,
            image: '/assets/images/couponcut/20.jpg',
          },
          {
            name: 'Large Piece/Coupon Out of Cover',
            value: 5,
            image: '/assets/images/cutouts/05.jpg',
          },
        ],
      },
      {
        _id: 18,
        name: 'Piece Out (wear/rip damage)',
        checked: false,
        defects: [
          {
            name: 'Edges Complete',
            value: 100,
            image: '/assets/images/pieceout/100.jpg',
          },
          {
            name: '1mm Flake Out',
            value: 94,
            image: '/assets/images/pieceout/96.jpg',
          },
          {
            name: '&lt;3mm Piece Out',
            value: 70,
            image: '/assets/images/pieceout/85.jpg',
          },
          {
            name: '3-5mm Piece Out',
            value: 65,
            image: '/assets/images/pieceout/80.jpg',
          },
          {
            name: '5-10mm Piece Out',
            value: 35,
            image: '/assets/images/pieceout/65.jpg',
          },
          {
            name: '5-20mm Piece Out',
            value: 30,
            image: '/assets/images/pieceout/25.jpg',
          },
          {
            name: 'Large Piece Out',
            value: 18,
            image: '/assets/images/pieceout/18.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 4,
    name: 'Interior',
    checked: false,
    defects: [
      {
        _id: 14,
        name: 'Interior Page Colour',
        checked: false,
        defects: [
          {
            name: 'White',
            value: 100,
            image: '/assets/images/interiorpagecolour/100.jpg',
          },
          {
            name: 'Off-White/White',
            value: 98,
            image: '/assets/images/interiorpagecolour/98.jpg',
          },
          {
            name: 'Off-White',
            value: 96,
            image: '/assets/images/interiorpagecolour/96.jpg',
          },
          {
            name: 'Cream/Off-White',
            value: 94,
            image: '/assets/images/interiorpagecolour/94.jpg',
          },
          {
            name: 'Cream',
            value: 92,
            image: '/assets/images/interiorpagecolour/92.jpg',
          },
          {
            name: 'Tan',
            value: 30,
            image: '/assets/images/interiorpagecolour/30.jpg',
          },
          {
            name: 'Brown',
            value: 20,
            image: '/assets/images/interiorpagecolour/20.jpg',
          },
        ],
      },
      {
        _id: 15,
        name: 'Interior Pages Missing',
        checked: false,
        defects: [
          {
            name: 'All Pages Present',
            value: 100,
            image: '/assets/images/interiorpagemissing/100.jpg',
          },
          {
            name: 'One or More (story) Pages Missing',
            value: 5,
            image: '/assets/images/interiorpagemissing/05.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 5,
    name: 'Complete book',
    checked: false,
    defects: [
      {
        _id: 16,
        name: 'Lying Flat',
        checked: false,
        defects: [
          {
            name: 'Totally Flat',
            value: 100,
            image: '/assets/images/lyingflat/100.jpg',
          },
          {
            name: 'Slight Page Lifting',
            value: 96,
            image: '/assets/images/lyingflat/96.jpg',
          },
          {
            name: 'Open Bend at Spine/warping',
            value: 94,
            image: '/assets/images/lyingflat/94.jpg',
          },
          {
            name: 'Warping/Kinks at Spine',
            value: 92,
            image: '/assets/images/lyingflat/92.jpg',
          },
          {
            name: 'Large Shallow Bend',
            value: 75,
            image: '/assets/images/lyingflat/75.jpg',
          },
          {
            name: 'Excessive Warping/Lifting',
            value: 70,
            image: '/assets/images/lyingflat/70.jpg',
          },
        ],
      },
      {
        _id: 26,
        name: 'Staining',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/staining/100.jpg',
          },
          {
            name: 'Just Perceptible Mark',
            value: 90,
            image: '/assets/images/staining/90.jpg',
          },
          {
            name: 'Moderate fingerprint stain',
            value: 65,
            image: '/assets/images/staining/65.jpg',
          },
          {
            name: 'Small Stain Spotting',
            value: 60,
            image: '/assets/images/staining/60.jpg',
          },
          {
            name: 'Label Adhesive',
            value: 50,
            image: '/assets/images/staining/50.jpg',
          },
          {
            name: 'Single large Stain',
            value: 45,
            image: '/assets/images/staining/45.jpg',
          },
          {
            name: 'Dark fingerprint stains',
            value: 40,
            image: '/assets/images/staining/40.jpg',
          },
          {
            name: 'Large rust/oxidation stain',
            value: 35,
            image: '/assets/images/staining/35.jpg',
          },
          {
            name: 'Water Damage',
            value: 18,
            image: '/assets/images/staining/18.jpg',
          },
        ],
      },
      {
        _id: 36,
        name: 'Writing',
        checked: false,
        defects: [
          {
            name: 'No Writing',
            value: 100,
            image: '/assets/images/writing/100.jpg',
          },
          {
            name: 'Unobtrusive writing; pencil BC',
            value: 96,
            image: '/assets/images/writing/96.jpg',
          },
          {
            name: 'Single Date Mark (Ballpoint)',
            value: 92,
            image: '/assets/images/writing/92.jpg',
          },
          {
            name: 'Multiple Ballpoint on Cover',
            value: 65,
            image: '/assets/images/writing/65.jpg',
          },
          {
            name: 'Large Written Characters',
            value: 55,
            image: '/assets/images/writing/55.jpg',
          },
          {
            name: 'Marker Pen',
            value: 30,
            image: '/assets/images/writing/30.jpg',
          },
          {
            name: 'Scrawl',
            value: 20,
            image: '/assets/images/writing/20.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 6,
    name: 'Restoration',
    checked: false,
    defects: [
      {
        _id: 17,
        name: 'Colour touch',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/paintcolourtouch/100.jpg',
          },
          {
            name: '< 5mm Coloured Areas',
            value: 60,
            image: '/assets/images/paintcolourtouch/60.jpg',
          },
          {
            name: 'Obvious Amateur Colouring',
            value: 40,
            image: '/assets/images/paintcolourtouch/40.jpg',
          },
          {
            name: 'Large Amounts of Paint',
            value: 10,
            image: '/assets/images/paintcolourtouch/10.jpg',
          },
        ],
      },
      {
        _id: 33,
        name: 'Tape',
        checked: false,
        defects: [
          {
            name: 'No Tape',
            value: 100,
            image: '/assets/images/tape/100.jpg',
          },
          {
            name: 'Amateur Tear Seal <10mm',
            value: 55,
            image: '/assets/images/tape/55.jpg',
          },
          {
            name: 'Small Amateur Repair',
            value: 35,
            image: '/assets/images/tape/35.jpg',
          },
          {
            name: 'Large Repair (Complete Spine)',
            value: 20,
            image: '/assets/images/tape/20.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 7,
    name: 'Printer defects',
    checked: false,
    defects: [
      {
        _id: 13,
        name: 'Ink Density (Printing Defect)',
        checked: false,
        defects: [
          {
            name: 'Deep, Dense Inks',
            value: 100,
            image: '/assets/images/inkdensity/100.jpg',
          },
          {
            name: 'Areas of Fading',
            value: 96,
            image: '/assets/images/inkdensity/96.jpg',
          },
          {
            name: 'Washed out / Visible Color Overlap',
            value: 94,
            image: '/assets/images/inkdensity/94.jpg',
          },
        ],
      },
      {
        _id: 19,
        name: 'Printer Creases',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/printerscreases/100.jpg',
          },
          {
            name: '50mm or less crease',
            value: 92,
            image: '/assets/images/printerscreases/92.jpg',
          },
          {
            name: '50mm - 75mm crease',
            value: 90,
            image: '/assets/images/printerscreases/90.jpg',
          },
          {
            name: 'Multiple 75mm creases',
            value: 85,
            image: '/assets/images/printerscreases/85.jpg',
          },
          {
            name: 'Greater than 75mm crease(s)',
            value: 80,
            image: '/assets/images/printerscreases/80.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 8,
    name: 'Spine',
    checked: false,
    defects: [
      {
        _id: 22,
        name: 'Spine creases',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/spinecreases/100.jpg',
          },
          {
            name: 'Single Perceptible Crease',
            value: 98,
            image: '/assets/images/spinecreases/98.jpg',
          },
          {
            name: '4mm Colour Breaking Crease',
            value: 94,
            image: '/assets/images/spinecreases/94.jpg',
          },
          {
            name: 'Several Colour Breaking Creases',
            value: 85,
            image: '/assets/images/spinecreases/85.jpg',
          },
          {
            name: 'Uniform Creasing < 7mm',
            value: 80,
            image: '/assets/images/spinecreases/80.jpg',
          },
          {
            name: 'Multiple Deep Creases',
            value: 45,
            image: '/assets/images/spinecreases/45.jpg',
          },
          {
            name: 'Heavy Creasing',
            value: 35,
            image: '/assets/images/spinecreases/35.jpg',
          },
        ],
      },
      {
        _id: 23,
        name: 'Spine Roll',
        checked: false,
        defects: [
          {
            name: 'Tight, Flat Spine',
            value: 100,
            image: '/assets/images/spineroll/100.jpg',
          },
          {
            name: 'Slight Spine Roll',
            value: 60,
            image: '/assets/images/spineroll/60.jpg',
          },
          {
            name: 'Moderate Spine Roll',
            value: 50,
            image: '/assets/images/spineroll/50.jpg',
          },
          {
            name: 'Substantial Spine Roll',
            value: 30,
            image: '/assets/images/spineroll/30.jpg',
          },
          {
            name: 'Severe Spine Roll',
            value: 15,
            image: '/assets/images/spineroll/15.jpg',
          },
        ],
      },
      {
        _id: 24,
        name: 'Spine Stress Marks',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/spinestress/100.jpg',
          },
          {
            name: 'Just Perceptible (<3mm)',
            value: 96,
            image: '/assets/images/spinestress/96.jpg',
          },
          {
            name: '2-4mm Non Colour Breaking',
            value: 94,
            image: '/assets/images/spinestress/94.jpg',
          },
          {
            name: 'Multiple non colour-breaking Creases',
            value: 70,
            image: '/assets/images/spinestress/70.jpg',
          },
        ],
      },
      {
        _id: 25,
        name: 'Spine tears',
        checked: false,
        defects: [
          {
            name: 'None',
            value: 100,
            image: '/assets/images/spinetears/100.jpg',
          },
          {
            name: '<5mm Tear',
            value: 94,
            image: '/assets/images/spinetears/94.jpg',
          },
          {
            name: '10mm Tear',
            value: 50,
            image: '/assets/images/spinetears/50.jpg',
          },
          {
            name: '20mm Tear or Several Smaller',
            value: 45,
            image: '/assets/images/spinetears/45.jpg',
          },
          {
            name: 'Very Large Tear',
            value: 20,
            image: '/assets/images/spinetears/20.jpg',
          },
          {
            name: 'Book-Length Split',
            value: 5,
            image: '/assets/images/spinetears/5.jpg',
          },
        ],
      },
    ],
  },
  {
    _id: 9,
    name: 'Staples',
    checked: false,
    defects: [
      {
        _id: 28,
        name: 'Staple placement',
        checked: false,
        defects: [
          {
            name: 'Perfect Placement',
            value: 100,
            image: '/assets/images/stapleplacement/100.jpg',
          },
          {
            name: 'Slightly Off Alignment',
            value: 98,
            image: '/assets/images/stapleplacement/98.jpg',
          },
          {
            name: '1-3mm off-staple',
            value: 96,
            image: '/assets/images/stapleplacement/96.jpg',
          },
          {
            name: '5mm Crease',
            value: 92,
            image: '/assets/images/cornercreases/92.jpg',
          },
          {
            name: '>3mm mis-staple',
            value: 80,
            image: '/assets/images/stapleplacement/80.jpg',
          },
          {
            name: 'Amateur Re-Staple',
            value: 20,
            image: '/assets/images/stapleplacement/20.jpg',
          },
        ],
      },
      {
        _id: 29,
        name: 'Staple Rust',
        checked: false,
        defects: [
          {
            name: 'Clean, Shiny Staple',
            value: 100,
            image: '/assets/images/staplerust/100.jpg',
          },
          {
            name: 'Matt Appearance',
            value: 94,
            image: '/assets/images/staplerust/94.jpg',
          },
          {
            name: 'Moderate Tarnish/Rust Signs',
            value: 92,
            image: '/assets/images/staplerust/92.jpg',
          },
          {
            name: 'Advanced Rust with Migration',
            value: 30,
            image: '/assets/images/staplerust/30.jpg',
          },
          {
            name: 'Substantial Migration',
            value: 15,
            image: '/assets/images/staplerust/15.jpg',
          },
        ],
      },
      {
        _id: 30,
        name: 'Staple wear',
        checked: false,
        defects: [
          {
            name: 'Perfect; As-new',
            value: 100,
            image: '/assets/images/staplewear/100.jpg',
          },
          {
            name: 'Perceptible Staple Wear',
            value: 96,
            image: '/assets/images/staplewear/96.jpg',
          },
          {
            name: '2mm Staple Crease',
            value: 94,
            image: '/assets/images/staplewear/94.jpg',
          },
          {
            name: 'Buckled Spine; colour breaking creases',
            value: 85,
            image: '/assets/images/staplewear/85.jpg',
          },
          {
            name: 'Large Creases and/or small tears',
            value: 55,
            image: '/assets/images/staplewear/55.jpg',
          },
          {
            name: 'Considerable Staple Wear',
            value: 50,
            image: '/assets/images/staplewear/50.jpg',
          },
          {
            name: 'Severe Staple Wear',
            value: 30,
            image: '/assets/images/staplewear/30.jpg',
          },
          {
            name: 'Cover Detached',
            value: 10,
            image: '/assets/images/staplewear/10.jpg',
          },
        ],
      },
    ],
  },
];
