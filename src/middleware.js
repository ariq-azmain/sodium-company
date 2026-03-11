"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var server_1 = require("@clerk/nextjs/server");
(0, server_1.clerkMiddleware)();
exports.config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
