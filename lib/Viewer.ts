import {Deck} from '@deck.gl/core';

export class Viewer {
  deck: Deck;
  constructor(ref: any) {
    console.log(ref);
    this.deck = new Deck({
      canvas: ref,
      initialViewState: {
        longitude: -122.45,
        latitude: 37.78,
        zoom: 12,
      },
      controller: true,
      layers: [],
    });
  }
}
