import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImIxNTg0NmRlLTVjMzMtNDQ1ZS05ODYwLWVmOWEyMmU0NGQ3MSIsIm9yZ0lkIjoiNDAyOTc5IiwidXNlcklkIjoiNDE0MDg3IiwidHlwZUlkIjoiODhmOWNmYTktNmVkYS00MGJhLTgxY2ItMGFlMTdhYzc2N2U2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjI4NTgzMDgsImV4cCI6NDg3ODYxODMwOH0.NEMdd3kUDA3ThIC6Z6EPBeJj-77HtWr_d1DTV-qQd3E"
  });

  const response = await Moralis.EvmApi.block.getBlock({
    "chain": "0x1",
    "blockNumberOrHash": "18541416"
  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}
