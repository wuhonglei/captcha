export function getRandomNumber(): number[] {
  return new Array(4).fill(undefined).map(() => Math.ceil(Math.random() * 9));
}

/**
 * 滚动三轮后，最终停在对应的数字上
 */
export function getBgPositionY(final: number): number {
  return -60 * (10 * 3 + final);
}

export function updateElementPositionY(
  elementList: HTMLCollection,
  numberList: number[]
): void {
  Array.from(elementList).forEach((element, index) => {
    setTimeout(() => {
      (element as HTMLDivElement).style.backgroundPositionY = `${getBgPositionY(
        numberList[index]
      )}px`;
    }, 300 * index);
  });
}
