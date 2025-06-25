import { LRUCache } from './lru-cache'; 

describe('LRUCache', () => {
  test('basic operations from the example', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);                   
    cache.put(2, 2);                   
    expect(cache.get(1)).toBe(1);      
    cache.put(3, 3);                   
    expect(cache.get(2)).toBe(-1);     
    cache.put(4, 4);                   
    expect(cache.get(1)).toBe(-1);     
    expect(cache.get(3)).toBe(3);      
    expect(cache.get(4)).toBe(4);      
  });

  test('overwrite value and update usage order', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10);                 
    expect(cache.get(1)).toBe(10);    
    cache.put(3, 3);                  
    expect(cache.get(2)).toBe(-1);    
  });

  test('single element capacity', () => {
    const cache = new LRUCache(1);
    cache.put(1, 100);
    expect(cache.get(1)).toBe(100);
    cache.put(2, 200);               
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(200);
  });

  test('get on non-existent key returns -1', () => {
    const cache = new LRUCache(2);
    expect(cache.get(999)).toBe(-1);
  });

  test('repeated gets maintain usage order', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);                    
    cache.get(1);                    
    cache.put(3, 3);                 
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(3)).toBe(3);
  });
});
