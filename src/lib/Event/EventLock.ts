/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../";

/**
 * Event lock.
 */
export abstract class EventLock {
    /**
     * Event is locked?
     *
     * @param eventName
     */
    public static isLocked(eventName: Core.Events): boolean {
        if (
            EventLock.eventLock[eventName] === undefined ||
            !EventLock.eventLock[eventName]
        ) {
            Core.logger().silly(`EventLock::isLocked[${eventName}][unlocked]`);
            return false;
        }
        Core.logger().silly(`EventLock::isLocked[${eventName}][locked]`);
        return true;
    }

    /**
     * Lock event.
     *
     * @param eventName
     */
    public static lockEvent(eventName: Core.Events): void {
        EventLock.eventLock[eventName] = true;
    }

    /**
     * Unlock event.
     *
     * @param eventName
     */
    public static unlockEvent(eventName: Core.Events): void {
        EventLock.eventLock[eventName] = false;
    }

    /**
     * Event lock store.
     */
    private static readonly eventLock: { [key in Core.Events]?: boolean } = {};
}
