/**
 * Sleep helper.
 *
 * @param time
 */
export const sleepHelper = (time: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};
