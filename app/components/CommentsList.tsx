'use client';

import { useState, useEffect } from 'react';

type Comment = {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  article: {
    title: string;
    slug: string;
  };
};

interface CommentsListProps {
  articleId: string;
}

export default function CommentsList({ articleId }: CommentsListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/comments/${articleId}`);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des commentaires');
        }
        
        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [articleId]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-[#03144a] mb-4">
          Commentaires
        </h3>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-[#03144a] mb-4">
          Commentaires
        </h3>
        <p className="text-red-600 text-sm">
          Erreur lors du chargement des commentaires
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-[#03144a] mb-4">
        Commentaires ({comments.length})
      </h3>
      
      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm italic">
          Aucun commentaire pour le moment. Soyez le premier à commenter !
        </p>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#03144a] bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-[#03144a] font-semibold text-sm">
                      {comment.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium text-[#03144a] text-sm">
                    {comment.author}
                  </span>
                </div>
                <time className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed ml-10">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 