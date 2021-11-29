export const delay = (ms: number) => {
    return new Promise((r) => setTimeout(() => r(null), ms));
};

export let downloadResult = false;

export async function fetchFiles() {
    console.log("Start uploading...");

    await delay(4000);
    const result = !downloadResult;
    console.log("done");
    downloadResult = result;
}

export function uply() {
    return true;
}