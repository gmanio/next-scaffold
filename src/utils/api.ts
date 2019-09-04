import fetch from 'isomorphic-unfetch';

export const getData = async () => (await fetch('https://gurume-stage.toriaezubiru.com/v1/ranking')).json();