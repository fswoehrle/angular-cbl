/**
 * Das ist das Interface vom Adapter.
 * Der Adapter nimmt die API-Daten auf und baut Instanzen des Modells
 */

// app/core/adapter.ts
export interface Adapter<T> {
  adapt(item: any): T;
}