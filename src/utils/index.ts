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

export function createBackgroundImage(w: number, h: number): string {
  const count = 10;
  let canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h * count;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 36px Baloo Bhaijaan";
  new Array(count).fill(0).forEach((_value, index) => {
    ctx.fillText(`${index}`, w / 2, h * index + h / 2, w);
  });

  return canvas.toDataURL("image/png");
}

function convertCanvasToImage(canvas: HTMLCanvasElement): HTMLImageElement {
  const image = new Image();
  image.src = canvas.toDataURL("image/png");
  return image;
}
