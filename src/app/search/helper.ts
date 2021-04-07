export async function resolveAfter(...ms: Array<number>): Promise<void> {
    for (const item of ms) {
        await f(item);
    }
}

function f(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
