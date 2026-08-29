class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])

        directions = [(0,-1),(0,1),(1,0),(-1,0)]



        queue = deque()
        fresh_oragnes = 0
        time = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    queue.append((r,c))
                elif grid[r][c] == 1:
                    fresh_oragnes += 1

        while queue:
            level_size = len(queue)
            for _ in range(level_size):
                r,c = queue.popleft()
                for dr,dc in directions:
                    nr = r + dr
                    nc = c + dc

                    if (0<=nr<ROWS and 0<=nc<COLS and grid[nr][nc] == 1):
                        grid[nr][nc] = 2
                        fresh_oragnes -= 1
                        queue.append((nr,nc))

            if queue:
                time += 1
        return time if fresh_oragnes == 0 else -1