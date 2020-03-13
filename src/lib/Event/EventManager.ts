/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as EventEmitter from "events";
import * as Core from "../";

/**
 * Event Manager.
 */
export abstract class EventManager {
    /**
     * Load event emitter.
     */
    public static build(): EventEmitter {
        Core.logger().silly(`EventManager::loadEventEmitter`);
        if (!EventManager.eventEmitter) {
            EventManager.eventEmitter = new EventEmitter();
        }
        return EventManager.eventEmitter;
    }

    /**
     * Register event.
     *
     * @param eventName
     * @param event
     */
    public static registerEvent(
        eventName: Core.StopLossEvent,
        event: any
    ): string {
        Core.logger().silly(`EventManager::registerEvent[${eventName}]`);
        this.eventEmitter.on(eventName, args => event(args));
        return eventName;
    }

    /**
     * Emit event.
     *
     * @param eventName
     * @param args
     */
    public static emit(
        eventName: Core.StopLossEvent,
        ...args: any
    ): void {
        Core.logger().silly(`EventManager::emit[${eventName}]`);
        this.eventEmitter.emit(eventName, args);
    }

    /**
     * Event emitter.
     */
    private static eventEmitter: EventEmitter;
}
