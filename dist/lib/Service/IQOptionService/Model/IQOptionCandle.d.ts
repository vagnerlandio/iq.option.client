/**
 * Candle.
 */
export interface IQOptionCandle {
    /**
     * active_id.
     */
    active_id: number;
    /**
     * size.
     */
    size: number;
    /**
     * at.
     */
    at: number;
    /**
     * from.
     */
    from: number;
    /**
     * to.
     */
    to: number;
    /**
     * id.
     */
    id: number;
    /**
     * open.
     */
    open: number;
    /**
     * close.
     */
    close: number;
    /**
     * min.
     */
    min: number;
    /**
     * max.
     */
    max: number;
    /**
     * ask.
     */
    ask: number;
    /**
     * bid.
     */
    bid: number;
    /**
     * volume.
     */
    volume: number;
    /**
     * phase.
     */
    phase: string;
}
