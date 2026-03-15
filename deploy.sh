#!/bin/bash
set -e

PROJECT_ID="monomer"
REGION="us-east1"
SERVICE_NAME="monomer-website"
IMAGE="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

echo "==> Configuring Docker for GCR..."
gcloud auth configure-docker --quiet

echo "==> Building Docker image..."
docker build --platform linux/amd64 -t "${IMAGE}:latest" .

echo "==> Pushing image to GCR..."
docker push "${IMAGE}:latest"

echo "==> Deploying to Cloud Run..."
gcloud run deploy "${SERVICE_NAME}" \
  --image "${IMAGE}:latest" \
  --project "${PROJECT_ID}" \
  --region "${REGION}" \
  --platform managed \
  --allow-unauthenticated

echo ""
echo "==> Deployed! Service URL:"
gcloud run services describe "${SERVICE_NAME}" \
  --project "${PROJECT_ID}" \
  --region "${REGION}" \
  --format "value(status.url)"
