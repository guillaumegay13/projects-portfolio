'use client';

interface GitHubContributionsProps {
  username: string;
  hideTitle?: boolean;
}

export default function GitHubContributions({ 
  username, 
  hideTitle = false 
}: GitHubContributionsProps) {
  return (
    <div className="w-full">
      {!hideTitle && (
        <h3 className="text-lg mb-4">GitHub Contributions</h3>
      )}
      <div className="overflow-x-auto">
        {/* Light mode version */}
        <img 
          src={`https://ghchart.rshah.org/${username}`}
          alt="GitHub Contributions"
          className="w-full max-w-full dark:hidden"
        />
        {/* Dark mode version with GitHub's darkest green */}
        <img 
          src={`https://ghchart.rshah.org/216e39/${username}`}
          alt="GitHub Contributions"
          className="w-full max-w-full hidden dark:block"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    </div>
  );
}