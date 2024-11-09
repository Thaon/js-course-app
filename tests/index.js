const awaitableFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 25;
};

const main = async () => {
  let n = await awaitableFunction();
  console.log(n);
};

main();
