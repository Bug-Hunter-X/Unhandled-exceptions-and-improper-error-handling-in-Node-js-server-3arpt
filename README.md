# Unhandled Exceptions and Improper Error Handling in Node.js Server

This repository demonstrates a common error in Node.js applications: insufficient error handling.  The `bug.js` file shows a server that lacks proper error handling, which can lead to crashes and unexpected downtime. The `bugSolution.js` file presents a corrected version with improved error handling.

## Problem

The original server starts without any error handling. If an error occurs during startup (e.g., port in use), the server crashes silently, providing no indication of the issue. Unhandled exceptions within the request handler can also cause similar crashes. 

## Solution

The improved version includes `try...catch` blocks to handle potential errors during server startup and within the request handler.  It also adds an event listener for `uncaughtException` to gracefully handle unexpected errors that might escape the `try...catch` blocks, logging the error and preventing the server from crashing abruptly. 