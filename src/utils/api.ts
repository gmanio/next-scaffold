import fetch from 'isomorphic-unfetch';

export const getData = async () => {
  const res = await fetch('https://gurume-stage.toriaezubiru.com/v1/ranking');
  return res.json();
};