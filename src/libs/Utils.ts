
export async function toDateFormat(inputDate: string) {
    const date = new Date(inputDate);

    return date.toDateString()
}